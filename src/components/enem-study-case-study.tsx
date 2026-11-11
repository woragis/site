import { EnemStudyVisual } from "@/components/enem-study-visual";
import { EnemStudyMiniScene, type SceneKind } from "@/components/enem-study-mini-scene";

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
        <section className="enem-study-case__section">
          <p className="eyebrow"><span>01</span> / O problema de produto</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Uma preparação longa se fragmenta com facilidade.</h2>
              <p>Materiais em um lugar, anotações em outro, listas de exercícios em outro: é fácil passar mais tempo organizando a preparação do que entendendo o que já foi aprendido. Para uma prova com muitas áreas, também não basta terminar uma aula ou abrir um PDF. A pessoa precisa voltar aos conceitos, testar se consegue recuperá-los e encontrar espaço para praticar.</p>
              <p>O ENEM Study reúne esses momentos no mesmo produto. A ambição é dar continuidade ao estudo: começar com um material, transformá-lo em unidades menores de revisão e alternar lembrança ativa com resolução de questões. Esse percurso é o eixo do case; não significa que cada etapa já esteja pronta para uso público.</p>
            </div>
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>02</span> / Entrada e extração</p>
          <div className="enem-study-case__content">
            <div>
              <h2>O PDF é a entrada; o texto extraído prepara as próximas etapas.</h2>
              <p>Um material precisa ser enviado e processado antes que seu conteúdo possa apoiar uma atividade de estudo. Por isso, vale deixar visível a diferença entre receber um arquivo, extrair texto e ter um resultado disponível. São momentos diferentes, com tempos e possíveis falhas diferentes.</p>
              <p>O fluxo de materiais do projeto inclui envio de documentos e extração de texto. A cena ao lado representa esses estados como um percurso conceitual; ela não demonstra uma extração real nem garante suporte a qualquer formato ou qualidade de PDF.</p>
            </div>
            <EnemStudyScene kind="material" caption="Arquivo recebido → extração em andamento → texto disponível. Estados ilustrativos, sem processamento real nesta página." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>03</span> / Processamento assíncrono</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Uma tarefa demorada precisa continuar observável.</h2>
              <p>A estrutura do projeto encaminha a geração de flashcards como um trabalho assíncrono ao <code>platform-core</code>. A interface pode iniciar o pedido sem esperar que toda a geração termine na mesma conexão. Depois, precisa dar contexto sobre o andamento e permitir que a pessoa reconheça quando há um resultado para consultar.</p>
              <p>Separar o pedido do processamento ajuda a modelar o tempo real de uma tarefa, em vez de apresentar uma ação longa como se fosse instantânea. A ilustração resume pedido, job, worker e retorno; não afirma que todos esses estados estão integrados e disponíveis nesta demonstração.</p>
            </div>
            <EnemStudyScene kind="jobs" caption="Diagrama conceitual de uma tarefa assíncrona: pedido, job, worker e resultado." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>04</span> / Lembrança ativa</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Um flashcard separa a tentativa de lembrar da resposta.</h2>
              <p>Um bom cartão apresenta uma pergunta antes de revelar o verso. Essa pausa convida a pessoa a buscar a resposta na memória, em vez de apenas reler um resumo. O cartão é uma unidade curta de prática: uma ideia por pergunta, com uma resposta que pode ser conferida.</p>
              <p>No modo local documentado, <code>MOCK_AI=true</code> produz conteúdo de demonstração. A geração real depende de workers e credenciais configurados no serviço compartilhado. Portanto, o cartão da animação é um exemplo editorial, não conteúdo gerado nesta página por um modelo.</p>
            </div>
            <EnemStudyScene kind="flashcards" caption="Um trecho temático é representado como frente e verso de um cartão de exemplo; a cena não avalia a qualidade pedagógica da geração." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>05</span> / Revisão espaçada</p>
          <div className="enem-study-case__content">
            <div>
              <h2>A avaliação da pessoa ajuda a decidir quando o cartão volta.</h2>
              <p>O projeto contém uma implementação do algoritmo SM-2 para calcular intervalos a partir da avaliação de quem estuda. A pessoa tenta responder, confere o verso e informa como foi lembrar. Essa avaliação alimenta uma próxima revisão para aquele cartão.</p>
              <p>O princípio importante é que cartões diferentes podem seguir ritmos diferentes. A cena evita exibir datas ou intervalos numéricos como se fossem uma previsão real: os movimentos e resultados são apenas uma representação de como uma avaliação pode alterar a agenda.</p>
            </div>
            <EnemStudyScene kind="review" caption="Exemplo conceitual: a autoavaliação leva um cartão para uma próxima revisão. Não representa um cálculo real de intervalo." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>06</span> / Questões e simulados</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Questões e simulados praticam tarefas diferentes.</h2>
              <p>Um flashcard pede que a pessoa recupere uma ideia específica. Uma questão de múltipla escolha exige comparar alternativas e aplicar o que sabe. Já um simulado cronometrado combina muitas questões numa tentativa mais longa. Reunir esses formatos permite apoiar momentos de estudo diferentes, sem reduzir todo o aprendizado a uma única tela.</p>
              <p>O código inclui prática de questões, registro de tentativas e simulados. A estimativa apresentada pelo projeto é apenas uma referência de acompanhamento; não é cálculo oficial da TRI nem previsão de nota. A base seed verificada contém cinco questões demonstrativas, quantidade insuficiente para afirmar cobertura abrangente do ENEM.</p>
              <p>Antes de demonstrar cobertura por área, é preciso percorrer o fluxo com conteúdo adequado, confirmar como essa cobertura é calculada e separar dados fictícios de qualquer banco aprovado para uso público.</p>
            </div>
            <EnemStudyScene kind="practice" caption="Questão fictícia → resposta selecionada → tentativa registrada → indicador ilustrativo por área." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>07</span> / Aplicação e arquitetura</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Dois clientes compartilham um domínio de estudo.</h2>
              <p>O produto combina uma aplicação web em Next.js e TypeScript com um cliente móvel em Flutter. No backend web, o código usa Prisma e PostgreSQL. Isso amplia o trabalho para além de uma interface: os fluxos precisam ser entendidos em mais de um cliente e com serviços de suporte.</p>
              <p>O <code>platform-core</code> é a fronteira para capacidades compartilhadas, como billing, armazenamento de arquivos e jobs de LLM. A separação concentra serviços comuns fora do domínio específico de preparação para o ENEM, enquanto o produto mantém seus próprios modelos e regras de estudo.</p>
              <p>O diagrama resume responsabilidades e não pretende documentar cada chamada, fila ou contrato. Ainda é necessário confirmar quais dependências podem ser executadas e quais caminhos foram integrados de ponta a ponta.</p>
            </div>
            <EnemStudyScene kind="architecture" caption="Web e mobile chegam ao domínio do produto, que se apoia em capacidades compartilhadas; o mapa é conceitual, não de implantação." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene enem-study-case__section--boundary">
          <p className="eyebrow"><span>08</span> / Limites da IA</p>
          <div className="enem-study-case__content">
            <div>
              <h2>Uma interface de IA não comprova a qualidade da resposta.</h2>
              <p>O modo de laboratório permite exercitar telas e percursos sem depender de uma chamada real a um modelo. Essa distinção importa porque uma demonstração pode parecer convincente mesmo quando o conteúdo vem de regras fixas ou respostas de exemplo.</p>
              <p>No estado local verificado, a correção de redação usa faixas baseadas no tamanho do texto e comentários fixos. O tutor pode devolver um trecho do material como resposta demonstrativa. O código também gera embeddings locais de demonstração; a recuperação semântica e a qualidade das respostas fundamentadas nos documentos ainda precisam de validação antes de descrever o tutor como RAG pronto para uso.</p>
              <p>Para uma integração real, workers, credenciais e serviços do <code>platform-core</code> precisam estar configurados. A fronteira entre esses estados deve aparecer tanto na documentação quanto na experiência de demonstração. Resultados do modo mock não são avaliação pedagógica nem comportamento comprovado de IA real.</p>
            </div>
            <EnemStudyScene kind="ai-boundary" caption="A cena distingue uma resposta local de demonstração dos requisitos para uma integração real; nenhum serviço está sendo chamado aqui." />
          </div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--with-scene">
          <p className="eyebrow"><span>09</span> / Próximos marcos</p>
          <div className="enem-study-case__content">
            <div>
              <h2>O próximo passo é fechar um percurso que qualquer pessoa possa conferir.</h2>
              <p>O tamanho do escopo torna especialmente importante escolher uma fatia vertical pequena e demonstrável. Um fluxo de material fictício até uma revisão pode verificar interface, persistência, agendamento e tratamento dos estados de processamento. Depois, questões e simulados podem ser avaliados com uma base cuja origem, cobertura e limitações estejam claras.</p>
              <p>Também falta validar a busca do tutor com documentos conhecidos, confirmar a integração real dos serviços externos e documentar quais partes foram implementadas por mim. O projeto tem uma base interessante, mas o case deve acompanhar a evidência disponível: código existente, modo de execução reproduzível e limites visíveis.</p>
              <p>Esse cuidado não reduz a ambição do trabalho. Ele mostra como transformar uma plataforma ampla em entregas conferíveis e como tratar IA, dados e expectativas de aprendizagem com responsabilidade.</p>
            </div>
            <EnemStudyScene kind="roadmap" caption="Sequência de validações futuras. O foco percorre os marcos; nenhum deles é apresentado como concluído." />
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
