import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { EmptyState } from "@/components/empty-state";
import { projects, publishedArticles, selectedArticles, type Project } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

type Props = { searchParams: Promise<{ projeto?: string | string[] }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const projectSlug = Array.isArray(params.projeto) ? params.projeto[0] : params.projeto;
  const project = projects.find((item) => item.slug === projectSlug && item.selected);
  const metadata = pageMetadata(
    project ? `Artigos sobre ${project.title}` : "Artigos",
    project ? `Artigos relacionados ao projeto ${project.title}.` : "Artigos técnicos, estudos de caso e ideias de um desenvolvedor de software.",
    "/artigos",
  );
  if (projectSlug) metadata.robots = { index: false, follow: true };
  return metadata;
}

export default async function ArticlesPage({ searchParams }: Props) {
  const params = await searchParams;
  const requestedSlug = Array.isArray(params.projeto) ? params.projeto[0] : params.projeto;
  const articlesForPage = process.env.NODE_ENV === "development" ? selectedArticles : publishedArticles;
  const relatedProjectSlugs = [...new Set(articlesForPage.flatMap((article) => article.projectSlugs ?? []))];
  const filterProjects = relatedProjectSlugs.map((slug) => projects.find((item) => item.slug === slug)).filter((project): project is Project => Boolean(project?.selected));
  const activeProject = filterProjects.find((project) => project.slug === requestedSlug);
  const visibleArticles = activeProject
    ? articlesForPage.filter((article) => article.projectSlugs?.includes(activeProject.slug))
    : articlesForPage;

  return <div className="page-shell collection-page articles-collection">
    <header className="collection-header"><p className="eyebrow"><span>02</span> Caderno de engenharia</p><h1>Pensar também<br /><em>é construir.</em></h1><p>Notas técnicas, estudos de caso e aprendizados que valem compartilhar.</p></header>
    {filterProjects.length > 0 && <nav className="article-filters" aria-label="Filtrar artigos por projeto">
      <span>PROJETOS</span>
      <div><Link href="/artigos" className={!activeProject ? "is-active" : ""} aria-current={!activeProject ? "page" : undefined}>Todos</Link>{filterProjects.map((project) => <Link key={project.slug} href={`/artigos?projeto=${project.slug}`} className={activeProject?.slug === project.slug ? "is-active" : ""} aria-current={activeProject?.slug === project.slug ? "page" : undefined}>{project.title}</Link>)}</div>
    </nav>}
    {activeProject && <p className="article-filter-status">Artigos relacionados a <strong>{activeProject.title}</strong> · {visibleArticles.length} {visibleArticles.length === 1 ? "artigo" : "artigos"}</p>}
    {visibleArticles.length ? <div className="article-list">{visibleArticles.map((article, index) => <ArticleCard key={article.slug} article={article} index={index} />)}</div> : <EmptyState title={activeProject ? "Ainda não há artigos para este projeto." : "Os primeiros textos estão em rascunho."}>{activeProject ? <>Assim que houver um artigo publicado sobre {activeProject.title}, ele aparecerá aqui. <Link href="/artigos">Ver todos os artigos.</Link></> : "Artigos aparecem aqui quando estiverem revisados e prontos para compartilhar."}</EmptyState>}
    {requestedSlug && !activeProject && <p className="article-filter-status">Esse filtro não corresponde a um projeto com artigos relacionados. <Link href="/artigos">Limpar filtro</Link></p>}
  </div>;
}
