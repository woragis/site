"use client";

import { useEffect, useState } from "react";
import type { ProjectCuration } from "@/content/site";

type CatalogItem = { slug: string; title: string; hasHomeFeature: boolean };
type ListKey = keyof ProjectCuration;
const listLabels: Record<ListKey, { title: string; help: string }> = {
  homeHero: { title: "Destaque do hero", help: "Carrossel manual no espaço visual do hero. Só entram projetos com mídia homeFeature cadastrada no código." },
  homeProjects: { title: "Projetos na home", help: "Seleção e ordem dos cards da seção de projetos da landing page." },
  projectsPage: { title: "Arquivo /projetos", help: "Seleção e ordem dos cards na página completa de projetos." },
};

export function ProjectCurationAdmin({ catalog }: { catalog: CatalogItem[] }) {
  const [curation, setCuration] = useState<ProjectCuration | null>(null);
  const [status, setStatus] = useState("Carregando curadoria…");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch("/api/admin/project-curation", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Não foi possível ler o arquivo de curadoria.");
        return response.json() as Promise<ProjectCuration>;
      })
      .then((value) => { setCuration(value); setStatus("Curadoria carregada do repositório."); })
      .catch((error: unknown) => setStatus(error instanceof Error ? error.message : "Falha ao carregar."));
  }, []);

  function updateList(key: ListKey, slugs: string[]) {
    setCuration((current) => current ? { ...current, [key]: slugs } : current);
  }

  async function save() {
    if (!curation) return;
    setBusy(true);
    setStatus("Salvando project-curation.json…");
    try {
      const response = await fetch("/api/admin/project-curation", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(curation),
      });
      const body = await response.json() as { error?: string };
      if (!response.ok) throw new Error(body.error ?? "Não foi possível salvar.");
      setStatus("Arquivo salvo. Revise o diff e faça commit/redeploy para publicar.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Falha ao salvar.");
    } finally {
      setBusy(false);
    }
  }

  return <section className="curation-admin__editor" aria-label="Curadoria de projetos">
    {curation && (Object.keys(listLabels) as ListKey[]).map((key) => <CurationList key={key} listKey={key} projects={curation[key]} catalog={catalog} onChange={updateList} />)}
    <div className="curation-admin__save"><p role="status" aria-live="polite">{status}</p><button className="button button--dark" type="button" disabled={!curation || busy} onClick={save}>{busy ? "Salvando…" : "Salvar seleções"}</button></div>
  </section>;
}

function CurationList({ listKey, projects, catalog, onChange }: { listKey: ListKey; projects: string[]; catalog: CatalogItem[]; onChange: (key: ListKey, slugs: string[]) => void }) {
  const config = listLabels[listKey];
  const available = catalog.filter((project) => !projects.includes(project.slug) && (listKey !== "homeHero" || project.hasHomeFeature));

  function move(index: number, offset: number) {
    const target = index + offset;
    if (target < 0 || target >= projects.length) return;
    const next = [...projects];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(listKey, next);
  }

  return <section className="curation-list">
    <header><div><p className="eyebrow">{listKey === "homeHero" ? "01" : listKey === "homeProjects" ? "02" : "03"} / CURADORIA</p><h2>{config.title}</h2><p>{config.help}</p></div><span>{String(projects.length).padStart(2, "0")} itens</span></header>
    <ol>{projects.map((slug, index) => {
      const project = catalog.find((item) => item.slug === slug);
      return <li key={slug}><span className="curation-list__position">{String(index + 1).padStart(2, "0")}</span><b>{project?.title ?? slug}</b><div><button type="button" onClick={() => move(index, -1)} disabled={index === 0} aria-label={`Mover ${project?.title ?? slug} para cima`}>↑</button><button type="button" onClick={() => move(index, 1)} disabled={index === projects.length - 1} aria-label={`Mover ${project?.title ?? slug} para baixo`}>↓</button><button type="button" onClick={() => onChange(listKey, projects.filter((item) => item !== slug))} aria-label={`Remover ${project?.title ?? slug}`}>×</button></div></li>;
    })}</ol>
    <label className="curation-list__add">Adicionar projeto<select value="" onChange={(event) => event.target.value && onChange(listKey, [...projects, event.target.value])}><option value="">Escolher no catálogo…</option>{available.map((project) => <option key={project.slug} value={project.slug}>{project.title}</option>)}</select></label>
  </section>;
}
