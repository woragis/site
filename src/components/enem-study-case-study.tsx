import { EnemStudyVisual } from "@/components/enem-study-visual";

export function EnemStudyCaseStudy() {
  return (
    <div className="enem-study-case">
      <section className="enem-study-case__intro">
        <p className="eyebrow"><span>CASE / EDTECH</span> ESTADO DO PROJETO · EM REVISÃO</p>
        <h2>Um material só ajuda quando vira prática e volta na hora certa.</h2>
        <p>O ENEM Study reúne diferentes ferramentas de preparação em uma plataforma web e mobile. O ciclo que organiza a narrativa é simples: partir de um material, criar itens de estudo e voltar a eles por meio de revisão espaçada.</p>
        <p>Esta página descreve o estado do código e separa as integrações reais dos modos de laboratório. As respostas marcadas como demonstração não são apresentadas como resultado de um modelo de IA.</p>
      </section>

      <figure className="enem-study-case__hero">
        <EnemStudyVisual />
        <figcaption>Diagrama conceitual do fluxo PDF → flashcards → revisão. O material e os cartões são fictícios.</figcaption>
      </figure>

      <div className="enem-study-case__story">
        <section className="enem-study-case__section">
          <p className="eyebrow"><span>01</span> / Do conteúdo à memória</p>
          <div><h2>O PDF é uma entrada, não o fim do fluxo.</h2><p>O app recebe documentos, extrai texto e pode encaminhar a geração de flashcards como job de estruturação no platform-core. Os cartões podem ser revisados numa sessão e recebem intervalos calculados pelo algoritmo SM-2, de acordo com a avaliação da pessoa.</p><p>No ambiente local documentado, <code>MOCK_AI=true</code> ativa cartões demonstrativos. A integração com o modelo real depende dos workers e credenciais do platform-core; esta página não trata a saída simulada como geração real.</p></div>
        </section>

        <section className="enem-study-case__section">
          <p className="eyebrow"><span>02</span> / Praticar e acompanhar</p>
          <div><h2>Revisão e questões respondem a necessidades diferentes.</h2><p>Flashcards ajudam a recuperar conceitos. O banco de questões permite praticar alternativas e registrar acertos e erros por área. O produto também implementa simulados cronometrados e uma estimativa de desempenho para acompanhar tentativas.</p><p>O próprio projeto deixa claro que essa estimativa não é a TRI oficial. O seed atual traz cinco questões de demonstração; para mostrar uma preparação abrangente, ainda é preciso validar a importação e a cobertura do banco de questões.</p></div>
        </section>

        <section className="enem-study-case__section enem-study-case__section--boundary">
          <p className="eyebrow"><span>03</span> / Limites da IA no estado atual</p>
          <div><h2>Um fluxo implementado não prova que a resposta é inteligente.</h2><p>Com a configuração padrão de laboratório, a correção de redação usa faixas baseadas no tamanho do texto e comentários fixos. O tutor também pode devolver um trecho do material como resposta de demonstração. Esses caminhos servem para testar a interface, não para avaliar uma redação ou ensinar um conteúdo de verdade.</p><p>Há ainda uma fronteira importante no tutor: o código cria embeddings locais demonstrativos. A recuperação semântica e a qualidade de respostas apoiadas nos documentos precisam ser validadas antes de descrever esse recurso como RAG pronto para uso.</p></div>
        </section>

        <section className="enem-study-case__section">
          <p className="eyebrow"><span>04</span> / Uma plataforma, dois clientes</p>
          <div><h2>Web e mobile usam os mesmos serviços de produto.</h2><p>A aplicação web é construída em Next.js, TypeScript, Prisma e PostgreSQL; o app móvel é feito em Flutter. Autenticação e domínio de estudo ficam no produto, enquanto billing, armazenamento de arquivos e jobs de LLM são integrados por meio do platform-core.</p><p>Essa divisão mantém os fluxos de estudo no ENEM Study e concentra serviços compartilhados fora dele. Para uma demo pública, a configuração e o estado de cada serviço precisam acompanhar a cena mostrada.</p></div>
        </section>
      </div>

      <section className="enem-study-case__next">
        <p className="eyebrow"><span>PRÓXIMO MARCO</span> ANTES DE DIVULGAR</p>
        <h2>Fechar um percurso que possa ser conferido de ponta a ponta.</h2>
        <ul>
          <li>Escolher um fluxo funcional e percorrê-lo com material fictício.</li>
          <li>Separar na interface o modo de demonstração da integração real de IA.</li>
          <li>Validar a busca do tutor, a cobertura das questões e a estimativa do simulado.</li>
          <li>Confirmar a contribuição individual, as dependências e uma demo segura.</li>
        </ul>
        <p className="enem-study-case__status">Este estudo de caso permanece como rascunho para revisão. Ele não declara o produto pronto para lançamento.</p>
      </section>
    </div>
  );
}
