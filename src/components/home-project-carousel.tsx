"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project, ProjectImage, ProjectVideo } from "@/content/site";
import { ProjectMediaImage } from "@/components/project-media";

export function HomeProjectCarousel({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!projects.length) return null;
  const project = projects[activeIndex];
  const media = project.media?.homeFeature;
  if (!media) return null;

  function show(index: number) {
    setActiveIndex((index + projects.length) % projects.length);
  }

  return <section className="home-project-carousel" aria-label="Projetos em destaque">
    <div className="home-project-carousel__top"><p className="eyebrow">PROJETO EM FOCO</p>{projects.length > 1 && <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>}</div>
    <figure className="home-project-carousel__visual">
      {isVideo(media)
        ? <video controls playsInline preload="none" poster={media.poster.src} aria-label={media.title}>
          <source src={media.src} />
          {media.subtitles && <track kind="captions" src={media.subtitles} srcLang="pt-BR" label="Português" default />}
          Seu navegador não conseguiu carregar este vídeo.
        </video>
        : <ProjectMediaImage image={media} className="home-project-carousel__image" sizes="(max-width: 720px) 92vw, 48vw" />}
      <figcaption><span>{project.eyebrow}</span><b>{project.title}</b><Link href={`/projetos/${project.slug}`}>Conhecer o projeto ↗</Link></figcaption>
    </figure>
    {isVideo(media) && media.transcript && <details className="home-project-carousel__transcript"><summary>Transcrição do vídeo</summary><p>{media.transcript}</p></details>}
    {projects.length > 1 && <div className="home-project-carousel__controls">
      <button type="button" onClick={() => show(activeIndex - 1)} aria-label="Projeto em destaque anterior">←</button>
      <div>{projects.map((item, index) => <button key={item.slug} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => show(index)} aria-label={`Mostrar ${item.title}`} aria-current={index === activeIndex ? "true" : undefined} />)}</div>
      <button type="button" onClick={() => show(activeIndex + 1)} aria-label="Próximo projeto em destaque">→</button>
    </div>}
  </section>;
}

function isVideo(media: ProjectImage | ProjectVideo): media is ProjectVideo {
  return "poster" in media;
}
