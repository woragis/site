"use client";

import { useRef, useState } from "react";
import type { ProjectGallery as ProjectGalleryData } from "@/content/site";
import { ProjectMediaImage } from "@/components/project-media";

export function ProjectGallery({ gallery }: { gallery: ProjectGalleryData }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobileGallery = gallery.device === "mobile" || gallery.presentation === "app-store-carousel";
  const frameClass = gallery.presentation === "app-store-carousel"
    ? "project-gallery__device project-gallery__device--phone"
    : gallery.presentation === "browser-carousel"
      ? "project-gallery__device project-gallery__device--browser"
      : "project-gallery__device";

  function moveTo(index: number) {
    const slides = trackRef.current?.querySelectorAll<HTMLElement>("[data-gallery-slide]");
    const next = Math.max(0, Math.min(index, gallery.items.length - 1));
    slides?.[next]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest", inline: "center" });
    setActiveIndex(next);
  }

  function updateActiveIndex() {
    const slides = trackRef.current?.querySelectorAll<HTMLElement>("[data-gallery-slide]");
    if (!slides?.length || !trackRef.current) return;
    const center = trackRef.current.getBoundingClientRect().left + trackRef.current.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left + slide.clientWidth / 2 - center);
      if (distance < closestDistance) { closestIndex = index; closestDistance = distance; }
    });
    setActiveIndex(closestIndex);
  }

  return <section className={`project-gallery project-gallery--${gallery.device} project-gallery--${gallery.presentation}`} aria-label={gallery.title}>
    <header className="project-gallery__header">
      <div><p className="eyebrow">{isMobileGallery ? "CAPTURAS MOBILE" : gallery.device === "desktop" ? "CAPTURAS DESKTOP" : "GALERIA"}</p><h3>{gallery.title}</h3>{gallery.description && <p>{gallery.description}</p>}</div>
      {gallery.presentation !== "editorial-grid" && gallery.items.length > 1 && <div className="project-gallery__controls">
        <button type="button" onClick={() => moveTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Captura anterior">←</button>
        <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(gallery.items.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => moveTo(activeIndex + 1)} disabled={activeIndex === gallery.items.length - 1} aria-label="Próxima captura">→</button>
      </div>}
    </header>
    <div className={`project-gallery__track${gallery.presentation === "editorial-grid" ? " project-gallery__track--grid" : ""}`} ref={trackRef} onScroll={updateActiveIndex} tabIndex={gallery.presentation === "editorial-grid" ? undefined : 0} role={gallery.presentation === "editorial-grid" ? undefined : "region"} aria-roledescription={gallery.presentation === "editorial-grid" ? undefined : "carrossel"} aria-label={gallery.presentation === "editorial-grid" ? undefined : `${gallery.title}: use as setas para navegar`}>
      {gallery.items.map((item, index) => <figure className="project-gallery__slide" key={`${item.image.src}-${index}`} data-gallery-slide>
        <div className={frameClass}>
          {gallery.presentation === "browser-carousel" && <div className="project-gallery__browser-bar" aria-hidden="true"><i /><i /><i /><span /></div>}
          <ProjectMediaImage image={item.image} className="project-gallery__image" />
        </div>
        {(item.title || item.caption) && <figcaption><b>{item.title}</b>{item.caption && <span>{item.caption}</span>}</figcaption>}
      </figure>)}
    </div>
    {gallery.presentation !== "editorial-grid" && gallery.items.length > 1 && <div className="project-gallery__pagination" aria-label="Ir para captura">
      {gallery.items.map((item, index) => <button key={item.image.src} type="button" className={index === activeIndex ? "is-active" : ""} aria-label={`Ir para ${item.title || `captura ${index + 1}`}`} aria-current={index === activeIndex ? "true" : undefined} onClick={() => moveTo(index)} />)}
    </div>}
  </section>;
}
