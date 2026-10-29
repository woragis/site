"use client";

import { useEffect, useState, type CSSProperties } from "react";

const stageNames = ["MATERIAL", "CONTEÚDO", "FLASHCARD", "REVISÃO · SM-2"];
const stageDurations = [4300, 5600, 7600, 14000];
const stageHolds = [1800, 1800, 1800, 900];
type StagePhase = "working" | "complete";

function stageState(index: number, compact: boolean, motionEnabled: boolean, activeStage: number | null, phase: StagePhase, completed: number[]) {
  if (compact || !motionEnabled) return "is-static";
  if (completed.includes(index) || (activeStage === index && phase === "complete")) return "is-complete";
  return activeStage === index ? "is-active" : "is-pending";
}

export function EnemStudyVisual({ compact = false }: { compact?: boolean }) {
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [phase, setPhase] = useState<StagePhase>("working");
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    if (compact) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [compact]);

  useEffect(() => {
    if (compact || !motionEnabled) return;
    let timer: ReturnType<typeof setTimeout>;

    const runStage = (index: number) => {
      setActiveStage(index);
      setPhase("working");
      timer = setTimeout(() => {
        setPhase("complete");
        setCompleted((items) => items.includes(index) ? items : [...items, index]);
        if (index < stageNames.length - 1) {
          timer = setTimeout(() => runStage(index + 1), stageHolds[index]);
          return;
        }
        timer = setTimeout(() => {
          setActiveStage(null);
          timer = setTimeout(() => {
            setCompleted([]);
            runStage(0);
          }, 3600);
        }, stageHolds[index]);
      }, stageDurations[index]);
    };

    setCompleted([]);
    runStage(0);
    return () => clearTimeout(timer);
  }, [compact, motionEnabled]);

  const state = (index: number) => stageState(index, compact, motionEnabled, activeStage, phase, completed);
  const stageClass = (index: number, baseClass: string) => `enem-study-visual__stage ${baseClass} ${state(index)}`;
  const connectorClass = (index: number) => {
    if (compact || !motionEnabled) return "enem-study-visual__connector is-static";
    if (activeStage === index && phase === "complete") return "enem-study-visual__connector is-active";
    if (completed.includes(index)) return "enem-study-visual__connector is-complete";
    return "enem-study-visual__connector is-pending";
  };

  return (
    <div className={`enem-study-visual${compact ? " enem-study-visual--compact" : ""}`} aria-hidden="true">
      <div className="enem-study-visual__topline"><span>ENEM STUDY</span><span>FLUXO ILUSTRATIVO · CICLO DE ESTUDO</span></div>
      <div className="enem-study-visual__flow">
        <div className={stageClass(0, "enem-study-visual__stage--material")}>
          <small><b>01</b> MATERIAL{!compact && <em>{state(0) === "is-active" ? "LENDO" : state(0) === "is-complete" ? "LIDO" : ""}</em>}</small>
          <span className="enem-study-visual__stage-check">✓</span>
          <div className="enem-study-visual__document">
            <b>PDF</b><i /><i /><i />
            <span className="enem-study-visual__scan" />
          </div>
          <strong>Ecologia e biomas</strong>
          <span>material de demonstração</span>
        </div>
        <div className={connectorClass(0)}><span>ler</span><i><b /></i></div>
        <div className={stageClass(1, "enem-study-visual__stage--extract")}>
          <small><b>02</b> CONTEÚDO{!compact && <em>{state(1) === "is-active" ? "EXTRAINDO" : state(1) === "is-complete" ? "PRONTO" : ""}</em>}</small>
          <span className="enem-study-visual__stage-check">✓</span>
          <div className="enem-study-visual__extract-page">
            <span>BIOMAS BRASILEIROS</span>
            <div className="enem-study-visual__extract-line"><i /><b>✓</b></div>
            <div className="enem-study-visual__extract-line"><i /><b>✓</b></div>
            <div className="enem-study-visual__extract-line"><i /><b>✓</b></div>
            <strong>clima e vegetação</strong>
            <span className="enem-study-visual__extract-scan" />
          </div>
          <span>trecho selecionado para estudo</span>
        </div>
        <div className={connectorClass(1)}><span>estruturar</span><i><b /></i></div>
        <div className={stageClass(2, "enem-study-visual__stage--cards")}>
          <small><b>03</b> FLASHCARD{!compact && <em>{state(2) === "is-active" ? "CRIANDO / VIRANDO" : state(2) === "is-complete" ? "CRIADO" : ""}</em>}</small>
          <span className="enem-study-visual__stage-check">✓</span>
          <div className="enem-study-visual__flip-space">
            <div className="enem-study-visual__card-build">
              <div className="enem-study-visual__card-build-source"><span>clima</span><span>vegetação</span><span>fauna</span></div>
              <i>→</i>
              <div className="enem-study-visual__card-build-target"><small>NOVO CARTÃO</small><i /><i /><i /></div>
            </div>
            <div className="enem-study-visual__card-reveal">
              <div className="enem-study-visual__flip-card">
                <div className="enem-study-visual__card enem-study-visual__card--front"><span>FRENTE</span><b>O que caracteriza um bioma?</b><small>pergunta antes da resposta</small></div>
                <div className="enem-study-visual__card enem-study-visual__card--answer"><span>RESPOSTA</span><b>Clima, vegetação e fauna em interação.</b><small>conceito-chave</small></div>
              </div>
            </div>
          </div>
          <span>pergunta → recuperação ativa</span>
        </div>
        <div className={connectorClass(2)}><span>avaliar</span><i><b /></i></div>
        <div className={stageClass(3, "enem-study-visual__stage--review")}>
          <small><b>04</b> REVISÃO · SM-2{!compact && <em>{state(3) === "is-active" ? "3 CARTÕES" : state(3) === "is-complete" ? "CONCLUÍDA" : ""}</em>}</small>
          <span className="enem-study-visual__stage-check">✓</span>
          <div className="enem-study-visual__review-deck">
            <div className="enem-study-visual__review-stack"><span /><span /></div>
            <div className="enem-study-visual__review-card enem-study-visual__review-card--one enem-study-visual__review-card--correct">
              <div className="enem-study-visual__review-card-flip">
                <div className="enem-study-visual__review-face enem-study-visual__review-face--front"><small>CARTÃO 01 · FRENTE</small><b>O que caracteriza um bioma?</b><span>responda antes de virar</span></div>
                <div className="enem-study-visual__review-face enem-study-visual__review-face--back"><small>CARTÃO 01 · RESPOSTA</small><b>Clima, vegetação e fauna em interação.</b><div className="enem-study-visual__review-actions"><span className="is-incorrect">× Errei</span><span className="is-chosen is-correct">✓ Acertei</span></div><strong className="enem-study-visual__review-result enem-study-visual__review-result--correct">✓ Acertei</strong></div>
              </div>
            </div>
            <div className="enem-study-visual__review-card enem-study-visual__review-card--two enem-study-visual__review-card--incorrect">
              <div className="enem-study-visual__review-card-flip">
                <div className="enem-study-visual__review-face enem-study-visual__review-face--front"><small>CARTÃO 02 · FRENTE</small><b>O clima influencia qual aspecto do bioma?</b><span>responda antes de virar</span></div>
                <div className="enem-study-visual__review-face enem-study-visual__review-face--back"><small>CARTÃO 02 · RESPOSTA</small><b>A distribuição da vegetação e das espécies.</b><div className="enem-study-visual__review-actions"><span className="is-chosen is-incorrect">× Errei</span><span className="is-correct">✓ Acertei</span></div><strong className="enem-study-visual__review-result enem-study-visual__review-result--incorrect">× Errei</strong></div>
              </div>
            </div>
            <div className="enem-study-visual__review-card enem-study-visual__review-card--three enem-study-visual__review-card--correct">
              <div className="enem-study-visual__review-card-flip">
                <div className="enem-study-visual__review-face enem-study-visual__review-face--front"><small>CARTÃO 03 · FRENTE</small><b>Quais elementos ajudam a definir um bioma?</b><span>responda antes de virar</span></div>
                <div className="enem-study-visual__review-face enem-study-visual__review-face--back"><small>CARTÃO 03 · RESPOSTA</small><b>Clima, flora, fauna e condições do ambiente.</b><div className="enem-study-visual__review-actions"><span className="is-incorrect">× Errei</span><span className="is-chosen is-correct">✓ Acertei</span></div><strong className="enem-study-visual__review-result enem-study-visual__review-result--correct">✓ Acertei</strong></div>
              </div>
            </div>
          </div>
          <div className="enem-study-visual__review-score" aria-hidden="true">
            <div className="enem-study-visual__review-score-item enem-study-visual__review-score-item--correct"><span>✓ Acertos</span><b><i className="is-zero">0</i><i className="is-one">1</i><i className="is-two">2</i></b></div>
            <div className="enem-study-visual__review-score-item enem-study-visual__review-score-item--incorrect"><span>× Erros</span><b><i className="is-zero">0</i><i className="is-one">1</i></b></div>
          </div>
          <div className="enem-study-visual__review-complete"><b>✓</b><span>2 acertos · 1 erro · autoavaliação ilustrativa</span></div>
          <div className="enem-study-visual__due"><b>Resposta pessoal</b><span>cada cartão recebe uma avaliação</span></div>
          <div className="enem-study-visual__due enem-study-visual__due--next"><b>SM-2</b><span>intervalo por cartão</span></div>
          <span>exemplo ilustrativo de intervalo</span>
        </div>
      </div>
      <div className="enem-study-visual__progress" aria-hidden="true">
        {stageNames.map((name, index) => <span key={name} className={state(index)} style={{ "--step-duration": `${stageDurations[index]}ms` } as CSSProperties} />)}
      </div>
      <div className="enem-study-visual__foot"><span /> Uma etapa por vez · concluídas permanecem no fluxo <small>DEMO · NÃO É TELA DO PRODUTO</small></div>
    </div>
  );
}
