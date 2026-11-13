"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Article } from "@/content/site";
import { ProjectMediaImage } from "@/components/project-media";

function articleDate(article: Article) {
  if (!article.publishedAt) return null;
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${article.publishedAt}T12:00:00Z`));
}

function LeadStory({ article, rank, compact = false }: { article: Article; rank: number; compact?: boolean }) {
  return <article className={`article-news-card${compact ? " article-news-card--compact" : " article-news-card--lead"}`}>
    <Link className="article-news-card__media" href={`/artigos/${article.slug}`} aria-label={`Ler: ${article.title}`}>
      {article.cover
        ? <ProjectMediaImage image={article.cover} className="article-news-card__image" sizes={compact ? "(max-width: 720px) 35vw, 18vw" : "(max-width: 720px) 92vw, 58vw"} />
        : <span className="article-news-card__fallback" aria-hidden="true">{article.category}</span>}
      <span className="article-news-card__rank">0{rank}</span>
    </Link>
    <div className="article-news-card__copy">
      <p className="article-news-card__eyebrow">{article.category}{article.publishedAt && <> <span aria-hidden="true">·</span> <time dateTime={article.publishedAt}>{articleDate(article)}</time></>}{!article.published && <span className="article-news-card__draft">Rascunho</span>}</p>
      <h2><Link href={`/artigos/${article.slug}`}>{article.title}</Link></h2>
      {!compact && <p className="article-news-card__summary">{article.summary}</p>}
      <p className="article-news-card__reading">{article.readingTime} de leitura</p>
    </div>
  </article>;
}

export function ArticleHighlights({ articles }: { articles: Article[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const container = useRef<HTMLElement>(null);
  const visibleInViewport = useRef(false);
  const hovered = useRef(false);
  const focused = useRef(false);

  useEffect(() => {
    if (articles.length < 2) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: number | undefined;
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(([entry]) => {
      visibleInViewport.current = entry.isIntersecting;
    }, { threshold: 0.12 });
    if (container.current && observer) observer.observe(container.current);
    if (!observer) visibleInViewport.current = true;
    const syncInterval = () => {
      window.clearInterval(interval);
      if (preference.matches) return;
      interval = window.setInterval(() => {
        if (document.visibilityState === "visible" && visibleInViewport.current && !hovered.current && !focused.current) {
          setActiveIndex((current) => (current + 1) % articles.length);
        }
      }, 12000);
    };

    syncInterval();
    preference.addEventListener("change", syncInterval);
    return () => {
      window.clearInterval(interval);
      observer?.disconnect();
      preference.removeEventListener("change", syncInterval);
    };
  }, [articles.length]);

  if (articles.length === 0) return null;
  const currentIndex = activeIndex % articles.length;
  const orderedArticles = articles.map((_, index) => articles[(currentIndex + index) % articles.length]);

  return <section
    ref={container}
    className="article-highlights"
    aria-label="Artigos em destaque"
    onPointerEnter={() => { hovered.current = true; }}
    onPointerLeave={() => { hovered.current = false; }}
    onFocusCapture={() => { focused.current = true; }}
    onBlurCapture={(event) => {
      if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) focused.current = false;
    }}
  >
    <header className="article-highlights__header">
      <p className="eyebrow">DESTAQUES DO CADERNO</p>
      <div className="article-highlights__pagination" aria-label="Escolher destaque">
        <span>{String(currentIndex + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}</span>
        {articles.map((article, index) => <button
          key={article.slug}
          type="button"
          aria-label={`Mostrar destaque ${index + 1}: ${article.title}`}
          aria-pressed={index === currentIndex}
          onClick={() => setActiveIndex(index)}
        />)}
      </div>
    </header>
    <div className="article-top-stories" aria-live="off">
      <LeadStory key={orderedArticles[0].slug} article={orderedArticles[0]} rank={1} />
      <div className="article-top-stories__side">
        {orderedArticles[1] && <LeadStory key={orderedArticles[1].slug} article={orderedArticles[1]} rank={2} compact />}
        {orderedArticles[2] && <LeadStory key={orderedArticles[2].slug} article={orderedArticles[2]} rank={3} compact />}
      </div>
    </div>
  </section>;
}
