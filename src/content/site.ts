export const site = {
  name: "Jezreel de Andrade",
  shortName: "Jezreel",
  role: "Desenvolvedor de software",
  headline: "Backend sólido. Produtos que resolvem problemas reais.",
  introduction:
    "Desenvolvedor com foco em backend e construção de produtos. Trabalho com Go, JavaScript e TypeScript, Python, bancos relacionais, mensageria e integrações com modelos de IA.",
  location: "Brasil · aberto a oportunidades",
  links: [
    { label: "GitHub", href: "https://github.com/woragis" },
  ],
  description:
    "Portfólio de Jezreel de Andrade, desenvolvedor de software com foco em backend, Go, TypeScript, Python, PostgreSQL, mensageria e aplicações com IA.",
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  scope: string;
  role: string;
  stack: string[];
  context: string;
  approach: string;
  outcome: string;
  featured: boolean;
  selected: boolean;
  published: boolean;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "weatherly",
    title: "Weatherly",
    eyebrow: "Produto · clima",
    summary:
      "Aplicação web e mobile para consultar condições atuais e previsões, com geolocalização e busca manual de cidades.",
    scope: "Web + mobile · MVP",
    role: "Desenvolvimento de produto",
    stack: ["Next.js", "TypeScript", "Route Handlers", "Expo"],
    context:
      "O produto reúne clima atual, previsão horária e previsão para os próximos dias em uma experiência disponível na web e no celular.",
    approach:
      "A aplicação web usa Route Handlers como BFF para consultar o provedor de clima, manter a chave no servidor e aplicar cache de aproximadamente 15 minutos. O app mobile em Expo consome essa camada.",
    outcome:
      "O MVP documentado oferece busca por cidade e geolocalização, além de estados de carregamento e de erro para GPS e API. A demo web está registrada como produção na documentação do projeto.",
    featured: true,
    selected: true,
    published: false,
    links: [
      { label: "Abrir demo", href: "https://saas-weatherly.vercel.app" },
      { label: "Código web", href: "https://github.com/woragis/saas-weatherly" },
      { label: "Código mobile", href: "https://github.com/woragis/saas-weatherly-mobile" },
    ],
  },
  {
    slug: "file-organizer",
    title: "File Organizer",
    eyebrow: "Ferramenta · Go",
    summary:
      "CLI para organizar arquivos no Arch Linux, com prévia do plano e aplicação explícita das movimentações.",
    scope: "CLI · Linux",
    role: "Desenvolvimento da ferramenta",
    stack: ["Go", "Linux", "systemd", "SHA-256"],
    context:
      "Organizar arquivos automaticamente envolve risco de sobrescrever ou mover algo inesperado. A ferramenta prioriza previsibilidade antes de alterar os arquivos.",
    approach:
      "O comando de organização mostra um plano antes de agir; `--apply` confirma as movimentações. O projeto também documenta prevenção de colisões, detecção de duplicatas por SHA-256 e desfazer o último lote.",
    outcome:
      "A CLI oferece comandos para scan, organização, undo, duplicatas, TUI e execução agendada ou daemon. A demonstração deve ser feita em uma pasta descartável, conforme as instruções do projeto.",
    featured: false,
    selected: true,
    published: false,
  },
  {
    slug: "prateleira",
    title: "Prateleira",
    eyebrow: "SaaS · varejo",
    summary:
      "Sistema de gestão para mercadinhos que reúne estoque por lote, vendas no PDV e diferentes papéis de equipe.",
    scope: "SaaS · aplicação web",
    role: "Produto e engenharia",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Stripe"],
    context:
      "A operação de um mercadinho precisa conectar cadastro e estoque de produtos à rotina de quem administra e de quem registra vendas.",
    approach:
      "O domínio registra estoque com lotes e validade, separa papéis da equipe e inclui um ponto de venda com dinheiro, PIX e cartão. A aplicação documenta cobrança SaaS via Stripe e upload local ou Vercel Blob.",
    outcome:
      "A documentação delimita o escopo atual: emissão fiscal e integração TEF ficam fora do produto. A demonstração deve usar dados fictícios e não exibir as contas seed documentadas no README.",
    featured: true,
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/prateleira" }],
  },
  {
    slug: "enem-study",
    title: "ENEM Study",
    eyebrow: "Edtech · ENEM",
    summary:
      "Plataforma em desenvolvimento para organizar materiais, flashcards, revisão espaçada e prática para o ENEM.",
    scope: "SaaS · web + Flutter · em revisão",
    role: "Produto e engenharia",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Flutter", "SM-2", "platform-core"],
    context:
      "Preparar-se para uma prova extensa exige organizar materiais, lembrar o que já foi estudado e praticar questões. O produto conecta esses fluxos em torno do ENEM.",
    approach:
      "O código reúne upload de PDF, flashcards, repetição espaçada SM-2, questões, simulados, redação e um tutor em revisão. Billing, arquivos e jobs de LLM são integrados pelo platform-core.",
    outcome:
      "O case descreve o estado atual do código, não um lançamento concluído. O ambiente local usa IA demonstrativa por padrão; a correção de redação, o tutor e a cobertura do banco de questões precisam de validação antes de serem apresentados como recursos prontos.",
    featured: true,
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/saas-enem" }],
  },
  {
    slug: "festas",
    title: "Festas",
    eyebrow: "SaaS · locação",
    summary:
      "Aplicação para locadoras de itens de festa, com operação administrativa e vitrine pública para pedidos por data.",
    scope: "SaaS · aplicação web",
    role: "Produto e engenharia",
    stack: ["Go", "SvelteKit", "PostgreSQL", "Redis", "Stripe", "MinIO"],
    context:
      "Uma locação liga o catálogo e o estoque da empresa à escolha de itens e datas por parte do cliente final.",
    approach:
      "O produto separa a área administrativa `/app`, a vitrine `/loja` e o billing da assinatura. Os fluxos de cobrança também distinguem a assinatura SaaS do pagamento de um aluguel.",
    outcome:
      "A documentação descreve catálogo, estoque, manutenção, equipe e pedidos. Demo pública não confirmada; a demonstração local usa dados fictícios e não deve expor credenciais seed ou configuração de storage.",
    featured: false,
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/festas" }],
  },
  {
    slug: "lingo",
    title: "Lingo",
    eyebrow: "Edtech · idiomas",
    summary:
      "Aplicação de aprendizagem de idiomas que combina exercícios, trilhas e memória de longo prazo com FSRS.",
    scope: "SaaS · web + mobile",
    role: "Produto e engenharia",
    stack: ["Go", "Python", "Next.js", "Redis", "PostgreSQL", "FSRS"],
    context:
      "O produto busca ajudar a criar o hábito de estudar idiomas e reter o conteúdo praticado ao longo do tempo.",
    approach:
      "A arquitetura separa a API em Go dos workers de IA em Python, com Redis na fronteira e contratos versionados para os jobs. A aplicação documenta múltiplos modos de exercício e distingue recursos de lab, produção e roadmap.",
    outcome:
      "A documentação deixa explícito que IA e reconhecimento de fala podem operar em modo simulado no lab. A voz real depende de configuração do worker de transcrição; conversa em tempo real é roadmap.",
    featured: true,
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/lingo" }],
  },
  {
    slug: "testmaster",
    title: "Testmaster",
    eyebrow: "Edtech · ferramenta de estudo",
    summary:
      "Fluxo de estudo focado em transformar documentos PDF em flashcards para revisão.",
    scope: "Aplicação web · MVP",
    role: "Produto e engenharia",
    stack: ["SvelteKit", "TypeScript", "PDF", "Gemini", "SRS"],
    context:
      "O projeto concentra o caminho entre um documento de estudo e uma sessão de revisão com flashcards.",
    approach:
      "O README descreve upload e análise de PDF, geração assistida por Gemini, modo de estudo, exportação JSON e tratamento de limites de provedores com retentativas e fallback.",
    outcome:
      "O estudo de caso deve ficar distinto do ENEM Study: Testmaster é o fluxo de PDF e flashcards; ENEM Study é a plataforma mais ampla. Os detalhes de modelo, limites e fallback ainda precisam ser conferidos na versão demonstrada.",
    featured: false,
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/testmaster" }],
  },
  {
    slug: "nutritionist",
    title: "Nutritionist",
    eyebrow: "Produto para cliente · saúde",
    summary:
      "Site configurável e backoffice para um consultório, com landing page, agendamento e gestão da agenda.",
    scope: "Projeto para cliente · web",
    role: "Engenharia de software",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Stripe"],
    context:
      "A experiência combina um site público para pacientes com uma área administrativa para a profissional cuidar do conteúdo, agenda e contatos.",
    approach:
      "A configuração do site concentra tema, horários, SEO e ordem das seções em `SiteConfig`; agendamento e acesso ao backoffice são organizados por organização.",
    outcome:
      "A ficha de portfólio condiciona a divulgação à confirmação da relação de trabalho e à autorização para mostrar marca, telas ou conteúdo identificável. Por isso, este case permanece em revisão.",
    featured: false,
    selected: false,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/nutritionist" }],
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  publishedAt?: string;
  readingTime: string;
  content: string[];
  selected: boolean;
  published: boolean;
  sourceLabel: string;
};

