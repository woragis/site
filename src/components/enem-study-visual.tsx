export function EnemStudyVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`enem-study-visual${compact ? " enem-study-visual--compact" : ""}`} aria-hidden="true">
      <div className="enem-study-visual__topline"><span>ENEM STUDY</span><span>FLUXO ILUSTRATIVO · CICLO DE ESTUDO</span></div>
      <div className="enem-study-visual__flow">
        <div className="enem-study-visual__stage enem-study-visual__stage--material">
          <small><b>01</b> MATERIAL</small>
          <div className="enem-study-visual__document">
            <b>PDF</b><i /><i /><i />
            <span className="enem-study-visual__scan" />
          </div>
          <strong>Ecologia e biomas</strong>
          <span>material de demonstração</span>
        </div>
        <div className="enem-study-visual__connector"><span>ler</span><i><b /></i></div>
        <div className="enem-study-visual__stage enem-study-visual__stage--extract">
          <small><b>02</b> CONTEÚDO</small>
          <div className="enem-study-visual__extract-page">
            <span>BIOMAS BRASILEIROS</span>
            <i /><i /><i /><i />
            <b>clima e vegetação</b>
            <i /><i />
          </div>
          <span>trecho selecionado para estudo</span>
        </div>
        <div className="enem-study-visual__connector"><span>estruturar</span><i><b /></i></div>
        <div className="enem-study-visual__stage enem-study-visual__stage--cards">
          <small><b>03</b> FLASHCARD</small>
          <div className="enem-study-visual__flip-space">
            <div className="enem-study-visual__flip-card">
              <div className="enem-study-visual__card enem-study-visual__card--front"><span>FRENTE</span><b>O que caracteriza um bioma?</b><small>toque para revelar</small></div>
              <div className="enem-study-visual__card enem-study-visual__card--answer"><span>RESPOSTA</span><b>Clima, vegetação e fauna em interação.</b><small>conceito-chave</small></div>
            </div>
          </div>
          <span>pergunta → recuperação ativa</span>
        </div>
        <div className="enem-study-visual__connector"><span>avaliar</span><i><b /></i></div>
        <div className="enem-study-visual__stage enem-study-visual__stage--review">
          <small><b>04</b> PRÓXIMA REVISÃO · SM-2</small>
          <div className="enem-study-visual__review-prompt"><span>Como foi lembrar?</span><b>Consegui lembrar</b></div>
          <div className="enem-study-visual__due"><b>Hoje</b><span>revisão concluída</span></div>
          <div className="enem-study-visual__due enem-study-visual__due--next"><b>6 dias</b><span>próximo intervalo</span></div>
          <span>exemplo ilustrativo de intervalo</span>
        </div>
      </div>
      <div className="enem-study-visual__progress" aria-hidden="true"><span /><span /><span /><span /></div>
      <div className="enem-study-visual__foot"><span /> Um ciclo de estudo, do material à próxima revisão <small>DEMO · NÃO É TELA DO PRODUTO</small></div>
    </div>
  );
}
