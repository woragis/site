import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, projects, selectedArticles } from "@/content/site";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/seo";
import { ArticleContent } from "@/components/article-content";
import { ArticleCard } from "@/components/article-card";
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
  const relatedProjects = (article.projectSlugs ?? []).map((projectSlug) => projects.find((project) => project.slug === projectSlug && project.selected)).filter((project): project is (typeof projects)[number] => Boolean(project));
  const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.summary, ...(article.cover ? { image: absoluteUrl(article.cover.src) } : {}), ...(article.publishedAt ? { datePublished: article.publishedAt } : {}), ...(relatedProjects.length ? { about: relatedProjects.map((project) => ({ "@type": "CreativeWork", name: project.title, url: absoluteUrl(`/projetos/${project.slug}`) })) } : {}), author: { "@type": "Person", name: "Jezreel de Andrade" }, publisher: { "@type": "Person", name: "Jezreel de Andrade" }, mainEntityOfPage: absoluteUrl(`/artigos/${article.slug}`) };

  return <article className="page-shell detail-page article-detail">
    {article.published && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />}
    <Link className="back-link" href="/artigos">← Todos os artigos</Link>
    {article.cover && <figure className="article-cover"><ProjectMediaImage image={article.cover} className="article-cover__image" sizes="(max-width: 720px) 92vw, 88vw" />{article.cover.caption && <figcaption>{article.cover.caption}</figcaption>}</figure>}
    <header className="detail-header"><p className="eyebrow">{article.category} · {article.readingTime} · {article.publishedAt?.slice(0, 4) ?? "Rascunho"}</p><h1>{article.title}</h1><p className="detail-lede">{article.summary}</p></header>
    <ArticleContent article={article} />
    {!article.published && <p className="article-source">{article.sourceLabel}. Texto de trabalho, aguardando revisão antes da publicação.</p>}
    {relatedProjects.length > 0 && <nav className="article-related-projects" aria-label="Projetos relacionados a este artigo"><p className="eyebrow">PROJETOS RELACIONADOS</p><div>{relatedProjects.map((project) => <Link key={project.slug} href={`/projetos/${project.slug}`}>{project.title} ↗</Link>)}</div></nav>}
    {article.linkedinUrl && <p className="article-linkedin"><a href={article.linkedinUrl} target="_blank" rel="noreferrer">Ver publicação deste artigo no LinkedIn ↗</a></p>}
  </article>;
}
