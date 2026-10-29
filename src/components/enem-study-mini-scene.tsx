"use client";

import { useEffect, useRef } from "react";

export type SceneKind = "material" | "practice" | "architecture" | "ai-boundary";

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
      {kind === "material" && <>
        <div className="enem-study-scene__paper"><small>PDF · ECOLOGIA</small><i /><i /><i /><b>relações entre espécies</b><i /><i /><i /></div>
        <span className="enem-study-scene__transfer">↓</span>
        <div className="enem-study-scene__cards"><span>FRENTE</span><b>O que é uma relação ecológica?</b><small>cartão de estudo · exemplo</small></div>
      </>}
      {kind === "practice" && <>
        <div className="enem-study-scene__question"><small>QUESTÃO DE DEMONSTRAÇÃO</small><b>Qual alternativa descreve uma relação de mutualismo?</b><span>A · Uma espécie é prejudicada</span><span className="is-selected">B · Ambas se beneficiam <i>✓</i></span><span>C · Uma se beneficia sem efeito na outra</span></div>
        <div className="enem-study-scene__result"><small>REGISTRO DA TENTATIVA</small><b>Resposta salva</b><i /><span>acertos por área</span></div>
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
        <span className="enem-study-scene__boundary">ou</span>
        <div className="enem-study-scene__mode enem-study-scene__mode--real"><small>INTEGRAÇÃO REAL</small><b>Worker + credenciais</b><span>configuração necessária</span></div>
      </>}
      <span className="enem-study-scene__stamp">ESQUEMA CONCEITUAL</span>
    </div>
  );
}
