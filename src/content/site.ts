import projectCuration from "@/content/project-curation.json";

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
  selected: boolean;
  published: boolean;
  links?: { label: string; href: string }[];
  media?: ProjectMediaSet;
  galleries?: ProjectGallery[];
  story?: ProjectStoryBlock[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  focalPoint?: { x: number; y: number };
};

export type ProjectVideo = {
  src: string;
  poster: ProjectImage;
  title: string;
  caption?: string;
  transcript?: string;
  subtitles?: string;
};

export type ProjectGalleryItem = {
  image: ProjectImage;
  title: string;
  caption?: string;
};

export type ProjectGallery = {
  id: string;
  title: string;
  description?: string;
  device: "mobile" | "desktop" | "mixed";
  presentation: "app-store-carousel" | "browser-carousel" | "editorial-grid";
  items: ProjectGalleryItem[];
};

export type ProjectMediaSet = {
  logo?: ProjectImage;
  detailBanner?: ProjectImage;
  homeFeature?: ProjectImage | ProjectVideo;
  cardCover?: ProjectImage;
};

export type ProjectStoryBlock =
  | { type: "text"; id: string; eyebrow?: string; title?: string; paragraphs: string[]; layout?: "narrow" | "split" }
  | { type: "image"; id: string; image: ProjectImage; layout?: "inset" | "full" }
  | { type: "video"; id: string; video: ProjectVideo; layout?: "inset" | "full" }
  | { type: "gallery"; id: string; galleryId: string; layout?: "inset" | "full" }
  | { type: "callout"; id: string; title: string; body: string; tone?: "note" | "result" };

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
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/festas" }],
  },
  {
    slug: "lingo",
    title: "Lingo",
    eyebrow: "Projeto exploratório · idiomas",
    summary:
      "Protótipo de aprendizagem de idiomas usado para explorar lições, exercícios e revisão espaçada com FSRS.",
    scope: "Protótipo · web + Flutter",
    role: "Exploração de produto e engenharia",
    stack: ["Next.js", "TypeScript", "Flutter", "Redis", "PostgreSQL", "FSRS", "Platform Core"],
    context:
      "O projeto explora como organizar sessões curtas de idiomas e ajudar a pessoa a retomar conteúdos estudados ao longo do tempo.",
    approach:
      "O app Next.js e o cliente Flutter usam o domínio do Lingo; serviços compartilhados do Platform Core fazem a fronteira com jobs e workers Python. O protótipo documenta formatos de exercício e revisão, além de distinguir modos de lab, integrações configuradas e ideias futuras.",
    outcome:
      "A documentação deixa explícito que IA e reconhecimento de fala podem operar em modo simulado no lab. A voz real depende de configuração do worker de transcrição; conversa em tempo real é roadmap.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/lingo" }],
  },
  {
    slug: "praxis",
    title: "Praxis",
    eyebrow: "Edtech · programação",
    summary:
      "Ambiente de aprendizagem de programação com lições curtas, projetos guiados, memória de habilidades e mentor.",
    scope: "Produto · web + Flutter",
    role: "Produto e engenharia",
    stack: ["Next.js", "TypeScript", "Prisma", "Flutter", "FSRS", "Platform Core"],
    context:
      "Aprender programação pede mais do que assistir a conteúdo: é preciso escrever código, praticar conceitos e voltar às habilidades que ainda não se consolidaram.",
    approach:
      "Praxis organiza a experiência em lições, projetos guiados e revisão de habilidades. O app inclui um mentor cuja execução real depende do Platform Core e de configuração de IA; o laboratório pode usar respostas simuladas.",
    outcome:
      "O repositório documenta fluxos de aprendizagem, app web e cliente Flutter, além de testes unitários, smoke e E2E. O preview e os gates operacionais de produção ainda precisam ser validados antes de apresentar o produto como lançamento ativo.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/mimo" }],
  },
  {
    slug: "gaudivo",
    title: "Gaudivo",
    eyebrow: "Produto · idiomas",
    summary:
      "Aplicativo de idiomas em desenvolvimento, com trilhas definidas por objetivo, sessões diárias e revisão espaçada.",
    scope: "Produto web · lançamento mobile planejado",
    role: "Produto e engenharia",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "SRS", "Platform Core"],
    context:
      "Pessoas aprendem idiomas por motivos diferentes. Uma trilha para viajar, trabalhar, ganhar fluência ou estudar para uma prova deve começar pelo objetivo de quem aprende.",
    approach:
      "O onboarding seleciona o objetivo e resolve uma trilha própria. A duração diária e o ritmo ajustam o tamanho e o comportamento da sessão; as respostas alimentam a revisão espaçada e o progresso de estudo.",
    outcome:
      "O código revisado contém uma aplicação web com onboarding, aprendizagem e revisão. O plano é levar o produto às lojas Android e iOS; a publicação e um cliente mobile ainda não estão confirmados neste repositório.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/gaudivo" }],
  },
  {
    slug: "scholar",
    title: "Scholar",
    eyebrow: "Edtech · cursos autorais",
    summary:
      "Plataforma B2C para publicar uma trilha de curso, oferecer aulas de preview e acompanhar o estudo de alunos matriculados.",
    scope: "Produto web · cliente Flutter",
    role: "Produto e engenharia",
    stack: ["Next.js", "TypeScript", "Prisma", "Flutter", "PostgreSQL", "Platform Core"],
    context:
      "Uma pessoa autora precisa publicar uma trilha organizada e permitir que estudantes conheçam parte do conteúdo antes de decidir pelo acesso completo.",
    approach:
      "Scholar separa o papel de administração do curso e o de estudante: autoria organiza cursos, módulos e aulas; o catálogo oferece preview, e a área de estudo registra progresso, notas e acesso conforme a matrícula.",
    outcome:
      "O repositório documenta o fluxo de curso, preview e player, além de uma integração de cobrança cuja operação real exige configuração do Platform Core e Stripe. A página de currículo próprio e o soft-launch ainda precisam ser validados antes de apresentar o serviço como lançado.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/saas-scholar" }],
  },
  {
    slug: "consultorio-nutricional",
    title: "Sistema para consultório nutricional",
    eyebrow: "Projeto para cliente · saúde",
    summary:
      "Site e backoffice para organizar serviços, disponibilidade de agenda e solicitações de atendimento de um consultório.",
    scope: "Projeto para cliente · web",
    role: "Engenharia de software",
    stack: ["SvelteKit", "TypeScript", "Drizzle", "PostgreSQL", "WhatsApp", "Email"],
    context:
      "A experiência combina informações públicas do consultório com ferramentas administrativas para manter conteúdo e acompanhar solicitações de horário.",
    approach:
      "O código inclui gestão de serviços e especialidades, consulta de horários disponíveis e criação de solicitações de agendamento. Também documenta integrações de comunicação por WhatsApp e email, que dependem de serviços externos configurados.",
    outcome:
      "Este rascunho está anonimizado. A contribuição específica, o estado operacional das integrações e a autorização para divulgar cliente, marca ou telas ainda precisam ser confirmados; nenhuma informação de paciente ou saúde deve aparecer na demonstração.",
    selected: true,
    published: false,
  },
  {
    slug: "treino-pessoal",
    title: "Protótipo de acompanhamento de treinos",
    eyebrow: "Protótipo · fitness",
    summary:
      "Aplicação individual para planejar rotinas, registrar séries durante o treino e acompanhar histórico e evolução no navegador.",
    scope: "Protótipo web · armazenamento local",
    role: "Produto e desenvolvimento",
    stack: ["React", "JavaScript", "Vite", "localStorage", "Recharts"],
    context:
      "Acompanhar um treino envolve alternar entre a rotina planejada, o registro de cada série e a consulta do que aconteceu em sessões anteriores.",
    approach:
      "O protótipo reúne treino do dia, edição de rotinas, registro de carga e repetições, cronômetro de descanso, histórico e gráficos de evolução. Os dados ficam no armazenamento local do navegador.",
    outcome:
      "É um protótipo individual, não um SaaS multiusuário: não há sincronização remota no app de origem. Existe outro protótipo chamado Forte, mas a relação entre os dois e qual será a base de uma possível evolução ainda estão em avaliação.",
    selected: true,
    published: false,
  },
  {
    slug: "fitness-progress",
    title: "Plataforma de treino e progresso",
    eyebrow: "Produto em laboratório · fitness",
    summary:
      "Experiência web e mobile para registrar treinos, acompanhar evolução e explorar orientação contextual por IA.",
    scope: "SaaS em laboratório · web + Flutter",
    role: "Contribuição e escopo em validação",
    stack: ["Next.js", "TypeScript", "Prisma", "Flutter", "PostgreSQL", "Platform Core", "LLM"],
    context:
      "Uma rotina de treino combina execução diária, histórico de carga, objetivos e sinais de progresso que precisam fazer sentido ao longo do tempo.",
    approach:
      "O código observado reúne registro de treino, recordes pessoais, objetivos, métricas, gamificação e módulos de coach/nutrição. O produto web usa serviços compartilhados do Platform Core; o cliente Flutter inclui áreas de treino, histórico e coach.",
    outcome:
      "Este case permanece anonimizado e identificado como laboratório. Minha participação e autorização para divulgar a marca, o código ou telas precisam ser confirmadas; IA real, visão por imagem, billing e release mobile dependem de configuração e validação próprias.",
    selected: true,
    published: false,
  },
  {
    slug: "nutritionist-saas",
    title: "Nutritionist SaaS · em revisão",
    eyebrow: "Produto em laboratório · saúde",
    summary:
      "SaaS com site público configurável, agenda de atendimentos e backoffice para gestão do consultório.",
    scope: "SaaS configurável · web",
    role: "Contribuição em validação",
    stack: ["Next.js", "TypeScript", "Prisma", "Auth.js", "PostgreSQL", "Stripe"],
    context:
      "Profissionais de saúde precisam de uma presença pública e de uma rotina administrativa que possam ajustar sem depender de conteúdo fixo no código.",
    approach:
      "O projeto concentra tema, horários, SEO e ordem das seções em configuração por site; inclui páginas públicas, agendamento e backoffice para serviços, agenda e contatos, com acesso administrativo e billing documentados.",
    outcome:
      "A relação entre produto próprio e trabalho para cliente ainda precisa ser esclarecida. O case está anonimizado, sem link de repositório, marca ou credenciais seed; booking, cobrança e isolamento por organização devem ser validados antes de falar em operação real.",
    selected: true,
    published: false,
  },
  {
    slug: "valorant-wiki",
    title: "Valorant Wiki · em construção",
    eyebrow: "Projeto pessoal · jogo",
    summary:
      "Estrutura inicial de uma wiki com rotas para personagens, mapas e armas; o conteúdo funcional ainda precisa ser desenvolvido.",
    scope: "Aplicação web · Next.js",
    role: "Projeto pessoal",
    stack: ["Next.js", "React", "TypeScript"],
    context:
      "Uma wiki de jogo precisa transformar dados variados em páginas fáceis de navegar e consultar, com fontes e atualizações confiáveis.",
    approach:
      "O checkout atual contém navegação e rotas de listagem/detalhe para personagens, mapas e armas, mas as páginas revisadas ainda exibem apenas títulos. O próximo trabalho é decidir a fonte de dados e construir conteúdo e navegação reais.",
    outcome:
      "Projeto em estágio inicial, ainda sem uma demonstração funcional de wiki. Esta página registra a intenção e o estado observado; qualquer conteúdo, imagem ou identidade visual deve respeitar as fontes e políticas aplicáveis, sem sugerir vínculo oficial com a Riot Games.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/valorant-wiki" }],
  },
  {
    slug: "parties",
    title: "Parties · em revisão",
    eyebrow: "Produto em construção · locação",
    summary:
      "Base de sistema para organizar eventos, clientes, itens de locação, manutenção e pagamentos.",
    scope: "API + aplicação web · mobile em avaliação",
    role: "Contribuição em validação",
    stack: ["Go", "Fiber", "PostgreSQL", "Redis", "SvelteKit", "TypeScript"],
    context:
      "Operações de locação para eventos precisam relacionar clientes e datas a itens, disponibilidade, manutenção e pagamentos.",
    approach:
      "O backend contém domínios separados para eventos, clientes, itens, atribuições, manutenção e pagamentos. A aplicação web tem telas para eventos e pagamentos, mas a documentação e a experiência ainda não formam um fluxo de produto coerente.",
    outcome:
      "Case em revisão para distinguir Parties do Festas. O checkout está em detached HEAD; a página inicial web e o README mobile ainda parecem scaffolds, e os fluxos entre inventário, evento e pagamento precisam ser validados antes de apresentar o produto como funcional.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/parties" }],
  },
  {
    slug: "domains-finder",
    title: "Domains Finder",
    eyebrow: "Ferramenta · Go",
    summary:
      "CLI para transformar um briefing de produto em sugestões de nomes e verificações de domínio com DNS e RDAP.",
    scope: "CLI + interface local opcional",
    role: "Projeto pessoal e desenvolvimento",
    stack: ["Go", "SQLite", "DNS", "RDAP", "Gemini API"],
    context:
      "Escolher um nome para um produto envolve capturar critérios, explorar opções e verificar domínios sem confundir uma consulta momentânea com garantia de disponibilidade.",
    approach:
      "A ferramenta normaliza um briefing, gera candidatos com um completador configurável, associa domínios conforme TLDs escolhidos, classifica resultados e consulta DNS/RDAP em pipeline concorrente com armazenamento local.",
    outcome:
      "O repositório tem testes para nomes, ranking, RDAP, CLI, servidor e persistência. O estado de domínio é apenas uma observação com validade/cache; não garante que o domínio permaneça disponível para registro. O projeto ainda não tem remoto Git configurado.",
    selected: true,
    published: false,
  },
  {
    slug: "logo-generator",
    title: "Pipeline de criação e exportação de assets",
    eyebrow: "Ferramenta · automação visual",
    summary:
      "CLI Python para processar imagens de marca, remover fundos e exportar conjuntos de ícones para web e mobile.",
    scope: "CLI local · geração opcional por API",
    role: "Ferramenta pessoal em evolução",
    stack: ["Python", "Pillow", "OpenAI Images API", "rembg", "YAML"],
    context:
      "Uma imagem de marca precisa de diferentes cortes, transparência e tamanhos para caber em favicon, navegação, PWA e outros destinos sem deformar o original.",
    approach:
      "A ferramenta recebe uma imagem existente ou uma geração opcional, processa transparência e recorte, e exporta masters, PNG/WebP, favicon, ícone Apple e tamanhos PWA. Manifestos YAML permitem fluxos em lote e cópia configurável dos resultados.",
    outcome:
      "É um utilitário local, não um serviço hospedado. Prompts e manifestos atuais contêm referências de marcas/produtos específicos; o case público fica genérico e sem capturas ou assets identificáveis até confirmar permissões para cada material.",
    selected: true,
    published: false,
  },
  {
    slug: "social-media-sentiment-analysis",
    title: "Social Media Sentiment Analysis · em construção",
    eyebrow: "Projeto de NLP · Python",
    summary:
      "Pipeline inicial que limpa textos, estima polaridade com TextBlob e VADER e organiza resultados em análises e relatórios.",
    scope: "Pipeline local de análise · dados ainda não incluídos",
    role: "Projeto pessoal",
    stack: ["Python", "Pandas", "NLTK", "TextBlob", "Tweepy", "Matplotlib"],
    context:
      "Analisar publicações exige separar coleta, preparação de texto, estimativa de sentimento e agregação temporal, sem tratar a classificação como medida objetiva da opinião de pessoas.",
    approach:
      "O código organiza coleta via integração Twitter e função de scraping Reddit, pré-processamento em inglês, estimativas TextBlob/VADER, agregação de tendências e geração de visualizações e relatórios. O fluxo principal usa Twitter; os dados não estão versionados no repositório.",
    outcome:
      "O repositório contém uma estrutura inicial do pipeline, mas não comprova a alegação de 10 mil publicações do README: não há dataset nem resultados publicados no checkout. A qualidade, idioma, permissões da coleta e utilidade das conclusões ainda precisam ser validados; o case é um projeto em construção.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/social-media-sentiment-analysis" }],
  },
  {
    slug: "gameboy-emulator",
    title: "Game Boy Emulator · laboratório",
    eyebrow: "Projeto de sistemas · Zig",
    summary:
      "Experimento de baixo nível com componentes iniciais de CPU, memória, leitura de ROM e uma GPU em framebuffer.",
    scope: "Protótipo local · execução de jogos não validada",
    role: "Projeto pessoal",
    stack: ["Zig", "SDL2", "emulação", "CPU", "memória"],
    context:
      "Um emulador precisa reproduzir regras de hardware em camadas: instruções da CPU, mapa de memória, temporização, vídeo, entrada e comportamento do cartucho.",
    approach:
      "O repositório separa CPU, registradores/memória, carregamento de ROM, framebuffer e integração SDL2. A implementação atual cobre apenas um subconjunto inicial e ainda contém regras incompletas; a chamada de renderização está comentada no loop principal.",
    outcome:
      "O estado revisado é de laboratório, não de emulador compatível: não foi confirmado um jogo funcional, a GPU usa premissas fixas e a integração de janela/renderização ainda não está conectada ao ciclo principal. A demonstração futura deve usar homebrew ou ROM com uso permitido, sem redistribuir jogos comerciais.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/gameboy-emulator" }],
  },
  {
    slug: "pokemon-center",
    title: "Pokémon Center · em validação",
    eyebrow: "Ecossistema de fã · WIP",
    summary:
      "Projeto registrado no catálogo como um conjunto de ferramentas para explorar dados Pokémon e montar times; o código ainda não foi revisado.",
    scope: "Escopo de monorepo a confirmar",
    role: "Projeto pessoal · contribuição a confirmar",
    stack: ["Go (catálogo)", "Python (catálogo)", "PostgreSQL (catálogo)", "Redis (catálogo)", "Next.js (catálogo)"],
    context:
      "Um conjunto de ferramentas para dados de Pokémon pode combinar ingestão, processamento e experiências de consulta, desde que seus componentes e limites estejam claramente definidos.",
    approach:
      "O catálogo pessoal descreve um WIP com catálogo de dados, montagem de times, jobs assíncronos e ingestão da PokéAPI. Não foi possível acessar o repositório remoto nesta revisão, então esses pontos ainda não foram confirmados no código.",
    outcome:
      "Este rascunho registra somente a intenção anotada no catálogo. A composição do monorepo, aplicações existentes, stack, contribuição e fluxos funcionais permanecem por verificar. O projeto deve ser identificado como trabalho de fã, sem sugerir vínculo oficial; imagens e outros assets precisam de autorização/licença apropriada.",
    selected: true,
    published: false,
  },
  {
    slug: "mario",
    title: "Mario em Pygame · experimento",
    eyebrow: "Jogo 2D · Python",
    summary:
      "Experimento de plataforma em Pygame com mapa em tiles e módulos iniciais de jogador, gravidade e câmera.",
    scope: "Protótipo local · interação principal incompleta",
    role: "Projeto pessoal",
    stack: ["Python", "Pygame", "tile maps", "física 2D"],
    context:
      "Um jogo de plataforma pequeno combina mapa, loop de eventos, movimento do personagem, colisões e câmera em uma experiência interativa coerente.",
    approach:
      "O repositório desenha um mapa textual em tiles e contém módulos de jogador e câmera com movimento e gravidade iniciais. No loop principal revisado, a atualização do jogador, a câmera e o desenho do personagem estão comentados; por isso, a cena executada ainda não demonstra o jogo completo.",
    outcome:
      "O checkout não inclui README e a execução observada é essencialmente uma visualização estática do mapa. O case é apresentado como experimento em andamento, não como jogo finalizado. Antes de divulgar, também é necessário rever os assets e evitar redistribuir material protegido ou sugerir vínculo oficial com a Nintendo.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/mario" }],
  },
  {
    slug: "financial-market-trend-analyzer",
    title: "Financial Market Trend Analyzer · em validação",
    eyebrow: "Análise quantitativa exploratória · Python",
    summary:
      "Pipeline local para coletar séries de mercado, calcular indicadores, comparar ativos e experimentar classificadores de tendência.",
    scope: "Análise offline · resultados ainda não reproduzidos",
    role: "Projeto pessoal · contribuição a confirmar",
    stack: ["Python", "Pandas", "yfinance", "scikit-learn", "XGBoost", "Matplotlib"],
    context:
      "Séries de mercado precisam ser preparadas, comparadas e avaliadas com separação temporal adequada para que análises exploratórias não sejam confundidas com previsões confiáveis.",
    approach:
      "O código busca cotações via yfinance, calcula retornos e indicadores técnicos, produz correlações e estatísticas e compara modelos classificadores com uma divisão sequencial entre treino e teste. Os arquivos de dados e os resultados gerados não estão versionados no checkout revisado.",
    outcome:
      "O README afirma 72% de acurácia, mas esse resultado não pôde ser reproduzido porque o repositório não contém dataset, artefatos ou relatório de execução. A métrica, o desenho de validação e o comportamento fora da amostra precisam de auditoria antes de qualquer alegação de desempenho. Ferramenta educacional; não fornece aconselhamento financeiro.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/financial-market-trend-analyzer" }],
  },
  {
    slug: "anime-ai-chat",
    title: "Anime AI Chat · conceito",
    eyebrow: "Ideia de produto · IA conversacional",
    summary:
      "Conceito de uma experiência conversacional ligada ao universo de anime; proposta e implementação ainda precisam ser definidas.",
    scope: "Conceito · sem aplicação revisada",
    role: "Exploração de produto",
    stack: ["IA conversacional · a definir", "Aplicação · a definir"],
    context:
      "Uma experiência conversacional temática precisa de um propósito claro e de uma identidade própria para ir além de um chatbot genérico.",
    approach:
      "Até agora, o nome sugere um chat de IA relacionado a anime. O submódulo local não está inicializado e não foi possível confirmar código, público, fluxo, modelo ou funcionalidades existentes.",
    outcome:
      "Esta página registra uma ideia em descoberta, não um produto implementado. O próximo passo é escolher um caso de uso e decidir como usar personagens, histórias e materiais originais ou autorizados sem sugerir associação oficial com obras existentes.",
    selected: true,
    published: false,
  },
  {
    slug: "fighting-teacher",
    title: "Fighting Teacher · conceito",
    eyebrow: "Ideia de produto · aprendizagem de artes marciais",
    summary:
      "Conceito de uma plataforma de aprendizagem para artes marciais; público, modalidade inicial e experiência ainda não foram definidos.",
    scope: "Conceito · sem aplicação demonstrável",
    role: "Exploração de produto",
    stack: ["Produto · a definir", "Tecnologia · a definir"],
    context:
      "Ensinar movimentos e progressão exige escolher para quem a ferramenta existe e como apresentar conteúdo com contexto, segurança e acompanhamento adequados.",
    approach:
      "O material disponível descreve apenas uma ideia ampla para ensinar várias artes marciais, com assinatura como possibilidade. O repositório local contém somente um README placeholder, sem aplicação ou fluxo demonstrável.",
    outcome:
      "O case permanece um conceito. Antes de planejar funcionalidades, será necessário definir se o produto atende alunos, academias ou instrutores, escolher uma modalidade piloto e garantir permissão para vídeos e materiais didáticos.",
    selected: true,
    published: false,
  },
  {
    slug: "search",
    title: "Search · ferramentas locais de pesquisa",
    eyebrow: "Toolbox pessoal · busca e descoberta",
    summary:
      "Conjunto de scripts locais para pesquisar tendências, imagens, vídeos, música e listas de anime em diferentes fontes.",
    scope: "Coleção de CLIs e scripts · saídas locais",
    role: "Projeto pessoal e automação",
    stack: ["Node.js", "Python", "APIs de busca", "yt-dlp"],
    context:
      "Fluxos de pesquisa de conteúdo costumam repetir buscas, coleta de referências e organização de resultados em diferentes fontes e formatos.",
    approach:
      "O workspace agrupa cinco ferramentas: anime-list, pictures, media-search, music-download e trends-search. Os READMEs descrevem scripts para consultar fontes e guardar resultados localmente; módulos e dependências variam entre cada ferramenta.",
    outcome:
      "É uma toolbox de pesquisa pessoal, não um dashboard ou produto hospedado. A cobertura de fontes e a execução atual de cada submódulo ainda precisam ser verificadas; resultados de mídia ficam locais e não devem ser redistribuídos sem direitos apropriados.",
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/search" }],
  },
  {
    slug: "pokemon-wiki",
    title: "Pokémon Wiki · em validação",
    eyebrow: "Projeto de fã · escopo a confirmar",
    summary:
      "Repositório candidato para uma wiki Pokémon; não foi possível revisar o código nem confirmar as páginas existentes.",
    scope: "Aplicação e dados a confirmar",
    role: "Projeto pessoal · contribuição a confirmar",
    stack: ["Tecnologias a confirmar"],
    context:
      "Uma wiki precisa de dados rastreáveis, páginas de consulta úteis e uma política clara para fontes, atualizações e materiais visuais.",
    approach:
      "A ficha local identifica um repositório Pokémon Wiki separado do Pokémon Center, mas o acesso ao remoto exige autenticação nesta revisão. Não foi possível verificar tecnologias, conteúdo, arquitetura ou funcionalidades.",
    outcome:
      "O case permanece provisório e sem link público. Antes de descrevê-lo como wiki funcional, é preciso recuperar acesso, entender sua relação com Pokémon Center e validar direitos de uso de dados e imagens. É um projeto independente de fã, sem afiliação oficial.",
    selected: true,
    published: false,
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
    selected: true,
    published: false,
    links: [{ label: "Repositório", href: "https://github.com/woragis/testmaster" }],
  },
  {
    slug: "dotfiles-arch-linux",
    title: "Dotfiles · ambiente Arch Linux",
    eyebrow: "Ambiente de desenvolvimento · Linux",
    summary:
      "Configurações versionadas para um ambiente pessoal Arch Linux, reunindo compositor, barra, terminal, shell, editor e temas do sistema em repositórios separados.",
    scope: "Configuração pessoal · Git e submódulos",
    role: "Autor e mantenedor",
    stack: ["Arch Linux", "Hyprland", "AGS", "Waybar", "Neovim", "Lua", "Fish", "Zsh", "Git submodules"],
    context:
      "Um ambiente Linux depende de várias camadas: sessão gráfica, painel, terminais, shell, editor e aparência de inicialização. Sem versionamento, acompanhar mudanças e recuperar uma configuração anterior fica mais difícil.",
    approach:
      "A configuração local organiza ferramentas em repositórios próprios conectados por Git submodules. O conjunto inclui scripts e configuração do Hyprland, widgets AGS em TypeScript, Waybar, Neovim em Lua, Fish, Zsh e preferências de terminais e do sistema. Cada componente pode evoluir no seu repositório.",
    outcome:
      "O resultado é uma coleção pública e inspecionável de configurações pessoais, não uma distribuição Linux nem um instalador pronto. A instalação limpa e a restauração em outra máquina ainda precisam ser demonstradas antes de afirmar que o ambiente é reproduzível de ponta a ponta.",
    selected: true,
    published: false,
    links: [
      { label: "AGS", href: "https://github.com/woragis/.config-ags" },
      { label: "btop", href: "https://github.com/woragis/.config-btop" },
      { label: "Create Next App · Node.js", href: "https://github.com/woragis/.config-create-next-app-nodejs" },
      { label: "File Organizer", href: "https://github.com/woragis/.config-file-organizer" },
      { label: "Fish", href: "https://github.com/woragis/.config-fish" },
      { label: "Ghostty", href: "https://github.com/woragis/.config-ghostty" },
      { label: "GRUB", href: "https://github.com/woragis/.config-grub" },
      { label: "Hyprland", href: "https://github.com/woragis/.config-hypr" },
      { label: "Kitty", href: "https://github.com/woragis/.config-kitty" },
      { label: "Mako", href: "https://github.com/woragis/.config-mako" },
      { label: "Neovim", href: "https://github.com/woragis/.config-nvim" },
      { label: "Plymouth", href: "https://github.com/woragis/.config-plymouth" },
      { label: "Waybar", href: "https://github.com/woragis/.config-waybar" },
      { label: "Zsh", href: "https://github.com/woragis/.config-zsh" },
    ],
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
  projectSlugs?: string[];
  linkedinUrl?: string;
  cover?: ProjectImage;
  galleries?: ProjectGallery[];
  story?: ArticleStoryBlock[];
  references?: { label: string; href: string }[];
  selected: boolean;
  published: boolean;
  sourceLabel: string;
};

