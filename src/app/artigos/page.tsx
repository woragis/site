import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { ArticleCarousel } from "@/components/article-carousel";
import { ArticleHighlights } from "@/components/article-highlights";
import { EmptyState } from "@/components/empty-state";
import { projects, publishedArticles, selectedArticles, type Article, type Project } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const topicDefinitions = [
  { slug: "arquitetura", label: "Arquitetura", matches: (category: string) => category.toLowerCase().includes("arquitetura") },
  { slug: "projetos", label: "Projetos e produto", matches: (category: string) => /projeto|produto|backend/i.test(category) },
  { slug: "linguagens", label: "Linguagens", matches: (category: string) => category.toLowerCase().includes("linguagens") },
  { slug: "tutoriais", label: "Tutoriais", matches: (category: string) => /tutorial|guia/i.test(category) },
];

type SearchValue = string | string[] | undefined;
type Props = { searchParams: Promise<{ projeto?: SearchValue; assunto?: SearchValue }> };

function firstValue(value: SearchValue) {
  return Array.isArray(value) ? value[0] : value;
}

function articleQueryHref(values: { projeto?: string; assunto?: string }) {
  const query = new URLSearchParams();
  if (values.assunto) query.set("assunto", values.assunto);
  if (values.projeto) query.set("projeto", values.projeto);
  const suffix = query.toString();
  return suffix ? `/artigos?${suffix}` : "/artigos";
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const projectSlug = firstValue(params.projeto);
  const topicSlug = firstValue(params.assunto);
  const project = projects.find((item) => item.slug === projectSlug && item.selected);
  const topic = topicDefinitions.find((item) => item.slug === topicSlug);
  const title = project ? `Artigos sobre ${project.title}` : topic ? `${topic.label} — artigos` : "Artigos";
  const description = project
    ? `Artigos relacionados ao projeto ${project.title}.`
    : topic ? `Artigos sobre ${topic.label.toLowerCase()}, projetos e desenvolvimento de software.` : "Artigos técnicos, estudos de caso e ideias de um desenvolvedor de software.";
  const metadata = pageMetadata(title, description, "/artigos");
  if (projectSlug || topicSlug) metadata.robots = { index: false, follow: true };
  return metadata;
}

export default async function ArticlesPage({ searchParams }: Props) {
  const params = await searchParams;
  const requestedProjectSlug = firstValue(params.projeto);
  const requestedTopicSlug = firstValue(params.assunto);
  const articleCatalog = process.env.NODE_ENV === "development" ? selectedArticles : publishedArticles;
  const newestFirst = [...articleCatalog].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
  const availableTopics = topicDefinitions.filter((topic) => newestFirst.some((article) => topic.matches(article.category)));
  const activeTopic = availableTopics.find((topic) => topic.slug === requestedTopicSlug);
  const projectSlugs = [...new Set(newestFirst.flatMap((article) => article.projectSlugs ?? []))];
  const filterProjects = projectSlugs
    .map((slug) => projects.find((item) => item.slug === slug))
    .filter((project): project is Project => Boolean(project?.selected));
  const activeProject = filterProjects.find((project) => project.slug === requestedProjectSlug);
  const visibleArticles = newestFirst.filter((article) =>
    (!activeProject || article.projectSlugs?.includes(activeProject.slug)) &&
    (!activeTopic || activeTopic.matches(article.category)),
  );
  const [leadArticle, ...remainingArticles] = visibleArticles;
  const [secondLead, thirdLead, ...afterTopStories] = remainingArticles;
  const carouselArticles = afterTopStories.slice(0, 6);
  const archiveArticles = afterTopStories.slice(6);
  const filtersActive = Boolean(requestedProjectSlug || requestedTopicSlug);

  return <div className="page-shell collection-page articles-collection">
    <header className="articles-masthead">
      <div><p className="eyebrow"><span>02</span> CADERNO DE ENGENHARIA</p><h1>Artigos</h1></div>
      <p>Projetos, arquitetura e desenvolvimento explicados com contexto, exemplos e os limites de cada decisão.</p>
    </header>

    <nav className="article-topic-nav" aria-label="Navegar por assunto">
      <span className="article-topic-nav__label">ASSUNTOS</span>
      <div className="article-topic-nav__links">
        <Link href={articleQueryHref({ projeto: requestedProjectSlug })} className={!activeTopic ? "is-active" : ""} aria-current={!activeTopic ? "page" : undefined}>Todos</Link>
        {availableTopics.map((topic) => <Link key={topic.slug} href={articleQueryHref({ assunto: topic.slug, projeto: requestedProjectSlug })} className={activeTopic?.slug === topic.slug ? "is-active" : ""} aria-current={activeTopic?.slug === topic.slug ? "page" : undefined}>{topic.label}</Link>)}
      </div>
      {filterProjects.length > 0 && <details className="article-project-filter" open={Boolean(activeProject)}>
        <summary>{activeProject ? `Projeto: ${activeProject.title}` : "Filtrar por projeto"}</summary>
        <div className="article-project-filter__menu">
          <Link href={articleQueryHref({ assunto: activeTopic?.slug })} aria-current={!activeProject ? "page" : undefined}>Todos os projetos</Link>
          {filterProjects.map((project) => <Link key={project.slug} href={articleQueryHref({ assunto: activeTopic?.slug, projeto: project.slug })} aria-current={activeProject?.slug === project.slug ? "page" : undefined}>{project.title}</Link>)}
        </div>
      </details>}
    </nav>

    {filtersActive && <div className="article-filter-status" aria-live="polite">
      Exibindo {visibleArticles.length} {visibleArticles.length === 1 ? "artigo" : "artigos"}
      {activeTopic && <> em <strong>{activeTopic.label}</strong></>}
      {activeProject && <> sobre <strong>{activeProject.title}</strong></>}
      {requestedTopicSlug && !activeTopic && <> · assunto não encontrado</>}
      {requestedProjectSlug && !activeProject && <> · projeto não encontrado</>}
      <Link href="/artigos">Limpar filtros</Link>
    </div>}

    {leadArticle ? <>
      <ArticleHighlights articles={[leadArticle, secondLead, thirdLead].filter((article): article is Article => Boolean(article))} />

      {carouselArticles.length > 0 && <section className="article-carousel-section" aria-labelledby="article-carousel-title">
        <header className="article-section-heading"><div><p className="eyebrow">CONTINUE EXPLORANDO</p><h2 id="article-carousel-title">Outras leituras</h2></div><p>Capas, ideias e decisões em sequência.</p></header>
        <ArticleCarousel articles={carouselArticles} startAt={4} />
      </section>}

      {archiveArticles.length > 0 && <section className="article-archive" aria-labelledby="article-archive-title">
        <header className="article-section-heading"><div><p className="eyebrow">ARQUIVO DO CADERNO</p><h2 id="article-archive-title">Mais artigos</h2></div><span>{archiveArticles.length} {archiveArticles.length === 1 ? "artigo" : "artigos"}</span></header>
        <div className="article-list">{archiveArticles.map((article, index) => <ArticleCard key={article.slug} article={article} index={index + carouselArticles.length + 3} />)}</div>
      </section>}
    </> : <EmptyState title={activeProject ? "Ainda não há artigos para este projeto." : "Nenhum artigo encontrado."}>{activeProject ? <>Assim que houver um artigo publicado sobre {activeProject.title}, ele aparecerá aqui. <Link href="/artigos">Ver todos os artigos.</Link></> : <Link href="/artigos">Remover os filtros e ver todos os artigos.</Link>}</EmptyState>}
  </div>;
}
