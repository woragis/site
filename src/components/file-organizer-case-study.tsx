"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "preview" | "apply" | "collision" | "undo";
type Phase = "ready" | "typing" | "output" | "moving" | "done";
type DemoFile = { name: string; type: string; size: string; folder: string };

const files: DemoFile[] = [
  { name: "contrato.pdf", type: "PDF", size: "1,8 MB", folder: "documents-pdf" },
  { name: "orcamento.pdf", type: "PDF", size: "824 KB", folder: "documents-pdf" },
  { name: "avatar.png", type: "PNG", size: "246 KB", folder: "pictures" },
  { name: "viagem.jpg", type: "JPG", size: "3,2 MB", folder: "pictures" },
  { name: "backup.zip", type: "ZIP", size: "84 MB", folder: "archives" },
  { name: "fotos.tar.gz", type: "TGZ", size: "126 MB", folder: "archives" },
  { name: "despesas.csv", type: "CSV", size: "42 KB", folder: "spreadsheets" },
  { name: "inventario.xlsx", type: "XLSX", size: "1,1 MB", folder: "spreadsheets" },
  { name: "demo.mp4", type: "MP4", size: "38 MB", folder: "videos" },
  { name: "editor.AppImage", type: "APP", size: "92 MB", folder: "software" },
] as const;

const folders = [
  { id: "documents-pdf", path: "Documents / PDF" },
  { id: "pictures", path: "Pictures" },
  { id: "archives", path: "Archives" },
  { id: "spreadsheets", path: "Documents / Excel" },
  { id: "videos", path: "Videos" },
  { id: "software", path: "Software" },
] as const;

const collisionFile: DemoFile = { name: "relatorio.pdf", type: "PDF", size: "640 KB", folder: "documents-pdf" };
const commands: Record<Mode, string> = {
  preview: "file-organizer organize ~/Downloads",
  apply: "file-organizer organize ~/Downloads --apply",
  collision: "file-organizer organize ~/Downloads",
  undo: "file-organizer undo",
};

function transcript(mode: Mode) {
  if (mode === "undo") return ["Undid the last organize."];
  const batch = mode === "collision" ? [collisionFile] : files;
  const output = ["Organizing ~/Downloads"];
  for (const file of batch) {
    const folder = folders.find((item) => item.id === file.folder)!;
    const name = mode === "collision" ? "relatorio (1).pdf" : file.name;
    output.push(`  ${file.name}`, `    → ~/Organized/${folder.path.replaceAll(" / ", "/")}/${name}`);
  }
  output.push(mode === "apply" ? `${batch.length} files moved.` : `${batch.length} ${batch.length === 1 ? "file" : "files"} would be moved.`);
  if (mode !== "apply") output.push("Nothing was changed.");
  return output;
}

function filePosition(index: number, list: readonly DemoFile[]) {
  const file = list[index];
  const folderIndex = folders.findIndex((folder) => folder.id === file.folder);
  let end = 3.55;
  for (let position = 0; position < folderIndex; position += 1) {
    const count = list.filter((item) => item.folder === folders[position].id).length;
    end += 2 + count * 1.05;
  }
  const withinFolder = list.slice(0, index).filter((item) => item.folder === file.folder).length;
  end += 1.35 + withinFolder * 1.05;
  const start = 3.35 + index * 1.62;
  return { start, travelY: end - start, reverseDelay: (list.length - index - 1) * 0.11 };
}

type StorySceneKind = "preview" | "apply" | "collision" | "undo";

