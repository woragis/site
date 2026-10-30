import type { Project, ProjectGallery as ProjectGalleryData, ProjectStoryBlock } from "@/content/site";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectMediaImage, ProjectVideoPlayer } from "@/components/project-media";

export function ProjectStory({ project }: { project: Project }) {
  if (!project.story?.length) return null;
  const galleries = new Map((project.galleries ?? []).map((gallery) => [gallery.id, gallery]));

  return <div className="project-story">
    {project.story.map((block) => renderBlock(block, galleries))}
  </div>;
}

function renderBlock(block: ProjectStoryBlock, galleries: Map<string, ProjectGalleryData>) {
  if (block.type === "text") {
    return <section className={`project-story__text project-story__text--${block.layout ?? "narrow"}`} key={block.id}>
      {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
      <div>{block.title && <h2>{block.title}</h2>}{block.paragraphs.map((paragraph, index) => <p key={`${block.id}-${index}`}>{paragraph}</p>)}</div>
    </section>;
  }
  if (block.type === "image") {
    return <figure className={`project-story__media project-story__media--${block.layout ?? "inset"}`} key={block.id}>
      <ProjectMediaImage image={block.image} className="project-story__image" />
      {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
    </figure>;
  }
  if (block.type === "video") {
    return <div className={`project-story__media project-story__media--${block.layout ?? "inset"}`} key={block.id}><ProjectVideoPlayer video={block.video} /></div>;
  }
  if (block.type === "gallery") {
    const gallery = galleries.get(block.galleryId);
    return gallery ? <ProjectGallery gallery={gallery} key={block.id} /> : null;
  }
  return <aside className={`project-story__callout project-story__callout--${block.tone ?? "note"}`} key={block.id}><p className="eyebrow">{block.tone === "result" ? "RESULTADO" : "NOTA"}</p><h3>{block.title}</h3><p>{block.body}</p></aside>;
}
