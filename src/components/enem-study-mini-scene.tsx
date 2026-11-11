"use client";

import { useEffect, useRef } from "react";

export type SceneKind = "material" | "jobs" | "flashcards" | "review" | "practice" | "architecture" | "ai-boundary" | "roadmap";

export function EnemStudyMiniScene({ kind }: { kind: SceneKind }) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    if (!("IntersectionObserver" in window)) {
      scene.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      scene.classList.toggle("is-visible", entry.isIntersecting);
    }, { threshold: 0.25, rootMargin: "0px 0px -3% 0px" });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sceneRef} className={`enem-study-scene enem-study-scene--${kind}`} aria-hidden="true">
      {kind === "material" && <div className="enem-study-scene__pipeline">
        <div className="enem-study-scene__pipeline-node enem-study-scene__pipeline-node--upload"><small>01 · ENVIAR</small><b>PDF</b><span>arquivo recebido</span></div>
        <i className="enem-study-scene__pipeline-link" />
        <div className="enem-study-scene__pipeline-node enem-study-scene__pipeline-node--extract"><small>02 · PROCESSAR</small><b>Extraindo texto</b><span>trechos em leitura</span></div>
        <i className="enem-study-scene__pipeline-link" />
        <div className="enem-study-scene__pipeline-node enem-study-scene__pipeline-node--ready"><small>03 · DISPONÍVEL</small><b>Conteúdo</b><span>pronto para organizar</span></div>
      </div>}
      {kind === "jobs" && <div className="enem-study-scene__job-flow">
        <div className="enem-study-scene__job-node"><small>PEDIDO</small><b>Gerar cartões</b><span>solicitação aceita</span></div>
        <i />
        <div className="enem-study-scene__job-node"><small>JOB</small><b>Em andamento</b><span>trabalho separado</span></div>
        <i />
        <div className="enem-study-scene__job-node"><small>WORKER</small><b>Processar</b><span>fora da requisição</span></div>
        <i />
        <div className="enem-study-scene__job-node"><small>RETORNO</small><b>Resultado</b><span>para consultar</span></div>
        <div className="enem-study-scene__job-pulse" />
      </div>}
      {kind === "flashcards" && <>
        <div className="enem-study-scene__source"><small>TRECHO DE ESTUDO</small><b>Clima, vegetação e fauna</b><span>um conceito por vez</span><i /></div>
        <span className="enem-study-scene__flashcard-transfer">→</span>
        <div className="enem-study-scene__flashcard">
          <div className="enem-study-scene__flashcard-flip">
            <div className="enem-study-scene__flashcard-face enem-study-scene__flashcard-face--front"><small>PERGUNTA</small><b>O que caracteriza um bioma?</b><span>tente lembrar</span></div>
            <div className="enem-study-scene__flashcard-face enem-study-scene__flashcard-face--back"><small>RESPOSTA</small><b>Clima, vegetação e fauna em interação.</b><span>verso do cartão</span></div>
          </div>
        </div>
      </>}
      {kind === "review" && <>
        <div className="enem-study-scene__review-card"><small>REVISÃO · CARTÃO</small><b>Você lembrou como o clima influencia o bioma?</b><div><span>× Difícil</span><span>✓ Lembrei</span></div></div>
        <div className="enem-study-scene__review-timeline"><span>AGORA</span><i><b /></i><span>PRÓXIMA REVISÃO</span><small className="enem-study-scene__review-marker">cartão retomado</small></div>
        <span className="enem-study-scene__review-note">intervalo ilustrativo · sem data calculada</span>
      </>}
      {kind === "practice" && <>
        <div className="enem-study-scene__question"><small>QUESTÃO DE DEMONSTRAÇÃO</small><b>Qual alternativa descreve uma relação de mutualismo?</b><span>A · Uma espécie é prejudicada</span><span className="is-selected">B · Ambas se beneficiam <i>✓</i></span><span>C · Uma se beneficia sem efeito na outra</span></div>
        <div className="enem-study-scene__result"><small>REGISTRO DA TENTATIVA</small><b>Resposta salva</b><i /><span>acertos por área</span><em>indicador ilustrativo</em></div>
      </>}
      {kind === "architecture" && <>
        <div className="enem-study-scene__clients"><span>WEB <b>Next.js</b></span><span>MOBILE <b>Flutter</b></span></div>
        <i className="enem-study-scene__route enem-study-scene__route--down" />
        <div className="enem-study-scene__product"><small>ENEM STUDY</small><b>domínio e fluxos de estudo</b></div>
        <i className="enem-study-scene__route enem-study-scene__route--down" />
        <div className="enem-study-scene__services"><span>arquivos</span><span>billing</span><span>jobs de LLM</span><small>platform-core · serviços compartilhados</small></div>
      </>}
      {kind === "ai-boundary" && <>
        <div className="enem-study-scene__mode enem-study-scene__mode--demo"><small>AMBIENTE LOCAL</small><b>Resposta demonstrativa</b><span>MOCK_AI=true</span></div>
        <span className="enem-study-scene__boundary">≠</span>
        <div className="enem-study-scene__mode enem-study-scene__mode--real"><small>INTEGRAÇÃO REAL</small><b>Worker + credenciais</b><span>configuração necessária</span></div>
      </>}
      {kind === "roadmap" && <div className="enem-study-scene__milestones">
        <small>PRÓXIMAS VALIDAÇÕES · ROADMAP</small>
        <div className="enem-study-scene__milestone"><i>01</i><span>Fluxo com material fictício</span><b>A VALIDAR</b></div>
        <div className="enem-study-scene__milestone"><i>02</i><span>Integrações reproduzíveis</span><b>A VALIDAR</b></div>
        <div className="enem-study-scene__milestone"><i>03</i><span>Questões com cobertura clara</span><b>A VALIDAR</b></div>
      </div>}
      <span className="enem-study-scene__stamp">ESQUEMA CONCEITUAL</span>
    </div>
  );
}
