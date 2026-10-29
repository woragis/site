"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Step = "preview" | "apply" | "undo";
const files = [
  { name: "relatorio.pdf", folder: "Documentos", variant: "pdf" },
  { name: "foto.jpg", folder: "Imagens", variant: "image" },
  { name: "backup.zip", folder: "Arquivos", variant: "archive" },
];

export function FileOrganizerVisual({ compact = false, interactive = false }: { compact?: boolean; interactive?: boolean }) {
  const [step, setStep] = useState<Step>("preview");
  const [run, setRun] = useState(0);
  const [paused, setPaused] = useState(false);
  const [running, setRunning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const selectStep = (next: Step) => {
    setStep(next);
    setPaused(false);
    setRunning(!reducedMotion && next !== "preview");
    setRun((value) => value + 1);
  };
  const play = () => {
    if (running) setPaused((value) => !value);
    else {
      setPaused(false);
      setRunning(!reducedMotion);
      setRun((value) => value + 1);
    }
  };

  const content = <>
    <div className="file-organizer-visual__topbar">
      <span className="file-organizer-visual__brand"><span aria-hidden="true">F</span> FILE ORGANIZER <i>· GO</i></span>
      <span className="file-organizer-visual__safe"><span aria-hidden="true" /> {interactive ? "DEMO · SEM ACESSO AO DISCO" : "SAFE MODE"}</span>
    </div>
    <div className="file-organizer-visual__board" aria-hidden="true">
      <div className="file-organizer-visual__inbox"><p className="file-organizer-visual__overline">ORIGEM</p><span className="file-organizer-visual__folder-icon" /><strong>~/Downloads</strong><span>3 arquivos de exemplo</span></div>
      <div className="file-organizer-visual__route"><span>{interactive ? step === "preview" ? "PLANO" : step === "apply" ? "SIMULAR" : "REVERTER" : "PREVIEW"}</span><i /></div>
      <div className="file-organizer-visual__destinations">
        <p className="file-organizer-visual__overline">DESTINOS</p>
        {[["docs", "Documentos", "PDF · 1 arquivo"], ["images", "Imagens", "JPG · 1 arquivo"], ["archives", "Arquivos", "ZIP · 1 arquivo"]].map(([type, label, detail]) => <div className={`file-organizer-visual__destination file-organizer-visual__destination--${type}`} key={type}><span className="file-organizer-visual__folder-icon" /><span><strong>{label}</strong><small>{detail}</small></span></div>)}
      </div>
      {files.map((file, index) => <span key={file.name} onAnimationEnd={interactive && index === files.length - 1 ? () => setRunning(false) : undefined} className={`file-organizer-visual__file file-organizer-visual__file--${file.variant}${interactive ? " file-organizer-visual__file--interactive" : ""}`} style={interactive ? { "--fo-index": index, "--fo-file-y": `${(index - 1) * 1.05}rem` } as CSSProperties : undefined}>{file.name}</span>)}
    </div>
    {interactive && <div className="file-organizer-visual__mapping"><span>Prévia do destino:</span>{files.map((file) => <span key={file.name}><code>{file.name}</code> → {file.folder}</span>)}</div>}
    <div className="file-organizer-visual__command"><span>$</span> {interactive ? step === "preview" ? "file-organizer organize ~/Downloads" : step === "apply" ? "file-organizer organize --apply" : "file-organizer undo" : "file-organizer organize"}<b>{interactive ? step === "preview" ? "prévia · sem alterações" : step === "apply" ? "simulação · 3 movidos · 0 sobrescritos" : "simulação · lote revertido" : "plano pronto · nenhum arquivo alterado"}</b></div>
    <div className="file-organizer-visual__safety"><span>SEM SOBRESCRITA</span><span><code>--apply</code> move quando você confirma</span><span>UNDO DISPONÍVEL</span></div>
  </>;

  if (!interactive) return <div className={`file-organizer-visual${compact ? " file-organizer-visual--compact" : ""}`} role="img" aria-label="Ilustração: arquivos de exemplo são organizados em pastas; a ferramenta não os apaga.">{content}</div>;

  return <section className={`file-organizer-visual file-organizer-visual--interactive${compact ? " file-organizer-visual--compact" : ""}`} data-state={step} data-run={run} data-running={running} data-paused={paused} data-reduced-motion={reducedMotion} aria-label="Demonstração visual do File Organizer">
    {content}
    <div className="file-organizer-visual__controls" role="group" aria-label="Controles da simulação">
      <button type="button" aria-pressed={step === "preview"} onClick={() => selectStep("preview")}>Prévia</button>
      <button type="button" aria-pressed={step === "apply"} onClick={() => selectStep("apply")}>Simular organização</button>
      <button type="button" aria-pressed={step === "undo"} onClick={() => selectStep("undo")}>Simular undo</button>
      <button type="button" onClick={play} aria-label={running ? paused ? "Continuar animação" : "Pausar animação" : "Reproduzir animação"}>{running ? paused ? "Continuar" : "Pausar" : "Reproduzir"}</button>
    </div>
    <p className="file-organizer-visual__disclaimer" role="status" aria-live="polite">{reducedMotion ? "Movimento reduzido: esta prévia estática não acessa nem altera arquivos reais." : "Demonstração visual com nomes fictícios. Nenhum arquivo real é acessado ou alterado."}</p>
    <span className="visually-hidden">{files.map((file) => `${file.name} seria destinado a ${file.folder}. `)}</span>
  </section>;
}
