export function FileOrganizerVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`file-organizer-visual${compact ? " file-organizer-visual--compact" : ""}`}
      role="img"
      aria-label="Animação ilustrativa: arquivos balançam, passam por uma prévia e seguem para pastas por tipo; a ferramenta não os apaga."
    >
      <div className="file-organizer-visual__topbar">
        <span className="file-organizer-visual__brand"><span aria-hidden="true">F</span> FILE ORGANIZER <i>· GO</i></span>
        <span className="file-organizer-visual__safe"><span aria-hidden="true" /> SAFE MODE</span>
      </div>

      <div className="file-organizer-visual__board">
        <div className="file-organizer-visual__source">
          <p className="file-organizer-visual__overline">ORIGEM</p>
          <div className="file-organizer-visual__inbox">
            <span className="file-organizer-visual__folder-icon" aria-hidden="true" />
            <strong>~/Downloads</strong>
            <span>4 arquivos sem organizar</span>
          </div>
        </div>

        <div className="file-organizer-visual__route" aria-hidden="true">
          <span>PREVIEW</span>
          <i />
        </div>

        <div className="file-organizer-visual__destinations">
          <p className="file-organizer-visual__overline">DESTINOS</p>
          <div className="file-organizer-visual__destination file-organizer-visual__destination--docs">
            <span className="file-organizer-visual__folder-icon" aria-hidden="true" />
            <span><strong>Documentos</strong><small>.pdf · .md</small></span>
          </div>
          <div className="file-organizer-visual__destination file-organizer-visual__destination--images">
            <span className="file-organizer-visual__folder-icon" aria-hidden="true" />
            <span><strong>Imagens</strong><small>.jpg · .png</small></span>
          </div>
          <div className="file-organizer-visual__destination file-organizer-visual__destination--archives">
            <span className="file-organizer-visual__folder-icon" aria-hidden="true" />
            <span><strong>Arquivos</strong><small>.zip · .tar</small></span>
          </div>
        </div>

        <span className="file-organizer-visual__file file-organizer-visual__file--pdf">relatorio.pdf</span>
        <span className="file-organizer-visual__file file-organizer-visual__file--image">foto.jpg</span>
        <span className="file-organizer-visual__file file-organizer-visual__file--archive">backup.zip</span>
      </div>

      <div className="file-organizer-visual__command">
        <span aria-hidden="true">$</span> file-organizer organize
        <b>plano pronto · nenhum arquivo alterado</b>
      </div>
      <div className="file-organizer-visual__safety">
        <span>SEM SOBRESCRITA</span>
        <span><code>--apply</code> move quando você confirma</span>
        <span>UNDO DISPONÍVEL</span>
      </div>
    </div>
  );
}
