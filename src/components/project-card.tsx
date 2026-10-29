import Link from "next/link";
import type { Project } from "@/content/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <Link className="project-card__link" href={`/projetos/${project.slug}`}>
        <div className="project-card__visual" aria-hidden="true">
          <span className="project-card__visual-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-card__visual-title">{project.title.split(" ").slice(0, 2).join(" ")}</span>
          <span className="project-card__arrow">↗</span>
        </div>
        <div className="project-card__meta"><span>{project.eyebrow}</span><span>{project.year}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label="Tecnologias">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Link>
    </article>
  );
}
