"use client";

import { useEffect, useRef, useState } from "react";

type Beat = {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  command: string;
  output: string[];
  motion: "none" | "move" | "undo" | "collision";
  label: string;
};

const beats: Beat[] = [
  {
    id: "preview",
    number: "01",
    title: "Primeiro, entender o plano",
    paragraphs: [
      "Organizar uma pasta automaticamente parece simples até que um arquivo vá parar no lugar errado. Por isso, a primeira execução não muda nada: ela mostra quais arquivos foram encontrados e para onde cada um iria.",
      "O comando `organize` funciona como uma prévia por padrão. Essa separação entre planejar e aplicar deixa a decisão visível antes de qualquer movimentação.",
    ],
    command: "file-organizer organize ~/Downloads",
    output: [
      "Organizing ~/Downloads",
      "  relatorio.pdf",
      "    → ~/Organized/Documents/PDF/relatorio.pdf",
      "  foto.jpg",
      "    → ~/Organized/Pictures/foto.jpg",
      "  backup.zip",
      "    → ~/Organized/Archives/backup.zip",
      "3 files would be moved.",
      "Nothing was changed.",
    ],
    motion: "none",
    label: "Prévia ilustrativa: os arquivos permanecem na pasta de origem.",
  },
  {
    id: "apply",
    number: "02",
    title: "Aplicar é uma escolha explícita",
    paragraphs: [
      "Depois de revisar os destinos, `--apply` confirma a movimentação. A interface do terminal imprime os caminhos envolvidos e um resumo do que foi feito.",
      "No estudo de caso, cada arquivo se move só depois que o comando termina de ser digitado e o resultado aparece. É uma representação visual do fluxo — a página não executa a CLI.",
    ],
    command: "file-organizer organize ~/Downloads --apply",
    output: [
      "Organizing ~/Downloads",
      "  relatorio.pdf",
      "    → ~/Organized/Documents/PDF/relatorio.pdf",
      "  foto.jpg",
      "    → ~/Organized/Pictures/foto.jpg",
      "  backup.zip",
      "    → ~/Organized/Archives/backup.zip",
      "3 files moved.",
    ],
    motion: "move",
    label: "Simulação: os arquivos de exemplo seguem para os destinos planejados.",
  },
  {
    id: "collision",
    number: "03",
    title: "Um destino ocupado não é sobrescrito",
    paragraphs: [
      "Se já existe um arquivo com o mesmo nome e conteúdo diferente no destino, a regra padrão numera o novo nome — por exemplo, `relatorio (1).pdf`. Assim, o arquivo existente continua intacto.",
      "O projeto também calcula SHA-256 para identificar duplicatas exatas. Pela configuração padrão, uma duplicata é ignorada. São dois casos diferentes: colisão de nome preserva ambos; conteúdo duplicado pode ser pulado.",
    ],
    command: "file-organizer organize ~/Downloads",
    output: [
      "Organizing ~/Downloads",
      "  relatorio.pdf",
      "    → ~/Organized/Documents/PDF/relatorio (1).pdf",
      "1 file would be moved.",
      "Nothing was changed.",
    ],
    motion: "collision",
    label: "Simulação de colisão: o arquivo existente fica no lugar e o novo recebe outro nome.",
  },
  {
    id: "undo",
    number: "04",
    title: "E se eu precisar voltar atrás?",
    paragraphs: [
      "A ferramenta mantém o histórico do último lote para permitir `undo`. Ao desfazer, os arquivos voltam aos caminhos de origem.",
      "O comando verifica se os arquivos no destino continuam iguais aos registrados. Se algum mudou, a operação é recusada em vez de sobrescrever silenciosamente uma versão nova.",
    ],
    command: "file-organizer undo",
    output: ["Undid the last organize."],
    motion: "undo",
    label: "Simulação: o último lote retorna aos caminhos de origem.",
  },
];

const sourceFiles = ["relatorio.pdf", "foto.jpg", "backup.zip"];

