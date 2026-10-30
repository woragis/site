type CaseKind = "anime-ai-chat" | "fighting-teacher" | "search" | "pokemon-wiki";

const caseContent = {
  "anime-ai-chat": {
    eyebrow: "CONCEITO / IA CONVERSACIONAL",
    heading: "Antes da conversa, é preciso definir por que alguém abriria este chat.",
    intro: "Anime AI Chat ainda é uma ideia de produto. O submódulo local não está inicializado e não há código ou demonstração que confirme uma experiência conversacional implementada.",
    note: "Este rascunho não apresenta funcionalidades como existentes. Personagens, histórias e imagens precisam ser originais ou usados com autorização; não sugerir vínculo oficial com franquias.",
    steps: [
      ["01 · DESCOBERTA", "Público", "Definir para quem a experiência existe"],
      ["02 · PROPOSTA", "Uso central", "Escolher uma tarefa além de um chat genérico"],
      ["03 · IDENTIDADE", "Conteúdo", "Criar material original ou autorizado"],
      ["04 · PROTÓTIPO", "Teste", "Validar uma conversa antes de expandir"],
    ],
    caption: "Possível roteiro de descoberta, não fluxo implementado.",
    sectionTitle: "Uma experiência temática precisa de um caso de uso próprio.",
    sectionBody: "Uma conversa com IA pode servir para explorar histórias, organizar recomendações ou interagir com um universo original. Essas são possibilidades, não decisões tomadas no projeto. Primeiro é necessário definir público, limites, tom e comportamento quando o modelo não souber responder.",
    secondTitle: "O conteúdo precisa ter origem clara.",
    secondBody: "O produto deve evitar reproduzir personagens, vozes, textos ou identidade visual protegidos sem permissão. Um primeiro protótipo pode usar personagens autorais e um conjunto pequeno de exemplos, com respostas e limites visíveis.",
    status: ["Estado: conceito", "Código local: não inicializado", "Tecnologia e modelo: a definir"],
    close: "Transformar o nome em uma hipótese de produto pequena e testável.",
    closeBody: "Definir quem conversa, qual necessidade atende, que conteúdo é permitido e quais critérios tornam a conversa útil. Depois disso, criar um protótipo e avaliar suas respostas antes de planejar um SaaS.",
  },
  "fighting-teacher": {
    eyebrow: "CONCEITO / APRENDIZAGEM DE ARTES MARCIAIS",
    heading: "Ensinar uma modalidade começa por entender quem aprende e como pratica.",
    intro: "Fighting Teacher é uma ideia ampla de sistema para ensinar artes marciais. O repositório disponível contém apenas um README placeholder; ainda não há aplicação, público definido ou fluxo demonstrável.",
    note: "Movimentos e instruções devem ser apresentados com contexto e materiais revisados por pessoas qualificadas. Vídeos e conteúdo didático precisam de autorização.",
    steps: [
      ["01 · PÚBLICO", "Aluno ou academia", "Escolher quem usa a primeira versão"],
      ["02 · ESCOPO", "Uma modalidade", "Limitar a primeira experiência"],
      ["03 · CONTEÚDO", "Aula revisada", "Definir autoria e permissão do material"],
      ["04 · APRENDIZAGEM", "Progressão", "Validar como acompanhar prática"],
    ],
    caption: "Sequência de decisões para descobrir o produto; nenhum desses módulos foi implementado.",
    sectionTitle: "Uma proposta ampla precisa virar uma aula concreta.",
    sectionBody: "“Ensinar várias artes marciais” ainda não define a necessidade principal. O primeiro passo é decidir se a ferramenta apoia alunos, instrutores ou academias, escolher uma modalidade e desenhar uma única atividade que possa ser avaliada com segurança.",
    secondTitle: "Assinatura só faz sentido depois do valor de uso.",
    secondBody: "O README menciona assinatura como possibilidade, sem implementação comprovada. Antes de definir billing, o projeto precisa demonstrar uma experiência útil, entender quem publica o conteúdo e validar a progressão proposta com instrutores qualificados.",
    status: ["Estado: conceito", "Aplicação: não encontrada", "Stack e cobrança: a definir"],
    close: "Definir uma modalidade piloto antes de construir a plataforma.",
    closeBody: "Conversar com o público escolhido, validar conteúdo e autorização, produzir uma aula curta e testar como a pessoa acompanha a prática. Só então decidir arquitetura, assinatura e próximos módulos.",
  },
  search: {
    eyebrow: "TOOLBOX PESSOAL / PESQUISA LOCAL",
    heading: "Uma coleção de scripts para encontrar referências sem transformar resultados em conteúdo publicado.",
    intro: "Search reúne ferramentas locais para descoberta de tendências, imagens, vídeos, áudio e listas de anime. É um workspace de CLIs e scripts; não é um dashboard de publicação nem um serviço hospedado.",
    note: "Os scripts podem buscar ou baixar mídia. Os resultados ficam locais; respeite termos das fontes e direitos autorais, e não publique arquivos coletados sem licença.",
    steps: [
      ["01 · PEDIDO", "Consulta", "Termo, categoria ou fonte escolhida"],
      ["02 · BUSCA", "Ferramenta", "Script específico por tipo de referência"],
      ["03 · REVISÃO", "Resultados", "Inspeção local e seleção manual"],
      ["04 · USO", "Referência", "Aplicar apenas com direitos adequados"],
    ],
    caption: "Visão agregada dos READMEs; os comandos diferem entre subprojetos e precisam ser testados individualmente.",
    sectionTitle: "Cada subprojeto cobre uma tarefa de pesquisa diferente.",
    sectionBody: "O workspace lista anime-list, pictures, media-search, music-download e trends-search. Os READMEs descrevem fontes e ferramentas diferentes, incluindo scripts em Python e Node.js. Para uma apresentação aprofundada, primeiro é preciso escolher um subprojeto e reproduzir sua instalação e comando principal.",
    secondTitle: "Pesquisa e redistribuição são etapas diferentes.",
    secondBody: "Encontrar uma imagem, vídeo ou faixa não concede permissão para republicá-los. O projeto mantém saídas localmente e ignora arquivos de mídia; uma demo pública deve usar resultados e assets que possam ser compartilhados legalmente, sem tokens ou credenciais.",
    status: ["Workspace: cinco ferramentas", "Execução: validar por módulo", "Saídas: locais; não publicar mídia coletada"],
    close: "Escolher uma ferramenta, documentar a execução e demonstrar uma busca permitida.",
    closeBody: "Reproduzir o setup, confirmar dependências e limites das fontes, escolher um comando representativo e criar uma demonstração sem distribuir mídia ou credenciais.",
  },
  "pokemon-wiki": {
    eyebrow: "PROJETO DE FÃ / ESCOPO A CONFIRMAR",
    heading: "Uma wiki precisa ser consultável; por enquanto, só o nome do repositório está confirmado.",
    intro: "Pokémon Wiki consta como repositório separado do Pokémon Center, mas não foi possível acessar o remoto nesta revisão. Não há confirmação local de páginas, conteúdo, tecnologia ou comportamento funcional.",
    note: "Projeto independente de fã, sem afiliação oficial. Dados, imagens, sprites, nomes e marcas precisam de revisão de origem e licença antes de qualquer publicação.",
    steps: [
      ["01 · ACESSO", "Repositório", "Recuperar e identificar a versão correta"],
      ["02 · ESCOPO", "Categorias", "Descobrir o que existe no código"],
      ["03 · CONTEÚDO", "Fontes", "Verificar origem e permissões"],
      ["04 · DEMO", "Consulta", "Validar uma lista e um detalhe reais"],
    ],
    caption: "Plano de validação, não arquitetura ou funcionalidade confirmada.",
    sectionTitle: "Primeiro é preciso recuperar a fonte da história.",
    sectionBody: "A ficha só confirma o nome e a existência de um repositório candidato separado do Pokémon Center. Até recuperar acesso, qualquer descrição de categorias, stack ou experiência seria especulação. Também é necessário confirmar se os dois projetos compartilham dados ou código.",
    secondTitle: "Conteúdo de fã exige cuidado com fontes e identidade.",
    secondBody: "Depois de inspecionar o código, escolher uma fonte de dados permitida e verificar as regras de uso de imagens. A demo deve apresentar o projeto como independente, sem aparência de serviço oficial nem redistribuição de assets sem autorização.",
    status: ["Código: remoto inacessível", "Tecnologia e conteúdo: desconhecidos", "Relação com Pokémon Center: a esclarecer"],
    close: "Recuperar acesso e validar uma página antes de escrever o case do produto.",
    closeBody: "Inspecionar README, histórico e rotas; confirmar autoria e relação com Pokémon Center; então implementar ou documentar um fluxo de consulta real e permitido.",
  },
} satisfies Record<CaseKind, {
  eyebrow: string;
  heading: string;
  intro: string;
  note: string;
  steps: string[][];
  caption: string;
  sectionTitle: string;
  sectionBody: string;
  secondTitle: string;
  secondBody: string;
  status: string[];
  close: string;
  closeBody: string;
}>;