function StoryScene({ kind }: { kind: StorySceneKind }) {
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
    }, { threshold: 0.3, rootMargin: "0px 0px -4% 0px" });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return <div ref={sceneRef} className={`file-case-scene file-case-scene--${kind}`} aria-hidden="true">
    <div className="file-case-scene__window">
      <div className="file-case-scene__bar"><span /><span /><span /><b>{kind === "preview" ? "PLANO DE ORGANIZAÇÃO" : kind === "apply" ? "APLICAÇÃO" : kind === "collision" ? "CONFLITO DE NOME" : "UNDO · VERIFICAÇÃO"}</b></div>
      {kind === "preview" && <div className="file-case-scene__preview">
        <div className="file-case-scene__mini-heading"><span>Downloads</span><small>prévia</small></div>
        <div className="file-case-scene__route"><span className="file-case-scene__file">PDF　 contrato.pdf</span><i /><span className="file-case-scene__folder">Documents / PDF</span></div>
        <div className="file-case-scene__route"><span className="file-case-scene__file">JPG　 viagem.jpg</span><i /><span className="file-case-scene__folder">Pictures</span></div>
        <div className="file-case-scene__route"><span className="file-case-scene__file">ZIP　 backup.zip</span><i /><span className="file-case-scene__folder">Archives</span></div>
        <div className="file-case-scene__scene-status"><span /> arquivos no lugar · destinos previstos</div>
      </div>}
      {kind === "apply" && <div className="file-case-scene__apply">
        <div className="file-case-scene__command"><span>$</span> organize ~/Downloads <em>--apply</em></div>
        <div className="file-case-scene__apply-flow">
          <div className="file-case-scene__apply-source"><small>DOWNLOADS</small><span style={{ "--scene-index": 0 } as React.CSSProperties}>PDF　 contrato.pdf</span><span style={{ "--scene-index": 1 } as React.CSSProperties}>JPG　 viagem.jpg</span><span style={{ "--scene-index": 2 } as React.CSSProperties}>ZIP　 backup.zip</span></div>
          <div className="file-case-scene__apply-arrow" aria-hidden="true">›</div>
          <div className="file-case-scene__apply-target"><small>ORGANIZED</small><span>▰　Documents / PDF</span><span>▰　Pictures</span><span>▰　Archives</span></div>
        </div>
        <div className="file-case-scene__scene-status"><span /> 3 arquivos organizados</div>
      </div>}
      {kind === "collision" && <div className="file-case-scene__collision">
        <div className="file-case-scene__mini-heading"><span>Documents / PDF</span><small>1 conflito</small></div>
        <div className="file-case-scene__collision-row is-existing"><span>PDF</span><b>relatorio.pdf</b><small>já existe</small></div>
        <div className="file-case-scene__collision-mark"><i /> nome alternativo escolhido <i /></div>
        <div className="file-case-scene__collision-row is-proposed"><span>PDF</span><b>relatorio (1).pdf</b><small>novo arquivo</small></div>
      </div>}
      {kind === "undo" && <div className="file-case-scene__undo">
        <div className="file-case-scene__verify"><span>SHA-256</span><b>✓</b><small>conteúdo confere</small></div>
        <div className="file-case-scene__undo-flow"><span className="file-case-scene__undo-folder">Organized / PDF</span><i aria-hidden="true">←</i><span className="file-case-scene__undo-file">PDF　 contrato.pdf</span></div>
        <div className="file-case-scene__scene-status"><span /> retorno autorizado</div>
      </div>}
    </div>
    <span className="file-case-scene__caption">{kind === "preview" ? "O plano revela os destinos sem mover a origem." : kind === "apply" ? "A confirmação inicia a movimentação do lote." : kind === "collision" ? "O arquivo existente é mantido; o novo recebe outro nome." : "O conteúdo é verificado antes do retorno à origem."}</span>
  </div>;
}