function StoryBeat({ beat }: { beat: Beat }) {
  const root = useRef<HTMLElement>(null);
  const started = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [run, setRun] = useState(0);
  const [phase, setPhase] = useState<"idle" | "typing" | "result" | "done">("idle");
  const [typed, setTyped] = useState(beat.command);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        setRun((value) => value + 1);
      }
    }, { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!run) return;
    if (timer.current) clearTimeout(timer.current);
    if (reducedMotion) {
      setTyped(beat.command);
      setPhase("done");
      return;
    }
    setTyped("");
    setPhase("typing");
    let index = 0;
    const typeNext = () => {
      index += 1;
      setTyped(beat.command.slice(0, index));
      if (index < beat.command.length) timer.current = setTimeout(typeNext, 24);
      else timer.current = setTimeout(() => {
        setPhase("result");
        timer.current = setTimeout(() => setPhase("done"), beat.motion === "none" ? 300 : 1300);
      }, 250);
    };
    timer.current = setTimeout(typeNext, 180);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [run, reducedMotion, beat]);

  const replay = () => {
    started.current = true;
    setPhase("idle");
    setRun((value) => value + 1);
  };

  return <section className={`file-case-beat file-case-beat--${beat.id}`} ref={root} data-phase={phase} data-motion={beat.motion}>
    <div className="file-case-beat__copy">
      <p className="eyebrow"><span>{beat.number}</span> / {beat.id === "collision" ? "Integridade" : beat.id === "undo" ? "Recuperação" : "Fluxo de uso"}</p>
      <h2>{beat.title}</h2>
      {beat.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph.split(/(`[^`]+`)/g).map((part) => part.startsWith("`") && part.endsWith("`") ? <code key={part}>{part.slice(1, -1)}</code> : part)}</p>)}
      {beat.id === "collision" && <p className="file-case-beat__note"><strong>Dois mecanismos:</strong> colisões de nome usam sufixo numérico; duplicatas idênticas são reconhecidas pelo hash SHA-256 e, por padrão, ignoradas.</p>}
    </div>
    <div className="file-case-beat__demo">
      <div className="file-case-terminal" role="group" aria-label={`Terminal de demonstração. Comando: ${beat.command}. Saída: ${beat.output.join(". ")}`}>
        <div className="file-case-terminal__bar"><span /><span /><span /><b>DEMO · SAÍDA ILUSTRATIVA</b></div>
        <pre aria-hidden="true"><code><span className="file-case-terminal__prompt">$ </span>{phase === "idle" ? beat.command : typed}<span className={`file-case-terminal__cursor${phase === "typing" ? " is-visible" : ""}`} />{(phase === "result" || phase === "done") && <span className="file-case-terminal__output">{"\n"}{beat.output.join("\n")}</span>}</code></pre>
      </div>
      <div className="file-case-files" aria-hidden="true">
        <div className="file-case-files__source"><span>~/Downloads</span>{(beat.motion === "collision" ? ["relatorio.pdf"] : sourceFiles).map((name) => <i key={name} data-file={name}>{name}</i>)}</div>
        <span className="file-case-files__route">{beat.motion === "undo" ? "← undo" : beat.motion === "none" ? "prévia · sem mover" : "plano →"}</span>
        <div className="file-case-files__target"><span>~/Organized</span>
          {beat.motion === "collision" ? <i className="file-case-files__existing">relatorio.pdf <small>já existe</small></i> : <>
            <i className="file-case-files__landing file-case-files__landing--one">{beat.motion === "undo" ? "relatorio.pdf" : "Documents/PDF"}</i>
            <i className="file-case-files__landing file-case-files__landing--two">{beat.motion === "undo" ? "foto.jpg" : "Pictures"}</i>
            <i className="file-case-files__landing file-case-files__landing--three">{beat.motion === "undo" ? "backup.zip" : "Archives"}</i>
          </>}
        </div>
        {beat.motion === "collision" && <div className="file-case-files__renamed">relatorio (1).pdf <small>nome livre · sem sobrescrita</small></div>}
      </div>
      <p className="file-case-beat__caption">{beat.label}</p>
      <button type="button" className="file-case-beat__replay" onClick={replay}>Reproduzir demonstração <span aria-hidden="true">↻</span></button>
    </div>
  </section>;
}

export function FileOrganizerCaseStudy() {
  return <div className="file-case-study">
    <section className="file-case-intro">
      <p className="eyebrow"><span>CASE / 01</span> CLI · Go · Linux</p>
      <h2>Automação boa deixa claro o que vai acontecer.</h2>
      <p>O File Organizer nasceu de uma tarefa cotidiana: separar downloads por tipo. O desafio de engenharia era fazer isso com uma ferramenta que explicasse suas decisões, evitasse sobrescritas e mantivesse um caminho de retorno.</p>
      <p>A seguir, o fluxo é apresentado com comandos e nomes de arquivos fictícios. As saídas reproduzem o formato da CLI, mas são apenas uma demonstração da página: nenhum comando é executado e nenhum arquivo é acessado.</p>
    </section>
    {beats.map((beat) => <StoryBeat key={beat.id} beat={beat} />)}
    <section className="file-case-close">
      <p className="eyebrow"><span>05</span> / Decisões de engenharia</p>
      <h2>O fluxo inteiro é parte do produto.</h2>
      <div className="file-case-close__grid">
        <p><strong>Planejamento antes da ação.</strong><br />A mesma operação de organização pode apresentar um plano ou aplicá-lo com a confirmação explícita.</p>
        <p><strong>Regras previsíveis.</strong><br />Extensões direcionam categorias; colisões de nome recebem sufixos e duplicatas exatas seguem uma política configurável.</p>
        <p><strong>Recuperação verificável.</strong><br />O histórico permite desfazer o último lote, desde que os arquivos movidos não tenham sido alterados depois.</p>
      </div>
      <p className="file-case-tech">Go <span>·</span> CLI com Cobra <span>·</span> configuração TOML <span>·</span> SHA-256 <span>·</span> histórico de operações</p>
    </section>
  </div>;
}
