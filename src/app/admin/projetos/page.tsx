import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCurationAdmin } from "@/components/project-curation-admin";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Curadoria de projetos · Admin local",
  robots: { index: false, follow: false },
};

export default function ProjectCurationPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  const catalog = projects.filter((project) => project.selected).map((project) => ({
    slug: project.slug,
    title: project.title,
    hasHomeFeature: Boolean(project.media?.homeFeature),
  }));

  return <main className="page-shell curation-admin">
    <header className="curation-admin__header"><p className="eyebrow">ADMIN LOCAL · CURADORIA</p><h1>Escolher o que<br /><em>fica em foco.</em></h1><p>Este painel altera somente as três listas de exibição. Textos, imagens e conteúdo continuam nos arquivos do site.</p><div className="curation-admin__notice"><strong>Fluxo de publicação</strong><span>Salvar atualiza `src/content/project-curation.json`. Revise o diff, faça commit e redeploy para publicar.</span></div></header>
    <ProjectCurationAdmin catalog={catalog} />
  </main>;
}
