import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { EmptyState } from "@/components/empty-state";
import { selectedArticles } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Artigos", "Artigos técnicos, estudos de caso e ideias de um desenvolvedor de software.", "/artigos");

export default function ArticlesPage() {
  return <div className="page-shell collection-page articles-collection">
    <header className="collection-header"><p className="eyebrow"><span>02</span> Caderno de engenharia</p><h1>Pensar também<br /><em>é construir.</em></h1><p>Notas técnicas, estudos de caso e aprendizados que valem compartilhar.</p></header>
    {selectedArticles.length ? <div className="article-list">{selectedArticles.map((article, index) => <ArticleCard key={article.slug} article={article} index={index} />)}</div> : <EmptyState title="Os primeiros textos estão em rascunho.">Artigos aparecem aqui quando estiverem revisados e prontos para compartilhar.</EmptyState>}
  </div>;
}
