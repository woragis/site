import Link from "next/link";
import type { Project } from "@/content/site";
import { FileOrganizerVisual } from "@/components/file-organizer-visual";
import { EnemStudyVisual } from "@/components/enem-study-visual";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFileOrganizer = project.slug === "file-organizer";
  const isEnemStudy = project.slug === "enem-study";

  return (
    <article className="project-card">
      <Link className="project-card__link" href={`/projetos/${project.slug}`}>
        <div className={`project-card__visual${isFileOrganizer ? " project-card__visual--file-organizer" : isEnemStudy ? " project-card__visual--enem-study" : ""}`} aria-hidden="true">
          {isFileOrganizer ? <FileOrganizerVisual compact /> : isEnemStudy ? <EnemStudyVisual compact /> : <>
            <span className="project-card__visual-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-card__visual-title">{project.title.split(" ").slice(0, 2).join(" ")}</span>
            <span className="project-card__arrow">↗</span>
          </>}
        </div>
        <div className="project-card__meta"><span>{project.eyebrow}</span><span>{project.published ? project.scope : "Rascunho para revisão"}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label="Tecnologias">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Link>
    </article>
  );
}
