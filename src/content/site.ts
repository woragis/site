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
  },,
  {
    slug: "monolito-e-microsservicos-custo-de-separar",
    title: "Monólito ou microsserviços: o que custa separar?",
    category: "Arquitetura de software",
    summary: "Separar um módulo muda chamadas, dados, deploy e operação. A decisão vale quando resolve um limite concreto que a equipe não consegue sustentar dentro de uma aplicação modular.",
    publishedAt: "2026-11-03",
    linkedinUrl: "https://lnkd.in/p/d97CPsft",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "A pergunta útil não é se microsserviços são mais modernos. É: qual problema concreto passa a ser mais barato depois que uma fronteira atravessa a rede? Uma chamada entre módulos pode ser uma função local hoje; em serviços separados, ela passa a depender de disponibilidade, latência, protocolo e operação de dois processos."
    ]
  },
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
  },,
  {
    slug: "camadas-e-fatias-verticais-organizar-por-mudanca",
    title: "Camadas ou fatias verticais: como organizar uma funcionalidade?",
    category: "Arquitetura de software",
    summary: "Camadas agrupam responsabilidades técnicas; fatias verticais agrupam o caminho de uma funcionalidade. Os dois eixos podem coexistir, e a escolha deve acompanhar o padrão de mudança.",
    publishedAt: "2026-11-05",
    linkedinUrl: "https://lnkd.in/p/dv6RVeg4",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma organização de pastas influencia onde uma pessoa começa a investigar uma mudança. Imagine alterar o fluxo de criar pedido: o controller valida entrada, uma regra calcula o total, o repositório grava os dados e um evento é emitido. A pergunta é se a estrutura ajuda a percorrer esse caminho ou o espalha sem necessidade."
    ]
  },
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
  },,
  {
    slug: "ports-and-adapters-isolar-o-que-muda",
    title: "Ports and adapters: o que vale a pena isolar?",
    category: "Arquitetura de software",
    summary: "Ports and adapters separa conversas que a aplicação precisa ter dos detalhes de tecnologia que as implementam. O hexágono é uma metáfora; o contrato e a direção das dependências são o que importam.",
    publishedAt: "2026-11-06",
    linkedinUrl: "https://lnkd.in/p/dh8eUNaS",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma regra de negócio não deveria precisar conhecer se uma requisição veio de HTTP, de um job ou de um teste. Tampouco deveria depender diretamente de um driver específico de banco só para gravar o resultado. Ports and adapters organiza o sistema em torno das conversas necessárias entre a aplicação e o mundo exterior."
    ]
  },
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
  },,
  {
    slug: "ddd-tatico-entidades-valores-agregados",
    title: "DDD tático: entidades, valores e invariantes",
    category: "Arquitetura de software",
    summary: "Entidades, objetos de valor e agregados são ferramentas para expressar regras do domínio. Usá-los com propósito ajuda a proteger invariantes; transformar cada substantivo em classe só cria cerimônia.",
    publishedAt: "2026-11-07",
    linkedinUrl: "https://lnkd.in/p/dat52ehr",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma modelagem de domínio fica útil quando torna regras importantes difíceis de violar por acidente. DDD tático oferece padrões para nomear identidade, igualdade por valor e limites de consistência. O ponto de partida continua sendo entender a linguagem e as regras do domínio com as pessoas que conhecem o problema."
    ]
  },
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
  },,
  {
    slug: "eventos-filas-idempotencia-duplicatas",
    title: "Eventos e filas: e se a mesma mensagem chegar duas vezes?",
    category: "Arquitetura de software",
    summary: "Consumidores devem tolerar repetição quando o transporte pode redeliver mensagens. Idempotência exige uma chave estável e uma fronteira transacional coerente com o efeito produzido.",
    publishedAt: "2026-11-10",
    linkedinUrl: "https://lnkd.in/p/dT8Sx-SC",
    readingTime: "7 min",
    content: [],
    story: [
  {
    "type": "paragraphs",
    "id": "abertura",
    "paragraphs": [
      "Uma mensagem pode ser processada e a confirmação se perder antes de chegar ao broker. O consumidor concluiu o trabalho, mas o broker não sabe disso e pode entregar a mensagem de novo. Esse cenário mostra por que uma fila não elimina a necessidade de lidar com repetição."
    ]
  },
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
  },,
  {
    slug: "python-argumentos-default-mutaveis",
    title: "A lista de compras que não zera sozinha",
    category: "Linguagens · Python",
    summary:
      "Por que uma lista usada como argumento padrão pode guardar itens entre chamadas e como usar `None` para criar um valor novo quando necessário.",
    publishedAt: "2026-11-09",
    linkedinUrl: "https://lnkd.in/p/dq7en2cP",
    readingTime: "4 min",
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
