import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, selectedArticles } from "@/content/site";
import { absoluteUrl, jsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return selectedArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug && item.selected);
  if (!article) return {};
  return {
    ...pageMetadata(article.title, article.summary, `/artigos/${article.slug}`),
    authors: [{ name: "Jezreel de Andrade" }],
    openGraph: { ...pageMetadata(article.title, article.summary, `/artigos/${article.slug}`).openGraph, type: "article", ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}) },
    ...(article.published ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug && item.selected);
  if (!article) notFound();
  const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.summary, ...(article.publishedAt ? { datePublished: article.publishedAt } : {}), author: { "@type": "Person", name: "Jezreel de Andrade" }, publisher: { "@type": "Person", name: "Jezreel de Andrade" }, mainEntityOfPage: absoluteUrl(`/artigos/${article.slug}`) };

  return <article className="page-shell detail-page article-detail">
    {article.published && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />}
    <a className="back-link" href="/artigos">← Todos os artigos</a>
    <header className="detail-header"><p className="eyebrow">{article.category} · {article.readingTime} · {article.publishedAt?.slice(0, 4) ?? "Rascunho"}</p><h1>{article.title}</h1><p className="detail-lede">{article.summary}</p></header>
    <div className="article-prose">{article.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<p className="article-source">{article.sourceLabel}. Texto de trabalho, aguardando revisão antes da publicação.</p></div>
  </article>;
}
