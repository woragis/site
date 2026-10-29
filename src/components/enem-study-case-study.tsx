import { EnemStudyVisual } from "@/components/enem-study-visual";

type SceneKind = "material" | "practice" | "architecture" | "ai-boundary";

function EnemStudyMiniScene({ kind }: { kind: SceneKind }) {
  return (
    <div className={`enem-study-scene enem-study-scene--${kind}`} aria-hidden="true">
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

function EnemStudyScene({ kind, caption }: { kind: SceneKind; caption: string }) {
  return <figure className={`enem-study-scene-figure enem-study-scene-figure--${kind}`}><EnemStudyMiniScene kind={kind} /><figcaption>{caption}</figcaption></figure>;
}

export function EnemStudyCaseStudy() {
  return (
    <div className="enem-study-case">
      <section className="enem-study-case__intro">
        <p className="eyebrow"><span>CASE / EDTECH</span> ESTADO DO PROJETO · EM REVISÃO</p>
        <h2>Estudar para uma prova extensa pede mais do que acumular conteúdo.</h2>
        <p>O ENEM Study é uma plataforma de preparação que reúne materiais, revisão, questões e simulados em experiências web e mobile. A proposta é conectar essas ferramentas em percursos de estudo: o conteúdo pode virar perguntas, as perguntas podem voltar em revisões e a prática pode revelar o que merece atenção.</p>
        <p>Este case conta o que o código já organiza e onde ainda há trabalho de produto e validação. Os diagramas são ilustrações editoriais; não são capturas do aplicativo nem evidência de que um serviço externo está conectado.</p>
      </section>

      <figure className="enem-study-case__hero">
        <EnemStudyVisual />
        <figcaption>Fluxo ilustrativo: material → flashcard → resposta → próxima revisão. Os exemplos e os intervalos são fictícios, não representam uma sessão real do produto.</figcaption>
      </figure>

      <div className="enem-study-case__story">
        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>01</span> / O problema de produto</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Uma preparação longa se fragmenta com facilidade.</h2>
              <p>Materiais em um lugar, anotações em outro, listas de exercícios em outro: é fácil passar mais tempo organizando a preparação do que entendendo o que já foi aprendido. Para uma prova com muitas áreas, também não basta terminar uma aula ou abrir um PDF. A pessoa precisa voltar aos conceitos, testar se consegue recuperá-los e encontrar espaço para praticar.</p>
              <p>O ENEM Study reúne esses momentos no mesmo produto. A ambição é dar continuidade ao estudo: começar com um material, transformá-lo em unidades menores de revisão e alternar lembrança ativa com resolução de questões. Esse percurso é o eixo do case; não significa que cada etapa já esteja pronta para uso público.</p>
            </div>
            <EnemStudyScene kind="material" caption="Uma ilustração do caminho entre um documento e um cartão. A extração e a geração dependem da configuração disponível no ambiente." />
          </div>
        </section>

        <section className="enem-study-case__section">
          <p className="eyebrow"><span>02</span> / Do material à memória</p>
          <div className="enem-study-case__content">
            <div>
              <h2>O documento é uma entrada; a revisão é o que cria continuidade.</h2>
              <p>O fluxo de materiais começa com o envio de documentos e a extração de texto. A partir daí, o produto prevê a estruturação de flashcards como um trabalho assíncrono encaminhado ao <code>platform-core</code>. Separar esse trabalho da interação imediata permite que a interface represente estados de processamento sem tratar uma chamada demorada como se fosse instantânea.</p>
              <p>Depois de criados, os cartões podem ser usados em sessões de revisão. O projeto contém uma implementação do algoritmo SM-2 para calcular intervalos a partir da avaliação da pessoa. A ideia não é mostrar um calendário arbitrário: lembrar com facilidade e ter dificuldade devem influenciar quando o cartão volta.</p>
              <p>No modo local documentado, <code>MOCK_AI=true</code> produz conteúdo de demonstração. A geração real depende de workers e credenciais configurados no serviço compartilhado. Por isso, a animação mostra um conceito de fluxo e não afirma que o PDF fictício foi processado por um modelo.</p>
            </div>
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>03</span> / Prática e acompanhamento</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Flashcards, questões e simulados têm funções diferentes.</h2>
              <p>Um flashcard pede que a pessoa recupere uma ideia específica. Uma questão de múltipla escolha exige comparar alternativas e aplicar o que sabe. Já um simulado cronometrado combina muitas questões numa tentativa mais longa. Reunir esses formatos permite que o produto apoie momentos de estudo diferentes, sem reduzir todo o aprendizado a uma única tela.</p>
              <p>O código inclui prática de questões, registro de tentativas e simulados. A estimativa apresentada pelo projeto é apenas uma referência de acompanhamento; não é cálculo oficial da TRI e não deve ser divulgada como previsão de nota. A base seed verificada contém cinco questões demonstrativas, quantidade insuficiente para afirmar cobertura abrangente do ENEM.</p>
              <p>Uma próxima etapa importante é percorrer esse fluxo com um conjunto de conteúdo adequado, confirmar como a cobertura por área é calculada e separar com nitidez os dados fictícios de qualquer banco que venha a ser aprovado para uma demonstração pública.</p>
            </div>
            <EnemStudyScene kind="practice" caption="Questão e registro de tentativa representados como uma interface conceitual, com alternativa e conteúdo fictícios." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>04</span> / Aplicação e arquitetura</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Dois clientes, um domínio de estudo e serviços compartilhados.</h2>
              <p>O produto combina uma aplicação web em Next.js e TypeScript com um cliente móvel em Flutter. No backend web, o código usa Prisma e PostgreSQL. Essa composição amplia o trabalho para além de uma única interface: os fluxos de estudo precisam ser entendidos dentro de uma arquitetura com mais de um cliente e serviços de suporte.</p>
              <p>O <code>platform-core</code> é a fronteira para capacidades compartilhadas, como billing, armazenamento de arquivos e jobs de LLM. Isso ajuda a concentrar serviços comuns fora do domínio específico de preparação para o ENEM, enquanto o produto mantém seus próprios modelos e regras de estudo.</p>
              <p>A ilustração resume essa separação e não pretende documentar cada chamada, fila ou contrato entre serviços. Antes de publicar uma demonstração técnica, ainda é necessário confirmar a configuração executável dessas dependências e quais caminhos já foram integrados de ponta a ponta.</p>
            </div>
            <EnemStudyScene kind="architecture" caption="Mapa simplificado de responsabilidades. As conexões representam a arquitetura proposta pelo código, não um diagrama de implantação completo." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene enem-study-case__section--boundary">
          <p className="eyebrow"><span>05</span> / Limites da IA</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Uma interface de IA não comprova a qualidade da resposta.</h2>
              <p>O modo de laboratório permite exercitar telas e percursos sem depender de uma chamada real a um modelo. Essa distinção importa porque uma demonstração visual pode parecer convincente mesmo quando o conteúdo foi produzido por regras fixas ou respostas de exemplo.</p>
              <p>No estado local verificado, a correção de redação usa faixas baseadas no tamanho do texto e comentários fixos. O tutor pode devolver um trecho do material como resposta demonstrativa. O código também gera embeddings locais de demonstração; a recuperação semântica e a qualidade das respostas fundamentadas nos documentos ainda precisam de validação antes de descrever o tutor como RAG pronto para uso.</p>
              <p>Para uma integração real, workers, credenciais e serviços do <code>platform-core</code> precisam estar configurados. A fronteira entre esses estados deve aparecer tanto na documentação quanto na experiência de demonstração. Não apresento os resultados do modo mock como avaliação pedagógica ou comportamento de IA real.</p>
            </div>
            <EnemStudyScene kind="ai-boundary" caption="A cena contrasta o mock local com a integração configurada. É um lembrete conceitual; não indica que o serviço real está ativo." />
          </div>
        </section>

        <section className="enem-study-case__section">
          <p className="eyebrow"><span>06</span> / Próximos marcos</p>
          <div className="enem-study-case__content">
            <div>
              <h2>O próximo passo é fechar um percurso que qualquer pessoa possa conferir.</h2>
              <p>O tamanho do escopo torna especialmente importante escolher uma fatia vertical pequena e demonstrável. Um fluxo de material fictício até uma revisão pode verificar interface, persistência, agendamento e tratamento dos estados de processamento. Depois, questões e simulados podem ser avaliados com uma base cuja origem, cobertura e limitações estejam claras.</p>
              <p>Também falta validar a busca do tutor com documentos conhecidos, confirmar a integração real de serviços externos e documentar quais partes foram implementadas por mim. O projeto tem uma base de produto interessante, mas o case deve acompanhar a evidência disponível: código existente, modo de execução reproduzível e limites visíveis.</p>
              <p>Esse cuidado não reduz a ambição do trabalho. Ele mostra como transformar uma plataforma ampla em entregas conferíveis e como tratar IA, dados e expectativas de aprendizagem com responsabilidade.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="enem-study-case__next">
        <p className="eyebrow"><span>ANTES DE DIVULGAR</span> VALIDAÇÕES PENDENTES</p>
        <h2>Da base de produto a uma demonstração confiável.</h2>
        <ul>
          <li>Escolher e percorrer um fluxo completo com material fictício.</li>
          <li>Deixar claro na interface quando a geração está em modo de demonstração.</li>
          <li>Validar embeddings, recuperação do tutor e qualidade das respostas.</li>
          <li>Confirmar a cobertura das questões e os limites da estimativa do simulado.</li>
          <li>Verificar dependências, contribuição individual e uma configuração reproduzível.</li>
        </ul>
        <p className="enem-study-case__status">Este estudo de caso é um rascunho editorial. Descreve o código consultado e não declara o produto pronto para lançamento.</p>
      </section>
    </div>
  );
}
