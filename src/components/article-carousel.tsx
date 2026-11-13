"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Article } from "@/content/site";
import { ProjectMediaImage } from "@/components/project-media";

export function ArticleCarousel({ articles, startAt = 1 }: { articles: Article[]; startAt?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: articles.length <= 1 });

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setPosition({
      start: track.scrollLeft <= 2,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updatePosition, articles.length]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: "smooth" });
  };

  return <div className="article-carousel" role="region" aria-label="Carrossel de artigos">
    <div className="article-carousel__controls">
      <button type="button" onClick={() => scroll(-1)} disabled={position.start} aria-label="Ver artigos anteriores" aria-controls="article-carousel-track">←</button>
      <button type="button" onClick={() => scroll(1)} disabled={position.end} aria-label="Ver próximos artigos" aria-controls="article-carousel-track">→</button>
    </div>
    <div className="article-carousel__track" id="article-carousel-track" ref={trackRef} onScroll={updatePosition}>
      {articles.map((article, index) => <article className="article-teaser" key={article.slug}>
        <Link className="article-teaser__link" href={`/artigos/${article.slug}`}>
          <span className="article-teaser__media">
            {article.cover ? <ProjectMediaImage image={article.cover} className="article-teaser__image" sizes="(max-width: 680px) 78vw, (max-width: 1100px) 42vw, 26vw" /> : <span className="article-teaser__fallback" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
            <span className="article-teaser__number">{String(index + startAt).padStart(2, "0")}</span>
          </span>
          <span className="article-teaser__copy">
            <span className="eyebrow">{article.category} · {article.readingTime}</span>
            <strong>{article.title}</strong>
            <span className="article-teaser__read">Abrir artigo <span aria-hidden="true">↗</span></span>
          </span>
        </Link>
      </article>)}
    </div>
    <p className="article-carousel__hint">Use as setas ou deslize horizontalmente.</p>
  </div>;
}
