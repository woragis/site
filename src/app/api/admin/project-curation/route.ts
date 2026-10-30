import { readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { projects, type ProjectCuration } from "@/content/site";

export const dynamic = "force-dynamic";
const filePath = path.join(process.cwd(), "src", "content", "project-curation.json");

function localDevelopmentRequest(request: Request): boolean {
  if (process.env.NODE_ENV !== "development") return false;
  const rawHost = request.headers.get("host");
  if (!rawHost) return false;
  try {
    const hostname = new URL(`http://${rawHost}`).hostname.replace(/^\[/, "").replace(/\]$/, "");
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
  } catch {
    return false;
  }
}

function isCuration(value: unknown): value is ProjectCuration {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return ["homeHero", "homeProjects", "projectsPage"].every((key) => Array.isArray(record[key]) && (record[key] as unknown[]).every((slug) => typeof slug === "string"));
}

function validateCuration(curation: ProjectCuration): string | null {
  const projectMap = new Map(projects.filter((project) => project.selected).map((project) => [project.slug, project]));
  for (const [listName, slugs] of Object.entries(curation)) {
    if (new Set(slugs).size !== slugs.length) return `A lista ${listName} contém projetos duplicados.`;
    for (const slug of slugs) {
      const project = projectMap.get(slug);
      if (!project) return `Projeto desconhecido ou não selecionado: ${slug}.`;
      if (listName === "homeHero" && !project.media?.homeFeature) return `${project.title} precisa de uma mídia homeFeature no código antes de entrar no hero.`;
    }
  }
  return null;
}

export async function GET(request: Request) {
  if (!localDevelopmentRequest(request)) return new Response(null, { status: 404 });
  const content = await readFile(filePath, "utf8");
  return Response.json(JSON.parse(content), { headers: { "cache-control": "no-store" } });
}

export async function PUT(request: Request) {
  if (!localDevelopmentRequest(request)) return new Response(null, { status: 404 });
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== request.headers.get("host")) return Response.json({ error: "Origem inválida." }, { status: 403 });
    } catch {
      return Response.json({ error: "Origem inválida." }, { status: 403 });
    }
  }

  let value: unknown;
  try { value = await request.json(); } catch { return Response.json({ error: "JSON inválido." }, { status: 400 }); }
  if (!isCuration(value)) return Response.json({ error: "Estrutura de curadoria inválida." }, { status: 400 });
  const validationError = validateCuration(value);
  if (validationError) return Response.json({ error: validationError }, { status: 400 });

  const temporaryPath = `${filePath}.tmp`;
  await writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await rename(temporaryPath, filePath);
  return Response.json({ saved: true }, { headers: { "cache-control": "no-store" } });
}
