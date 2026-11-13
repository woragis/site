import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { ArticleCarousel } from "@/components/article-carousel";
import { EmptyState } from "@/components/empty-state";
import { projects, publishedArticles, selectedArticles, type Article, type Project } from "@/content/site";
import { ProjectMediaImage } from "@/components/project-media";
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
  const [featuredArticle, ...followingArticles] = visibleArticles;
  const carouselArticles = followingArticles.slice(0, 6);
  const archiveArticles = followingArticles.slice(6);

  const articleLink = (article: Article) => `/artigos/${article.slug}`;

  return <div className="page-shell collection-page articles-collection">
    <header className="articles-masthead"><div><p className="eyebrow"><span>02</span> Caderno de engenharia</p><h1>Ideias em<br /><em>movimento.</em></h1></div><p>Reportagens de projeto, decisões de arquitetura e aprendizados de desenvolvimento — com contexto, código e os limites de cada solução.</p></header>
    {filterProjects.length > 0 && <nav className="article-filters" aria-label="Filtrar artigos por projeto">
      <span>PROJETOS</span>
      <div><Link href="/artigos" className={!activeProject ? "is-active" : ""} aria-current={!activeProject ? "page" : undefined}>Todos</Link>{filterProjects.map((project) => <Link key={project.slug} href={`/artigos?projeto=${project.slug}`} className={activeProject?.slug === project.slug ? "is-active" : ""} aria-current={activeProject?.slug === project.slug ? "page" : undefined}>{project.title}</Link>)}</div>
    </nav>}
    {activeProject && <p className="article-filter-status">Artigos relacionados a <strong>{activeProject.title}</strong> · {visibleArticles.length} {visibleArticles.length === 1 ? "artigo" : "artigos"}</p>}
    {featuredArticle ? <>
      <section className="article-lead" aria-labelledby="article-lead-title">
        <div className="article-lead__copy">
          <p className="eyebrow"><span>LEITURA EM DESTAQUE</span> · {featuredArticle.category}</p>
          <h2 id="article-lead-title"><Link href={articleLink(featuredArticle)}>{featuredArticle.title}</Link></h2>
          <p className="article-lead__summary">{featuredArticle.summary}</p>
          <div className="article-lead__meta"><span>{featuredArticle.readingTime} de leitura</span>{featuredArticle.publishedAt && <time dateTime={featuredArticle.publishedAt}>{new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${featuredArticle.publishedAt}T12:00:00Z`))}</time>}</div>
          <Link className="article-lead__cta" href={articleLink(featuredArticle)}>Ler matéria <span aria-hidden="true">↗</span></Link>
        </div>
        <Link className="article-lead__media" href={articleLink(featuredArticle)} aria-label={`Ler matéria: ${featuredArticle.title}`}>
          {featuredArticle.cover ? <ProjectMediaImage image={featuredArticle.cover} className="article-lead__image" sizes="(max-width: 760px) 92vw, 48vw" /> : <span className="article-lead__fallback" aria-hidden="true">{featuredArticle.category}</span>}
          <span className="article-lead__image-label">{featuredArticle.cover?.caption ?? "CADERNO · ARTIGO"}</span>
        </Link>
      </section>
      {carouselArticles.length > 0 && <section className="article-carousel-section" aria-labelledby="article-carousel-title">
        <header className="article-section-heading"><div><p className="eyebrow">OUTRAS LEITURAS</p><h2 id="article-carousel-title">Em circulação</h2></div><p>Deslize para explorar matérias recentes.</p></header>
        <ArticleCarousel articles={carouselArticles} />
      </section>}
      {archiveArticles.length > 0 && <section className="article-archive" aria-labelledby="article-archive-title">
        <header className="article-section-heading"><div><p className="eyebrow">DO CADERNO</p><h2 id="article-archive-title">Mais artigos</h2></div><span>{archiveArticles.length} matérias</span></header>
        <div className="article-list">{archiveArticles.map((article, index) => <ArticleCard key={article.slug} article={article} index={index + carouselArticles.length + 1} />)}</div>
      </section>}
    </> : <EmptyState title={activeProject ? "Ainda não há artigos para este projeto." : "Os primeiros textos estão em rascunho."}>{activeProject ? <>Assim que houver um artigo publicado sobre {activeProject.title}, ele aparecerá aqui. <Link href="/artigos">Ver todos os artigos.</Link></> : "Artigos aparecem aqui quando estiverem revisados e prontos para compartilhar."}</EmptyState>}
    {requestedSlug && !activeProject && <p className="article-filter-status">Esse filtro não corresponde a um projeto com artigos relacionados. <Link href="/artigos">Limpar filtro</Link></p>}
  </div>;
}