export function ConceptualProjectsCaseStudies({ kind }: { kind: CaseKind }) {
  const content = caseContent[kind];

  return <div className={`tools-case conceptual-case conceptual-case--${kind}`}>
    <section className="tools-case__intro"><p className="eyebrow">{content.eyebrow}</p><h2>{content.heading}</h2><p>{content.intro}</p><p className="tools-case__note">{content.note}</p></section>
    <section className="tools-case__flow" aria-label={`Etapas de ${kind}`}><p className="eyebrow">ESTADO E PRÓXIMOS PASSOS</p><div>{content.steps.map(([label, title, detail], index) => <FragmentStep key={label} label={label} title={title} detail={detail} last={index === content.steps.length - 1} />)}</div><figcaption>{content.caption}</figcaption></section>
    <div className="tools-case__story"><section><p className="eyebrow">01 / PROPOSTA</p><div><h2>{content.sectionTitle}</h2><p>{content.sectionBody}</p></div></section><section><p className="eyebrow">02 / VALIDAÇÃO</p><div><h2>{content.secondTitle}</h2><p>{content.secondBody}</p></div><aside className="tools-case__status"><small>STATUS</small><b>Rascunho</b>{content.status.map((item) => <span key={item}>{item}</span>)}</aside></section></div>
    <section className="tools-case__close"><p className="eyebrow">PRÓXIMO MARCO</p><h2>{content.close}</h2><p>{content.closeBody}</p></section>
  </div>;
}

function FragmentStep({ label, title, detail, last }: { label: string; title: string; detail: string; last: boolean }) {
  return <><article><small>{label}</small><b>{title}</b><span>{detail}</span></article>{!last && <i aria-hidden="true">→</i>}</>;
}
