import Link from "next/link";
import { FileOrganizerVisual } from "@/components/file-organizer-visual";

export function FileOrganizerSpotlight() {
  return (
    <section className="file-organizer-spotlight" aria-labelledby="file-organizer-spotlight-title">
      <div className="page-shell file-organizer-spotlight__inner">
        <div className="file-organizer-spotlight__heading">
          <p className="eyebrow"><span>02</span> Case em destaque · Go / CLI</p>
          <span className="file-organizer-spotlight__edition">PROJETO SELECIONADO / 2026</span>
        </div>
        <div className="file-organizer-spotlight__grid">
          <div className="file-organizer-spotlight__copy">
            <p className="file-organizer-spotlight__overline">FILE ORGANIZER</p>
            <h2 id="file-organizer-spotlight-title">Organizar arquivos.<br /><em>Sem perder o controle.</em></h2>
            <p className="file-organizer-spotlight__intro">Uma ferramenta em Go que mostra o plano antes de mover qualquer coisa. Nada é sobrescrito; o comando para aplicar é uma escolha explícita.</p>
            <Link className="button button--dark" href="/projetos/file-organizer">Ver o estudo de caso <span aria-hidden="true">↗</span></Link>
            <div className="file-organizer-spotlight__principles" aria-label="Princípios da ferramenta">
              <div><span>01</span><strong>Prévia primeiro</strong></div>
              <div><span>02</span><strong>Sem sobrescrita</strong></div>
              <div><span>03</span><strong>Desfazer disponível</strong></div>
            </div>
          </div>
          <div className="file-organizer-spotlight__visual">
            <FileOrganizerVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
