import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { EmptyState } from "@/components/empty-state";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { experience, selectedArticles, selectedProjects, site, skills } from "@/content/site";

export default function HomePage() {
  const projectItems = selectedProjects.slice(0, 3);
  const articleItems = selectedArticles.slice(0, 3);

  return (
    <>
      <section className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow"><span className="status-dot" />{site.location}</p>
          <h1 id="hero-title">Construo software <span>com rigor</span> e intenção<span className="hero__period">.</span></h1>
          <p className="hero__intro">{site.introduction}</p>
          <div className="hero__actions">
            <Link className="button button--dark" href="/projetos">Explorar projetos <span aria-hidden="true">↗</span></Link>
            <a className="text-link" href={site.links[0].href} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Composição gráfica abstrata">
          <div className="hero-art__frame"><span className="hero-art__cross">✳</span><span className="hero-art__orbit hero-art__orbit--one" /><span className="hero-art__orbit hero-art__orbit--two" /><span className="hero-art__core">J<span>.</span></span><span className="hero-art__caption">IDEIAS → SISTEMAS<br />SISTEMAS → IMPACTO</span><span className="hero-art__number">01—04</span></div>
        </div>
        <div className="hero__index"><span>PORTFÓLIO 2025—26</span><span>01 / 04</span></div>
      </section>

      <section className="section page-shell about-section" id="sobre">
        <SectionHeading index="01" label="Sobre" title="Engenharia com contexto." />
        <div className="about-grid">
          <p className="about-lead">A melhor solução técnica é aquela que resolve o problema certo — e continua fazendo sentido depois do lançamento.</p>
          <div className="about-copy"><p>Gosto de entender o contexto antes de escolher ferramentas. Da arquitetura à interface, busco construir software legível, confiável e preparado para evoluir.</p><p>Aqui compartilho o que fiz, como pensei e o que aprendi pelo caminho.</p></div>
        </div>
      </section>

      <section className="section page-shell projects-section" id="projetos">
        <SectionHeading index="02" label="Seleção" title="Projetos que contam histórias." href="/projetos" />
        {projectItems.length ? <div className="project-grid">{projectItems.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div> : <EmptyState title="Os próximos cases começam aqui.">Os projetos serão publicados quando seus detalhes e resultados estiverem prontos.</EmptyState>}
      </section>

      <section className="section experience-section" id="experiencia">
        <div className="page-shell"><SectionHeading index="03" label="Experiência" title="Trabalho, prática e evolução." />
          <div className="experience-layout">{experience.length ? experience.map((item) => <article className="experience-item" key={item.period}><p className="experience-item__period">{item.period}</p><div><h3>{item.role}</h3><p className="experience-item__company">{item.company}</p><p className="experience-item__description">{item.description}</p></div><span className="experience-item__arrow" aria-hidden="true">↗</span></article>) : <p className="experience-pending">Trajetória profissional em preparação.</p>}</div>
        </div>
      </section>

      <section className="section page-shell skills-section" id="habilidades">
        <SectionHeading index="04" label="Ferramentas" title="Um conjunto em constante evolução." />
        <div className="skills-grid">{skills.map((group, index) => <article className="skill-group" key={group.label}><span className="skill-group__index">0{index + 1}</span><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="section page-shell articles-section" id="artigos">
        <SectionHeading index="05" label="Caderno" title="Ideias em construção." href="/artigos" />
        {articleItems.length ? <div className="article-list">{articleItems.map((article, index) => <ArticleCard key={article.slug} article={article} index={index} />)}</div> : <EmptyState title="Uma ideia de cada vez.">Artigos técnicos, estudos de caso e notas pessoais aparecem aqui quando publicados.</EmptyState>}
      </section>

      <section className="contact-section" id="contato"><div className="page-shell contact-inner"><p className="eyebrow">06 / Contato</p><h2>Vamos construir<br /><em>algo relevante.</em></h2><a className="contact-email" href={site.links[0].href} target="_blank" rel="noreferrer">github.com/woragis<span aria-hidden="true">↗</span></a><div className="contact-links">{site.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div></section>
    </>
  );
}