export const articles: Article[] = [
  {
    slug: "dinheiro-em-centavos",
    title: "Por que armazenar dinheiro em centavos",
    category: "Backend · Prateleira",
    summary:
      "Uma regra de modelagem simples para evitar imprecisão em valores monetários e manter consistência entre banco, aplicação e pagamentos.",
    readingTime: "4 min",
    content: [
      "Na Prateleira, valores monetários são representados como inteiros em centavos. R$ 12,90 vira 1290. Isso evita depender de aritmética binária de ponto flutuante para somas e cálculos de margem.",
      "A interface continua recebendo e mostrando valores em reais. Na fronteira da aplicação, a entrada é convertida para centavos; na saída, `Intl.NumberFormat` formata o valor para pt-BR. Assim, a representação de apresentação fica separada da representação usada nos cálculos.",
      "A margem também pode ser calculada a partir dos inteiros, no momento em que for necessária. Isso mantém o valor derivado ligado ao custo e ao preço atuais, em vez de armazenar uma margem que pode ficar desatualizada.",
      "O post de origem descreve essa decisão para o domínio da Prateleira. Política de arredondamento, precisão de descontos e regras fiscais precisam ser tratadas conforme os requisitos de cada produto.",
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho adaptado da série LinkedIn Prateleira, post 13",
  },
  {
    slug: "contratos-entre-go-e-python",
    title: "Go e Python podem compartilhar uma fila sem compartilhar um pacote",
    category: "Backend · Lingo",
    summary:
      "Como contratos explícitos e versionados ajudam dois runtimes a colaborar na fronteira de uma fila Redis.",
    readingTime: "5 min",
    content: [
      "No Lingo, a API em Go e os workers em Python têm responsabilidades diferentes. Eles não precisam compartilhar código para trocar trabalho; precisam concordar sobre o formato e o significado das mensagens.",
      "A documentação do projeto descreve contratos com `schema_version`, um `type` de job e um payload tipado, acompanhados por exemplos JSON. Isso torna a fronteira inspecionável e permite validar o que cada consumidor espera receber.",
      "Uma mensagem que já está na fila pode sobreviver a um deploy. Por isso, mudanças compatíveis podem adicionar campos opcionais, enquanto mudanças semânticas exigem uma nova versão. Alterar silenciosamente o significado de um campo torna os consumidores antigos difíceis de operar.",
      "Essa solução mantém os runtimes separados sem introduzir um serviço por domínio. A fila funciona como uma fronteira explícita entre API e worker, com evolução gradual do contrato.",
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho adaptado da série LinkedIn Lingo, post 07",
  },
  {
    slug: "jobs-de-ia-com-limites-explicitos",
    title: "Jobs de IA precisam de limites antes de chegar ao worker",
    category: "Sistemas distribuídos · Lingo",
    summary:
      "Uma ordem de verificação para controlar acesso, cotas e custo antes de enfileirar trabalho que chama um provedor de IA.",
    readingTime: "5 min",
    content: [
      "Uma fila torna possível processar tarefas de IA fora do ciclo de uma requisição HTTP, mas não deve transformar qualquer chamada em trabalho gratuito e ilimitado.",
      "Na série técnica do Lingo, o fluxo proposto valida primeiro o JWT, depois o entitlement da conta e a cota disponível. Só então a API enfileira o job. A ordem importa: enfileirar antes de confirmar autorização e cota pode criar trabalho que a pessoa não tem direito de executar ou cujo custo não foi contabilizado.",
      "No worker, uma feature flag controla se a integração com o LLM está ativa. Quando habilitada, provedor, modelo, timeout e concorrência máxima são configuração explícita. Quando desabilitada, o caminho de lab usa stubs controlados em vez de chamar o modelo real.",
      "Esse desenho não elimina falhas do provedor. Ele separa controle de produto, despacho assíncrono e integração externa, deixando mais claro onde impor limites e como observar o comportamento de cada etapa.",
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho adaptado da série LinkedIn Lingo, post 09",
  },
  {
    slug: "disponibilidade-com-janelas-de-reserva",
    title: "Disponibilidade de locação é uma pergunta sobre intervalos de tempo",
    category: "Backend · Festas",
    summary:
      "Por que consultar apenas o status atual de um item não basta para saber se ele estará livre na data escolhida.",
    readingTime: "5 min",
    content: [
      "Em um sistema de locação, um item pode estar livre agora e reservado para uma festa futura. Portanto, disponibilidade depende da janela do evento e das atribuições que se sobrepõem a ela.",
      "O fluxo documentado no Festas busca unidades do tipo solicitado, exclui as que estão em manutenção e verifica as atribuições ativas em eventos cuja janela cruza a data consultada. Uma unidade sem conflito pode ser oferecida como disponível.",
      "Depois da escolha, a reserva cria uma atribuição, atualiza o estado da unidade e recalcula o total do evento. A vitrine pública e a administração precisam usar a mesma regra para não apresentarem resultados divergentes.",
      "A ficha de portfólio ainda pede validar a implementação e a demonstração. Este texto é um rascunho técnico baseado na série de conteúdo, e não uma afirmação sobre concorrência ou bloqueios que ainda não foram verificados.",
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho adaptado da série LinkedIn Festas, post 09",
  },
];

export const experience: { period: string; role: string; company: string; description?: string }[] = [
  {
    period: "Out. 2026 — atual",
    role: "Estagiário de Desenvolvimento de Software",
    company: "Lynx",
  },
  {
    period: "Jul. 2026 — atual",
    role: "Estagiário de Desenvolvimento de Software",
    company: "Brismarp",
  },
  {
    period: "Nov. 2025 — Jun. 2026",
    role: "Desenvolvedor freelance · liderança técnica",
    company: "Projetos independentes",
    description: "Atuação em desenvolvimento de software e decisões técnicas dos projetos.",
  },
  {
    period: "Nov. 2024 — Nov. 2025",
    role: "Estagiário de Desenvolvimento de Software",
    company: "LizardTI",
  },
];

export const skills = [
  { label: "Backend", items: ["Go", "Node.js", "Express", "Python", "FastAPI", "Django"] },
  { label: "Dados e mensageria", items: ["PostgreSQL", "Redis", "RabbitMQ", "Redis Pub/Sub"] },
  { label: "IA aplicada", items: ["OpenAI", "Anthropic", "LangChain", "LangGraph", "Agentes"] },
  { label: "Web", items: ["JavaScript", "TypeScript", "Next.js", "React"] },
];

export const selectedProjects = projects.filter((project) => project.selected);
export const selectedArticles = articles.filter((article) => article.selected);
export const publishedProjects = projects.filter((project) => project.published);
export const publishedArticles = articles.filter((article) => article.published);
