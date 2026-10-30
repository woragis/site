function LingoSystemMap() {
  return <figure className="lingo-system-map" aria-label="Diagrama estático da arquitetura integrada do Lingo">
    <div className="lingo-system-map__clients">
      <div><small>WEB</small><b>Next.js</b><span>produto + domínio</span></div>
      <div><small>MOBILE</small><b>Flutter</b><span>cliente móvel</span></div>
    </div>
    <div className="lingo-system-map__join"><i /><span>APIs Lingo</span><i /></div>
    <div className="lingo-system-map__lingo"><small>APLICAÇÃO DO PRODUTO</small><b>Idioma · lições · cartões · revisões</b><span>autenticação · progresso · regras de estudo</span></div>
    <div className="lingo-system-map__join"><i /><span>integrações compartilhadas</span><i /></div>
    <div className="lingo-system-map__core"><div><small>PLATFORM CORE · API GO</small><b>auth · billing · arquivos · jobs</b></div><span>↔</span><div><small>FILA · REDIS</small><b>trabalho assíncrono</b></div></div>
    <div className="lingo-system-map__workers"><div><small>WORKER PYTHON</small><b>LLM</b><span>estrutura conteúdo</span></div><div><small>WORKER PYTHON</small><b>Transcrição</b><span>áudio → texto</span></div></div>
    <figcaption>Mapa conceitual das fronteiras de integração. Platform Core é um serviço compartilhado, não uma parte embutida no app Lingo.</figcaption>
  </figure>;
}

function ExerciseModes() {
  return <figure className="lingo-exercise-modes" aria-label="Exemplos estáticos de formatos de exercício">
    <div className="lingo-exercise-modes__heading"><small>LIÇÃO · INGLÊS A1</small><b>How do you say “obrigado”?</b><span>Escolha uma resposta</span></div>
    <div className="lingo-exercise-modes__choice is-selected"><i>A</i><span>Thank you</span><b>✓</b></div>
    <div className="lingo-exercise-modes__choice"><i>B</i><span>Good night</span><b /></div>
    <div className="lingo-exercise-modes__choice"><i>C</i><span>See you later</span><b /></div>
    <div className="lingo-exercise-modes__formats"><span>ESCOLHA</span><span>ESCRITA</span><span>ORDENAÇÃO</span><span>ASSOCIAÇÃO</span><span>ESCUTA</span><span>FALA*</span></div>
    <figcaption>Exercício e conteúdo esquemáticos. Escuta usa voz do navegador; fala pode ser simulada em modo local.</figcaption>
  </figure>;
}

function ReviewSchedule() {
  return <figure className="lingo-review-schedule" aria-label="Diagrama estático da revisão espaçada usando FSRS">
    <div className="lingo-review-schedule__card"><small>REVISÃO DE CARTÃO</small><b>“Thank you” significa…</b><span>obrigado / obrigada</span></div>
    <div className="lingo-review-schedule__ratings"><span>Again</span><span>Hard</span><span>Good</span><span>Easy</span></div>
    <div className="lingo-review-schedule__arrow">avaliação da pessoa → FSRS → próximo vencimento</div>
    <div className="lingo-review-schedule__calendar"><div><small>AGORA</small><b>Resposta registrada</b></div><i /><div><small>AGENDA DO CARTÃO</small><b>dueAt recalculado</b></div></div>
    <figcaption>O intervalo depende do estado do cartão e da avaliação; os passos não representam prazos fixos.</figcaption>
  </figure>;
}

function DeckJobFlow() {
  return <figure className="lingo-job-flow" aria-label="Diagrama estático do pedido de geração de baralho até os cartões persistidos">
    <div><small>1 · PEDIDO</small><b>“Vocabulário de viagem”</b><span>tema informado no app</span></div><i>→</i>
    <div><small>2 · JOB</small><b>llm.structure</b><span>solicitação registrada</span></div><i>→</i>
    <div><small>3 · WORKER</small><b>Estruturar conteúdo</b><span>Platform Core · LLM</span></div><i>→</i>
    <div><small>4 · DOMÍNIO</small><b>Baralho + cartões</b><span>resultado persistido no Lingo</span></div>
    <figcaption>Fluxo do caminho configurado. O modo local simulado segue um caminho diferente e não chama o worker.</figcaption>
  </figure>;
}

