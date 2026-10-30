import Link from "next/link";
import { projects, type Article } from "@/content/site";
import { ProjectMediaImage } from "@/components/project-media";

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className="article-card">
      {article.cover && <Link className="article-card__cover" href={`/artigos/${article.slug}`} aria-label={`Ler ${article.title}`}><ProjectMediaImage image={article.cover} className="article-card__cover-image" sizes="(max-width: 720px) 92vw, 36vw" /></Link>}
      <span className="article-card__index">{String(index + 1).padStart(2, "0")}</span>
      <div className="article-card__body">
        <p className="eyebrow">{article.category}<span> · </span>{article.readingTime}</p>
        <h3><Link href={`/artigos/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.summary}</p>
        {article.projectSlugs?.length ? <div className="article-card__projects" aria-label="Projetos relacionados">{article.projectSlugs.map((slug) => { const project = projects.find((item) => item.slug === slug); return project ? <Link key={slug} href={`/artigos?projeto=${slug}`}>{project.title}</Link> : null; })}</div> : null}
      </div>
      <div className="article-card__meta"><span className="article-card__status">{article.publishedAt ? <time dateTime={article.publishedAt}>{article.publishedAt.slice(0, 4)}</time> : "Rascunho"}</span>{article.linkedinUrl && <a href={article.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>}</div>
    </article>
  );
}
