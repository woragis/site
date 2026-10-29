"use client";

import { useEffect, useState } from "react";

const stageNames = ["MATERIAL", "CONTEÚDO", "FLASHCARD", "REVISÃO · SM-2"];
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
        timer = setTimeout(() => {
          if (index < stageNames.length - 1) {
            runStage(index + 1);
            return;
          }
          setActiveStage(null);
          timer = setTimeout(() => {
            setCompleted([]);
            runStage(0);
          }, 3600);
        }, 900);
      }, 4300);
    };

    setCompleted([]);
    runStage(0);
    return () => clearTimeout(timer);
  }, [compact, motionEnabled]);

  const state = (index: number) => stageState(index, compact, motionEnabled, activeStage, phase, completed);
  const stageClass = (index: number, baseClass: string) => `enem-study-visual__stage ${baseClass} ${state(index)}`;
  const connectorClass = (index: number) => {
    const current = state(index);
    return `enem-study-visual__connector ${current}`;
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
            <i /><i /><i /><i />
            <b>clima e vegetação</b>
            <i /><i />
          </div>
          <span>trecho selecionado para estudo</span>
        </div>
        <div className={connectorClass(1)}><span>estruturar</span><i><b /></i></div>
        <div className={stageClass(2, "enem-study-visual__stage--cards")}>
          <small><b>03</b> FLASHCARD{!compact && <em>{state(2) === "is-active" ? "REVELANDO" : state(2) === "is-complete" ? "REVELADO" : ""}</em>}</small>
          <span className="enem-study-visual__stage-check">✓</span>
          <div className="enem-study-visual__flip-space">
            <div className="enem-study-visual__flip-card">
              <div className="enem-study-visual__card enem-study-visual__card--front"><span>FRENTE</span><b>O que caracteriza um bioma?</b><small>toque para revelar</small></div>
              <div className="enem-study-visual__card enem-study-visual__card--answer"><span>RESPOSTA</span><b>Clima, vegetação e fauna em interação.</b><small>conceito-chave</small></div>
            </div>
          </div>
          <span>pergunta → recuperação ativa</span>
        </div>
        <div className={connectorClass(2)}><span>avaliar</span><i><b /></i></div>
        <div className={stageClass(3, "enem-study-visual__stage--review")}>
          <small><b>04</b> PRÓXIMA REVISÃO · SM-2{!compact && <em>{state(3) === "is-active" ? "CALCULANDO" : state(3) === "is-complete" ? "AGENDADA" : ""}</em>}</small>
          <span className="enem-study-visual__stage-check">✓</span>
          <div className="enem-study-visual__review-prompt"><span>Como foi lembrar?</span><b>Consegui lembrar</b></div>
          <div className="enem-study-visual__due"><b>Hoje</b><span>revisão concluída</span></div>
          <div className="enem-study-visual__due enem-study-visual__due--next"><b>6 dias</b><span>próximo intervalo</span></div>
          <span>exemplo ilustrativo de intervalo</span>
        </div>
      </div>
      <div className="enem-study-visual__progress" aria-hidden="true">
        {stageNames.map((name, index) => <span key={name} className={state(index)} />)}
      </div>
      <div className="enem-study-visual__foot"><span /> Uma etapa por vez · concluídas permanecem no fluxo <small>DEMO · NÃO É TELA DO PRODUTO</small></div>
    </div>
  );
}
