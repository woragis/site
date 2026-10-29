import Link from "next/link";
import type { Article } from "@/content/site";

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className="article-card">
      <span className="article-card__index">{String(index + 1).padStart(2, "0")}</span>
      <div className="article-card__body">
        <p className="eyebrow">{article.category}<span> · </span>{article.readingTime}</p>
        <h3><Link href={`/artigos/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.summary}</p>
      </div>
      <time dateTime={article.publishedAt}>{article.publishedAt.slice(0, 4)}</time>
    </article>
  );
}