export function FileOrganizerCaseStudy() {
  const terminalRef = useRef<HTMLPreElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mode, setMode] = useState<Mode>("preview");
  const [phase, setPhase] = useState<Phase>("ready");
  const [typed, setTyped] = useState("");
  const [outputCount, setOutputCount] = useState(0);
  const [run, setRun] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [storyMotionPaused, setStoryMotionPaused] = useState(false);
  const [openFolders, setOpenFolders] = useState<Set<string>>(() => new Set(folders.map((folder) => folder.id)));

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!run || reducedMotion) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    const lines = transcript(mode);
    let character = 0;
    let line = 0;
    const typeNext = () => {
      character += 1;
      setTyped(commands[mode].slice(0, character));
      if (character < commands[mode].length) {
        timerRef.current = setTimeout(typeNext, 48);
      } else {
        setPhase("output");
        timerRef.current = setTimeout(revealNext, 280);
      }
    };
    const revealNext = () => {
      line += 1;
      setOutputCount(line);
      if (line < lines.length) {
        timerRef.current = setTimeout(revealNext, 125);
      } else if (mode === "apply" || mode === "undo") {
        setPhase("moving");
        timerRef.current = setTimeout(() => setPhase("done"), 2050);
      } else {
        setPhase("done");
      }
    };
    timerRef.current = setTimeout(typeNext, 220);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [run, mode, reducedMotion]);

  const runMode = (nextMode: Mode) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMode(nextMode);
    setTyped("");
    setOutputCount(0);
    setPhase(reducedMotion ? "done" : "typing");
    setRun((value) => value + 1);
  };

  const visiblePhase = reducedMotion && run > 0 ? "done" : phase;
  const lines = transcript(mode);
  const visibleOutputCount = reducedMotion && run > 0 ? lines.length : outputCount;
  const batch = mode === "collision" ? [collisionFile] : files;
  const sourceHasFiles = mode === "collision" || mode === "preview" || mode === "apply" && visiblePhase !== "done" || mode === "undo" && (visiblePhase === "moving" || visiblePhase === "done");
  const targetHasFiles = mode === "collision" || mode === "apply" && (visiblePhase === "moving" || visiblePhase === "done") || mode === "undo" && visiblePhase !== "done";
  const commandText = reducedMotion && run > 0 || visiblePhase === "done" || visiblePhase === "ready" ? commands[mode] : typed;
  const statusText = visiblePhase === "ready"
    ? "Escolha uma etapa para ver o terminal e os arquivos de exemplo em ação."
    : visiblePhase === "done"
      ? mode === "preview" ? "Prévia concluída. Os 10 arquivos continuam em Downloads; nada foi alterado."
        : mode === "apply" ? "Simulação concluída. 10 arquivos aparecem nas pastas de destino; nenhum arquivo real foi tocado."
          : mode === "collision" ? "Prévia da colisão concluída. O arquivo existente permanece e o novo nome foi planejado."
            : "Simulação de undo concluída. Os arquivos de exemplo voltaram para Downloads."
      : visiblePhase === "moving" ? "Movendo arquivos de exemplo na demonstração."
        : visiblePhase === "typing" ? "Digitando o comando da demonstração."
          : "Comando concluído; exibindo a saída da CLI em etapas.";

  useEffect(() => {
    if (!terminalRef.current || visibleOutputCount === 0) return;
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [visibleOutputCount]);

  const toggleFolder = (id: string) => setOpenFolders((current) => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });

  return <div className="file-case-study">
    <section className="file-case-intro">
      <p className="eyebrow"><span>CASE / 01</span> CLI · Go · Linux</p>
      <h2>Automação boa deixa claro o que vai acontecer.</h2>
      <p>O File Organizer separa downloads por tipo. O desafio de engenharia é automatizar a tarefa sem esconder as decisões: primeiro você confere o plano, depois escolhe aplicar e ainda pode desfazer o último lote.</p>
      <p>Explore a simulação abaixo. Ela usa dez nomes fictícios e reproduz o formato de saída da CLI; nenhum comando é executado e nenhum arquivo do computador é acessado.</p>
    </section>

    <section className="file-case-demo" aria-labelledby="file-case-demo-title">
      <div className="file-case-demo__heading">
        <div><p className="eyebrow"><span>DEMO / 01</span> AMBIENTE ILUSTRATIVO</p><h2 id="file-case-demo-title">Do Downloads às pastas certas.</h2></div>
        <p>Escolha uma etapa. O terminal digita o comando, revela o resultado e só então a janela mostra o efeito.</p>
      </div>
      <div className="file-case-demo__steps" role="group" aria-label="Etapas da demonstração">
        {([
          ["preview", "Prévia"], ["apply", "Simular --apply"], ["collision", "Colisão"], ["undo", "Undo"],
        ] as const).map(([id, label]) => <button key={id} type="button" aria-pressed={mode === id} onClick={() => runMode(id)}>{label}</button>)}
        <button className="file-case-demo__replay" type="button" onClick={() => runMode(mode)}>Repetir etapa <span aria-hidden="true">↻</span></button>
      </div>

      <div className={`file-case-manager${visiblePhase === "moving" ? " is-moving" : ""}`} data-mode={mode} data-phase={visiblePhase}>
        <div className="file-case-manager__titlebar"><span /><span /><span /><b>Arquivos</b><small>DEMONSTRAÇÃO · SEM ACESSO AO DISCO</small></div>
        <div className="file-case-manager__toolbar"><span className="file-case-manager__path"><span>⌂</span> Downloads <i>›</i> <strong>{mode === "undo" && visiblePhase !== "done" || mode === "apply" && visiblePhase === "done" ? "Organized" : mode === "collision" ? "Documents / PDF" : "Prévia"}</strong></span><span className="file-case-manager__view" aria-hidden="true">☷　▦　⌕</span></div>

        <div className="file-case-manager__layout">
          <aside className="file-case-manager__sidebar" aria-label="Locais">
            <p>FAVORITOS</p><ul><li><span aria-hidden="true">◷</span> Recentes</li><li className="is-selected"><span aria-hidden="true">↓</span> Downloads</li><li><span aria-hidden="true">▱</span> Organizados</li></ul>
            <p>LOCAL</p><ul><li><span aria-hidden="true">▣</span> Jezreel</li><li><span aria-hidden="true">☁</span> Nuvem</li></ul>
            <span className="file-case-manager__sidebar-note">10 itens fictícios</span>
          </aside>

          <div className="file-case-manager__main">
            <div className="file-case-manager__panes">
              <section className="file-case-manager__pane file-case-manager__pane--source" aria-label="Arquivos na pasta Downloads">
                <div className="file-case-manager__pane-heading"><span>Downloads</span><small>{sourceHasFiles ? `${batch.length} itens` : "Pasta vazia"}</small></div>
                {sourceHasFiles ? <ul className="file-case-manager__file-list">
                  {batch.map((file, index) => <li key={file.name} className="file-case-manager__file" data-index={index} style={{ "--file-index": index } as React.CSSProperties}>
                    <span className={`file-case-manager__file-icon file-case-manager__file-icon--${file.type.toLowerCase()}`}>{file.type}</span><span className="file-case-manager__file-name">{file.name}</span><small>{file.size}</small>
                  </li>)}
                </ul> : <p className="file-case-manager__empty">Os arquivos foram organizados.</p>}
              </section>

              <section className="file-case-manager__pane file-case-manager__pane--target" aria-label="Pastas de destino com arquivos previstos ou organizados">
                <div className="file-case-manager__pane-heading"><span>{mode === "collision" ? "Documents / PDF" : "Organized"}</span><small>{mode === "collision" ? "Destino" : targetHasFiles ? "10 arquivos" : "Plano de destino"}</small></div>
                {mode === "collision" ? <div className="file-case-manager__collision-folder">
                  <div className="file-case-manager__folder-heading"><span aria-hidden="true">▰</span><strong>Documents / PDF</strong><small>1 existente · 1 planejado</small></div>
                  <ul className="file-case-manager__target-files"><li className="is-existing"><span>PDF</span> relatorio.pdf <small>já existe</small></li><li className="is-proposed"><span>PDF</span> relatorio (1).pdf <small>nome livre</small></li></ul>
                </div> : <div className="file-case-manager__folders">
                  {folders.map((folder) => {
                    const contents = files.filter((file) => file.folder === folder.id);
                    const expanded = openFolders.has(folder.id);
                    return <div className={`file-case-manager__folder${expanded ? " is-open" : ""}`} key={folder.id}>
                      <button className="file-case-manager__folder-heading" type="button" aria-expanded={expanded} onClick={() => toggleFolder(folder.id)}>
                        <span aria-hidden="true">{expanded ? "▾" : "▸"}</span><strong>{folder.path}</strong><small>{contents.length}</small>
                      </button>
                      {expanded && <ul className={`file-case-manager__target-files${targetHasFiles ? " is-organized" : " is-planned"}`}>
                        {contents.map((file) => {
                          const index = files.findIndex((item) => item.name === file.name);
                          return <li key={file.name} style={{ "--file-index": index, "--file-travel-delay": `${index * 0.11}s`, "--file-reverse-delay": `${(files.length - index - 1) * 0.11}s` } as React.CSSProperties}><span>{file.type}</span> {file.name}</li>;
                        })}
                      </ul>}
                    </div>;
                  })}
                </div>}
              </section>

              {(mode === "apply" || mode === "undo") && batch.map((file, index) => {
                const position = filePosition(index, batch);
                return <span key={file.name} className="file-case-manager__traveler" aria-hidden="true" style={{ "--file-index": index, "--file-start-y": `${position.start}rem`, "--file-travel-y": `${position.travelY}rem`, "--file-travel-delay": `${index * 0.11}s`, "--file-reverse-delay": `${position.reverseDelay}s` } as React.CSSProperties}><i>{file.type}</i>{file.name}</span>;
              })}
            </div>
            <div className="file-case-manager__footer"><span>⌘</span> {sourceHasFiles ? `${batch.length} ${batch.length === 1 ? "item" : "itens"}` : "Organização simulada"}<small>visualização em lista</small></div>
          </div>
        </div>
      </div>

      <div className="file-case-terminal" aria-label="Terminal demonstrativo">
        <div className="file-case-terminal__bar"><span /><span /><span /><b>FILE ORGANIZER · CLI</b><small>{visiblePhase === "ready" ? "AGUARDANDO ETAPA" : "SAÍDA ILUSTRATIVA"}</small></div>
        <pre ref={terminalRef} aria-live="off"><code><span className="file-case-terminal__prompt">$ </span>{commandText || <span className="file-case-terminal__placeholder">selecione uma etapa acima</span>}<span className={`file-case-terminal__cursor${visiblePhase === "typing" ? " is-visible" : ""}`} />{visibleOutputCount > 0 && <span className="file-case-terminal__output">{"\n"}{lines.slice(0, visibleOutputCount).join("\n")}</span>}</code></pre>
      </div>

      <p className="file-case-demo__status" role="status" aria-live="polite">{statusText}</p>
      <p className="file-case-demo__note">Dados e operações são cenográficos. A página não lê, move, renomeia ou apaga arquivos reais.</p>
      <div className="visually-hidden">Arquivos de demonstração: {files.map((file) => `${file.name}, ${file.size}, destino ${folders.find((folder) => folder.id === file.folder)?.path}. `)}Na prévia os arquivos não mudam de lugar. Aplicar mostra a organização simulada. Undo mostra o retorno à origem.</div>
    </section>

    <div className={`file-case-story${storyMotionPaused ? " is-paused" : ""}`}>
      <div className="file-case-story__controls"><span>ANIMAÇÕES AUTOMÁTICAS · CICLO DE 7,6 S</span><button type="button" aria-pressed={storyMotionPaused} onClick={() => setStoryMotionPaused((paused) => !paused)}>{storyMotionPaused ? "Retomar animações" : "Pausar animações"}</button></div>
      <section className="file-case-story__section">
        <p className="eyebrow"><span>01</span> / Planejar antes de mover</p>
        <div className="file-case-story__content"><div><h2>A primeira resposta é um plano.</h2><p>Executar `file-organizer organize ~/Downloads` não muda a pasta. A CLI mostra cada caminho de destino e termina com “Nothing was changed.”. Esse comportamento padrão permite revisar as classificações antes de autorizar qualquer alteração.</p><p>Na simulação, os dez itens ficam em Downloads enquanto a janela mostra a estrutura prevista em `~/Organized`: documentos, imagens, arquivos compactados, planilhas, vídeos e software.</p></div><StoryScene kind="preview" /></div>
      </section>
      <section className="file-case-story__section">
        <p className="eyebrow"><span>02</span> / Aplicar explicitamente</p>
        <div className="file-case-story__content"><div><h2>O comando e a interface contam a mesma história.</h2><p>Acrescentar `--apply` é a confirmação explícita. Na cena, a linha termina de ser digitada, a CLI apresenta os destinos e então cada item atravessa a janela. As pastas abrem e deixam visível o conteúdo que receberam.</p><p>As regras vêm da configuração do projeto. PDFs vão para `Documents/PDF`, imagens para `Pictures`, arquivos compactados para `Archives`, planilhas para `Documents/Excel`, vídeos para `Videos` e o AppImage para `Software`.</p></div><StoryScene kind="apply" /></div>
      </section>
      <section className="file-case-story__section">
        <p className="eyebrow"><span>03</span> / Proteger o destino</p>
        <div className="file-case-story__content"><div><h2>Colisão de nome não significa sobrescrita.</h2><p>Quando `relatorio.pdf` já existe com outro conteúdo em `Documents/PDF`, a política padrão escolhe `relatorio (1).pdf`. A cena de colisão mantém o arquivo existente visível e mostra o novo nome como uma proposta da prévia.</p><p>O projeto também compara SHA-256 para detectar conteúdo duplicado. Pela configuração padrão, duplicatas exatas são ignoradas; elas não são confundidas com arquivos diferentes que apenas compartilham o mesmo nome.</p></div><StoryScene kind="collision" /></div>
      </section>
      <section className="file-case-story__section">
        <p className="eyebrow"><span>04</span> / Desfazer com verificação</p>
        <div className="file-case-story__content"><div><h2>O caminho de volta também faz parte do fluxo.</h2><p>`file-organizer undo` reverte o lote mais recente. Antes de mover os arquivos de volta, a ferramenta verifica se o conteúdo no destino ainda corresponde ao que foi registrado; se mudou, recusa a operação.</p><p>A animação retorna os dez arquivos para Downloads e esvazia a visualização de destino. É uma representação do fluxo: o site não executa o comando nem altera arquivos.</p></div><StoryScene kind="undo" /></div>
      </section>
      <section className="file-case-close">
        <p className="eyebrow"><span>05</span> / Decisões de engenharia</p>
        <h2>Previsibilidade em cada etapa.</h2>
        <div className="file-case-close__grid">
          <p><strong>Planejamento antes da ação.</strong><br />A mesma operação pode apresentar o plano ou aplicá-lo após confirmação explícita.</p>
          <p><strong>Regras configuráveis.</strong><br />Extensões direcionam categorias; nomes em conflito recebem sufixos e duplicatas seguem uma política configurável.</p>
          <p><strong>Recuperação verificável.</strong><br />O histórico permite desfazer o último lote se os arquivos ainda corresponderem ao estado registrado.</p>
        </div>
        <p className="file-case-tech">Go <span>·</span> CLI com Cobra <span>·</span> TOML <span>·</span> SHA-256 <span>·</span> histórico de operações</p>
      </section>
    </div>
  </div>;
}
