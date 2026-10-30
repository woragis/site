import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, selectedProjects } from "@/content/site";
import { absoluteUrl, pageMetadata, jsonLd } from "@/lib/seo";
import { FileOrganizerCaseStudy } from "@/components/file-organizer-case-study";
import { EnemStudyCaseStudy } from "@/components/enem-study-case-study";
import { PrateleiraCaseStudy } from "@/components/prateleira-case-study";
import { WeatherlyCaseStudy } from "@/components/weatherly-case-study";
import { LingoCaseStudy } from "@/components/lingo-case-study";
import { FestasCaseStudy } from "@/components/festas-case-study";
import { TestmasterCaseStudy } from "@/components/testmaster-case-study";
import { PraxisCaseStudy } from "@/components/praxis-case-study";
import { GaudivoCaseStudy } from "@/components/gaudivo-case-study";
import { ScholarCaseStudy } from "@/components/scholar-case-study";
import { NutritionPracticeCaseStudy } from "@/components/nutrition-practice-case-study";
import { WorkoutPrototypeCaseStudy } from "@/components/workout-prototype-case-study";
import { FitnessPlatformCaseStudy } from "@/components/fitness-platform-case-study";
import { ClinicPlatformCaseStudy } from "@/components/clinic-platform-case-study";
import { ValorantWikiCaseStudy } from "@/components/valorant-wiki-case-study";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return selectedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.selected);
  if (!project) return {};
  return {
    ...pageMetadata(project.title, project.summary, `/projetos/${project.slug}`),
    ...(project.published ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.selected);
  if (!project) notFound();
  const structuredData = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.summary, creator: { "@type": "Person", name: "Jezreel de Andrade" }, url: absoluteUrl(`/projetos/${project.slug}`), keywords: project.stack.join(", ") };

  return <article className="page-shell detail-page">
    {project.published && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />}
    <Link className="back-link" href="/projetos">← Todos os projetos</Link>
    <header className="detail-header"><p className="eyebrow">{project.eyebrow} · {project.scope}{!project.published && " · Rascunho"}</p><h1>{project.title}</h1><p className="detail-lede">{project.summary}</p><div className="detail-facts"><span>Minha atuação<strong>{project.role}</strong></span><span>Tecnologias<strong>{project.stack.join(" · ")}</strong></span></div>{project.links?.length ? <div className="detail-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div> : null}</header>
    {project.slug === "file-organizer" ? <FileOrganizerCaseStudy /> : project.slug === "enem-study" ? <EnemStudyCaseStudy /> : project.slug === "prateleira" ? <PrateleiraCaseStudy /> : project.slug === "weatherly" ? <WeatherlyCaseStudy /> : project.slug === "lingo" ? <LingoCaseStudy /> : project.slug === "festas" ? <FestasCaseStudy /> : project.slug === "testmaster" ? <TestmasterCaseStudy /> : project.slug === "praxis" ? <PraxisCaseStudy /> : project.slug === "gaudivo" ? <GaudivoCaseStudy /> : project.slug === "scholar" ? <ScholarCaseStudy /> : project.slug === "consultorio-nutricional" ? <NutritionPracticeCaseStudy /> : project.slug === "treino-pessoal" ? <WorkoutPrototypeCaseStudy /> : project.slug === "fitness-progress" ? <FitnessPlatformCaseStudy /> : project.slug === "clinic-platform" ? <ClinicPlatformCaseStudy /> : project.slug === "valorant-wiki" ? <ValorantWikiCaseStudy /> : <div className="detail-body"><section><p className="eyebrow">01 / Contexto</p><p>{project.context}</p></section><section><p className="eyebrow">02 / Abordagem</p><p>{project.approach}</p></section><section><p className="eyebrow">03 / Resultado</p><p>{project.outcome}</p></section></div>}
  </article>;
}
