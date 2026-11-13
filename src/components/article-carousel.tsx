"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { FocusEvent } from "react";
import type { Article } from "@/content/site";
import { ProjectMediaImage } from "@/components/project-media";

export function ArticleCarousel({ articles, startAt = 1 }: { articles: Article[]; startAt?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const visibleInViewport = useRef(false);
  const pointerInside = useRef(false);
  const focusInside = useRef(false);
  const pauseUntil = useRef(0);

  const pauseAfterInteraction = () => { pauseUntil.current = Date.now() + 14000; };

  useEffect(() => {
    if (articles.length < 2) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interval: number | undefined;
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(([entry]) => {
      visibleInViewport.current = entry.isIntersecting;
    }, { threshold: 0.12 });
    if (containerRef.current && observer) observer.observe(containerRef.current);
    if (!observer) visibleInViewport.current = true;
    const advance = () => {
      const track = trackRef.current;
      if (!track || !visibleInViewport.current || document.visibilityState !== "visible" || pointerInside.current || focusInside.current || Date.now() < pauseUntil.current) return;
      const end = track.scrollWidth - track.clientWidth;
      if (end <= 2) return;
      if (track.scrollLeft >= end - 3) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      const firstCard = track.querySelector<HTMLElement>(".article-teaser");
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      track.scrollBy({ left: (firstCard?.offsetWidth ?? track.clientWidth * 0.8) + gap, behavior: "smooth" });
    };
    const syncInterval = () => {
      window.clearInterval(interval);
      if (preference.matches) return;
      interval = window.setInterval(advance, 8500);
    };

    syncInterval();
    preference.addEventListener("change", syncInterval);
    return () => {
      window.clearInterval(interval);
      observer?.disconnect();
      preference.removeEventListener("change", syncInterval);
    };
  }, [articles.length]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    pauseAfterInteraction();
    const end = track.scrollWidth - track.clientWidth;
    if (direction > 0 && track.scrollLeft >= end - 3) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction < 0 && track.scrollLeft <= 2) {
      track.scrollTo({ left: end, behavior: "smooth" });
      return;
    }
    const firstCard = track.querySelector<HTMLElement>(".article-teaser");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * ((firstCard?.offsetWidth ?? track.clientWidth * 0.8) + gap), behavior: "smooth" });
  };

  const handleFocusOut = (event: FocusEvent<HTMLDivElement>) => {
    if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) focusInside.current = false;
  };

  return <div
    className="article-carousel"
    ref={containerRef}
    role="region"
    aria-label="Carrossel de artigos"
    onPointerEnter={() => { pointerInside.current = true; }}
    onPointerLeave={() => { pointerInside.current = false; }}
    onFocusCapture={() => { focusInside.current = true; }}
    onBlurCapture={handleFocusOut}
    onPointerDown={pauseAfterInteraction}
    onTouchStart={pauseAfterInteraction}
    onWheel={pauseAfterInteraction}
  >
    <div className="article-carousel__controls">
      <button type="button" onClick={() => scroll(-1)} disabled={articles.length < 2} aria-label="Ver artigos anteriores" aria-controls="article-carousel-track">←</button>
      <button type="button" onClick={() => scroll(1)} disabled={articles.length < 2} aria-label="Ver próximos artigos" aria-controls="article-carousel-track">→</button>
    </div>
    <div className="article-carousel__track" id="article-carousel-track" ref={trackRef}>
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
    <p className="article-carousel__hint">Avança automaticamente · passe o cursor para pausar ou use as setas.</p>
  </div>;
}