export type ArticleStoryBlock =
  | { type: "heading"; id: string; title: string; level?: 2 | 3 }
  | { type: "paragraphs"; id: string; paragraphs: string[] }
  | { type: "code"; id: string; language: string; code: string; caption?: string }
  | { type: "image"; id: string; image: ProjectImage; layout?: "inset" | "full" }
  | { type: "video"; id: string; video: ProjectVideo; layout?: "inset" | "full" }
  | { type: "gallery"; id: string; galleryId: string; layout?: "inset" | "full" }
  | { type: "callout"; id: string; title: string; body: string; tone?: "note" | "result" };

export const articles: Article[] = [
  {
    slug: "monolito-modular-limites-claros",
    title: "Monólito modular: uma aplicação, limites claros",
    category: "Arquitetura de software",
    summary:
      "Monólito descreve como uma aplicação é implantada; modularidade descreve como ela organiza responsabilidades e dependências. As duas ideias podem coexistir.",
    publishedAt: "2026-11-03",
    readingTime: "5 min",
    content: [],
    linkedinUrl: "https://lnkd.in/p/dwv8X46y",
    cover: { src: "/articles/monolito-modular/cover.svg", alt: "Ilustração de uma aplicação contendo três módulos com limites claros, ao lado do título Monólito modular.", width: 1200, height: 630, caption: "Uma aplicação pode ser implantada como uma unidade e ainda preservar limites entre módulos." },
    galleries: [
      {
        id: "monolito-modular-linkedin-carousel",
        title: "Monólito modular em seis diagramas",
        description: "Carrossel publicado no LinkedIn, reapresentado aqui como apoio visual ao artigo.",
        device: "mixed",
        presentation: "editorial-grid",
        items: [
          { image: { src: "/articles/monolito-modular/01-capa.webp", alt: "Capa do carrossel: Monólito modular — uma aplicação, limites claros. Um diagrama abstrato mostra módulos dentro de uma aplicação.", width: 1200, height: 1607 }, title: "Uma aplicação. Limites claros.", caption: "Capa do carrossel original." },
          { image: { src: "/articles/monolito-modular/02-aplicacao-modular.webp", alt: "Diagrama de uma aplicação implantada como uma unidade, com três módulos separados no interior.", width: 1200, height: 1607 }, title: "Aplicação modular", caption: "Uma unidade de implantação pode conter módulos separados." },
          { image: { src: "/articles/monolito-modular/03-contrato-publico.webp", alt: "O módulo Pedidos consulta o contrato público de Estoque sem acessar seus detalhes internos.", width: 1200, height: 1607 }, title: "Dependência explícita", caption: "Pedidos depende do contrato público de Estoque." },
          { image: { src: "/articles/monolito-modular/04-acoplamento.webp", alt: "Uma seta cruza a fronteira do módulo Estoque e acessa diretamente seus dados internos.", width: 1200, height: 1607 }, title: "Acesso direto cria acoplamento", caption: "Acesso a dados internos enfraquece a fronteira entre módulos." },
          { image: { src: "/articles/monolito-modular/05-fronteiras-uteis.webp", alt: "Quatro sinais de fronteiras úteis: responsabilidades coesas, dependências explícitas, ownership claro e testes de arquitetura.", width: 1200, height: 1607 }, title: "Sinais de fronteiras úteis", caption: "Responsabilidades, dependências, ownership e testes." },
          { image: { src: "/articles/monolito-modular/06-fechamento.webp", alt: "Diagrama de módulos dentro de uma aplicação e a pergunta: que sinal mostra que um módulo atravessa a fronteira de outro?", width: 1200, height: 1607 }, title: "Modularidade exige disciplina", caption: "A implantação pode ser simples; preservar os limites é uma decisão contínua." },
        ],
      },
    ],
    story: [
      {
        type: "paragraphs",
        id: "abertura",
        paragraphs: [
          "Monólito costuma ser usado como sinônimo de um sistema em que tudo está misturado. Mas a palavra também descreve uma escolha de execução: a aplicação é empacotada e implantada como uma unidade. Isso não determina, por si só, como o código precisa ser organizado.",
          "Modularidade trata de outra dimensão. Ela pergunta onde ficam as responsabilidades, quem é dono de cada dado e por quais contratos uma parte do sistema pode colaborar com outra. Um único deploy pode conter módulos bem definidos — e vários serviços ainda podem continuar fortemente acoplados.",
        ],
      },
      { type: "heading", id: "exemplo", title: "Um limite concreto: Pedidos e Estoque" },
      {
        type: "paragraphs",
        id: "contrato",
        paragraphs: [
          "Imagine dois módulos: `Pedidos` e `Estoque`. Para verificar se um item pode ser vendido, Pedidos precisa consultar disponibilidade. Uma fronteira útil faz essa necessidade passar por uma operação ou contrato público de Estoque. Pedidos conhece o que pode pedir e o formato da resposta; não precisa conhecer as tabelas, estruturas internas ou regras privadas que produzem essa resposta.",
          "O contrato torna a dependência visível. Estoque pode reorganizar sua implementação preservando a interface acordada. Se Pedidos consulta diretamente as tabelas internas, uma mudança de esquema ou de regra passa a afetar consumidores que não deveriam depender daquele detalhe.",
        ],
      },
      { type: "gallery", id: "carrossel-linkedin", galleryId: "monolito-modular-linkedin-carousel", layout: "full" },
      { type: "heading", id: "preservar-limites", title: "A fronteira precisa existir no código" },
      {
        type: "paragraphs",
        id: "praticas",
        paragraphs: [
          "Separar arquivos ou criar pastas chamadas `pedidos` e `estoque` ajuda a comunicar intenção, mas não impede uma dependência indevida. O limite precisa ser sustentado por escolhas de código: interfaces públicas pequenas, ownership dos dados, dependências numa direção compreensível e restrições a imports ou acessos internos.",
          "Testes de arquitetura podem transformar algumas dessas regras em verificações repetíveis. Revisões de código também ajudam a notar quando uma conveniência local começa a atravessar a fronteira. As ferramentas variam conforme a linguagem e o desenho; o objetivo é tornar a regra explícita, não adicionar uma camada de processo sem necessidade.",
        ],
      },
      { type: "heading", id: "tradeoffs", title: "O que se ganha — e o que continua exigindo cuidado" },
      {
        type: "paragraphs",
        id: "tradeoffs-texto",
        paragraphs: [
          "Manter uma aplicação como unidade pode reduzir o custo operacional de distribuir mudanças entre vários serviços: há menos processos, redes e versões independentes para coordenar. Isso não elimina a complexidade do domínio, nem garante que uma mudança seja pequena ou segura. Um monólito sem limites claros ainda pode se tornar difícil de alterar.",
          "A modularidade também tem um custo contínuo. Contratos precisam ser escolhidos e mantidos; responsabilidades podem mudar; atalhos podem transformar detalhes internos em dependências permanentes. Por isso, bons sinais não são apenas a estrutura do repositório: são responsabilidades coesas, dependências explícitas, ownership entendido e testes que protegem as fronteiras importantes.",
          "A implantação pode ser simples. Preservar limites úteis continua sendo uma decisão de engenharia feita ao longo do tempo.",
        ],
      },
      { type: "callout", id: "pergunta-final", title: "Uma pergunta para revisar a arquitetura", body: "Que sinal costuma mostrar que um módulo está atravessando a fronteira de outro?", tone: "result" },
    ],
    selected: true,
    published: true,
    sourceLabel: "Adaptado do carrossel ARQ-001 publicado no LinkedIn em 3 de novembro de 2026",
  },
  {
    slug: "monolito-e-microsservicos-custo-de-separar",
    title: "Monólito ou microsserviços: o que custa separar?",
    category: "Arquitetura de software",
    summary: "Separar um módulo muda chamadas, dados, deploy e operação. A decisão vale quando resolve um limite concreto que a equipe não consegue sustentar dentro de uma aplicação modular.",
    publishedAt: "2026-11-03",
    linkedinUrl: "https://lnkd.in/p/d97CPsft",
    readingTime: "7 min",
    cover: {
      src: "/articles/monolito-e-microsservicos-custo-de-separar/slide-01.webp",
      alt: "Capa do carrossel do LinkedIn ARQ-002 · Monólito ou microsserviços, em formato de infográfico editorial técnico.",
      width: 1792,
      height: 2400,
      caption: "Capa do carrossel publicado no LinkedIn. Slide 1 de 7.",
    },
    galleries: [
      {
        id: "arq-002-linkedin",
        title: "ARQ-002 · Monólito ou microsserviços · slides 2 a 7",
        description: "Continuação do carrossel publicado no LinkedIn. A capa acima é o slide 1; esta sequência mantém a numeração e a ordem originais.",
        device: "mixed",
        presentation: "editorial-grid",
        items: [
          {
            image: {
              src: "/articles/monolito-e-microsservicos-custo-de-separar/slide-02.webp",
              alt: "Diagrama compara uma aplicação com módulos internos a serviços separados que se comunicam pela rede.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 2 · A fronteira passa pela rede",
          },
          {
            image: {
              src: "/articles/monolito-e-microsservicos-custo-de-separar/slide-03.webp",
              alt: "Três ganhos possíveis de microsserviços: deploy independente, escala direcionada e ownership mais claro, condicionados a limites e operação.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 3 · Autonomia, quando existe necessidade",
          },
          {
            image: {
              src: "/articles/monolito-e-microsservicos-custo-de-separar/slide-04.webp",
              alt: "Diagrama de chamada entre Serviço A e Serviço B com timeout e retry limitado.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 4 · A rede falha",
          },
          {
            image: {
              src: "/articles/monolito-e-microsservicos-custo-de-separar/slide-05.webp",
              alt: "Dois serviços com seus próprios bancos; consultas e transações entre eles exigem coordenação.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 5 · Dados separados mudam as regras",
          },
          {
            image: {
              src: "/articles/monolito-e-microsservicos-custo-de-separar/slide-06.webp",
              alt: "Sinais para investigar separação: releases coordenadas, demandas de escala distintas e equipes bloqueadas por ownership.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 6 · Existe uma necessidade concreta?",
          },
          {
            image: {
              src: "/articles/monolito-e-microsservicos-custo-de-separar/slide-07.webp",
              alt: "Fechamento sobre deploy automatizado, observabilidade, resposta a incidentes e a necessidade concreta para separar.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 7 · Separar também é assumir operação",
          },
        ],
      },
    ],
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "A pergunta útil não é se microsserviços são mais modernos. É: qual problema concreto passa a ser mais barato depois que uma fronteira atravessa a rede? Uma chamada entre módulos pode ser uma função local hoje; em serviços separados, ela passa a depender de disponibilidade, latência, protocolo e operação de dois processos."
    ]
  },
      { type: "gallery", id: "linkedin-carousel", galleryId: "arq-002-linkedin", layout: "full" },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "A fronteira muda o tipo de falha"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Dentro da mesma aplicação, uma chamada pode falhar por uma exceção ou regra de negócio. Entre serviços, entram timeout, indisponibilidade parcial, respostas duplicadas e incompatibilidade entre versões. A rede não é apenas um detalhe de transporte: ela altera o comportamento que o produto precisa tratar.",
      "Isso não torna a extração errada. Significa que o serviço novo precisa ter contrato, política de timeout, tratamento para falhas e observabilidade. Uma extração que só move uma função para outro processo, sem autonomia real, pode comprar esses custos sem obter o benefício esperado."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Autonomia é uma capacidade, não um checkbox"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Deploy independente existe quando uma equipe consegue mudar e lançar o serviço sem coordenar cada versão com os consumidores. Isso depende de contratos compatíveis, automação, ownership e capacidade de operar falhas. Separar repositórios ou containers, sozinho, não garante essa autonomia.",
      "Escala independente também depende do workload e da plataforma. Um monólito pode ter várias réplicas; microsserviços podem ser implantados separadamente, mas ainda precisarem escalar juntos por causa de acoplamento ou recursos compartilhados."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "TypeScript",
    "code": "type Inventory = {\n  available(sku: string): Promise<number>;\n};\n\nasync function createOrder(\n  inventory: Inventory,\n  sku: string,\n  quantity: number,\n) {\n  const available = await inventory.available(sku);\n  if (available < quantity) throw new Error(\"out of stock\");\n  return { sku, quantity, status: \"accepted\" };\n}",
    "caption": "O caso de uso expressa a dependência. Um adapter local ou remoto pode implementá-la, mas o remoto ainda precisa de timeout, erros e compatibilidade."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Dados e transações ganham fronteiras"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Em um módulo único, uma transação de banco pode atualizar mais de uma tabela na mesma unidade de consistência. Depois da separação, uma transação local não cobre automaticamente os bancos de dois serviços. O fluxo pode precisar de eventos, compensações e estados intermediários visíveis para o usuário.",
      "Ownership de dados ajuda a impedir dependências diretas no esquema de outro serviço. Porém, relatórios e consultas que atravessam domínios passam a precisar de APIs, projeções ou pipelines de dados. Essas soluções têm custo de atualização e consistência que precisa ser aceito explicitamente."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Um critério antes de extrair"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Procure sinais observáveis: mudanças de um domínio bloqueiam releases de outro; requisitos de escala ou isolamento são diferentes; ownership entre equipes está claro; ou a operação já consegue detectar e responder a falhas distribuídas. São motivos para avaliar uma extração, não uma receita automática.",
      "Uma etapa reversível é definir o limite como módulo e observar dependências reais por um período. Se a fronteira interna for instável, separar processos tende a tornar a instabilidade mais cara. Se ela estiver clara e houver um ganho operacional mensurável, a extração pode ser planejada como mudança de contrato e de operação."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Separe um serviço quando o limite e a capacidade operacional justificarem a rede, os dados distribuídos e o trabalho de manter contratos.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Microservice Trade-Offs — Martin Fowler",
    "href": "https://martinfowler.com/articles/microservice-trade-offs.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-002 da série Arquitetura de software",
  },
  {
    slug: "camadas-e-fatias-verticais-organizar-por-mudanca",
    title: "Camadas ou fatias verticais: como organizar uma funcionalidade?",
    category: "Arquitetura de software",
    summary: "Camadas agrupam responsabilidades técnicas; fatias verticais agrupam o caminho de uma funcionalidade. Os dois eixos podem coexistir, e a escolha deve acompanhar o padrão de mudança.",
    publishedAt: "2026-11-05",
    linkedinUrl: "https://lnkd.in/p/dv6RVeg4",
    readingTime: "7 min",
    cover: {
      src: "/articles/camadas-e-fatias-verticais-organizar-por-mudanca/slide-01.webp",
      alt: "Capa do carrossel do LinkedIn ARQ-003 · Camadas e fatias verticais, em formato de infográfico editorial técnico.",
      width: 1792,
      height: 2400,
      caption: "Capa do carrossel publicado no LinkedIn. Slide 1 de 6.",
    },
    galleries: [
      {
        id: "arq-003-linkedin",
        title: "ARQ-003 · Camadas e fatias verticais · slides 2 a 6",
        description: "Continuação do carrossel publicado no LinkedIn. A capa acima é o slide 1; esta sequência mantém a numeração e a ordem originais.",
        device: "mixed",
        presentation: "editorial-grid",
        items: [
          {
            image: {
              src: "/articles/camadas-e-fatias-verticais-organizar-por-mudanca/slide-02.webp",
              alt: "O fluxo CriarPedido atravessa apresentação, serviços e dados; cada camada agrupa uma responsabilidade técnica.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 2 · Organizar por camadas",
          },
          {
            image: {
              src: "/articles/camadas-e-fatias-verticais-organizar-por-mudanca/slide-03.webp",
              alt: "A fatia CriarPedido mantém próximos os elementos que participam daquele caso de uso.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 3 · Organizar por funcionalidade",
          },
          {
            image: {
              src: "/articles/camadas-e-fatias-verticais-organizar-por-mudanca/slide-04.webp",
              alt: "Políticas técnicas compartilhadas ficam fáceis de encontrar, com o trade-off de um fluxo atravessar diretórios.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 4 · Quando camadas ajudam",
          },
          {
            image: {
              src: "/articles/camadas-e-fatias-verticais-organizar-por-mudanca/slide-05.webp",
              alt: "Uma mudança pode ficar localizada; comportamento comum duplicado é mostrado como risco.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 5 · Quando fatias ajudam",
          },
          {
            image: {
              src: "/articles/camadas-e-fatias-verticais-organizar-por-mudanca/slide-06.webp",
              alt: "Síntese visual mostra que camadas e fatias podem coexistir e pergunta se o código do fluxo está fácil de localizar.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 6 · Escolha pelo padrão de mudança",
          },
        ],
      },
    ],
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma organização de pastas influencia onde uma pessoa começa a investigar uma mudança. Imagine alterar o fluxo de criar pedido: o controller valida entrada, uma regra calcula o total, o repositório grava os dados e um evento é emitido. A pergunta é se a estrutura ajuda a percorrer esse caminho ou o espalha sem necessidade."
    ]
  },
      { type: "gallery", id: "linkedin-carousel", galleryId: "arq-003-linkedin", layout: "full" },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Organizar por camadas"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Uma estrutura por camadas aproxima código com o mesmo papel técnico: controllers, serviços, repositórios e modelos. Isso pode facilitar encontrar políticas transversais e manter convenções comuns. Em contrapartida, uma funcionalidade pode estar distribuída em vários diretórios, exigindo que a pessoa conheça o mapa inteiro antes de alterar o fluxo.",
      "Camadas não definem automaticamente a direção das dependências. Se o domínio começa a importar detalhes de HTTP ou de um ORM, a árvore de pastas pode parecer organizada enquanto o acoplamento continua invertido. A estrutura precisa refletir limites reais, não apenas nomes familiares."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Organizar por fatias"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Uma fatia vertical agrupa o que participa de um caso de uso: entrada, validação, regra e persistência relacionados a criar pedido ficam próximos. A pessoa que implementa uma mudança pode localizar o fluxo sem percorrer todos os diretórios técnicos do sistema.",
      "O risco é cada fatia recriar lógica transversal ou manter regras comuns de maneiras diferentes. Uma organização por funcionalidade ainda pode ter separações internas; a ideia não exige colocar tudo em um arquivo nem duplicar infraestrutura compartilhada."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "text",
    "code": "src/\n├── orders/\n│   ├── create/\n│   │   ├── handler.ts\n│   │   ├── use-case.ts\n│   │   └── repository.ts\n│   └── shared/\n│       └── order.ts\n└── platform/\n    └── database.ts",
    "caption": "Exemplo ilustrativo: organização por domínio e caso de uso. Os nomes e limites devem acompanhar o sistema real."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Os eixos podem se combinar"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "É possível separar módulos por domínio e, dentro de cada módulo, organizar casos de uso por fatias. Também é possível manter camadas bem delimitadas para regras compartilhadas. A pergunta não é qual desenho vence para sempre, mas qual torna as mudanças frequentes localizáveis e preserva dependências compreensíveis.",
      "Uma comparação concreta ajuda mais que uma discussão abstrata. Escolha um caso de uso que muda com frequência, trace os arquivos tocados por uma alteração e observe quanto contexto não relacionado precisa ser lido. Repita a avaliação em outro fluxo antes de reorganizar todo o repositório."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Estrutura como hipótese"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Diretórios são uma convenção; ferramentas de arquitetura, imports e testes podem tornar algumas regras verificáveis. Se a estrutura desejada depende de uma regra como “a interface não importa infraestrutura”, vale codificar essa restrição onde for possível.",
      "Reorganizar só para combinar com um diagrama pode aumentar custo sem melhorar o trabalho cotidiano. Use sintomas de mudança — arquivos sempre alterados juntos, dependências circulares ou onboarding confuso — para formular a hipótese e avalie a estrutura depois de aplicá-la a um fluxo real."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escolha a estrutura observando onde as mudanças acontecem e mantenha explícitas as dependências que importam.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Vertical Slice Architecture — Jimmy Bogard",
    "href": "https://www.jimmybogard.com/vertical-slice-architecture/"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-003 da série Arquitetura de software",
  },
  {
    slug: "ports-and-adapters-isolar-o-que-muda",
    title: "Ports and adapters: o que vale a pena isolar?",
    category: "Arquitetura de software",
    summary: "Ports and adapters separa conversas que a aplicação precisa ter dos detalhes de tecnologia que as implementam. O hexágono é uma metáfora; o contrato e a direção das dependências são o que importam.",
    publishedAt: "2026-11-06",
    linkedinUrl: "https://lnkd.in/p/dh8eUNaS",
    readingTime: "7 min",
    cover: {
      src: "/articles/ports-and-adapters-isolar-o-que-muda/slide-01.webp",
      alt: "Capa do carrossel do LinkedIn ARQ-004 · Ports and adapters, em formato de infográfico editorial técnico.",
      width: 1792,
      height: 2400,
      caption: "Capa do carrossel publicado no LinkedIn. Slide 1 de 6.",
    },
    galleries: [
      {
        id: "arq-004-linkedin",
        title: "ARQ-004 · Ports and adapters · slides 2 a 6",
        description: "Continuação do carrossel publicado no LinkedIn. A capa acima é o slide 1; esta sequência mantém a numeração e a ordem originais.",
        device: "mixed",
        presentation: "editorial-grid",
        items: [
          {
            image: {
              src: "/articles/ports-and-adapters-isolar-o-que-muda/slide-02.webp",
              alt: "Núcleo da aplicação expressa uma regra sem depender diretamente da interface ou do banco.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 2 · A regra precisa conhecer HTTP?",
          },
          {
            image: {
              src: "/articles/ports-and-adapters-isolar-o-que-muda/slide-03.webp",
              alt: "Adapters HTTP e CLI traduzem entradas externas para uma operação oferecida pela aplicação.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 3 · A porta de entrada",
          },
          {
            image: {
              src: "/articles/ports-and-adapters-isolar-o-que-muda/slide-04.webp",
              alt: "O núcleo declara uma necessidade e um adapter concreto a conecta à tecnologia externa.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 4 · A porta de saída",
          },
          {
            image: {
              src: "/articles/ports-and-adapters-isolar-o-que-muda/slide-05.webp",
              alt: "Diagrama acompanha a entrada HTTP até o caso de uso e a persistência SQL por uma porta.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 5 · Um fluxo de ponta a ponta",
          },
          {
            image: {
              src: "/articles/ports-and-adapters-isolar-o-que-muda/slide-06.webp",
              alt: "Síntese de fronteiras entre aplicação e tecnologias com a pergunta sobre qual detalhe externo vale isolar.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 6 · Isole fronteiras que importam",
          },
        ],
      },
    ],
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma regra de negócio não deveria precisar conhecer se uma requisição veio de HTTP, de um job ou de um teste. Tampouco deveria depender diretamente de um driver específico de banco só para gravar o resultado. Ports and adapters organiza o sistema em torno das conversas necessárias entre a aplicação e o mundo exterior."
    ]
  },
      { type: "gallery", id: "linkedin-carousel", galleryId: "arq-004-linkedin", layout: "full" },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Porta descreve uma conversa"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Uma porta é um contrato definido pela necessidade da aplicação. “Salvar pedido”, “consultar disponibilidade” ou “receber comando para criar pedido” são exemplos de conversas. A porta não é simplesmente qualquer interface; ela representa um papel que algum consumidor ou provedor precisa cumprir.",
      "O lado de entrada recebe uma intenção e conduz um caso de uso. O lado de saída permite que o caso de uso peça algo externo, como persistir ou publicar. O mesmo conceito pode ser expresso em linguagens e frameworks diferentes."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Adapter traduz tecnologia"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Um adapter transforma um formato externo no contrato da aplicação ou transforma uma solicitação da aplicação em uma operação tecnológica. Um handler HTTP converte parâmetros e autenticação em um comando; um adapter de banco converte uma chamada de persistência em SQL ou em operações de ORM.",
      "Vários adapters podem atender a mesma porta. Um armazenamento real pode coexistir com um fake em memória para testes. Isso torna substituição e isolamento possíveis, mas não significa que se deva criar uma interface para toda função ou envolver cada biblioteca em mais abstrações."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "TypeScript",
    "code": "// Porta definida pela aplicação\ninterface OrderStore {\n  save(order: Order): Promise<void>;\n}\n\n// Caso de uso depende do contrato\nclass PlaceOrder {\n  constructor(private store: OrderStore) {}\n  async execute(order: Order) {\n    await this.store.save(order);\n  }\n}",
    "caption": "A porta exprime a necessidade da aplicação. Um adapter SQL ou um fake de teste pode cumprir o mesmo contrato."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Direção de dependência"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "O código interno define o contrato; a implementação externa depende dele. Assim, mudanças na biblioteca de persistência não precisam se espalhar pelo caso de uso. O fluxo de execução pode entrar e sair por adapters, enquanto as dependências de código apontam para os contratos mais estáveis do domínio.",
      "A arquitetura perde o propósito se a porta apenas espelha cada método do framework ou se o domínio conhece tipos de request e response externos. Uma interface útil descreve a necessidade do consumidor e mantém o vocabulário do problema."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Isolar por motivo de mudança"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Uma boa primeira pergunta é: que parte muda por motivos diferentes? Regras, protocolo HTTP, persistência, fila e provedor externo costumam evoluir em ritmos distintos. A fronteira ajuda quando protege uma decisão importante ou permite testar uma colaboração relevante.",
      "O custo também é real: mais tipos, wiring e navegação. Comece com uma porta onde existe uma necessidade de substituição, teste ou independência. Se a abstração não protege nada nem melhora entendimento, ela pode ser removida sem prejuízo."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "A abstração deve proteger uma conversa importante; não é uma meta medir quantas interfaces existem.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Hexagonal Architecture — Alistair Cockburn",
    "href": "https://alistair.cockburn.us/hexagonal-architecture"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-004 da série Arquitetura de software",
  },
  {
    slug: "ddd-tatico-entidades-valores-agregados",
    title: "DDD tático: entidades, valores e invariantes",
    category: "Arquitetura de software",
    summary: "Entidades, objetos de valor e agregados são ferramentas para expressar regras do domínio. Usá-los com propósito ajuda a proteger invariantes; transformar cada substantivo em classe só cria cerimônia.",
    publishedAt: "2026-11-07",
    linkedinUrl: "https://lnkd.in/p/dat52ehr",
    readingTime: "7 min",
    cover: {
      src: "/articles/ddd-tatico-entidades-valores-agregados/slide-01.webp",
      alt: "Capa do carrossel do LinkedIn ARQ-005 · DDD tático, em formato de infográfico editorial técnico.",
      width: 1792,
      height: 2400,
      caption: "Capa do carrossel publicado no LinkedIn. Slide 1 de 6.",
    },
    galleries: [
      {
        id: "arq-005-linkedin",
        title: "ARQ-005 · DDD tático · slides 2 a 6",
        description: "Continuação do carrossel publicado no LinkedIn. A capa acima é o slide 1; esta sequência mantém a numeração e a ordem originais.",
        device: "mixed",
        presentation: "editorial-grid",
        items: [
          {
            image: {
              src: "/articles/ddd-tatico-entidades-valores-agregados/slide-02.webp",
              alt: "Pedidos com identificador persistem como a mesma entidade enquanto seus dados e estados mudam.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 2 · Pedido é uma entidade",
          },
          {
            image: {
              src: "/articles/ddd-tatico-entidades-valores-agregados/slide-03.webp",
              alt: "Dois valores monetários iguais são comparados por quantia e moeda, sem identificador próprio.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 3 · Dinheiro é um objeto de valor",
          },
          {
            image: {
              src: "/articles/ddd-tatico-entidades-valores-agregados/slide-04.webp",
              alt: "Pedido raiz e itens ficam dentro de uma fronteira de consistência protegida pela raiz.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 4 · Agregado define uma fronteira",
          },
          {
            image: {
              src: "/articles/ddd-tatico-entidades-valores-agregados/slide-05.webp",
              alt: "Um Pedido confirmado rejeita a operação de adicionar item.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 5 · A raiz protege a invariante",
          },
          {
            image: {
              src: "/articles/ddd-tatico-entidades-valores-agregados/slide-06.webp",
              alt: "Síntese de entidade, objeto de valor e agregado, com pergunta sobre uma regra explícita do domínio.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 6 · Modele a regra que importa",
          },
        ],
      },
    ],
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma modelagem de domínio fica útil quando torna regras importantes difíceis de violar por acidente. DDD tático oferece padrões para nomear identidade, igualdade por valor e limites de consistência. O ponto de partida continua sendo entender a linguagem e as regras do domínio com as pessoas que conhecem o problema."
    ]
  },
      { type: "gallery", id: "linkedin-carousel", galleryId: "arq-005-linkedin", layout: "full" },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Identidade versus valor"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Uma entidade continua sendo a mesma ao longo do tempo mesmo que alguns atributos mudem. Um pedido com status diferente ainda é o mesmo pedido, identificado por um ID. Um objeto de valor, por outro lado, é definido pelos atributos que carrega: dois valores de dinheiro com a mesma moeda e quantia podem ser equivalentes.",
      "Objetos de valor são bons lugares para validações e operações que pertencem àquele conceito. Um tipo Dinheiro pode impedir soma entre moedas incompatíveis; um IntervaloDeReserva pode validar começo e fim. A regra fica próxima dos dados que a tornam significativa."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Agregado como limite de consistência"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Um agregado delimita invariantes que precisam ser mantidos juntos em uma operação. A raiz é a entrada para as mudanças desse agregado; consumidores não deveriam alterar filhos diretamente ignorando as regras da raiz. Isso não significa que toda relação de banco precise virar um agregado.",
      "Agregados muito grandes criam contenção e atualizações caras. Agregados pequenos demais podem deixar uma regra central sem lugar claro. Delimite pelo que precisa ser consistente na transação, não pelo diagrama completo do negócio."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "TypeScript",
    "code": "class ReservationPeriod {\n  constructor(\n    readonly startsAt: Date,\n    readonly endsAt: Date,\n  ) {\n    if (endsAt <= startsAt) {\n      throw new Error(\"invalid reservation period\");\n    }\n  }\n}",
    "caption": "Objeto de valor simplificado: a validade do intervalo faz parte do próprio conceito. Regras reais de fuso e precisão precisam ser definidas pelo domínio."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Exemplo: reserva de sala"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Uma reserva pode ser uma entidade porque tem identidade, ciclo de vida e histórico. O intervalo de tempo pode ser um objeto de valor: início e fim precisam formar um período válido. Uma regra do domínio impede que a reserva termine antes de começar.",
      "O agregado pode coordenar as mudanças de estado da reserva, como solicitada, confirmada ou cancelada. A política de não permitir sobreposição talvez envolva outras reservas e exija uma operação de domínio ou controle transacional no banco; não convém esconder essa complexidade dentro de um objeto sem contexto."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Modelar quando a regra pede"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "DDD não exige que cada tabela vire uma entidade rica nem que toda validação more em um objeto de domínio. Um CRUD simples pode ter modelo mais direto. O padrão vale quando dá nome, fronteira ou proteção a uma regra que já importa.",
      "Use exemplos e linguagem do domínio para avaliar o modelo. Se a equipe não consegue explicar por que um objeto tem identidade, que invariantes o agregado protege ou qual regra um value object carrega, a abstração talvez esteja adiantada em relação ao entendimento."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escolha padrões táticos para expressar identidade, igualdade e invariantes reais; o modelo é ferramenta, não coleção de classes.",
    "tone": "result"
  }
],
    references: [
  {
      "label": "Tactical Domain-Driven Design — Microsoft Learn",
      "href": "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/tactical-domain-driven-design"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-005 da série Arquitetura de software",
  },
  {
    slug: "eventos-filas-idempotencia-duplicatas",
    title: "Eventos e filas: e se a mesma mensagem chegar duas vezes?",
    category: "Arquitetura de software",
    summary: "Consumidores devem tolerar repetição quando o transporte pode redeliver mensagens. Idempotência exige uma chave estável e uma fronteira transacional coerente com o efeito produzido.",
    publishedAt: "2026-11-10",
    linkedinUrl: "https://lnkd.in/p/dT8Sx-SC",
    readingTime: "7 min",
    cover: {
      src: "/articles/eventos-filas-idempotencia-duplicatas/slide-01.webp",
      alt: "Capa do carrossel do LinkedIn ARQ-006 · Eventos, filas e idempotência, em formato de infográfico editorial técnico.",
      width: 1792,
      height: 2400,
      caption: "Capa do carrossel publicado no LinkedIn. Slide 1 de 7.",
    },
    galleries: [
      {
        id: "arq-006-linkedin",
        title: "ARQ-006 · Eventos, filas e idempotência · slides 2 a 7",
        description: "Continuação do carrossel publicado no LinkedIn. A capa acima é o slide 1; esta sequência mantém a numeração e a ordem originais.",
        device: "mixed",
        presentation: "editorial-grid",
        items: [
          {
            image: {
              src: "/articles/eventos-filas-idempotencia-duplicatas/slide-02.webp",
              alt: "Sequência mostra o consumidor terminar o efeito, cair antes do ack e o broker entregar a mensagem novamente.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 2 · O ack se perdeu",
          },
          {
            image: {
              src: "/articles/eventos-filas-idempotencia-duplicatas/slide-03.webp",
              alt: "Uma mesma mensagem repetida num consumidor sem proteção pode criar efeitos de negócio duplicados.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 3 · Entrega repetida pode duplicar efeitos",
          },
          {
            image: {
              src: "/articles/eventos-filas-idempotencia-duplicatas/slide-04.webp",
              alt: "A mesma operação chega duas vezes, mas um consumidor idempotente aplica apenas um efeito.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 4 · Torne o processamento idempotente",
          },
          {
            image: {
              src: "/articles/eventos-filas-idempotencia-duplicatas/slide-05.webp",
              alt: "Identificador estável permite detectar uma reentrega e ignorar a repetição do efeito.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 5 · Reconheça a mesma mensagem",
          },
          {
            image: {
              src: "/articles/eventos-filas-idempotencia-duplicatas/slide-06.webp",
              alt: "Falhas temporárias recebem tentativas limitadas; mensagens persistentes seguem para dead-letter.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 6 · Retry precisa de limite",
          },
          {
            image: {
              src: "/articles/eventos-filas-idempotencia-duplicatas/slide-07.webp",
              alt: "Fechamento combina ID estável, verificação de processamento, efeito e ack sem prometer exactly-once universal.",
              width: 1792,
              height: 2400,
            },
            title: "Slide 7 · Mensagens repetidas são parte do desenho",
          },
        ],
      },
    ],
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma mensagem pode ser processada e a confirmação se perder antes de chegar ao broker. O consumidor concluiu o trabalho, mas o broker não sabe disso e pode entregar a mensagem de novo. Esse cenário mostra por que uma fila não elimina a necessidade de lidar com repetição."
    ]
  },
      { type: "gallery", id: "linkedin-carousel", galleryId: "arq-006-linkedin", layout: "full" },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "O que significa processar uma vez?"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "“Uma vez” pode significar que o broker entregou uma mensagem uma vez, que o handler foi chamado uma vez ou que o efeito de negócio foi aplicado uma vez. Essas garantias são diferentes. Mesmo que a entrega seja repetida, o sistema pode garantir um único efeito observável se a operação for idempotente.",
      "Também não se deve presumir que todo broker tem as mesmas semânticas. Configuração, janela de visibilidade, confirmação e armazenamento variam. O contrato do consumidor deve começar pela possibilidade de retry e pelo que acontece quando o resultado do trabalho é ambíguo."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Chave estável e deduplicação"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "A mensagem deve carregar um identificador de evento ou uma chave de idempotência com significado no domínio. O consumidor registra esse identificador de forma durável e verifica se já aplicou o efeito. Uma chave gerada novamente a cada retry não ajuda a reconhecer a mesma operação.",
      "O registro da chave e a alteração de negócio precisam compartilhar uma transação ou uma estratégia equivalente. Se o consumidor marca a chave antes do efeito e falha, pode perder trabalho; se grava o efeito antes da chave e falha, pode duplicá-lo. A fronteira de atomicidade define o desenho."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "SQL",
    "code": "BEGIN;\n\nINSERT INTO processed_messages (message_id)\nVALUES (:message_id)\nON CONFLICT DO NOTHING;\n\n-- Se nenhuma linha foi inserida, já foi processada.\n-- Caso contrário, aplique a alteração de negócio\n-- na mesma transação.\n\nCOMMIT;",
    "caption": "Esboço do padrão inbox. A sintaxe e o tratamento do retorno variam por banco; efeitos externos exigem uma estratégia adicional."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Efeitos externos são mais difíceis"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Enviar um pagamento, disparar um e-mail ou chamar uma API externa pode ficar fora da transação local. Outbox, APIs idempotentes do provedor e estados de reconciliação ajudam, mas cada abordagem tem custos. Um e-mail, por exemplo, pode ser enviado e o processo cair antes de guardar a confirmação.",
      "Retries também precisam de política: atraso, limite, classificação de erro, fila de mensagens mortas e procedimento de redrive. Reexecutar infinitamente uma mensagem inválida pode ocupar recursos e ocultar que intervenção é necessária."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Desenhe o efeito, não o rótulo"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Escreva o que deve permanecer verdadeiro após uma mensagem duplicada. Para uma cobrança, pode ser “uma cobrança bem-sucedida por pedido”, não “o handler roda uma vez”. Teste a repetição antes e depois de cada ponto em que o processo pode cair.",
      "Não prometa exactly-once sem definir o escopo e os mecanismos envolvidos. Em muitos sistemas, entrega repetida com consumidor idempotente é uma expectativa operacional mais clara do que tentar eliminar qualquer duplicação em uma fronteira distribuída."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Defina a propriedade de negócio contra duplicatas e alinhe deduplicação, efeito e confirmação com uma fronteira de falha real.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Amazon SQS: at-least-once delivery",
    "href": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-006 da série Arquitetura de software",
  },
  {
    slug: "consistencia-eventual-leitura-atrasada",
    title: "Consistência eventual: por que a leitura pode estar atrasada?",
    category: "Arquitetura de software",
    summary: "Uma escrita aceita e uma projeção de leitura podem divergir temporariamente. O fluxo precisa mostrar esse estado, definir como propaga mudanças e explicar quando ocorre reconciliação.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "A pessoa altera um pedido e abre o painel imediatamente, mas ainda vê o estado anterior. Isso pode acontecer quando a escrita e a leitura usam modelos diferentes e a atualização da projeção ocorre de forma assíncrona. Consistência eventual é uma escolha de fluxo com consequências para interface, operação e suporte."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Escrita e leitura têm caminhos diferentes"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Uma gravação pode atualizar o modelo transacional e produzir um evento. Um consumidor atualiza depois a projeção otimizada para consulta. Entre esses momentos existe uma janela em que duas leituras legítimas mostram estados diferentes.",
      "A janela pode durar milissegundos ou se estender durante falha, backlog ou indisponibilidade do consumidor. “Eventual” só significa convergência se eventos forem entregues, falhas forem recuperáveis e a projeção tiver meios de voltar a um estado correto."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "A interface deve representar o estado"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Se uma ação foi aceita mas ainda não aparece na consulta, a interface pode mostrar “processando” ou retornar o resultado da própria escrita. Sem esse contrato, a pessoa interpreta uma leitura atrasada como perda de dados e tenta a operação de novo.",
      "Uma leitura após escrita pode ser tratada de vários modos: retornar o estado recém-criado, ler do modelo principal durante um curto intervalo, esperar uma versão de projeção ou aceitar a consistência atrasada. A melhor escolha depende da importância de feedback imediato e do custo de cada mecanismo."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "text",
    "code": "Pedido gravado: v42\n        │ evento publicado\n        ▼\nProjeção ainda em v41 ──► leitura antiga\n        │ consumidor aplica v42\n        ▼\nProjeção atualizada: v42",
    "caption": "Linha do tempo simplificada: a leitura fica atrasada durante a propagação. O sistema deve definir como exibir esse intervalo."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Propagação, retry e reconciliação"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Eventos precisam de confirmação, retry e monitoramento de atraso. Métricas como idade do evento mais antigo ou diferença entre posição de escrita e projeção ajudam a detectar que a convergência está demorando. Logs sem contexto suficiente não explicam qual atualização ficou para trás.",
      "Reconstruir uma projeção a partir de eventos ou da fonte transacional pode ajudar a reparar divergências. Isso exige eventos com significado estável, versão de schema e estratégia para processar em ordem quando a ordem for relevante."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Não use por reflexo"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Consistência eventual pode reduzir acoplamento ou escalar leituras, mas acrescenta estados intermediários, suporte e reconciliação. Para um CRUD pequeno, uma leitura transacional direta pode ser mais simples e suficientemente rápida.",
      "Antes de separar modelos, identifique a necessidade: volume de leitura, isolamento de carga, integração assíncrona ou formato de consulta diferente. Depois, desenhe o comportamento visível durante atraso e falha, em vez de esconder a janela de inconsistência do usuário."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Consistência eventual é um contrato sobre estados temporários e convergência, não uma promessa vaga de que tudo se corrigirá sozinho.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "DynamoDB read consistency — AWS",
    "href": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-007 da série Arquitetura de software",
  },
  {
    slug: "architecture-decision-records-adrs",
    title: "ADRs: como lembrar por que uma decisão foi tomada?",
    category: "Arquitetura de software",
    summary: "Um ADR curto preserva o contexto, a escolha e as consequências de uma decisão significativa. Ele ajuda quem chega depois sem transformar cada detalhe técnico em processo de aprovação.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Meses depois de uma decisão, alguém encontra uma fila, um banco ou uma biblioteca e pergunta: por que escolhemos isso? Se a resposta está apenas numa conversa antiga, a equipe precisa reconstruir o contexto e pode repetir uma discussão já encerrada."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Registre decisões que custam reverter"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Um ADR é útil quando a escolha altera fronteiras, operação, dados, segurança ou compromissos difíceis de mudar. A decisão pode ser pequena em linhas de código e ainda assim importante no sistema. Nem toda implementação precisa de um registro formal.",
      "O documento deve permitir que alguém ausente entenda o problema. Registre as forças relevantes: prazo, volume, competências, requisitos, dependências existentes e opções que foram avaliadas. Contexto sem alternativas tende a parecer justificativa escrita depois do fato."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "O que colocar no registro"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Um formato simples pode conter título, status, contexto, decisão, alternativas e consequências. Inclua benefícios e custos, além de sinais que fariam reconsiderar a escolha. Um ADR não precisa prever o futuro; precisa deixar visível o raciocínio disponível no momento.",
      "Guardar ADRs no repositório mantém histórico junto ao código e permite revisão por diff. A numeração facilita referência, enquanto um estado como aceito, substituído ou rejeitado impede que um documento antigo seja confundido com a regra atual."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "Markdown",
        "code": "# 0012. Processar relatórios em background\n\nStatus: Accepted\nDate: YYYY-MM-DD\n\n## Context\nRelatórios podem exceder o tempo de resposta interativo.\n\n## Decision\nAceitar o pedido e expor o estado do trabalho.\n\n## Consequences\n- Precisamos persistir estado e tratar retries.\n- A interface passa a exibir progresso/conclusão.\n- A decisão será revista se os relatórios ficarem síncronos.",
    "caption": "Exemplo esquemático. Um ADR real deve registrar opções consideradas e consequências específicas do contexto."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Um exemplo de decisão reversível"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Imagine escolher entre chamada síncrona e fila para gerar um relatório. O ADR deve explicar duração do trabalho, experiência esperada pelo usuário, comportamento durante falha e custo de operar um worker. Só escrever “usaremos fila porque escala melhor” não registra a necessidade nem o trade-off.",
      "Se o contexto mudar, um novo ADR pode substituir o anterior e apontar o que deixou de ser verdade. O registro antigo continua útil como histórico; não precisa ser editado para fingir que a equipe sempre soube o que sabe hoje."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Mantenha o processo leve"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "ADRs são memória de decisão, não uma cerimônia de aprovação universal. Para uma escolha local, uma nota no pull request pode bastar. Para decisões que afetam várias equipes ou operações, um registro duradouro pode reduzir custo de coordenação.",
      "A qualidade aparece quando as pessoas realmente consultam o histórico e atualizam decisões superadas. Se cada mudança trivial exige um formulário extenso, o processo vira trabalho de preenchimento e os registros deixam de refletir as decisões importantes."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escreva o suficiente para que outra pessoa entenda o contexto e o custo aceito; mantenha o registro perto do código.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Architecture Decision Record — Martin Fowler",
    "href": "https://martinfowler.com/bliki/ArchitectureDecisionRecord.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-008 da série Arquitetura de software",
  },
  {
    slug: "observabilidade-logs-metricas-traces",
    title: "Observabilidade: por que essa requisição falhou?",
    category: "Arquitetura de software",
    summary: "Logs, métricas e traces respondem perguntas diferentes. Correlacionados, ajudam a seguir uma operação por componentes sem transformar observabilidade em uma coleção de dashboards.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Um alerta diz que a taxa de erro aumentou. O dashboard não explica por que uma requisição específica falhou. Para sair do sintoma e chegar ao caminho de uma operação, o sistema precisa emitir sinais com contexto útil e uma estrutura de correlação."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Três sinais, perguntas diferentes"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Métricas agregam comportamento ao longo do tempo: taxa de erro, latência ou saturação. Logs registram eventos com detalhes do que ocorreu. Traces mostram o caminho de uma operação através de processos e dependências, com duração e relações entre spans.",
      "Um tipo de sinal não substitui automaticamente os outros. Uma métrica indica a janela do problema; o trace seleciona uma requisição; os logs associados detalham decisões e falhas. O valor vem de navegar entre eles sem perder o contexto."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Correlação sem vazar dados"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Um trace ID pode ligar spans e logs que pertencem à mesma operação. A instrumentação deve propagar esse contexto nas chamadas e incluir identificadores úteis nos registros. Campos de alta cardinalidade ou dados pessoais em métricas podem tornar o sistema caro ou inseguro.",
      "Observabilidade também exige controle de acesso e política de retenção. Tokens, conteúdo de usuários e segredos não devem aparecer como atributos de span por conveniência. Uma pergunta de diagnóstico precisa ser respondida com o mínimo de dado sensível necessário."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "text",
    "code": "trace_id: 8f3a…\n  ├─ api.create_order      42 ms\n  │   ├─ inventory.check  11 ms\n  │   └─ db.insert_order   8 ms\n  └─ payment.authorize   1.2 s  ERROR\n      └─ log: upstream timeout",
    "caption": "Trace simplificado. A correlação permite sair de um alerta agregado e inspecionar uma operação específica."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Instrumente perguntas de operação"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Comece pelos fluxos importantes: criar pedido, processar pagamento, importar arquivo. Defina como reconhecer sucesso, atraso e falha; depois instrumente limites entre componentes. Em um trace, nomeie operações pelo que fazem, não por valores variáveis como IDs de usuário.",
      "Métricas de serviço podem acompanhar taxa, erros e duração; alertas devem apontar um impacto que alguém possa investigar. Um painel com dezenas de gráficos sem hipótese de operação não é observabilidade, é visualização sem pergunta."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Sinal útil exige manutenção"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "A instrumentação muda junto com o sistema. Novos serviços precisam propagar contexto; mudanças de schema precisam manter consumidores; dashboards e alertas precisam ser ajustados quando o fluxo muda. O custo de telemetria também cresce com volume, retenção e cardinalidade.",
      "Teste o caminho de ponta a ponta em ambiente controlado. Gere uma requisição conhecida, confirme a existência do trace e verifique se logs relacionados podem ser encontrados. Essa checagem simples ajuda a descobrir que a instrumentação foi configurada no SDK, mas não está chegando ao backend esperado."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Defina a pergunta operacional primeiro; emita sinais correlacionáveis e seguros para respondê-la.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "OpenTelemetry documentation",
    "href": "https://opentelemetry.io/docs/"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-009 da série Arquitetura de software",
  },
  {
    slug: "resiliencia-timeout-retry-circuit-breaker",
    title: "Resiliência: como uma falha não vira uma cascata?",
    category: "Arquitetura de software",
    summary: "Timeout, retry, circuit breaker e bulkhead resolvem problemas diferentes. Aplicados sem limites ou conhecimento da operação, podem aumentar a carga e piorar a falha que tentavam esconder.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Quando um serviço dependente fica lento, chamadas podem acumular, ocupar conexões e consumir workers. Se todos os clientes repetem a solicitação imediatamente, a recuperação fica ainda mais difícil. Resiliência começa por decidir quanto tempo e recurso uma operação pode gastar."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Timeout limita espera"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Cada chamada remota deve ter um orçamento de tempo compatível com a experiência do produto e o prazo total da requisição. Sem timeout, uma dependência lenta pode ocupar recursos indefinidamente. Timeouts precisam propagar cancelamento quando possível e respeitar o orçamento restante do fluxo.",
      "O valor não deve ser escolhido por intuição ou copiado de outro serviço. Observe distribuições de latência, variação esperada e falsos timeouts. Um prazo muito curto converte lentidão normal em erro; um prazo muito longo deixa filas crescerem antes de detectar o problema."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Retry é para falhas transitórias"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Repetir pode ajudar em falhas breves, mas cada tentativa produz mais carga e pode repetir um efeito. Use limite de tentativas, backoff e jitter; evite retry em operações que não são idempotentes ou em erros permanentes como validação inválida.",
      "Se várias camadas repetem a mesma chamada, a quantidade total de tentativas pode se multiplicar. Defina quem é responsável pelo retry e inclua a política no orçamento de tempo. Em fluxos de pagamento, idempotência precisa ser parte do contrato antes de repetir."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "text",
    "code": "deadline total: 900 ms\n  chamada A: timeout 300 ms\n    tentativa 1: 180 ms → erro transitório\n    backoff + jitter: 40–90 ms\n    tentativa 2: 210 ms → sucesso\n  restante do orçamento: 420 ms",
    "caption": "Exemplo ilustrativo. Os prazos devem ser medidos no sistema real e respeitar o orçamento total do fluxo."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Circuit breaker e bulkhead"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Circuit breaker acompanha falhas e temporariamente evita chamadas que provavelmente continuarão falhando. Depois de uma janela, permite tentativas limitadas para avaliar recuperação. Não corrige a dependência; evita insistir nela sem limite.",
      "Bulkhead separa recursos para que a saturação de um fluxo não consuma toda a capacidade. Pools, filas ou limites de concorrência podem criar isolamento. Há custo de configuração e capacidade ociosa; o isolamento precisa corresponder a falhas que a equipe quer conter."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Modele a degradação"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Decida o que o produto faz quando a dependência falha: retornar erro claro, servir dado stale, aceitar trabalho posterior ou desligar função não essencial. Uma fallback que mostra dado incorreto sem avisar pode ser pior que indisponibilidade explícita.",
      "Teste combinações de latência, timeout, repetição e saturação em ambiente controlado. Resiliência não é adicionar cada padrão conhecido a todo cliente HTTP; é definir falha esperada, limite e comportamento recuperável para o fluxo específico."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Limite espera, carga e concorrência. Para cada política, defina qual falha ela contém e como o usuário percebe o resultado.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Timeouts, retries, and backoff with jitter — AWS Builders’ Library",
    "href": "https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-010 da série Arquitetura de software",
  },
  {
    slug: "api-sincrona-assincrona-trabalho-longo",
    title: "API síncrona ou assíncrona: responder agora ou aceitar o trabalho?",
    category: "Arquitetura de software",
    summary: "Uma operação curta pode responder com o resultado. Uma tarefa longa pode ser aceita e acompanhada por estado, mas isso adiciona persistência, retry e uma nova experiência de produto.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Gerar um relatório pode levar tempo demais para uma chamada HTTP interativa. Ainda assim, o cliente precisa de uma resposta clara: o pedido foi aceito? terminou? falhou? O desenho da API deve representar essas etapas em vez de manter uma conexão aberta sem um contrato definido."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Síncrono é simples quando cabe"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Em request/response, o cliente envia uma solicitação e recebe o resultado durante a mesma interação. Esse caminho é simples para operações curtas e quando o cliente precisa do valor imediatamente. Uma chamada assíncrona no código cliente ainda pode estar usando HTTP síncrono no protocolo: é importante separar essas ideias.",
      "O limite não é apenas um número de segundos. Proxies, clientes móveis, timeouts e capacidade do servidor influenciam a janela. Se a operação pode exceder esses limites, responder que o trabalho foi aceito pode ser mais honesto do que manter uma conexão aberta."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Aceitar não é concluir"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Uma resposta HTTP 202 pode significar que a solicitação foi aceita para processamento, não que terminou com sucesso. O contrato costuma incluir um identificador ou URL para consultar estado. O cliente pode então mostrar pendente, concluído ou falhou, com uma ação adequada para cada estado.",
      "A aplicação precisa persistir a solicitação antes de confirmar aceitação e definir como retomar trabalho após reinício. Um worker pode pegar o job, atualizá-lo e registrar resultado. Filas oferecem desacoplamento, mas não substituem armazenamento de estado se o cliente precisa acompanhar a operação."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "HTTP",
    "code": "POST /reports\n→ 202 Accepted\n  Location: /reports/jobs/job-42\n\nGET /reports/jobs/job-42\n→ 200 { \"status\": \"running\" }\n\nGET /reports/jobs/job-42\n→ 303 See Other\n  Location: /reports/report-42",
    "caption": "Contrato esquemático de request-reply assíncrono. Autorização, retenção e idempotência precisam ser especificadas pelo sistema."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Polling não é a única opção"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "O cliente pode consultar o status periodicamente, receber callback ou usar canal de atualização em tempo real. Polling é simples e funciona em muitos ambientes, mas frequência, carga, autenticação e política de cache precisam ser definidos. Webhooks e conexões persistentes têm seus próprios custos.",
      "O resultado pode expirar ou exigir autorização continuada. Não exponha um job ID como se fosse segredo suficiente para acessar dados sensíveis; valide quem pode consultar ou cancelar o trabalho."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "A experiência precisa fechar o ciclo"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Defina estados e transições: aceito, em execução, concluído, falhou ou cancelado. Inclua como retry afeta a operação, o que acontece com duplicatas e quanto tempo o resultado fica disponível. Se o trabalho for cancelável, especifique quando o cancelamento ainda é possível.",
      "Nem todo processamento merece fila. Para tarefas rápidas, a complexidade de status, worker e recuperação pode custar mais do que o benefício. Para uma operação longa, uma resposta explícita de aceite e acompanhamento pode dar previsibilidade ao produto e separar escalabilidade do processamento."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Responda imediatamente quando o resultado cabe no ciclo interativo; caso contrário, modele aceite, estado e conclusão como recursos distintos.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Asynchronous Request-Reply pattern — Microsoft Learn",
    "href": "https://learn.microsoft.com/en-us/azure/architecture/patterns/asynchronous-request-reply"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-011 da série Arquitetura de software",
  },
  {
    slug: "migracao-esquema-expandir-migrar-contrair",
    title: "Migração de banco sem parar todos os deploys",
    category: "Arquitetura de software",
    summary: "Expandir, migrar e contrair permite que versões antiga e nova convivam durante uma mudança incompatível de schema. A sequência reduz acoplamento entre deploy e migração, mas exige cuidado com dados e locks.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma coluna precisa mudar de nome, mas duas versões da aplicação podem estar ativas durante o deploy. Se o schema novo quebrar a aplicação antiga, uma migração correta em ambiente vazio pode causar indisponibilidade no rollout. Mudanças compatíveis em etapas ajudam a controlar essa convivência."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Expandir mantendo compatibilidade"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Primeiro, acrescente a nova estrutura sem remover a antiga. O código novo pode escrever nas duas colunas ou escrever na nova e manter leitura compatível com o período de transição. A versão antiga ainda encontra aquilo que espera; a versão nova já tem para onde migrar.",
      "Essa fase não é livre de risco. DDL pode adquirir locks, reconstruir índices ou consumir recursos dependendo do banco e do tamanho da tabela. Planeje a operação com as características do engine, teste com volume representativo e monitore tempo e bloqueios."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Migrar consumidores e dados"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Depois, atualize o código para usar a nova forma e migre dados existentes em lotes ou tarefa controlada. Uma backfill longa precisa ser retomável, idempotente e observável. Compare contagens ou checksums para encontrar divergências antes de remover a coluna antiga.",
      "Durante a convivência, determine a fonte de verdade e a direção de escrita. Gravar duas colunas sem reconciliação pode criar valores divergentes. A migração de dados e a mudança de aplicação devem ter checkpoints e um plano para pausar ou retomar."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "SQL",
    "code": "-- 1. Expand: coluna nova, sem remover a antiga\nALTER TABLE customers ADD COLUMN full_name text;\n\n-- 2. Migrate: preencher em lotes e ler a nova coluna\n-- 3. Contract: após confirmar todos os consumidores\nALTER TABLE customers DROP COLUMN display_name;",
    "caption": "Sequência ilustrativa. Faça backfill e mudança de leitura/escrita em deploys compatíveis; avalie locks e comportamento do banco utilizado."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Contrair depois de confirmar"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Quando todas as instâncias antigas e consumidores deixarem de usar o campo antigo, uma etapa posterior pode remover compatibilidade. Verifique workers, scripts, consultas analíticas e versões implantadas; tráfego HTTP não é o único consumidor do schema.",
      "Separar a contração em outro deploy mantém a possibilidade de observar o uso antigo antes da remoção. A janela de convivência precisa ser suficiente para detectar consumidores atrasados, especialmente jobs e integrações que não executam continuamente."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Migração não é rollback"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Uma migração de schema pode não ser reversível sem perda ou transformação de dados. Plano de rollback pode significar voltar o código compatível, pausar o rollout, executar migração compensatória ou restaurar backup sob condições conhecidas. Não trate `down` migration como garantia universal.",
      "Use expand-migrate-contract quando versões diferentes realmente precisam conviver. Para mudanças aditivas simples, o processo pode ser menor; para schema grande, locks ou transformação semântica, talvez seja necessário mais etapas. A sequência reduz risco quando planejada, não elimina a necessidade de observabilidade e recuperação."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Mantenha compatibilidade enquanto versões coexistem e só remova a forma antiga depois de verificar todos os consumidores.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Backwards compatibility across updates — GitLab Docs",
    "href": "https://docs.gitlab.com/development/multi_version_compatibility/"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-012 da série Arquitetura de software",
  },
  {
    slug: "feature-flags-deploy-lancamento",
    title: "Feature flags: deploy não precisa ser lançamento",
    category: "Arquitetura de software",
    summary: "Uma flag pode separar a publicação de código da exposição de um recurso. O ganho de rollout controlado vem com trabalho de ownership, métricas, limpeza e segurança para estados ligados e desligados.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "O código pode chegar à produção antes de ficar visível para todas as pessoas. Uma feature flag escolhe qual caminho executar e permite liberar gradualmente ou manter a funcionalidade desligada enquanto outra parte do sistema é preparada."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Flags têm usos diferentes"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Flags de release ocultam funcionalidade ainda em construção; flags operacionais permitem desligar um caminho caro; experimentos distribuem grupos para comparar resultados. Esses casos diferem em duração, frequência de mudança, quem controla e como a decisão é auditada.",
      "Tratar toda flag como booleano temporário pode criar riscos. Uma flag operacional que fica por anos merece monitoramento e dono; uma flag de rollout que já cumpriu seu papel deve ser removida para evitar caminhos mortos."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Rollout gradual exige sinais"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Ligar para um grupo pequeno reduz a população inicialmente exposta, mas não prova segurança por si só. Compare métricas relevantes, falhas, suporte e comportamento por coorte. Defina critérios de avanço e rollback antes de começar, para não escolher a interpretação depois de ver os dados.",
      "A seleção de coorte deve ser estável se o usuário precisa permanecer no mesmo caminho. A decisão pode depender de conta, tenant, região ou porcentagem; cada dimensão tem implicações de privacidade, consistência e suporte."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "TypeScript",
    "code": "if (flags.isEnabled(\"new-checkout\", { accountId })) {\n  return checkoutV2.start(cart);\n}\nreturn checkoutV1.start(cart);",
    "caption": "Exemplo esquemático. Rollout não substitui autorização; a flag precisa ter dono, critério de avaliação e plano de remoção."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Proteja o caminho desligado"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Código atrás de uma flag ainda está implantado. O caminho desligado precisa compilar, inicializar e não executar efeitos inesperados. Testes devem exercitar estados ligado e desligado e garantir que a flag não permite contornar autorização ou política de segurança.",
      "Flags não são mecanismo de autorização. Se uma funcionalidade exige entitlement ou permissão, essa validação precisa existir independentemente do controle de rollout. Uma flag global mal configurada não deve conceder acesso a dados ou operações protegidas."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Dono, prazo e remoção"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Cada flag deve ter responsável, propósito, estados esperados e data para revisar. Para uma flag temporária, a tarefa de remoção pode ser criada junto com a implementação. Uma lista de flags antigas ou caminhos sem teste é sinal de que a técnica virou dívida.",
      "O valor da flag deve ser observável sem expor segredos. Se a decisão é dinâmica, considere consistência de configuração, cache e comportamento quando o serviço de flags fica indisponível. A estratégia de fallback deve ser apropriada ao risco do recurso."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Use uma flag para controlar uma mudança explícita e gerencie seu ciclo de vida como parte da entrega.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Feature Toggles — Martin Fowler",
    "href": "https://martinfowler.com/articles/feature-toggles.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-013 da série Arquitetura de software",
  },
  {
    slug: "seguranca-menor-privilegio-componentes",
    title: "Segurança: dê a cada componente só o acesso necessário",
    category: "Arquitetura de software",
    summary: "Menor privilégio limita o impacto de credenciais ou componentes comprometidos. Permissões devem refletir ação e escopo de cada identidade, acompanhadas por auditoria e revisão.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Se um worker comprometido consegue ler todas as tabelas, apagar buckets e administrar usuários, um único problema pode atingir o sistema inteiro. O princípio do menor privilégio reduz esse raio de impacto ao conceder a cada identidade apenas o acesso necessário para uma tarefa."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Identidade por responsabilidade"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Uma aplicação pode ter identidades distintas para API, worker de imagem e rotina de relatório. Cada processo recebe credenciais apropriadas ao seu papel, em vez de compartilhar uma chave administrativa entre todos os componentes.",
      "Autenticação confirma quem está chamando; autorização decide o que pode fazer. Uma pessoa logada ainda precisa de permissões para uma conta ou recurso específico. Verificar somente que existe uma sessão não garante que o recurso pertence àquela pessoa."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Escopo na operação"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Permissões amplas como “administrador” são fáceis de implementar e difíceis de auditar. Prefira ações explícitas e recursos delimitados: ler pedidos de uma organização, emitir um reembolso dentro de uma faixa aprovada, gravar derivados em um bucket específico.",
      "A autorização deve ocorrer no servidor e perto da operação protegida. Ocultar um botão na interface melhora a experiência, mas não impede uma requisição direta. Os dados do tenant e do recurso devem ser vinculados à identidade confiável, não aceitos cegamente do cliente."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "TypeScript",
    "code": "async function getInvoice(actor: Actor, invoiceId: string) {\n  const invoice = await invoices.findById(invoiceId);\n  if (!invoice || invoice.tenantId !== actor.tenantId) {\n    throw new NotFoundError();\n  }\n  return invoice;\n}",
    "caption": "Exemplo de escopo por tenant no servidor. Uma política real deve considerar papéis, ações, auditoria e respostas que evitem exposição indevida."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Credenciais e ciclo de vida"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Credenciais de serviço precisam de rotação, armazenamento seguro e permissões mínimas no provedor. Segredos colocados em imagens, logs ou repositórios anulam a intenção de conceder acesso controlado. Use mecanismos de identidade temporária quando disponíveis e revise quais processos realmente precisam da credencial.",
      "Registros de auditoria devem informar quem fez o quê e quando, sem gravar tokens ou conteúdo sensível desnecessário. Uma permissão concedida por exceção precisa ter responsável e prazo de revisão."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Controles em camadas"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Menor privilégio é uma decisão contínua: identidades, rotas, banco, storage, CI e operadores precisam de limites apropriados. Nenhuma única camada substitui a validação das outras, especialmente para operações críticas.",
      "Comece por mapear o fluxo de dados e as ações de cada componente. Remova permissões que não são usadas, monitore negações e teste que identidades legítimas não conseguem atravessar fronteiras. Uma matriz simples de papel, ação e recurso já revela acessos acidentais."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Vincule identidade, ação e recurso; reduza permissões em cada fronteira e teste acessos indevidos.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "OWASP Developer Guide: Security Principles",
    "href": "https://devguide.owasp.org/en/02-foundations/03-security-principles/"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-014 da série Arquitetura de software",
  },
  {
    slug: "multi-tenancy-espectro-isolamento",
    title: "Multi-tenancy: quanto isolamento cada cliente precisa?",
    category: "Arquitetura de software",
    summary: "Multi-tenancy é um espectro entre recursos compartilhados e dedicados. A escolha equilibra custo, operação, requisitos de isolamento, capacidade e risco de vazamento entre tenants.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Em SaaS, várias organizações usam a mesma aplicação, mas não devem enxergar os dados umas das outras. Isolamento não é apenas escolher uma estratégia de tabela: identidade, cache, filas, logs, arquivos, backups e operações também atravessam a fronteira do tenant."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Pool, silo e modelos híbridos"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "No modelo pool, muitos tenants compartilham recursos e a aplicação aplica isolamento lógico. Isso pode melhorar utilização e simplificar gestão, mas aumenta a importância de aplicar o tenant correto em todas as consultas e operações.",
      "No modelo silo, cada tenant tem recursos dedicados. Isso pode atender requisitos específicos de isolamento, desempenho ou compliance, mas aumenta custo, provisioning e quantidade de ambientes para monitorar. Modelos híbridos permitem reservar silos para alguns planos e manter pool para outros."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "O identificador não é autorização"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Receber tenant_id do cliente não é prova de que aquela pessoa pode usar o tenant. O backend deve resolver o contexto a partir de uma identidade autenticada e verificar participação e permissões. A consulta também deve filtrar por tenant, não apenas o carregamento inicial da página.",
      "Uma falha de escopo em endpoint, job assíncrono, cache key ou URL de arquivo pode expor informação. Liste cada armazenamento e caminho de execução; teste tentativas cruzadas entre tenants. Isolamento é uma propriedade end-to-end, não um campo isolado no schema."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "SQL",
    "code": "SELECT id, total, status\nFROM orders\nWHERE id = :order_id\n  AND tenant_id = :authorized_tenant_id;",
    "caption": "A consulta escopa o recurso no banco. O tenant autorizado precisa vir do contexto autenticado, não de um parâmetro confiado do cliente."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Noisy neighbor e limites"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Recursos compartilhados criam possibilidade de um tenant consumir capacidade desproporcional e prejudicar outros. Rate limits, quotas, particionamento e observação por tenant ajudam a controlar capacidade e custo. O limite deve refletir contrato do produto, não ser um número arbitrário escondido em middleware.",
      "Também existe custo de fairness: limitar um tenant pode rejeitar picos legítimos; não limitar pode afetar a plataforma. Métricas agregadas e por tenant ajudam a detectar concentração sem transformar cada painel em uma lista de dados pessoais."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Decida pela necessidade e evidência"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Requisitos legais, residência de dados, chaves próprias, customização, perfil de tráfego e custo operacional influenciam o modelo. Nenhuma estratégia é universalmente mais segura ou econômica sem conhecer o contexto e o modo de operação.",
      "Documente quais camadas são compartilhadas, que controles isolam tenant, como onboardar e remover recursos, e como responder a incidente. Migração entre pool e silo deve ser prevista antes que a arquitetura torne cada exceção manual."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escolha o grau de isolamento pelo risco, contrato e capacidade de operar; verifique o escopo em todo o caminho dos dados.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "SaaS Tenant Isolation Strategies — AWS",
    "href": "https://docs.aws.amazon.com/whitepapers/latest/saas-tenant-isolation-strategies/saas-tenant-isolation-strategies.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-015 da série Arquitetura de software",
  },
  {
    slug: "cache-aside-frescor-fonte-verdade",
    title: "Cache: que dado pode ficar desatualizado?",
    category: "Arquitetura de software",
    summary: "Cache-aside pode reduzir leituras repetidas, mas cria uma cópia temporária com política de frescor e falha. A fonte de verdade e a estratégia de invalidação precisam estar claras.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Um cache pode acelerar uma leitura, mas também pode servir um valor antigo ou ficar indisponível. Cache não transforma automaticamente uma consulta lenta em arquitetura mais simples: acrescenta uma cópia, uma chave e um conjunto de decisões de frescor."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Cache-aside em três passos"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "No padrão cache-aside, a aplicação verifica o cache. Se há hit, retorna o valor; se há miss, lê a fonte, guarda uma cópia por um período e devolve o resultado. A aplicação controla essa sequência, e o banco continua sendo a fonte de verdade.",
      "A chave deve representar todos os fatores que alteram o resultado, incluindo tenant, idioma, permissão ou versão quando relevantes. Uma chave incompleta pode produzir vazamento entre usuários ou retornar conteúdo incorreto, não apenas cache miss."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Invalidar é o problema central"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Depois de uma escrita, o sistema pode remover a chave ou atualizar o valor no cache. TTL limita por quanto tempo uma entrada pode permanecer, mas não garante que ela seja atualizada imediatamente. O requisito de frescor deve ser definido pelo produto.",
      "Invalidar muitas chaves pode exigir catálogo de dependências; atualizar ao escrever pode sofrer corrida com uma leitura concorrente. Considere a sequência de eventos e o que acontece se cache e banco divergirem temporariamente."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "TypeScript",
    "code": "async function getProduct(id: string) {\n  const key = `product:${id}`;\n  const cached = await cache.get(key);\n  if (cached) return JSON.parse(cached);\n\n  const product = await database.findProduct(id);\n  await cache.set(key, JSON.stringify(product), { ttl: 60 });\n  return product;\n}",
    "caption": "Cache-aside ilustrativo. Em produção, trate cache miss concorrente, valores inválidos, timeout e escopo completo da chave."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Falha e stampede"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Se o cache cai, o banco pode receber toda a carga que antes estava distribuída. Timeout, fallback, limite de concorrência e proteção contra avalanche de expiração ajudam a impedir que uma otimização se transforme em indisponibilidade da fonte principal.",
      "Várias requisições simultâneas para a mesma chave ausente podem disparar a mesma consulta cara. Single-flight, lock curto ou pré-aquecimento podem reduzir trabalho repetido, mas também acrescentam estados e comportamento de contenção que precisam ser observados."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Meça o valor líquido"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Acompanhe hit rate, latência, custo da infraestrutura, tamanho e idade de entradas. Hit rate alto não significa que a resposta esteja correta nem que o sistema ficou mais rápido de ponta a ponta. Uma métrica deve corresponder à experiência do usuário ou ao custo que a mudança pretendia reduzir.",
      "Comece com dado que pode ser recalculado e cuja leitura repetida é realmente cara. Se o cache vira fonte de verdade ou exige sincronização mais complexa que a consulta original, volte a avaliar se a camada está resolvendo o problema certo."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Defina fonte de verdade, frescor aceitável e comportamento em falha antes de adicionar uma cópia cacheada.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Caching patterns — AWS Prescriptive Guidance",
    "href": "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/caching.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-016 da série Arquitetura de software",
  },
  {
    slug: "funcao-job-ou-worker-continuo",
    title: "Função, job ou worker contínuo?",
    category: "Arquitetura de software",
    summary: "Escolha o modelo de execução pelo ciclo de vida do trabalho: resposta a evento, tarefa finita ou consumo persistente. O nome da infraestrutura não substitui limites, retries e operação.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma geração de relatório, uma rotina noturna e um consumidor de fila podem executar o mesmo código de negócio, mas têm ciclos de vida distintos. A arquitetura deve começar pelo gatilho, duração, volume e necessidade de acompanhar o resultado."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Função acionada por evento"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Uma função sob demanda pode se ajustar a eventos curtos e intermitentes, quando a plataforma inicia a execução e administra parte da infraestrutura. Limites de duração, concorrência, cold start, ambiente e integração variam entre provedores e precisam ser verificados.",
      "Esse modelo não significa automaticamente menor custo ou menos operação. Estado local pode desaparecer entre execuções, dependências externas podem falhar e concorrência pode crescer rapidamente. O desenho precisa controlar repetição, idempotência e acesso a recursos."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Job finito"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Um job representa uma unidade de trabalho que começa, termina e pode registrar resultado. Ele é adequado para importação, migração ou geração periódica quando o processo tem começo e fim definidos. Um job pode rodar em container, scheduler ou plataforma batch.",
      "Persistir estado do job ajuda a retomar, auditar e comunicar conclusão. Defina prazo, checkpoint, retry e estratégia para interromper ou reexecutar. Se o job for grande, processar em lotes e persistir progresso pode ser mais confiável que depender de uma execução longa única."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "text",
    "code": "requisição interativa ──► API\n                             │ aceita job\n                             ▼\nevento pontual ───────► função\ntrabalho finito ──────► job com estado\nfluxo contínuo ───────► worker consumidor",
    "caption": "Mapa de partida, não regra de provedor. A mesma tarefa pode precisar de mais de um desses componentes."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Worker contínuo"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Um worker persistente consome uma fila ou atende uma conexão ao longo do tempo. Pode ser apropriado para fluxo constante, controle de concorrência e afinidade com recursos de longa duração. Ele também precisa de shutdown gracioso, health checks, escalonamento e recuperação de mensagens em processamento.",
      "A capacidade pode ser dimensionada por backlog, mas um número alto de consumers também pode sobrecarregar dependências. Controle de concorrência precisa considerar o recurso mais limitado, como banco ou API externa, e não apenas CPUs disponíveis."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Compare o trabalho de ponta a ponta"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Pergunte se a entrada chega como requisição ou evento, quanto tempo leva, se precisa de progresso, que efeitos pode repetir e como recuperar após falha. Um fluxo pode combinar modelos: a API aceita o pedido, um job processa e um evento notifica a conclusão.",
      "Evite escolher função, Kubernetes ou servidor porque está na moda. Compare carga operacional, custo de ociosidade, limites da plataforma, observabilidade e experiência do cliente. O modelo é bom quando representa bem o trabalho e deixa claras as políticas de execução."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escolha o ciclo de execução pelo trabalho e pela recuperação necessária, depois selecione a plataforma que o suporta.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "AWS Serverless vs. Containers — decision guide",
    "href": "https://docs.aws.amazon.com/decision-guides/latest/serverless-or-container/serverless-or-container.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-017 da série Arquitetura de software",
  },
  {
    slug: "ownership-linhagem-de-dados-confianca",
    title: "Dados: de onde veio este número?",
    category: "Arquitetura de software",
    summary: "Ownership, qualidade e linhagem ajudam a explicar como um indicador foi produzido e quem responde por ele. Documente primeiro transformações importantes, não cada cópia de dado.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma tela mostra a receita do mês, mas duas equipes chegam a totais diferentes. Para investigar, é preciso saber qual sistema é a fonte, que filtros foram aplicados, quando os dados foram atualizados e quem pode explicar a transformação."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Defina quem responde pelo dado"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Ownership significa que existe uma equipe ou papel responsável por qualidade, semântica, acesso e mudanças de um conjunto de dados. Não quer dizer que essa equipe é a única que pode consumir os dados; quer dizer que há um contato para esclarecer contratos e problemas.",
      "O nome de uma coluna pode ser tecnicamente correto e semanticamente ambíguo. “Receita” pode incluir ou excluir impostos, cancelamentos, descontos e pagamentos pendentes. Um catálogo mínimo deve registrar definição, unidade, janela temporal e consumidor principal."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Linhagem conta a transformação"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Linhagem descreve a origem e o caminho do dado até um consumidor. Para um indicador, isso pode conectar evento transacional, tabela, transformação e dashboard. A trilha ajuda a avaliar impacto quando um campo ou cálculo muda.",
      "Nem toda cópia merece documentação manual. Priorize dados críticos, transformações que mudam significado e métricas usadas em decisões. Granularidade de evento e integração com ferramentas podem ser adicionadas conforme risco e escala."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "text",
    "code": "pagamento liquidado\n   │ evento: payment.settled\n   ▼\nfato financeiro (fonte transacional)\n   │ filtra cancelamentos; converte moeda\n   ▼\nmodelo mensal de receita\n   │ dashboard executivo",
    "caption": "Linhagem conceitual: cada transformação que muda o significado deve ser explícita e ter responsável."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Qualidade é observável"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Completude, unicidade, atualidade e valores esperados são dimensões diferentes. Testes de dados podem verificar regras como “todo pagamento liquidado tem moeda” ou “a data de atualização não é anterior ao evento”. A regra deve refletir o uso, não só a forma da coluna.",
      "Quando uma verificação falha, defina quem recebe o alerta, como avaliar impacto e se os consumidores devem usar o resultado parcial. Uma checagem silenciosa que produz alerta ignorado não aumenta confiança no dado."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Proteja significado e acesso"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Linhagem pode expor nomes de sistemas, tabelas e relações sensíveis; controles de acesso continuam necessários. Propriedade clara também não significa abrir dados a qualquer equipe. Classificação e autorização acompanham o ciclo de vida do dado.",
      "Um número confiável precisa de definição, origem, transformação e responsável suficientes para ser explicado. Comece com um indicador de alto impacto e siga sua jornada real; a documentação que não é consultada ou atualizada vira decoração."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Siga um dado importante de sua origem até a decisão que ele informa; registre semântica, transformações e ownership.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "OpenLineage documentation",
    "href": "https://openlineage.io/docs/"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-018 da série Arquitetura de software",
  },
  {
    slug: "abstracao-ou-duplicacao-custo-de-mudanca",
    title: "Abstrair ou duplicar: qual mudança você está preparando?",
    category: "Arquitetura de software",
    summary: "Duplicação pode preservar clareza enquanto variações ainda são incertas; abstração vale quando comportamentos evoluem juntos e uma regra compartilhada reduz o custo de mudança.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Duas funções parecidas aparecem no repositório e a reação imediata pode ser extrair um helper. Antes de fazê-lo, vale entender se elas representam a mesma regra ou apenas compartilham algumas linhas hoje. Uma abstração prematura pode unir coisas que vão mudar por motivos diferentes."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Semelhança de texto não é semelhança de regra"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Duas validações podem comparar campos parecidos e ainda representar políticas distintas. Se uma mudar para atender a uma exigência específica, uma função compartilhada pode acumular parâmetros e condicionais que tornam o comportamento menos visível.",
      "Por outro lado, uma regra duplicada que precisa mudar em todos os lugares pode divergir com facilidade. A pergunta é se os trechos devem permanecer iguais por uma razão do domínio, ou se coincidem apenas na implementação atual."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Espere variações reais quando possível"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Em código novo, uma pequena duplicação local pode ser mais simples que desenhar uma abstração antes de conhecer os casos. Quando surgem variações, observe se elas repetem um padrão coerente ou se cada consumidor está mudando em direção diferente.",
      "Essa espera não significa copiar tudo sem cuidado. Mantenha limites de módulo e dê nomes claros. Quando a repetição aumenta custo de alteração, extraia um conceito que a equipe reconhece, não apenas a menor sequência comum de linhas."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "TypeScript",
    "code": "// Dois fluxos parecidos podem ter políticas diferentes.\nfunction validateInvoiceDraft(draft: InvoiceDraft) {\n  return validateRequiredFields(draft);\n}\n\nfunction validatePublishedInvoice(invoice: Invoice) {\n  return validateRequiredFields(invoice)\n    && validateTaxRules(invoice);\n}",
    "caption": "A função compartilhada só é útil se required fields tiver a mesma semântica nos dois contextos e puder evoluir em conjunto."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Abstração boa reduz decisão duplicada"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Uma abstração útil concentra uma regra estável e dá aos consumidores uma linguagem simples. Ela esconde detalhes que não deveriam variar por chamada. Se os usuários precisam passar muitos booleanos, callbacks e strings para restaurar diferenças internas, talvez a abstração esteja apagando distinções importantes.",
      "Meça custo de mudança e risco de divergência: quantos lugares precisam de atualização; com que frequência isso acontece; quanto contexto se exige para alterar; qual erro ocorreu por manter implementações separadas. Esse histórico é mais informativo que uma contagem de linhas."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Mantenha possibilidade de refatorar"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Duplicação pode ser removida quando o padrão se estabiliza. Uma abstração também pode ser dividida quando passa a esconder regras diferentes. Refatorações menores, com testes e commits focados, reduzem o risco de a decisão virar permanente por acidente.",
      "DRY é um lembrete contra repetir conhecimento que deveria ter uma única fonte. Não exige que cada caractere semelhante seja compartilhado. Preserve o que muda junto; separe o que muda por razões independentes."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Extraia quando houver conhecimento e mudança compartilhados; mantenha duplicação localizada quando a semelhança ainda for superficial.",
    "tone": "result"
  }
],
    references: [
  {
      "label": "YAGNI — Martin Fowler",
      "href": "https://martinfowler.com/bliki/Yagni.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-019 da série Arquitetura de software",
  },
  {
    slug: "divida-tecnica-priorizar-risco-de-mudanca",
    title: "Dívida técnica: qual problema estrutural resolver primeiro?",
    category: "Arquitetura de software",
    summary: "Dívida técnica descreve um trade-off e seus custos, não um rótulo moral. Priorize problemas pelo impacto observável, risco e mudanças de produto que estão próximas.",
    publishedAt: "2026-11-06",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "“Precisamos reescrever esse módulo” é uma conclusão grande; “mudanças de preço quebraram três fluxos e exigiram deploy de emergência” é uma observação que ajuda a decidir. Dívida técnica fica mais tratável quando sai da metáfora e vira custo e risco que a equipe consegue descrever."
    ]
  },
  {
    "type": "heading",
    "id": "sec-1",
    "title": "Separe sintoma de solução"
  },
  {
    "type": "paragraphs",
    "id": "texto-1",
    "paragraphs": [
      "Lentidão, incidentes, medo de alterar ou duplicação são sintomas. Uma reescrita é uma possível resposta, mas pode não atacar a causa; a equipe pode recriar as mesmas fronteiras no sistema novo. Registre o problema sem embutir a solução no título.",
      "Uma nota útil descreve quem é afetado, com que frequência, que mudanças ficam caras e que evidência existe. Um caso reproduzível, histórico de incidentes, tempo de entrega ou caminhos de código tocados ajudam a discutir prioridade."
    ]
  },
  {
    "type": "heading",
    "id": "sec-2",
    "title": "Priorize pelo impacto e pela proximidade"
  },
  {
    "type": "paragraphs",
    "id": "texto-2",
    "paragraphs": [
      "Considere impacto no usuário, frequência do problema, risco de falha, custo de mudança e probabilidade de uma funcionalidade futura tocar esse trecho. Um componente raramente alterado e sem incidente pode esperar, mesmo que sua estrutura não seja elegante.",
      "Uma matriz não substitui julgamento. Estimar números com falsa precisão pode transformar opinião em placar. Use categorias simples e registre incertezas: o impacto potencial pode ser alto, mas a chance baixa; a mudança pode estar próxima ou ainda ser hipotética."
    ]
  },
  {
    "type": "code",
    "id": "exemplo",
    "language": "text",
        "code": "Candidato à redução de dívida\n├─ impacto: checkout bloqueado em mudanças de preço\n├─ evidência: alterações frequentes atravessam vários módulos\n├─ mudança próxima: novo cálculo de desconto\n└─ primeira fatia: isolar regra e testar invariantes",
        "caption": "Ficha ilustrativa baseada em evidência. Use dados reais da equipe antes de priorizar."
  },
  {
    "type": "heading",
    "id": "sec-3",
    "title": "Reduza em fatias"
  },
  {
    "type": "paragraphs",
    "id": "texto-3",
    "paragraphs": [
      "Uma dívida ampla pode ser dividida: adicionar uma fronteira, tornar uma query observável, atualizar uma biblioteca, encapsular um formato ou remover um acoplamento por vez. A fatia deve reduzir risco sem exigir que todo o produto pare para uma reescrita.",
      "Defina um resultado verificável: quais dependências não serão mais importadas; que falha deixa de ocorrer; quanto esforço é economizado em tarefas específicas. Sem resultado, “limpar o código” pode se estender indefinidamente e disputar espaço com trabalho de produto."
    ]
  },
  {
    "type": "heading",
    "id": "sec-4",
    "title": "Comunique o custo aceito"
  },
  {
    "type": "paragraphs",
    "id": "texto-4",
    "paragraphs": [
      "Dívida não é sinônimo de descuido. Um atalho pode ser racional quando traz valor sob prazo real; a decisão fica melhor quando custo futuro, dono e condição de revisão são explícitos. Evite usar o termo para culpar pessoas por escolhas feitas com informação incompleta.",
      "Revisite a prioridade quando muda o roadmap, o padrão de incidentes ou a equipe. Se a dívida não afeta capacidade nem risco, talvez não seja a próxima tarefa. Se o sistema impede mudanças importantes ou gera falhas recorrentes, o custo de esperar deve ser comparado ao custo de corrigir."
    ]
  },
  {
    "type": "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Priorize o problema técnico que afeta uma mudança ou risco real; escolha a menor intervenção que reduza esse custo.",
    "tone": "result"
  }
],
    references: [
  {
    "label": "Technical Debt Quadrant — Martin Fowler",
    "href": "https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"
  }
],
    selected: true,
    published: true,
    sourceLabel: "Artigo ARQ-020 da série Arquitetura de software",
  },
  {
    slug: "dinheiro-em-centavos",
    title: "Por que armazenar dinheiro em centavos",
    category: "Backend · Prateleira",
    summary:
      "Uma regra de modelagem simples para evitar imprecisão em valores monetários e manter consistência entre banco, aplicação e pagamentos.",
    readingTime: "4 min",
    projectSlugs: ["prateleira"],
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
    projectSlugs: ["lingo"],
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
    projectSlugs: ["lingo"],
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
    projectSlugs: ["festas"],
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
  {
    slug: "dotfiles-modulares-ambiente-arch-linux",
    title: "Dotfiles modulares: como organizar um ambiente Linux versionado",
    category: "Desenvolvimento · Linux",
    summary:
      "Separar configurações por ferramenta ajuda a evoluir um desktop Linux em partes. O desafio é manter dependências, instalação e segredos sob controle.",
    readingTime: "7 min",
    projectSlugs: ["dotfiles-arch-linux"],
    content: [],
    story: [
      {
        type: "paragraphs",
        id: "abertura",
        paragraphs: [
          "Um ambiente de desenvolvimento não é composto apenas pelo editor. Compositor de janelas, barra, notificações, terminal, shell, fontes e temas também afetam o trabalho diário. Quando cada ferramenta é configurada isoladamente, uma reinstalação pode virar uma coleção de passos esquecidos.",
          "No meu ambiente Arch Linux, essas configurações ficam organizadas em repositórios públicos por componente e reunidas localmente por Git submodules. A ideia é tornar mudanças inspecionáveis e permitir que cada conjunto evolua no seu próprio histórico. Isso descreve a estrutura atual; ainda preciso validar uma instalação limpa antes de afirmar que outra máquina pode reproduzi-la sem ajustes.",
        ],
      },
      { type: "heading", id: "componentes", title: "Cada ferramenta tem seu próprio contexto" },
      {
        type: "paragraphs",
        id: "componentes-texto",
        paragraphs: [
          "O conjunto inclui configuração do Hyprland para a sessão gráfica, widgets AGS escritos em TypeScript, Waybar, Neovim em Lua, shells como Fish e Zsh, além de terminais e componentes do sistema. Esses elementos se relacionam, mas têm formatos, dependências e ciclos de mudança diferentes.",
          "Separá-los em repositórios menores deixa mais fácil revisar uma mudança específica e reutilizar um componente. Também evita que a configuração de uma ferramenta cresça como uma pasta indistinta dentro de um único repositório. O custo é que o estado completo do desktop passa a depender de várias revisões coordenadas.",
        ],
      },
      { type: "heading", id: "submodules", title: "O repositório agregador registra a composição" },
      {
        type: "paragraphs",
        id: "submodules-texto",
        paragraphs: [
          "Git submodules permitem que um repositório registre outros repositórios em caminhos específicos e aponte para revisões determinadas. Assim, o projeto agregador descreve quais componentes formam o ambiente e em que revisão cada um deve estar. Um clone comum precisa inicializar e atualizar esses submódulos para obter a composição completa.",
          "Essa escolha oferece rastreabilidade, mas também acrescenta uma etapa operacional. Quem clona precisa conhecer submódulos; atualizar um componente envolve registrar a nova revisão no agregador; e links quebrados, branches ausentes ou permissões diferentes podem impedir a montagem do conjunto. Um README claro e um procedimento testado fazem parte da solução, não são documentação opcional.",
        ],
      },
      {
        type: "code",
        id: "comandos",
        language: "bash",
        code: "git clone --recurse-submodules <url-do-repositorio>\ncd .config\ngit submodule status",
        caption: "Exemplo do fluxo de clone de um agregador com submódulos. A instalação real ainda precisa documentar dependências e etapas específicas de cada ferramenta.",
      },
      { type: "heading", id: "reproducibilidade", title: "Versionado não significa reproduzível" },
      {
        type: "paragraphs",
        id: "reproducibilidade-texto",
        paragraphs: [
          "Guardar arquivos no Git ajuda a recuperar configurações, mas não garante que uma máquina nova terá os mesmos programas, fontes, plugins, serviços, permissões ou variáveis de ambiente. Algumas preferências dependem de pacotes do sistema; outras podem depender de caminhos locais ou de integrações que não existem fora da máquina original.",
          "Para chamar o setup de reproduzível, é preciso começar num ambiente limpo, seguir instruções documentadas e observar o resultado. A validação deve distinguir o que é automatizado do que ainda exige decisão manual, registrar versões relevantes e explicar como voltar atrás se uma configuração impedir o login ou quebrar a sessão gráfica.",
        ],
      },
      { type: "heading", id: "segredos", title: "Configuração pública exige higiene de segredos" },
      {
        type: "paragraphs",
        id: "segredos-texto",
        paragraphs: [
          "Arquivos de configuração podem acumular tokens, senhas, identificadores pessoais, caminhos locais e histórico que não deveria ser público. Ignorar um arquivo na próxima alteração não remove o que já foi enviado: segredos publicados precisam ser revogados, removidos do estado atual e tratados também no histórico Git.",
          "Por isso, uma revisão de segurança precisa acontecer antes de apresentar um conjunto de dotfiles como referência pública. O repositório agregador só deve apontar para componentes revisados, e capturas de tela também precisam ser examinadas: notificações, títulos de janela, comandos anteriores e nomes de usuário podem revelar informações sem que isso seja percebido durante a gravação.",
        ],
      },
      { type: "heading", id: "proximos-passos", title: "O próximo passo é provar a recuperação" },
      {
        type: "paragraphs",
        id: "proximos-passos-texto",
        paragraphs: [
          "O valor deste projeto está em tornar meu ambiente mais legível, versionado e discutível. O próximo marco não é adicionar mais temas ou scripts: é documentar a composição, revisar cada repositório e testar a recuperação num ambiente limpo. Só então será possível dizer com precisão quanto do setup pode ser reaplicado e quais partes continuam pessoais ou manuais.",
        ],
      },
      {
        type: "callout",
        id: "ideia-central",
        title: "Ideia para levar",
        body: "Dotfiles versionados registram decisões e histórico. Reprodutibilidade só existe depois de validar dependências, segredos e instalação fora da máquina original.",
        tone: "result",
      },
    ],
    selected: true,
    published: false,
    sourceLabel: "Artigo original sobre o projeto pessoal de dotfiles",
  },
  {
    slug: "python-argumentos-default-mutaveis",
    title: "A lista de compras que não zera sozinha",
    category: "Linguagens · Python",
    summary:
      "Por que uma lista usada como argumento padrão pode guardar itens entre chamadas e como usar `None` para criar um valor novo quando necessário.",
    publishedAt: "2026-11-09",
    linkedinUrl: "https://lnkd.in/p/dq7en2cP",
    readingTime: "4 min",
    cover: {
      src: "/articles/python-argumentos-default-mutaveis/slide-01.webp",
      alt: "Infográfico PY-001: duas chamadas compartilham uma lista padrão mutável; com None, cada chamada cria uma lista nova.",
      width: 1792,
      height: 2400,
      caption: "Imagem publicada no LinkedIn para explicar argumentos padrão mutáveis em Python.",
    },
    content: [],
    story: [
      {
        type: "paragraphs",
        id: "abertura",
        paragraphs: [
          "Imagine uma função que adiciona produtos a uma lista de compras. Você chama a função para adicionar café e depois a chama outra vez para adicionar pão, esperando começar um carrinho novo. Se a lista estiver no valor padrão do parâmetro, a segunda chamada pode devolver café e pão juntos.",
          "Isso acontece porque valores padrão são avaliados quando a função é definida. Se o valor for um objeto mutável, como uma lista ou um dicionário, as chamadas que omitem aquele argumento reutilizam o mesmo objeto.",
        ],
      },
      { type: "heading", id: "surpresa", title: "O objeto padrão continua vivo entre chamadas" },
      {
        type: "code",
        id: "exemplo-mutavel",
        language: "python",
        code: `def adicionar(item, carrinho=[]):
    carrinho.append(item)
    return carrinho

print(adicionar("café"))  # ['café']
print(adicionar("pão"))   # ['café', 'pão']`,
        caption: "A lista criada na definição da função é reutilizada quando a chamada não informa `carrinho`.",
      },
      {
        type: "paragraphs",
        id: "por-que",
        paragraphs: [
          "O comportamento pode ser útil quando a persistência é intencional, mas costuma surpreender em funções que deveriam iniciar cada operação com estado independente. O problema não é a lista ser mutável por si só; é compartilhar sem perceber o mesmo objeto entre chamadas.",
          "O mesmo cuidado vale para outros valores mutáveis, como dicionários e conjuntos. Argumentos explícitos continuam sendo usados normalmente: quando alguém passa seu próprio carrinho, a função pode modificá-lo conforme o contrato escolhido.",
        ],
      },
      { type: "heading", id: "solucao", title: "Use `None` quando cada chamada precisa de uma lista nova" },
      {
        type: "code",
        id: "exemplo-seguro",
        language: "python",
        code: `def adicionar(item, carrinho=None):
    if carrinho is None:
        carrinho = []
    carrinho.append(item)
    return carrinho

print(adicionar("café"))  # ['café']
print(adicionar("pão"))   # ['pão']`,
        caption: "`None` funciona como sentinela; a lista é criada dentro da chamada que precisa de um carrinho novo.",
      },
      {
        type: "paragraphs",
        id: "decisao",
        paragraphs: [
          "A condição usa `is None` para testar exatamente a sentinela. Assim, uma lista vazia passada explicitamente não é confundida com ausência de argumento e continua sendo a lista que a pessoa forneceu.",
          "A regra prática é evitar listas e dicionários como valores padrão quando a intenção for um objeto novo por chamada. Use `None` e crie o objeto dentro da função. Se compartilhar estado for intencional, torne esse contrato explícito e documente quem controla o ciclo de vida do valor.",
        ],
      },
      {
        type: "callout",
        id: "ideia-central",
        title: "Ideia para levar",
        body: "Valores padrão mutáveis são compartilhados entre chamadas que omitem o argumento. Para estado novo por chamada, use `None` como sentinela e crie a lista dentro da função.",
        tone: "result",
      },
    ],
    references: [
      { label: "Python FAQ — Why are default values shared between objects?", href: "https://docs.python.org/3/faq/programming.html#why-are-default-values-shared-between-objects" },
      { label: "Python Tutorial — Default Argument Values", href: "https://docs.python.org/3/tutorial/controlflow.html#default-argument-values" },
    ],
    selected: true,
    published: true,
    sourceLabel: "Adaptado do post PY-001 publicado no LinkedIn em 9 de novembro de 2026",
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

export type ProjectCuration = {
  homeHero: string[];
  homeProjects: string[];
  projectsPage: string[];
};

export function projectsFromCuration(slugs: string[]): Project[] {
  return slugs
    .map((slug) => projects.find((project) => project.slug === slug && project.selected))
    .filter((project): project is Project => Boolean(project));
}

export const selectedProjects = projects.filter((project) => project.selected);
export const homeHeroProjects = projectsFromCuration(projectCuration.homeHero)
  .filter((project) => Boolean(project.media?.homeFeature));
export const homeProjects = projectsFromCuration(projectCuration.homeProjects);
export const projectsPageProjects = projectsFromCuration(projectCuration.projectsPage);
export const selectedArticles = articles.filter((article) => article.selected);
export const publishedProjects = projects.filter((project) => project.published);
export const publishedArticles = articles.filter((article) => article.published);
