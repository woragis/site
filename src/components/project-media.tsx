import Image from "next/image";
import type { CSSProperties } from "react";
import type { ProjectImage, ProjectVideo } from "@/content/site";

export function ProjectMediaImage({ image, className, decorative = false, sizes }: { image: ProjectImage; className?: string; decorative?: boolean; sizes?: string }) {
  const style = image.focalPoint
    ? ({ "--media-focal-x": `${image.focalPoint.x}%`, "--media-focal-y": `${image.focalPoint.y}%` } as CSSProperties)
    : undefined;

  return <Image
    className={className}
    src={image.src}
    alt={decorative ? "" : image.alt}
    width={image.width}
    height={image.height}
    sizes={sizes ?? "(max-width: 720px) 92vw, (max-width: 1200px) 88vw, 1200px"}
    style={style}
  />;
}

export function ProjectVideoPlayer({ video, className }: { video: ProjectVideo; className?: string }) {
  return <figure className={`project-video ${className ?? ""}`}>
    <video controls preload="none" playsInline poster={video.poster.src} aria-label={video.title}>
      <source src={video.src} />
      {video.subtitles && <track kind="captions" src={video.subtitles} srcLang="pt-BR" label="Português" default />}
      Seu navegador não conseguiu carregar este vídeo.
    </video>
    {video.caption && <figcaption>{video.caption}</figcaption>}
    {video.transcript && <details><summary>Transcrição</summary><p>{video.transcript}</p></details>}
  </figure>;
}

export function ProjectBanner({ image }: { image: ProjectImage }) {
  return <figure className="project-detail-banner">
    <ProjectMediaImage image={image} className="project-detail-banner__image" />
    {image.caption && <figcaption>{image.caption}</figcaption>}
  </figure>;
}

export function ProjectLogo({ image }: { image: ProjectImage }) {
  return <div className="project-detail-logo"><ProjectMediaImage image={image} className="project-detail-logo__image" /></div>;
}
