import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, projects, selectedArticles } from "@/content/site";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/seo";
import { ArticleContent } from "@/components/article-content";
import { ProjectMediaImage } from "@/components/project-media";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return selectedArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug && item.selected);
  if (!article) return {};
  const metadata = pageMetadata(article.title, article.summary, `/artigos/${article.slug}`);
  if (article.cover) {
    const image = { url: absoluteUrl(article.cover.src), alt: article.cover.alt, width: article.cover.width, height: article.cover.height };
    metadata.openGraph = { ...metadata.openGraph, images: [image] };
    metadata.twitter = { card: "summary_large_image", title: article.title, description: article.summary, images: [image.url] };
  }
  return {
    ...metadata,
    authors: [{ name: "Jezreel de Andrade" }],
    openGraph: { ...metadata.openGraph, type: "article", ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}) },
    ...(article.published ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug && item.selected);
  if (!article) notFound();
  const portraitCover = article.cover ? article.cover.width / article.cover.height < 1.25 : false;
  const relatedProjects = (article.projectSlugs ?? []).map((projectSlug) => projects.find((project) => project.slug === projectSlug && project.selected)).filter((project): project is (typeof projects)[number] => Boolean(project));
  const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.summary, ...(article.cover ? { image: absoluteUrl(article.cover.src) } : {}), ...(article.publishedAt ? { datePublished: article.publishedAt } : {}), ...(relatedProjects.length ? { about: relatedProjects.map((project) => ({ "@type": "CreativeWork", name: project.title, url: absoluteUrl(`/projetos/${project.slug}`) })) } : {}), author: { "@type": "Person", name: "Jezreel de Andrade" }, publisher: { "@type": "Person", name: "Jezreel de Andrade" }, mainEntityOfPage: absoluteUrl(`/artigos/${article.slug}`) };

  return <article className="page-shell detail-page article-detail">
    {article.published && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />}
    <Link className="back-link article-detail__back" href="/artigos">← Todos os artigos</Link>
    <header className={`article-detail-hero${portraitCover ? " article-detail-hero--portrait" : ""}${article.cover ? "" : " article-detail-hero--text"}`}>
      {article.cover && <div className="article-detail-hero__media" aria-hidden="true">
        <ProjectMediaImage image={article.cover} className="article-detail-hero__backdrop" decorative sizes="100vw" />
        {portraitCover && <ProjectMediaImage image={article.cover} className="article-detail-hero__art" decorative sizes="(max-width: 720px) 70vw, 35vw" />}
        <span className="article-detail-hero__shade" />
      </div>}
      <div className="article-detail-hero__content">
        <p className="article-detail-hero__eyebrow">{article.category}<span aria-hidden="true"> · </span>{article.readingTime}{article.publishedAt && <> <span aria-hidden="true">·</span> <time dateTime={article.publishedAt}>{new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${article.publishedAt}T12:00:00Z`))}</time></>}{!article.published && <span className="article-detail-hero__draft">Rascunho</span>}</p>
        <h1>{article.title}</h1>
        <p className="article-detail-hero__summary">{article.summary}</p>
        {article.cover?.caption && <p className="article-detail-hero__caption">{article.cover.caption}</p>}
      </div>
    </header>
    <ArticleContent article={article} />
    {article.references?.length ? <section className="article-references" aria-labelledby="article-references-title"><p className="eyebrow">LEITURA E REFERÊNCIAS</p><h2 id="article-references-title">Para continuar</h2><ul>{article.references.map((reference) => <li key={reference.href}><a href={reference.href} target="_blank" rel="noreferrer">{reference.label} ↗</a></li>)}</ul></section> : null}
    {!article.published && <p className="article-source">{article.sourceLabel}. Texto de trabalho, aguardando revisão antes da publicação.</p>}
    {relatedProjects.length > 0 && <nav className="article-related-projects" aria-label="Projetos relacionados a este artigo"><p className="eyebrow">PROJETOS RELACIONADOS</p><div>{relatedProjects.map((project) => <Link key={project.slug} href={`/projetos/${project.slug}`}>{project.title} ↗</Link>)}</div></nav>}
    {article.linkedinUrl && <p className="article-linkedin"><a href={article.linkedinUrl} target="_blank" rel="noreferrer">Ver publicação deste artigo no LinkedIn ↗</a></p>}
  </article>;
}
