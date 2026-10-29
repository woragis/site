import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import { absoluteUrl, pageMetadata, jsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((project) => project.published).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.published);
  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/projetos/${project.slug}`);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.published);
  if (!project) notFound();
  const structuredData = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.summary, dateCreated: project.year, creator: { "@type": "Person", name: "Jezreel" }, url: absoluteUrl(`/projetos/${project.slug}`), keywords: project.stack.join(", ") };

  return <article className="page-shell detail-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
    <a className="back-link" href="/projetos">← Todos os projetos</a>
    <header className="detail-header"><p className="eyebrow">{project.eyebrow} · {project.year}</p><h1>{project.title}</h1><p className="detail-lede">{project.summary}</p><div className="detail-facts"><span>Minha atuação<strong>{project.role}</strong></span><span>Tecnologias<strong>{project.stack.join(" · ")}</strong></span></div></header>
    <div className="detail-body"><section><p className="eyebrow">01 / Contexto</p><p>{project.context}</p></section><section><p className="eyebrow">02 / Abordagem</p><p>{project.approach}</p></section><section><p className="eyebrow">03 / Resultado</p><p>{project.outcome}</p></section></div>
  </article>;
}