function AiModes() {
  return <figure className="lingo-ai-modes" aria-label="Distinção entre modo simulado e integração real de IA e voz">
    <div className="lingo-ai-mode lingo-ai-mode--lab"><small>LAB LOCAL</small><b>MOCK_AI=true</b><span>conteúdo de exemplo · sem chamada de modelo</span><i>útil para testar a interface</i></div>
    <div className="lingo-ai-mode lingo-ai-mode--configured"><small>INTEGRAÇÃO CONFIGURADA</small><b>Platform Core + workers</b><span>LLM_MODE / STT_MODE e credenciais</span><i>depende do ambiente e dos serviços</i></div>
    <div className="lingo-ai-boundary">Lab ≠ serviço real</div>
    <figcaption>Estado descrito pela configuração do projeto; a página não chama modelo, worker ou serviço de transcrição.</figcaption>
  </figure>;
}

export function LingoCaseStudy() {
  return <div className="lingo-case">
    <section className="lingo-case__intro">
      <p className="eyebrow"><span>PROJETO EXPLORATÓRIO / IDIOMAS</span> PROTÓTIPO · WEB + FLUTTER</p>
      <h2>Um protótipo para explorar como transformar estudo em hábito.</h2>
      <p>O Lingo foi um projeto exploratório de aprendizagem de idiomas, próximo de um protótipo acadêmico. Ele investiga lições curtas, formatos de exercício e revisão espaçada: a pessoa pratica, recebe feedback e avalia o quanto lembrou; essa avaliação ajuda o scheduler FSRS a decidir quando o cartão deve voltar.</p>
      <p className="lingo-case__note">Este estudo descreve o código e os modos documentados, sem apresentar o Lingo como produto lançado. Os exercícios são exemplos editoriais; IA e voz dependem de configuração e são identificadas conforme o modo.</p>
    </section>

    <section className="lingo-case__hero">
      <div className="lingo-case__hero-copy"><p className="eyebrow"><span>MAPA DO PROTÓTIPO</span> CLIENTES E SERVIÇOS</p><h2>Uma experiência de estudo, com integrações nas fronteiras certas.</h2><p>O app web mantém o domínio de lições, cartões e revisões. Capacidades compartilhadas como autenticação, cobrança, arquivos e jobs são acessadas pelo Platform Core; os workers processam tarefas de LLM e transcrição conforme o ambiente.</p></div>
      <LingoSystemMap />
    </section>

    <div className="lingo-story">
      <section className="lingo-section">
        <p className="eyebrow"><span>01</span> / Prática em pequenas sessões</p><div className="lingo-section__content"><div><h2>Nem todo exercício treina a mesma habilidade.</h2><p>Uma alternativa de múltipla escolha testa reconhecimento; digitar uma resposta exige recuperá-la; ordenar palavras trabalha a estrutura da frase. O projeto também inclui associação, escuta com fala do navegador e uma atividade de pronúncia.</p><p>Variar o formato permite praticar vocabulário e frases de modos diferentes. As lições e os cursos são dados do produto; os cartões desta ilustração são fictícios e não representam uma sessão salva.</p></div><ExerciseModes /></div>
      </section>

      <section className="lingo-section">
        <p className="eyebrow"><span>02</span> / Memória de longo prazo</p><div className="lingo-section__content"><div><h2>O cartão volta conforme a avaliação, não num ciclo único para tudo.</h2><p>Na revisão, a pessoa avalia a resposta como Again, Hard, Good ou Easy. A implementação usa a biblioteca FSRS para atualizar o estado do cartão, dificuldade, estabilidade e próximo vencimento.</p><p>O registro da avaliação e a atualização do cartão acontecem em uma transação. Com isso, o histórico de revisão guarda a avaliação feita e um snapshot do agendamento calculado. O intervalo resultante varia conforme o estado e o histórico de cada cartão.</p></div><ReviewSchedule /></div>
      </section>

      <section className="lingo-section">
        <p className="eyebrow"><span>03</span> / Conteúdo gerado como trabalho</p><div className="lingo-section__content"><div><h2>Uma geração de baralho atravessa mais de uma camada.</h2><p>Quando uma pessoa pede um baralho a partir de um tema, o app cria um registro da execução e, no caminho configurado, envia um job <code>llm.structure</code> ao Platform Core. O código aguarda o resultado, interpreta a resposta estruturada e cria os cartões no domínio do Lingo.</p><p>No modo local com <code>MOCK_AI=true</code> ou sem credenciais de plataforma, o endpoint pode criar cartões de exemplo sem chamar um modelo. Essa alternativa ajuda no desenvolvimento da interface, mas não prova qualidade de geração nem uma integração de produção ativa.</p></div><DeckJobFlow /></div>
      </section>

      <section className="lingo-section">
        <p className="eyebrow"><span>04</span> / Pronúncia e limites do modo local</p><div className="lingo-section__content"><div><h2>Um botão de microfone não significa que houve reconhecimento de fala.</h2><p>O endpoint de fala compara uma transcrição com a frase esperada e calcula uma pontuação aproximada. No modo local, a resposta pode usar uma transcrição simulada. No fluxo configurado, o áudio é enviado ao storage por uma URL pré-assinada e um job <code>media.transcribe</code> solicita a transcrição ao worker.</p><p>A documentação exige serviços e credenciais específicos para testar voz real. A pontuação também não é uma avaliação completa de pronúncia ou fluência: é uma comparação aproximada entre o texto reconhecido e a frase-alvo.</p></div><AiModes /></div>
      </section>

      <section className="lingo-section">
        <p className="eyebrow"><span>05</span> / Clientes web e mobile</p><div className="lingo-section__content"><div><h2>O domínio do produto atende mais de uma interface.</h2><p>O repositório principal contém a aplicação web Next.js e suas APIs. O cliente móvel é Flutter, com telas próprias e acesso às APIs do Lingo. Integrações de autenticação, billing, armazenamento e jobs passam pela fronteira compartilhada com o Platform Core.</p><p>O mapa de arquitetura ajuda a entender responsabilidades e dependências. Ele não afirma que cada serviço esteja disponível em qualquer ambiente: o README separa explicitamente laboratório local, configuração de produção e funcionalidades futuras.</p></div><div className="lingo-client-map"><div><small>CLIENTE WEB</small><b>Next.js</b></div><i>↘</i><div className="lingo-client-map__domain"><small>DOMÍNIO LINGO</small><b>lições · cartões · revisões</b></div><i>↙</i><div><small>CLIENTE MOBILE</small><b>Flutter</b></div><p>Clientes diferentes; domínio e serviços compartilhados.</p></div></div>
      </section>

      <section className="lingo-close"><p className="eyebrow"><span>06</span> / Protótipo e aprendizados</p><h2>O valor deste projeto está em explorar os fluxos e suas fronteiras técnicas.</h2><div className="lingo-close__grid"><p><strong>Exploração de produto.</strong><br />Lições, exercícios, cartões e revisão com FSRS compõem a hipótese de experiência testada pelo protótipo.</p><p><strong>Integrações condicionais.</strong><br />Geração com LLM, transcrição real, billing e IAP dependem de serviços e configuração apropriados.</p><p><strong>Próximo produto.</strong><br />Gaudivo é a iniciativa separada que pretende evoluir para lançamento mobile; o Lingo permanece como projeto exploratório.</p></div><p className="lingo-case__note">Estudo de caso em revisão. Use somente dados fictícios na demonstração; não exponha contas de seed, tokens ou configuração local.</p></section>
    </div>
  </div>;
}
