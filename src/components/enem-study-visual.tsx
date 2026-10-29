export function EnemStudyVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`enem-study-visual${compact ? " enem-study-visual--compact" : ""}`} aria-hidden="true">
      <div className="enem-study-visual__topline"><span>ENEM STUDY</span><span>FLUXO ILUSTRATIVO</span></div>
      <div className="enem-study-visual__flow">
        <div className="enem-study-visual__stage enem-study-visual__stage--material">
          <small>MATERIAL</small>
          <div className="enem-study-visual__document"><b>PDF</b><i /><i /><i /></div>
          <strong>Ecologia e biomas</strong>
          <span>conteúdo de demonstração</span>
        </div>
        <div className="enem-study-visual__connector"><span>extrair</span><i /></div>
        <div className="enem-study-visual__stage enem-study-visual__stage--cards">
          <small>FLASHCARDS</small>
          <div className="enem-study-visual__card"><span>FRENTE</span><b>O que caracteriza um bioma?</b></div>
          <div className="enem-study-visual__card enem-study-visual__card--back"><span>VERSO</span><b>Clima, vegetação e fauna.</b></div>
          <span>perguntas para revisar</span>
        </div>
        <div className="enem-study-visual__connector"><span>programar</span><i /></div>
        <div className="enem-study-visual__stage enem-study-visual__stage--review">
          <small>REVISÃO · SM-2</small>
          <div className="enem-study-visual__due"><b>Hoje</b><span>1º intervalo</span></div>
          <div className="enem-study-visual__due"><b>6 dias</b><span>próxima etapa</span></div>
          <div className="enem-study-visual__due"><b>Mais tarde</b><span>se lembrar bem</span></div>
          <span>intervalo depende da resposta</span>
        </div>
      </div>
      <div className="enem-study-visual__foot"><span /> Do material à prática espaçada <small>DEMO · NÃO É TELA DO PRODUTO</small></div>
    </div>
  );
}
