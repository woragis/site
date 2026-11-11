function TestmasterPipeline() {
  return <figure className="testmaster-pipeline" aria-label="Diagrama estático das etapas entre upload do PDF e revisão de flashcards">
    <div className="testmaster-pipeline__step"><small>01 · DOCUMENTO</small><span className="testmaster-pipeline__pdf">PDF</span><b>Material de estudo</b><span>arquivo selecionado</span></div><i>→</i>
    <div className="testmaster-pipeline__step"><small>02 · PREPARAÇÃO</small><b>Upload armazenado</b><span>arquivo + metadados</span></div><i>→</i>
    <div className="testmaster-pipeline__step testmaster-pipeline__step--provider"><small>03 · GERAÇÃO</small><b>OpenAI Assistants</b><span>file_search · instruções</span></div><i>→</i>
    <div className="testmaster-pipeline__step"><small>04 · ESTUDO</small><span className="testmaster-pipeline__cards"><b>Q</b><b>A</b><b>Q</b></span><b>Flashcards</b><span>revisão SM-2</span></div>
    <figcaption>Upload e geração são ações separadas no código. A sequência é explicativa; este diagrama não processa um arquivo.</figcaption>
  </figure>;
}

function PdfUploadCard() {
  return <figure className="testmaster-upload-card" aria-label="Representação estática do formulário de upload de PDF">
    <div className="testmaster-upload-card__heading"><small>NOVO MATERIAL</small><b>Escolha um documento para estudar</b></div>
    <div className="testmaster-upload-card__drop"><span>PDF</span><b>Arraste um arquivo até aqui</b><small>ou escolha no dispositivo · limite indicado: 50 MB</small></div>
    <div className="testmaster-upload-card__scope"><span>MATÉRIA</span><b>Biologia</b><i>⌄</i></div>
    <div className="testmaster-upload-card__file"><span>PDF</span><div><b>ecologia-resumo.pdf</b><small>arquivo fictício · 2,4 MB</small></div><strong>ENVIADO</strong></div>
    <figcaption>O formulário salva o PDF e os metadados. A geração dos cartões é iniciada em uma etapa separada.</figcaption>
  </figure>;
}

function CardReview() {
  return <figure className="testmaster-review-card" aria-label="Representação estática da pergunta, resposta e avaliação de um flashcard">
    <div className="testmaster-review-card__progress"><span>SESSÃO DE ESTUDO</span><b>04 / 12</b><i><em /></i></div>
    <div className="testmaster-review-card__front"><small>PERGUNTA</small><b>Qual relação ecológica beneficia as duas espécies?</b></div>
    <div className="testmaster-review-card__back"><small>RESPOSTA</small><b>Mutualismo</b><span>Exemplo: polinizador e planta.</span></div>
    <div className="testmaster-review-card__ratings"><span>Errei</span><span>Difícil</span><span>Boa</span><span>Fácil</span></div>
    <figcaption>A tela de revisão revela a resposta e oferece avaliações de qualidade para atualizar o SM-2.</figcaption>
  </figure>;
}

