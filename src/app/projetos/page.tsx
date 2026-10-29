import type { Metadata } from "next";
import { EmptyState } from "@/components/empty-state";
import { ProjectCard } from "@/components/project-card";
import { selectedProjects } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Projetos", "Projetos e estudos de caso de engenharia de software.", "/projetos");

export default function ProjectsPage() {
  return <div className="page-shell collection-page projects-collection">
    <header className="collection-header"><p className="eyebrow"><span>01</span> Arquivo de projetos</p><h1>Trabalho com<br /><em>intenção.</em></h1><p>Problemas reais, decisões cuidadosas e resultados que merecem ser explicados.</p></header>
    {selectedProjects.length ? <div className="project-grid">{selectedProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div> : <EmptyState title="Os primeiros projetos estão sendo preparados.">Cada case será publicado com contexto, decisões técnicas e resultados verificáveis.</EmptyState>}
  </div>;
}
