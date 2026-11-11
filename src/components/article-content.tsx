import type { Article, ArticleStoryBlock, ProjectGallery as ProjectGalleryData } from "@/content/site";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectMediaImage, ProjectVideoPlayer } from "@/components/project-media";

export function ArticleContent({ article }: { article: Article }) {
  if (!article.story?.length) {
    return <div className="article-prose">{article.content.map((paragraph, index) => <p key={`${article.slug}-${index}`}>{paragraph}</p>)}</div>;
  }

  const galleries = new Map((article.galleries ?? []).map((gallery) => [gallery.id, gallery]));
  return <div className="article-story">{article.story.map((block) => renderBlock(block, galleries))}</div>;
}

function renderBlock(block: ArticleStoryBlock, galleries: Map<string, ProjectGalleryData>) {
  if (block.type === "heading") {
    return block.level === 3
      ? <h3 className="article-story__heading" key={block.id}>{block.title}</h3>
      : <h2 className="article-story__heading" key={block.id}>{block.title}</h2>;
  }
  if (block.type === "paragraphs") {
    return <div className="article-prose" key={block.id}>{block.paragraphs.map((paragraph, index) => <p key={`${block.id}-${index}`}>{paragraph}</p>)}</div>;
  }
  if (block.type === "code") {
    return <figure className="article-story__code" key={block.id}>
      <figcaption><span>{block.language}</span>{block.caption && <span>{block.caption}</span>}</figcaption>
      <pre><code>{block.code}</code></pre>
    </figure>;
  }
  if (block.type === "image") {
    return <figure className={`article-story__media article-story__media--${block.layout ?? "inset"}`} key={block.id}>
      <ProjectMediaImage image={block.image} className="article-story__image" />
      {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
    </figure>;
  }
  if (block.type === "video") {
    return <div className={`article-story__media article-story__media--${block.layout ?? "inset"}`} key={block.id}><ProjectVideoPlayer video={block.video} /></div>;
  }
  if (block.type === "gallery") {
    const gallery = galleries.get(block.galleryId);
    return gallery ? <div className={`article-story__gallery article-story__gallery--${block.layout ?? "inset"}`} key={block.id}><ProjectGallery gallery={gallery} /></div> : null;
  }
  return <aside className={`article-story__callout article-story__callout--${block.tone ?? "note"}`} key={block.id}>
    <p className="eyebrow">{block.tone === "result" ? "RESULTADO" : "NOTA"}</p><h2>{block.title}</h2><p>{block.body}</p>
  </aside>;
}