export function TestmasterCaseStudy() {
  return <div className="testmaster-case">
    <section className="testmaster-case__intro">
      <p className="eyebrow"><span>CASE / FERRAMENTA DE ESTUDO</span> PRODUTO · DOCUMENTOS + FLASHCARDS</p>
      <h2>Um PDF é material de consulta. Um flashcard pede que você recupere uma ideia.</h2>
      <p>Testmaster é uma ferramenta focada em levar um documento de estudo até uma coleção de flashcards que pode ser revisada. Seu recorte é mais estreito que o ENEM Study: aqui a história é o processamento de um material selecionado, a criação de cartões e a sessão de repetição espaçada.</p>
      <p className="testmaster-case__note">Os exemplos desta página são fictícios. O repositório não confirma uma demo pública, e a documentação e o código consultados divergem sobre o provedor usado para geração; essa diferença está explicitada abaixo.</p>
    </section>

    <section className="testmaster-case__hero">
      <div className="testmaster-case__hero-copy"><p className="eyebrow"><span>UM FLUXO FOCADO</span> MATERIAL → PRÁTICA</p><h2>Organizar o caminho entre ler e lembrar.</h2><p>O documento fica associado a uma matéria; em outro passo, o serviço de geração usa o arquivo para solicitar perguntas e respostas. Depois de salvos, os cartões podem aparecer numa sessão de estudo conforme o vencimento registrado.</p></div>
      <TestmasterPipeline />
    </section>

    <div className="testmaster-story">
      <section className="testmaster-section">
        <p className="eyebrow"><span>01</span> / Upload e organização</p><div className="testmaster-section__content"><div><h2>O documento entra na biblioteca antes de pedir a geração.</h2><p>A página oferece seleção de matéria e arquivo PDF. A rota de upload valida a extensão e o limite configurado de 50 MB, grava o arquivo em <code>static/uploads</code> e registra caminho e metadados no banco.</p><p>Há um ponto a corrigir antes de demonstrar esse vínculo como concluído: a interface envia a matéria selecionada, mas a rota consultada cria o documento usando um identificador literal de matéria padrão. O upload guarda o arquivo; a seleção de matéria ainda precisa ser conectada corretamente.</p><p>O armazenamento é local ao processo. Persistência de arquivos num deploy precisa ser resolvida antes de apresentar essa parte como operação de produção.</p></div><PdfUploadCard /></div>
      </section>

      <section className="testmaster-section">
        <p className="eyebrow"><span>02</span> / Geração a partir do documento</p><div className="testmaster-section__content"><div><h2>O código consultado envia o PDF ao fluxo de arquivos da OpenAI.</h2><p>Quando a geração é solicitada com um identificador de documento, a rota busca o registro, lê o arquivo salvo e o envia à API de arquivos da OpenAI. Em seguida, cria um Assistant com busca em arquivos, solicita os cartões e aguarda a execução terminar antes de interpretar a resposta.</p><p>O prompt pede vinte cartões, mas isso é uma instrução ao modelo, não uma garantia de quantidade ou de qualidade. Se a extração estruturada falhar, existe um caminho de criação básica a partir do texto retornado. O conteúdo gerado precisa ser revisado por quem estuda.</p></div><div className="testmaster-generation-map"><div><small>ARQUIVO LOCAL</small><b>PDF selecionado</b></div><i>→</i><div className="testmaster-generation-map__provider"><small>API DE ARQUIVOS</small><b>OpenAI Assistants</b><span>file_search</span></div><i>→</i><div><small>RESPOSTA</small><b>JSON interpretado</b><span>ou fallback textual</span></div><p>Fluxo específico da rota de geração consultada.</p></div></div>
      </section>

      <section className="testmaster-section">
        <p className="eyebrow"><span>03</span> / Cartões e matéria</p><div className="testmaster-section__content"><div><h2>O cartão mantém a pergunta separada da resposta.</h2><p>Os flashcards persistem frente e verso e podem ser ligados a uma matéria, documento e tópicos. Essa separação dá à sessão de estudo uma unidade simples: tentar responder, revelar o verso e então registrar a avaliação.</p><p>Isso diferencia Testmaster do ENEM Study. O primeiro organiza documentos e cartões num fluxo concentrado; o segundo reúne uma plataforma mais ampla de preparação, incluindo prática de questões e outras áreas de estudo.</p></div><div className="testmaster-card-model"><div className="testmaster-card-model__pdf"><span>PDF</span><b>ecologia-resumo</b></div><i>→</i><div className="testmaster-card-model__cards"><div><small>FRENTE</small><b>Uma pergunta</b></div><div><small>VERSO</small><b>Uma resposta</b></div></div><div className="testmaster-card-model__subject">MATÉRIA · Biologia <span>·</span> TÓPICO · Ecologia</div></div></div>
      </section>

      <section className="testmaster-section">
        <p className="eyebrow"><span>04</span> / Revisão espaçada</p><div className="testmaster-section__content"><div><h2>A sessão apresenta os cartões vencidos e registra uma avaliação.</h2><p>O modo de estudo busca cartões com próxima revisão vencida, mostra a frente e permite revelar a resposta. A pessoa escolhe uma qualidade de resposta; a implementação calcula o próximo intervalo e o fator de facilidade com uma versão do algoritmo SM-2.</p><p>A tela oferece estados de carregamento, erro e sessão concluída. A visualização abaixo é uma representação estática de um cartão, não uma sessão ativa nem uma previsão calculada.</p></div><CardReview /></div>
      </section>

      <section className="testmaster-section testmaster-section--boundary">
        <p className="eyebrow"><span>05</span> / O que precisa ser alinhado</p><div className="testmaster-section__content"><div><h2>README e implementação descrevem integrações diferentes.</h2><p>A documentação do repositório apresenta Gemini para análise de PDF e uma estratégia de fallback entre provedores. Já a rota de upload exige uma chave OpenAI, e a geração de cartões consultada usa OpenAI Assistants, GPT-4o e <code>file_search</code>. O chat possui uma implementação separada com Gemini e OpenAI.</p><p>Por isso, este case descreve somente o fluxo observado no código e não promete processamento universal de PDFs, uso de contexto de um milhão de tokens ou fallback automático entre provedores na geração. Esses pontos devem ser reconciliados com a versão que será demonstrada.</p></div><div className="testmaster-evidence"><div><small>README</small><b>Gemini · fallback entre provedores</b><span>descrição documentada</span></div><i>≠</i><div><small>GERAÇÃO ATUAL CONSULTADA</small><b>OpenAI Assistants · file_search</b><span>rota de upload exige OpenAI key</span></div><p>Registrar qual revisão será tratada como fonte oficial antes de divulgar o case.</p></div></div>
      </section>

      <section className="testmaster-close"><p className="eyebrow"><span>06</span> / Estado do projeto</p><h2>Um recorte útil, com validação técnica ainda necessária.</h2><div className="testmaster-close__grid"><p><strong>Fluxo presente no código.</strong><br />Upload local de PDF, geração por endpoint separado, persistência de cartões e revisão baseada em SM-2.</p><p><strong>Dependências externas.</strong><br />Geração exige credencial OpenAI na implementação consultada; o README ainda descreve outro caminho de provedores.</p><p><strong>Próxima validação.</strong><br />Reconciliar documentação e código, testar armazenamento no deploy e revisar qualidade dos cartões com um PDF próprio.</p></div><p className="testmaster-case__note">Estudo de caso em revisão. Não usar documentos de terceiros nem expor chaves, arquivos pessoais ou dados de demonstração privados.</p></section>
    </div>
  </div>;
}
