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
    slug: "geolocalizacao-como-opcao-weatherly",
    title: "GPS negado, busca disponível: localização como opção no Weatherly",
    category: "Produto · Web APIs",
    summary:
      "O que acontece quando alguém não autoriza a localização? No Weatherly, a busca manual continua disponível; o código separa permissão negada, posição indisponível e falha na obtenção da posição.",
    publishedAt: "2026-11-12",
    readingTime: "6 min",
    projectSlugs: ["weatherly"],
    content: [],
    cover: {
      src: "/articles/geolocalizacao-weatherly/wth-009.jpg",
      alt: "Infográfico do Weatherly sobre o fluxo após permitir ou negar a localização, com uma busca manual por cidade e uma ilustração conceitual de código.",
      width: 1536,
      height: 2752,
      caption:
        "Arte editorial do post WTH-009. O código mostrado na ilustração é conceitual; os trechos fiéis à implementação estão reproduzidos abaixo.",
    },
    story: [
      {
        type: "paragraphs",
        id: "abertura",
        paragraphs: [
          "Um pedido de localização é uma decisão da pessoa, não uma etapa que o produto pode presumir. Se a permissão for negada, a experiência ainda precisa oferecer um caminho para cumprir a tarefa principal.",
          "No Weatherly, essa tarefa é consultar o clima de um lugar. O GPS ajuda a descobrir esse lugar, mas a busca manual por cidade também pode fornecer a localização necessária para carregar a previsão.",
        ],
      },
      {
        type: "heading",
        id: "estados",
        title: "Permissão negada não é o mesmo que posição indisponível",
      },
      {
        type: "paragraphs",
        id: "estados-texto",
        paragraphs: [
          "O hook de geolocalização não guarda apenas coordenadas. Ele também representa estados como `pending`, `granted`, `denied`, `unavailable` e `error`. Isso permite que a interface reaja ao motivo pelo qual ainda não tem uma posição.",
          "No callback de erro, o Weatherly trata explicitamente a permissão negada e a posição indisponível. Os demais erros recebem um estado genérico e uma mensagem de tempo esgotado. A diferença importa: negar acesso pede uma alternativa; uma falha temporária pode permitir tentar novamente.",
        ],
      },
      {
        type: "code",
        id: "codigo-erros",
        language: "TypeScript",
        caption: "Trecho real de `src/hooks/use-geolocation.ts`",
        code: `if (error.code === error.PERMISSION_DENIED) {
  onFail(
    "denied",
    "Permissão de localização negada. Busque uma cidade abaixo."
  );
} else if (error.code === error.POSITION_UNAVAILABLE) {
  onFail("unavailable", "Não foi possível obter sua posição.");
} else {
  onFail("error", "Tempo esgotado ao obter localização.");
}`,
      },
      {
        type: "heading",
        id: "alternativa",
        title: "A alternativa precisa continuar à vista",
      },
      {
        type: "paragraphs",
        id: "alternativa-texto",
        paragraphs: [
          "A mensagem de permissão negada orienta a pessoa a buscar uma cidade. No `WeatherShell`, o componente `CitySearch` permanece montado acima dos estados de carregamento e erro. Assim, o formulário de busca não desaparece quando o GPS falha.",
          "Quando a pessoa escolhe uma cidade, o estado manual tem precedência sobre as coordenadas vindas do GPS. Essa prioridade evita que uma posição automática substitua a escolha explícita da pessoa.",
        ],
      },
      {
        type: "code",
        id: "codigo-prioridade",
        language: "TypeScript",
        caption: "A cidade escolhida manualmente tem prioridade em `src/components/weather-shell.tsx`",
        code: `const place = manualPlace ?? geoPlace;`,
      },
      {
        type: "heading",
        id: "pedido-de-permissao",
        title: "Há uma nuance: hoje o GPS é solicitado ao abrir a página",
      },
      {
        type: "paragraphs",
        id: "pedido-de-permissao-texto",
        paragraphs: [
          "A busca continuar disponível não significa que o Weatherly espere uma ação explícita antes de pedir localização. Sem uma cidade inicial, o `WeatherShell` cria o hook com `useGeolocation(!initialPlace)`, que solicita a posição automaticamente ao montar.",
          "Isso revela duas decisões diferentes: a pessoa pode negar a permissão sem perder a busca, mas o momento do pedido ainda pode ser refinado. Uma evolução possível seria explicar o benefício e pedir GPS somente depois de a pessoa tocar em uma ação como “usar minha localização”. Isso reduz a surpresa do prompt, com o custo de um toque extra para quem quer a previsão local imediatamente.",
        ],
      },
      {
        type: "heading",
        id: "opcoes",
        title: "Tempo de espera e posição em cache também são escolhas",
      },
      {
        type: "paragraphs",
        id: "opcoes-texto",
        paragraphs: [
          "A chamada define `enableHighAccuracy: false`, um timeout de 12 segundos e `maximumAge: 300_000`. Em outras palavras, o app não pede alta precisão, limita quanto tempo espera e aceita uma posição em cache com até cinco minutos, conforme as opções oferecidas pela Geolocation API.",
          "Esses parâmetros não garantem um tempo de resposta ou uma precisão específica: navegador e dispositivo controlam a obtenção da posição. Eles deixam explícito, porém, o que o produto aceita como suficiente. Para consultar o clima, uma posição recente pode ser mais útil do que deixar a tela esperando indefinidamente.",
        ],
      },
      {
        type: "callout",
        id: "ideia-central",
        title: "A ideia para levar",
        body: "Uma permissão pode enriquecer o caminho padrão sem bloquear a tarefa quando a pessoa escolhe não concedê-la. No Weatherly, GPS e busca manual são duas formas de chegar ao lugar cuja previsão será consultada.",
        tone: "result",
      },
    ],
    references: [
      {
        label: "Weatherly — implementação de geolocalização",
        href: "https://github.com/woragis/saas-weatherly/blob/main/src/hooks/use-geolocation.ts",
      },
      {
        label: "Weatherly — fluxo de busca e previsão",
        href: "https://github.com/woragis/saas-weatherly/blob/main/src/components/weather-shell.tsx",
      },
      {
        label: "MDN — Using the Geolocation API",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API",
      },
    ],
    selected: true,
    published: true,
    sourceLabel: "Versão aprofundada do WTH-009 publicado no LinkedIn em 11 de novembro de 2026",
  },
  {
    slug: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat",
    title: "Antes do modelo, vem a razão para abrir o chat",
    category: "Projeto · Engenharia de software",
    summary: "Um nome de produto não responde por que alguém usaria o produto. Anime AI Chat ainda é um conceito. Antes de escolher modelo ou framework, preciso…",
    readingTime: "2 min",
    projectSlugs: ["anime-ai-chat"],
    content: [],
    story: [
      { type: "paragraphs", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-opening", paragraphs: ["Um nome de produto não responde por que alguém usaria o produto. Anime AI Chat ainda é um conceito. Antes de escolher modelo ou framework, preciso definir público e uma tarefa que um chat genérico não resolve."] },
      { type: "heading", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Anime AI Chat: anime AI Chat ainda é um conceito. Antes de escolher modelo ou framework, preciso definir público e uma tarefa que um chat genérico não resolve. Uma hipótese pequena poderia ser testar uma conversa sobre histórias originais com um público específico."] },
      { type: "heading", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Nenhum arquivo de produto para capturar; os apps são scaffolds. Apresentar como descoberta, não como demo. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Uma hipótese pequena poderia ser testar uma conversa sobre histórias originais com um público específico."] },
      { type: "heading", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "aac-001-antes-do-modelo-vem-a-razao-para-abrir-o-chat-p7", paragraphs: ["O que ainda não devemos concluir: Isso é uma hipótese para validar; o repositório ainda contém apenas scaffolds padrão. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial AAC-001; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "aac-002-o-que-torna-uma-conversa-tematica-util",
    title: "O que torna uma conversa temática útil?",
    category: "Projeto · Engenharia de software",
    summary: "Colocar um tema de anime sobre um chatbot ainda não cria uma experiência diferente. Uma experiência temática precisa de objetivo, tom, limites e…",
    readingTime: "2 min",
    projectSlugs: ["anime-ai-chat"],
    content: [],
    story: [
      { type: "paragraphs", id: "aac-002-o-que-torna-uma-conversa-tematica-util-opening", paragraphs: ["Colocar um tema de anime sobre um chatbot ainda não cria uma experiência diferente. Uma experiência temática precisa de objetivo, tom, limites e conteúdo próprio. Sem isso, o tema é só decoração em volta de respostas genéricas."] },
      { type: "heading", id: "aac-002-o-que-torna-uma-conversa-tematica-util-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "aac-002-o-que-torna-uma-conversa-tematica-util-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Anime AI Chat: uma experiência temática precisa de objetivo, tom, limites e conteúdo próprio. Sem isso, o tema é só decoração em volta de respostas genéricas. Uma conversa pode ajudar a explorar uma história original, mas a utilidade precisa ser observada com pessoas reais."] },
      { type: "heading", id: "aac-002-o-que-torna-uma-conversa-tematica-util-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "aac-002-o-que-torna-uma-conversa-tematica-util-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Não existe fluxo de conversa implementado para capturar. Usar gráfico conceitual, sem balões de chat que pareçam interface existente. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "aac-002-o-que-torna-uma-conversa-tematica-util-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "aac-002-o-que-torna-uma-conversa-tematica-util-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Uma conversa pode ajudar a explorar uma história original, mas a utilidade precisa ser observada com pessoas reais."] },
      { type: "heading", id: "aac-002-o-que-torna-uma-conversa-tematica-util-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "aac-002-o-que-torna-uma-conversa-tematica-util-p7", paragraphs: ["O que ainda não devemos concluir: Exemplo hipotético; nenhuma jornada conversacional foi implementada. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial AAC-002; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "aac-003-personagens-proprios-mudam-o-ponto-de-partida",
    title: "Personagens próprios mudam o ponto de partida",
    category: "Projeto · Engenharia de software",
    summary: "Um chatbot com personagens conhecidos também levanta uma pergunta de autoria. Uma direção possível é criar personagens e universo originais, para que…",
    readingTime: "2 min",
    projectSlugs: ["anime-ai-chat"],
    content: [],
    story: [
      { type: "paragraphs", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-opening", paragraphs: ["Um chatbot com personagens conhecidos também levanta uma pergunta de autoria. Uma direção possível é criar personagens e universo originais, para que identidade e conteúdo tenham origem clara desde o primeiro protótipo."] },
      { type: "heading", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Anime AI Chat: uma direção possível é criar personagens e universo originais, para que identidade e conteúdo tenham origem clara desde o primeiro protótipo. Começar com um personagem e uma cena curta é mais testável do que prometer um universo inteiro."] },
      { type: "heading", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Use somente a ilustração conceitual gerada; não use assets de obras existentes. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Começar com um personagem e uma cena curta é mais testável do que prometer um universo inteiro."] },
      { type: "heading", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "aac-003-personagens-proprios-mudam-o-ponto-de-partida-p7", paragraphs: ["O que ainda não devemos concluir: Não afirmar autorização ou usar personagem, nome, voz ou imagem de franquia sem permissão. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial AAC-003; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores",
    title: "Um protótipo pequeno pode responder perguntas maiores",
    category: "Projeto · Engenharia de software",
    summary: "Antes de construir um SaaS, uma conversa curta pode revelar se a ideia tem valor. O próximo passo para Anime AI Chat é testar um recorte pequeno: um…",
    readingTime: "2 min",
    projectSlugs: ["anime-ai-chat"],
    content: [],
    story: [
      { type: "paragraphs", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-opening", paragraphs: ["Antes de construir um SaaS, uma conversa curta pode revelar se a ideia tem valor. O próximo passo para Anime AI Chat é testar um recorte pequeno: um público, uma tarefa e critérios para avaliar se a resposta ajudou."] },
      { type: "heading", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Anime AI Chat: o próximo passo para Anime AI Chat é testar um recorte pequeno: um público, uma tarefa e critérios para avaliar se a resposta ajudou. Avaliar clareza, consistência com o personagem e quando o modelo deveria admitir que não sabe."] },
      { type: "heading", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: O app ainda é scaffold; publicar apenas como reflexão sobre descoberta, sem dizer que houve teste com usuários. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Avaliar clareza, consistência com o personagem e quando o modelo deveria admitir que não sabe."] },
      { type: "heading", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "aac-004-um-prototipo-pequeno-pode-responder-perguntas-maiores-p7", paragraphs: ["O que ainda não devemos concluir: Esse roteiro ainda é planejamento; não há protótipo funcional nem resultados de avaliação. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial AAC-004; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez",
    title: "Um emulador começa com uma instrução por vez",
    category: "Projeto · Engenharia de software",
    summary: "A CPU não precisa nascer com todos os opcodes para começar a ensinar algo. No protótipo, `execute_opcode` usa um `switch` para implementar um…",
    readingTime: "2 min",
    projectSlugs: ["gameboy-emulator"],
    content: [],
    story: [
      { type: "paragraphs", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-opening", paragraphs: ["A CPU não precisa nascer com todos os opcodes para começar a ensinar algo. No protótipo, `execute_opcode` usa um `switch` para implementar um subconjunto de instruções. Isso permite estudar fetch, decode e mudança de estado de forma incremental."] },
      { type: "heading", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Game Boy Emulator: no protótipo, `execute_opcode` usa um `switch` para implementar um subconjunto de instruções. Isso permite estudar fetch, decode e mudança de estado de forma incremental. Um `LD A, d8` lê o byte seguinte ao opcode e o coloca no registrador A."] },
      { type: "heading", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/cpu.zig`, funções `run` e `execute_opcode`; enquadrar poucos casos do switch. Não sugerir compatibilidade. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Um `LD A, d8` lê o byte seguinte ao opcode e o coloca no registrador A."] },
      { type: "heading", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "gbe-001-um-emulador-comeca-com-uma-instrucao-por-vez-p7", paragraphs: ["O que ainda não devemos concluir: A implementação é parcial; não representa uma CPU compatível com o Game Boy. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial GBE-001; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao",
    title: "Flags são parte do resultado de uma instrução",
    category: "Projeto · Engenharia de software",
    summary: "Dois registradores podem terminar iguais e ainda deixar a CPU em estados diferentes. O módulo `Registers` separa bits de zero, negativo, half-carry e…",
    readingTime: "2 min",
    projectSlugs: ["gameboy-emulator"],
    content: [],
    story: [
      { type: "paragraphs", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-opening", paragraphs: ["Dois registradores podem terminar iguais e ainda deixar a CPU em estados diferentes. O módulo `Registers` separa bits de zero, negativo, half-carry e carry, com funções para ler e atualizar cada flag."] },
      { type: "heading", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Game Boy Emulator: o módulo `Registers` separa bits de zero, negativo, half-carry e carry, com funções para ler e atualizar cada flag. Uma operação aritmética precisa atualizar o resultado e as flags conforme as regras da instrução."] },
      { type: "heading", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/memory.zig`, máscaras e métodos `set_*_flag`/`get_*_flag`; conferir legibilidade. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Uma operação aritmética precisa atualizar o resultado e as flags conforme as regras da instrução."] },
      { type: "heading", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "gbe-002-flags-sao-parte-do-resultado-de-uma-instrucao-p7", paragraphs: ["O que ainda não devemos concluir: Nem todas as flags/opcodes estão implementadas corretamente ou cobertas por testes neste protótipo. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial GBE-002; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console",
    title: "Uma matriz de 64 KB ainda não é o mapa de memória do console",
    category: "Projeto · Engenharia de software",
    summary: "Ter um array do tamanho esperado não significa que todos os endereços já tenham comportamento correto. O protótipo guarda 64 KB em `Cpu.memory` e lê…",
    readingTime: "2 min",
    projectSlugs: ["gameboy-emulator"],
    content: [],
    story: [
      { type: "paragraphs", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-opening", paragraphs: ["Ter um array do tamanho esperado não significa que todos os endereços já tenham comportamento correto. O protótipo guarda 64 KB em `Cpu.memory` e lê endereços diretamente. A evolução é modelar regiões com regras e dispositivos distintos."] },
      { type: "heading", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Game Boy Emulator: o protótipo guarda 64 KB em `Cpu.memory` e lê endereços diretamente. A evolução é modelar regiões com regras e dispositivos distintos. Uma leitura pode representar RAM, registrador de hardware ou uma área mapeada do cartucho."] },
      { type: "heading", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/cpu.zig`, campo `memory` e `read_memory`. Acompanhar com o diagrama conceitual; não alegar mapa implementado. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Uma leitura pode representar RAM, registrador de hardware ou uma área mapeada do cartucho."] },
      { type: "heading", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "gbe-003-uma-matriz-de-64-kb-ainda-nao-e-o-mapa-de-memoria-do-console-p7", paragraphs: ["O que ainda não devemos concluir: Esse mapa por regiões é uma direção de evolução; o código atual usa acesso direto ao array. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial GBE-003; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo",
    title: "Framebuffer, GPU e janela precisam fechar o mesmo ciclo",
    category: "Projeto · Engenharia de software",
    summary: "Ter módulo gráfico não significa que a imagem já chega à tela. O repositório tem GPU que escreve pixels em framebuffer e integração SDL2; no…",
    readingTime: "2 min",
    projectSlugs: ["gameboy-emulator"],
    content: [],
    story: [
      { type: "paragraphs", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-opening", paragraphs: ["Ter módulo gráfico não significa que a imagem já chega à tela. O repositório tem GPU que escreve pixels em framebuffer e integração SDL2; no `main.zig`, as chamadas de renderização e desenho estão comentadas."] },
      { type: "heading", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Game Boy Emulator: o repositório tem GPU que escreve pixels em framebuffer e integração SDL2; no `main.zig`, as chamadas de renderização e desenho estão comentadas. CPU atualiza estado → GPU monta quadro → SDL apresenta quadro é o ciclo que precisa ser conectado."] },
      { type: "heading", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Capturar `src/main.zig` com as chamadas comentadas junto do diagrama; identificar o estado como protótipo. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. CPU atualiza estado → GPU monta quadro → SDL apresenta quadro é o ciclo que precisa ser conectado."] },
      { type: "heading", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "gbe-004-framebuffer-gpu-e-janela-precisam-fechar-o-mesmo-ciclo-p7", paragraphs: ["O que ainda não devemos concluir: O loop visual está incompleto; não existe jogo demonstrado nesta revisão. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial GBE-004; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo",
    title: "Carregar uma ROM é mais do que abrir um arquivo",
    category: "Projeto · Engenharia de software",
    summary: "Um arquivo abrir sem erro não prova que é um cartucho válido ou seguro para a implementação. O repositório contém um `ROMLoader` que tenta validar…",
    readingTime: "2 min",
    projectSlugs: ["gameboy-emulator"],
    content: [],
    story: [
      { type: "paragraphs", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-opening", paragraphs: ["Um arquivo abrir sem erro não prova que é um cartucho válido ou seguro para a implementação. O repositório contém um `ROMLoader` que tenta validar alguns campos, enquanto o caminho principal lê o arquivo e copia dados diretamente para a memória."] },
      { type: "heading", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Game Boy Emulator: o repositório contém um `ROMLoader` que tenta validar alguns campos, enquanto o caminho principal lê o arquivo e copia dados diretamente para a memória. Verificar tamanho, cabeçalho e limites antes de copiar evita tratar bytes arbitrários como estado válido."] },
      { type: "heading", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Capturar `src/rom_loader.zig` e `src/main.zig`; não usar ROM comercial nem incluir arquivos de jogo na imagem. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Verificar tamanho, cabeçalho e limites antes de copiar evita tratar bytes arbitrários como estado válido."] },
      { type: "heading", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "gbe-005-carregar-uma-rom-e-mais-do-que-abrir-um-arquivo-p7", paragraphs: ["O que ainda não devemos concluir: O fluxo principal ainda precisa de revisão; não descrever a validação do loader como proteção completa. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial GBE-005; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida",
    title: "Compatibilidade precisa de uma ROM de teste permitida",
    category: "Projeto · Engenharia de software",
    summary: "“Roda um jogo” exige uma evidência reproduzível, não só um loop infinito. O protótipo ainda não confirma execução compatível; o próximo marco deve usar…",
    readingTime: "2 min",
    projectSlugs: ["gameboy-emulator"],
    content: [],
    story: [
      { type: "paragraphs", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-opening", paragraphs: ["“Roda um jogo” exige uma evidência reproduzível, não só um loop infinito. O protótipo ainda não confirma execução compatível; o próximo marco deve usar um teste pequeno com origem e licença adequadas."] },
      { type: "heading", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Game Boy Emulator: o protótipo ainda não confirma execução compatível; o próximo marco deve usar um teste pequeno com origem e licença adequadas. Uma ROM homebrew permitida pode servir para investigar um subsistema sem redistribuir jogos comerciais."] },
      { type: "heading", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Não anexar ROM. Captura deve mostrar código/test fixture própria e explicar o que foi validado, quando houver. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Uma ROM homebrew permitida pode servir para investigar um subsistema sem redistribuir jogos comerciais."] },
      { type: "heading", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "gbe-006-compatibilidade-precisa-de-uma-rom-de-teste-permitida-p7", paragraphs: ["O que ainda não devemos concluir: Não afirmar suporte a jogos, cobertura de instruções ou resultado de testes inexistentes. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial GBE-006; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "mar-001-uma-fase-pode-comecar-como-texto",
    title: "Uma fase pode começar como texto",
    category: "Projeto · Engenharia de software",
    summary: "Um mapa de jogo não precisa começar num editor visual. O experimento lê linhas de um arquivo e transforma caracteres em tiles coloridos. Isso torna a…",
    readingTime: "2 min",
    projectSlugs: ["mario"],
    content: [],
    story: [
      { type: "paragraphs", id: "mar-001-uma-fase-pode-comecar-como-texto-opening", paragraphs: ["Um mapa de jogo não precisa começar num editor visual. O experimento lê linhas de um arquivo e transforma caracteres em tiles coloridos. Isso torna a composição da fase fácil de inspecionar e editar."] },
      { type: "heading", id: "mar-001-uma-fase-pode-comecar-como-texto-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "mar-001-uma-fase-pode-comecar-como-texto-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Mario em Pygame: o experimento lê linhas de um arquivo e transforma caracteres em tiles coloridos. Isso torna a composição da fase fácil de inspecionar e editar. Um caractere da grade representa um tipo de tile, como chão ou nuvem."] },
      { type: "heading", id: "mar-001-uma-fase-pode-comecar-como-texto-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "mar-001-uma-fase-pode-comecar-como-texto-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/maps/map-1.txt` ao lado de `src/map.py`/`src/main.py`; recortar caminho pessoal e nomes protegidos. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "mar-001-uma-fase-pode-comecar-como-texto-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "mar-001-uma-fase-pode-comecar-como-texto-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Um caractere da grade representa um tipo de tile, como chão ou nuvem."] },
      { type: "heading", id: "mar-001-uma-fase-pode-comecar-como-texto-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "mar-001-uma-fase-pode-comecar-como-texto-p7", paragraphs: ["O que ainda não devemos concluir: O mapa atual é simples e estático; não é um editor nem um sistema de fases completo. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial MAR-001; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo",
    title: "O loop principal é onde os módulos viram jogo",
    category: "Projeto · Engenharia de software",
    summary: "Ter uma classe de jogador não basta se o loop nunca a atualiza. `main.py` processa eventos e desenha o mapa; chamadas para ler teclas, atualizar…",
    readingTime: "2 min",
    projectSlugs: ["mario"],
    content: [],
    story: [
      { type: "paragraphs", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-opening", paragraphs: ["Ter uma classe de jogador não basta se o loop nunca a atualiza. `main.py` processa eventos e desenha o mapa; chamadas para ler teclas, atualizar jogador e câmera e desenhar o sprite estão comentadas."] },
      { type: "heading", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Mario em Pygame: `main.py` processa eventos e desenha o mapa; chamadas para ler teclas, atualizar jogador e câmera e desenhar o sprite estão comentadas. Eventos → atualizar mundo → desenhar quadro é o ciclo que precisa conectar esses módulos."] },
      { type: "heading", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/main.py`; mostrar a renderização do mapa e as linhas de atualização comentadas. Não criar screenshot falso. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Eventos → atualizar mundo → desenhar quadro é o ciclo que precisa conectar esses módulos."] },
      { type: "heading", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "mar-002-o-loop-principal-e-onde-os-modulos-viram-jogo-p7", paragraphs: ["O que ainda não devemos concluir: O estado atual observado é uma cena estática, não uma fase jogável. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial MAR-002; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo",
    title: "Gravidade sem integração ainda é só um módulo",
    category: "Projeto · Engenharia de software",
    summary: "A física precisa ser observada na cena completa para provar o comportamento. A classe do jogador acumula velocidade vertical, limita velocidade…",
    readingTime: "2 min",
    projectSlugs: ["mario"],
    content: [],
    story: [
      { type: "paragraphs", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-opening", paragraphs: ["A física precisa ser observada na cena completa para provar o comportamento. A classe do jogador acumula velocidade vertical, limita velocidade terminal e tenta resolver colisão com plataformas. Esse código ainda não está conectado ao loop executado."] },
      { type: "heading", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Mario em Pygame: a classe do jogador acumula velocidade vertical, limita velocidade terminal e tenta resolver colisão com plataformas. Esse código ainda não está conectado ao loop executado. Velocidade vertical → posição → colisão é uma ordem que precisa ser validada em movimento."] },
      { type: "heading", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/player.py`, método `update`; enquadrar a gravidade e a colisão como código existente, não demo funcional. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Velocidade vertical → posição → colisão é uma ordem que precisa ser validada em movimento."] },
      { type: "heading", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "mar-003-gravidade-sem-integracao-ainda-e-so-um-modulo-p7", paragraphs: ["O que ainda não devemos concluir: Não afirmar que salto, colisão ou física estão funcionando na aplicação atual. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial MAR-003; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao",
    title: "Uma câmera suave é uma decisão de atualização",
    category: "Projeto · Engenharia de software",
    summary: "Seguir o jogador instantaneamente e suavizar o movimento produzem sensações diferentes. O módulo Camera aproxima seu deslocamento gradualmente do alvo…",
    readingTime: "2 min",
    projectSlugs: ["mario"],
    content: [],
    story: [
      { type: "paragraphs", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-opening", paragraphs: ["Seguir o jogador instantaneamente e suavizar o movimento produzem sensações diferentes. O módulo Camera aproxima seu deslocamento gradualmente do alvo usando um fator de interpolação. No `main.py`, essa atualização está desligada."] },
      { type: "heading", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Mario em Pygame: o módulo Camera aproxima seu deslocamento gradualmente do alvo usando um fator de interpolação. No `main.py`, essa atualização está desligada. `offset += (target - offset) * 0.1` descreve a suavização presente no módulo."] },
      { type: "heading", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/camera.py`, método `update`; adicionar uma nota de que o método não é chamado na cena atual. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. `offset += (target - offset) * 0.1` descreve a suavização presente no módulo."] },
      { type: "heading", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "mar-004-uma-camera-suave-e-uma-decisao-de-atualizacao-p7", paragraphs: ["O que ainda não devemos concluir: A câmera não participa do loop atual; o valor não foi calibrado por playtest. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial MAR-004; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes",
    title: "Tiles facilitam o mapa, mas não resolvem colisões",
    category: "Projeto · Engenharia de software",
    summary: "Desenhar a grade e usar a grade como colisão são problemas relacionados, mas diferentes. O projeto pinta tiles por caractere, enquanto o jogador…",
    readingTime: "2 min",
    projectSlugs: ["mario"],
    content: [],
    story: [
      { type: "paragraphs", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-opening", paragraphs: ["Desenhar a grade e usar a grade como colisão são problemas relacionados, mas diferentes. O projeto pinta tiles por caractere, enquanto o jogador procura um grupo de plataformas que não está conectado no loop atual."] },
      { type: "heading", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Mario em Pygame: o projeto pinta tiles por caractere, enquanto o jogador procura um grupo de plataformas que não está conectado no loop atual. A regra de colisão precisa derivar da mesma representação de mundo usada para desenhar a fase."] },
      { type: "heading", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Ilustração explicativa; se mostrar código, capturar `src/map.py` e `src/player.py`, não uma interface inventada. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. A regra de colisão precisa derivar da mesma representação de mundo usada para desenhar a fase."] },
      { type: "heading", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "mar-005-tiles-facilitam-o-mapa-mas-nao-resolvem-colisoes-p7", paragraphs: ["O que ainda não devemos concluir: Não há demonstração de colisão de ponta a ponta no estado revisado. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial MAR-005; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar",
    title: "Chamar o projeto de jogo antes da interação é exagerar",
    category: "Projeto · Engenharia de software",
    summary: "Uma cena que desenha o cenário ainda não demonstra uma experiência jogável. A revisão do código encontrou renderização do mapa, mas a entrada e a…",
    readingTime: "2 min",
    projectSlugs: ["mario"],
    content: [],
    story: [
      { type: "paragraphs", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-opening", paragraphs: ["Uma cena que desenha o cenário ainda não demonstra uma experiência jogável. A revisão do código encontrou renderização do mapa, mas a entrada e a atualização do personagem estão comentadas. O próximo marco é ligar uma única sequência de interação."] },
      { type: "heading", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Mario em Pygame: a revisão do código encontrou renderização do mapa, mas a entrada e a atualização do personagem estão comentadas. O próximo marco é ligar uma única sequência de interação. Movimentar, saltar, colidir e acompanhar com a câmera são partes de um fluxo completo."] },
      { type: "heading", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Sem vídeo de gameplay até conectar controles, movimento e colisão; evite sprites e música protegidos. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Movimentar, saltar, colidir e acompanhar com a câmera são partes de um fluxo completo."] },
      { type: "heading", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "mar-006-chamar-o-projeto-de-jogo-antes-da-interacao-e-exagerar-p7", paragraphs: ["O que ainda não devemos concluir: Este post descreve o estado do checkout revisado; verificar novamente antes de publicar. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial MAR-006; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto",
    title: "Um ecossistema precisa de um primeiro produto",
    category: "Projeto · Engenharia de software",
    summary: "Monorepo pode abrigar várias ideias; isso não quer dizer que todas precisam nascer juntas. A documentação prioriza Poke-Chief antes de Poke-Friend. O…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-center"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-opening", paragraphs: ["Monorepo pode abrigar várias ideias; isso não quer dizer que todas precisam nascer juntas. A documentação prioriza Poke-Chief antes de Poke-Friend. O MVP do Poke-Chief concentra-se em montar times e entender fraquezas, enquanto Poke-Friend ainda parece scaffold."] },
      { type: "heading", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Center: a documentação prioriza Poke-Chief antes de Poke-Friend. O MVP do Poke-Chief concentra-se em montar times e entender fraquezas, enquanto Poke-Friend ainda parece scaffold. Escolher um fluxo principal reduz quantas partes precisam funcionar para a primeira demo."] },
      { type: "heading", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `apps/POKE_CHIEF_MVP_SCOPE.md` e estrutura de `apps/`; diferenciar planos de implementação. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Escolher um fluxo principal reduz quantas partes precisam funcionar para a primeira demo."] },
      { type: "heading", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkc-001-um-ecossistema-precisa-de-um-primeiro-produto-p7", paragraphs: ["O que ainda não devemos concluir: Não descrever todos os apps do monorepo como produtos prontos. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKC-001; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio",
    title: "Um builder de times precisa validar o próprio domínio",
    category: "Projeto · Engenharia de software",
    summary: "Seis slots e quatro moves por Pokémon são regras de domínio, não apenas componentes visuais. O README do frontend Poke-Chief descreve montagem de…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-center"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-opening", paragraphs: ["Seis slots e quatro moves por Pokémon são regras de domínio, não apenas componentes visuais. O README do frontend Poke-Chief descreve montagem de equipes com até seis membros e quatro movimentos por membro. O código inclui funções de validação de slots."] },
      { type: "heading", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Center: o README do frontend Poke-Chief descreve montagem de equipes com até seis membros e quatro movimentos por membro. O código inclui funções de validação de slots. Validação explícita pode impedir estados impossíveis antes de enviar o time para análise."] },
      { type: "heading", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `apps/poke-chief/src/lib/slot-validation.ts` e testes existentes como arquivos — não afirmar que foram executados. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Validação explícita pode impedir estados impossíveis antes de enviar o time para análise."] },
      { type: "heading", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkc-002-um-builder-de-times-precisa-validar-o-proprio-dominio-p7", paragraphs: ["O que ainda não devemos concluir: README e frontend não comprovam backend ativo nem jornada integrada no ambiente atual. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKC-002; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia",
    title: "Paginação também é uma decisão de experiência",
    category: "Projeto · Engenharia de software",
    summary: "Buscar um catálogo grande de uma vez pode custar mais do que a tela precisa. O frontend monta parâmetros de paginação e busca para o catálogo…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-center"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-opening", paragraphs: ["Buscar um catálogo grande de uma vez pode custar mais do que a tela precisa. O frontend monta parâmetros de paginação e busca para o catálogo, incluindo IDs já carregados em `excludeIds`."] },
      { type: "heading", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Center: o frontend monta parâmetros de paginação e busca para o catálogo, incluindo IDs já carregados em `excludeIds`. A consulta pede uma página e evita solicitar novamente itens que a interface já tem."] },
      { type: "heading", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `apps/poke-chief/src/lib/api/catalog-query.ts` e `catalog.ts`; sinalizar que é contrato do frontend. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. A consulta pede uma página e evita solicitar novamente itens que a interface já tem."] },
      { type: "heading", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkc-003-paginacao-tambem-e-uma-decisao-de-experiencia-p7", paragraphs: ["O que ainda não devemos concluir: Contrato de API e consumo no frontend estão no código; comportamento do backend ainda depende de integração validada. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKC-003; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes",
    title: "Análise rápida e análise assíncrona têm custos diferentes",
    category: "Projeto · Engenharia de software",
    summary: "Nem toda análise precisa bloquear a tela enquanto o processamento acontece. O frontend separa chamada de análise síncrona e criação de job para equipes…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-center"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-opening", paragraphs: ["Nem toda análise precisa bloquear a tela enquanto o processamento acontece. O frontend separa chamada de análise síncrona e criação de job para equipes salvas, com polling de estado."] },
      { type: "heading", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Center: o frontend separa chamada de análise síncrona e criação de job para equipes salvas, com polling de estado. Uma análise imediata e uma tarefa em fila pedem estados de interface diferentes."] },
      { type: "heading", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/lib/api/analysis.ts` e `src/hooks/use-analysis-poll.ts` no subprojeto Poke-Chief. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Uma análise imediata e uma tarefa em fila pedem estados de interface diferentes."] },
      { type: "heading", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkc-004-analise-rapida-e-analise-assincrona-tem-custos-diferentes-p7", paragraphs: ["O que ainda não devemos concluir: A existência dos clientes de API não prova que worker e backend estejam acessíveis; confirmar antes de mostrar resultado real. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKC-004; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkc-005-relatorio-de-analise-precisa-mostrar-limites",
    title: "Relatório de análise precisa mostrar limites",
    category: "Projeto · Engenharia de software",
    summary: "Uma recomendação sem explicar sua cobertura pode parecer mais precisa do que é. O frontend tem componentes para cobertura, recomendações e limitações…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-center"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-opening", paragraphs: ["Uma recomendação sem explicar sua cobertura pode parecer mais precisa do que é. O frontend tem componentes para cobertura, recomendações e limitações do relatório. A qualidade depende dos dados e das regras que chegam da API."] },
      { type: "heading", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Center: o frontend tem componentes para cobertura, recomendações e limitações do relatório. A qualidade depende dos dados e das regras que chegam da API. Mostrar a origem e as limitações da análise ajuda a pessoa a interpretar o resultado."] },
      { type: "heading", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Use código real da pasta `components/analysis/`; capturas de tela só após a API e os dados estarem validados. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Mostrar a origem e as limitações da análise ajuda a pessoa a interpretar o resultado."] },
      { type: "heading", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkc-005-relatorio-de-analise-precisa-mostrar-limites-p7", paragraphs: ["O que ainda não devemos concluir: Não afirmar precisão competitiva nem resultado de batalha sem avaliação reproduzível. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKC-005; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos",
    title: "Monorepo é tão reproduzível quanto seus submódulos",
    category: "Projeto · Engenharia de software",
    summary: "Um README pode descrever um backend; o checkout ainda precisa saber como obtê-lo. Na revisão do clone, os três submódulos de apps têm URLs; há também…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-center"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-opening", paragraphs: ["Um README pode descrever um backend; o checkout ainda precisa saber como obtê-lo. Na revisão do clone, os três submódulos de apps têm URLs; há também um gitlink `backend` sem entrada correspondente no `.gitmodules`, o que impede inicializar o backend pelo fluxo normal."] },
      { type: "heading", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Center: na revisão do clone, os três submódulos de apps têm URLs; há também um gitlink `backend` sem entrada correspondente no `.gitmodules`, o que impede inicializar o backend pelo fluxo normal. Documentar origem e versão de cada submódulo faz parte de tornar o monorepo reproduzível."] },
      { type: "heading", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `.gitmodules` e `git submodule status` somente depois de revalidar; não mostrar informações privadas. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Documentar origem e versão de cada submódulo faz parte de tornar o monorepo reproduzível."] },
      { type: "heading", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkc-006-monorepo-e-tao-reproduzivel-quanto-seus-submodulos-p7", paragraphs: ["O que ainda não devemos concluir: É um achado do checkout revisado; confirmar no branch atual antes de divulgar como problema ativo. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKC-006; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta",
    title: "Uma wiki organiza conhecimento por caminhos de consulta",
    category: "Projeto · Engenharia de software",
    summary: "Uma lista de entidades não vira uma wiki até que alguém consiga navegar entre elas. O frontend define rotas para Pokédex, jogos, guias e emuladores…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-wiki"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-opening", paragraphs: ["Uma lista de entidades não vira uma wiki até que alguém consiga navegar entre elas. O frontend define rotas para Pokédex, jogos, guias e emuladores, além de páginas de detalhe. Isso mostra uma estrutura de informação pretendida no código."] },
      { type: "heading", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Wiki: o frontend define rotas para Pokédex, jogos, guias e emuladores, além de páginas de detalhe. Isso mostra uma estrutura de informação pretendida no código. A página inicial leva a categorias; cada categoria pode abrir um detalhe relacionado."] },
      { type: "heading", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/pages/pagesData.tsx`, `src/pages/router.tsx` e a home. Não usar assets de franquias no diagrama. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. A página inicial leva a categorias; cada categoria pode abrir um detalhe relacionado."] },
      { type: "heading", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkw-001-uma-wiki-organiza-conhecimento-por-caminhos-de-consulta-p7", paragraphs: ["O que ainda não devemos concluir: A presença das rotas não significa que todo conteúdo e detalhe esteja completo. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKW-001; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham",
    title: "Redux pode centralizar dados que várias páginas compartilham",
    category: "Projeto · Engenharia de software",
    summary: "Quando várias rotas dependem do mesmo catálogo, estado compartilhado pode evitar cópias divergentes. O app inicializa Redux e define dados tipados para…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-wiki"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-opening", paragraphs: ["Quando várias rotas dependem do mesmo catálogo, estado compartilhado pode evitar cópias divergentes. O app inicializa Redux e define dados tipados para Pokédex e jogos, que páginas consultam via selectors."] },
      { type: "heading", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Wiki: o app inicializa Redux e define dados tipados para Pokédex e jogos, que páginas consultam via selectors. Uma categoria pode ler o mesmo catálogo que a página inicial usa para montar links."] },
      { type: "heading", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/redux/store.ts` e `src/redux/pokemon_games.ts`; esconder assets e dados que não têm origem validada. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Uma categoria pode ler o mesmo catálogo que a página inicial usa para montar links."] },
      { type: "heading", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkw-002-redux-pode-centralizar-dados-que-varias-paginas-compartilham-p7", paragraphs: ["O que ainda não devemos concluir: A arquitetura Redux existe no frontend; atualização, persistência e backend precisam ser revisados separadamente. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKW-002; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo",
    title: "Tipos ajudam a detectar lacunas no catálogo",
    category: "Projeto · Engenharia de software",
    summary: "Um tipo explícito pode deixar inconsistências de dados visíveis antes da renderização. O estado da Pokédex declara um conjunto de tipos e campos como…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-wiki"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-opening", paragraphs: ["Um tipo explícito pode deixar inconsistências de dados visíveis antes da renderização. O estado da Pokédex declara um conjunto de tipos e campos como nome, sprite e descrição. Isso documenta o formato esperado pelo frontend."] },
      { type: "heading", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Wiki: o estado da Pokédex declara um conjunto de tipos e campos como nome, sprite e descrição. Isso documenta o formato esperado pelo frontend. Uma espécie com tipo duplo precisa caber no modelo sem inventar um segundo tipo para todas."] },
      { type: "heading", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: tipos/interface em `src/redux/pokedex/pokedex.ts`; não capturar sprites de origem não verificada. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Uma espécie com tipo duplo precisa caber no modelo sem inventar um segundo tipo para todas."] },
      { type: "heading", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkw-003-tipos-ajudam-a-detectar-lacunas-no-catalogo-p7", paragraphs: ["O que ainda não devemos concluir: O modelo do frontend não valida a origem/licença nem garante catálogo completo. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKW-003; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta",
    title: "Uma rota criada pode revelar o próximo componente que falta",
    category: "Projeto · Engenharia de software",
    summary: "Ter uma rota de detalhe não garante que a tela de detalhe esteja pronta. No remoto revisado, há rota `/pokedex/pokemon/:id`, mas `PokedexComponent`…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-wiki"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-opening", paragraphs: ["Ter uma rota de detalhe não garante que a tela de detalhe esteja pronta. No remoto revisado, há rota `/pokedex/pokemon/:id`, mas `PokedexComponent` está vazio. Esse contraste identifica uma lacuna concreta entre navegação e conteúdo."] },
      { type: "heading", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Wiki: no remoto revisado, há rota `/pokedex/pokemon/:id`, mas `PokedexComponent` está vazio. Esse contraste identifica uma lacuna concreta entre navegação e conteúdo. A rota aceita uma URL; o componente ainda precisa buscar/selecionar e renderizar dados reais."] },
      { type: "heading", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real: `src/pages/pagesData.tsx` e `src/components/Pokedex/index.tsx` para mostrar rota versus componente. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. A rota aceita uma URL; o componente ainda precisa buscar/selecionar e renderizar dados reais."] },
      { type: "heading", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkw-004-uma-rota-criada-pode-revelar-o-proximo-componente-que-falta-p7", paragraphs: ["O que ainda não devemos concluir: Não apresentar a Pokédex como experiência completa; conferir novamente antes de publicar. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKW-004; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkw-005-catalogo-e-midia-tem-fontes-diferentes",
    title: "Catálogo e mídia têm fontes diferentes",
    category: "Projeto · Engenharia de software",
    summary: "Dados estruturados, imagens e descrições podem ter permissões e origens distintas. O frontend referencia sprites hospedados por terceiros e possui…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-wiki"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-opening", paragraphs: ["Dados estruturados, imagens e descrições podem ter permissões e origens distintas. O frontend referencia sprites hospedados por terceiros e possui arquivos de fonte/imagem locais; a procedência precisa ser documentada antes da divulgação."] },
      { type: "heading", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Wiki: o frontend referencia sprites hospedados por terceiros e possui arquivos de fonte/imagem locais; a procedência precisa ser documentada antes da divulgação. Um catálogo pode carregar nomes e tipos de uma fonte, mas exibir imagem de outra."] },
      { type: "heading", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Na mídia pública, usar apenas gráficos próprios ou assets cuja licença esteja confirmada. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Um catálogo pode carregar nomes e tipos de uma fonte, mas exibir imagem de outra."] },
      { type: "heading", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkw-005-catalogo-e-midia-tem-fontes-diferentes-p7", paragraphs: ["O que ainda não devemos concluir: Não redistribuir sprites, logos, fontes ou capturas sem verificar direitos e condições de uso. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKW-005; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes",
    title: "Pokémon Wiki e Pokémon Center têm histórias diferentes",
    category: "Projeto · Engenharia de software",
    summary: "Uma Pokédex de navegação e uma ferramenta de análise de times não precisam virar o mesmo produto. A Wiki concentra páginas de consulta; Pokémon…",
    readingTime: "2 min",
    projectSlugs: ["pokemon-wiki"],
    content: [],
    story: [
      { type: "paragraphs", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-opening", paragraphs: ["Uma Pokédex de navegação e uma ferramenta de análise de times não precisam virar o mesmo produto. A Wiki concentra páginas de consulta; Pokémon Center/Poke-Chief se orienta a montar e analisar equipes. Mantê-los separados deixa cada narrativa mais clara."] },
      { type: "heading", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-h1", title: "A decisão por trás do exemplo" },
      { type: "paragraphs", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-p1", paragraphs: ["O ponto técnico aqui não é apresentar uma solução universal. É observar uma decisão concreta dentro de Pokémon Wiki: a Wiki concentra páginas de consulta; Pokémon Center/Poke-Chief se orienta a montar e analisar equipes. Mantê-los separados deixa cada narrativa mais clara. Consulta de informação e decisão sobre um time são tarefas relacionadas, mas diferentes."] },
      { type: "heading", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-h3", title: "Onde isso aparece no projeto" },
      { type: "paragraphs", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-p3", paragraphs: ["No material atual do projeto, a evidência indicada é: Captura real opcional de rotas dos dois frontends depois de revisar conteúdo e assets; não alegar integração entre eles. Isso delimita o que podemos afirmar e também dá ao leitor um caminho para conferir a implementação, em vez de depender apenas da descrição."] },
      { type: "heading", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-h5", title: "O que observar ao aplicar" },
      { type: "paragraphs", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-p5", paragraphs: ["A aplicação prática depende do contexto. Vale olhar para a responsabilidade envolvida, para as entradas e saídas, e para o custo de manter essa decisão conforme o projeto cresce. Consulta de informação e decisão sobre um time são tarefas relacionadas, mas diferentes."] },
      { type: "heading", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-h7", title: "Limites e próximo passo" },
      { type: "paragraphs", id: "pkw-006-pokemon-wiki-e-pokemon-center-tem-historias-diferentes-p7", paragraphs: ["O que ainda não devemos concluir: Não afirmar integração ou compartilhamento de dados entre os repositórios sem verificar. O próximo passo é validar o comportamento no código atual e, se necessário, registrar um exemplo executável ou uma demonstração antes de tratar esta ideia como resultado final."] },
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PKW-006; validar conteúdo, código e evidências antes de publicar",
  },
  {
    slug: "monolito-modular-limites-claros",
    title: "Monólito modular: uma aplicação, limites claros",
    category: "Arquitetura de software",
    summary:
      "Monólito descreve como uma aplicação é implantada; modularidade descreve como ela organiza responsabilidades e dependências. As duas ideias podem coexistir.",
    publishedAt: "2026-11-03",
    readingTime: "7 min",
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
      { type: "heading", id: "arq-001-explicacao-1", title: "Como tornar a fronteira verificável" },
      { type: "paragraphs", id: "arq-001-explicacao-1-texto", paragraphs: [
        "Uma fronteira de módulo precisa ter uma regra observável. Por exemplo: Pedidos pode chamar uma operação pública de Estoque, mas não importar seu repositório SQL nem escrever diretamente em suas tabelas. Essa regra pode ser expressa por dependências unidirecionais, interfaces públicas pequenas e testes que falham quando um módulo acessa o interior de outro.",
        "Comece pelas dependências que mais mudam ou causam retrabalho. Tentar encapsular cada função cria uma arquitetura cerimonial. Uma fronteira é útil quando protege uma regra de negócio, mantém ownership claro ou reduz o número de lugares que precisam mudar juntos."
      ] },
      { type: "heading", id: "arq-001-explicacao-2", title: "Quando um monólito modular começa a doer" },
      { type: "paragraphs", id: "arq-001-explicacao-2-texto", paragraphs: [
        "Um deploy único ainda exige disciplina operacional: uma migração pode afetar a aplicação inteira e um erro de inicialização pode impedir todos os módulos de subir. Por outro lado, um deploy único facilita transações locais, debugging e releases coordenados. A escolha deve considerar os custos que o time realmente sente.",
        "Um sinal para reavaliar não é “o repositório cresceu”, sozinho. Investigue acoplamento de release, conflitos de ownership, requisitos de escala muito diferentes e limites que já podem ser medidos. Mesmo assim, extrair um módulo só ajuda se sua fronteira interna estiver estável; caso contrário, a rede apenas torna as chamadas acopladas mais lentas e frágeis."
      ] },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-002-explicacao-1", title: "A fronteira não remove o trabalho: ela muda onde ele acontece" },
      { type: "paragraphs", id: "arq-002-explicacao-1-texto", paragraphs: [
        "Em uma aplicação única, uma transação de banco pode gravar pedido e reserva de estoque com uma garantia local. Depois de separar serviços, cada banco confirma sua própria transação. Uma falha no meio deixa um estado intermediário que precisa ser representado, observado e eventualmente corrigido.",
        "Isso não torna microsserviços errados. Torna necessário justificar o preço: autonomia de deploy, escala independente, isolamento de falhas ou ownership organizacional podem compensar filas, contratos, tracing distribuído e operação de mais componentes. O benefício precisa ser concreto o suficiente para pagar a nova complexidade."
      ] },
      { type: "heading", id: "arq-002-explicacao-2", title: "Extraia uma capacidade, não uma pasta" },
      { type: "paragraphs", id: "arq-002-explicacao-2-texto", paragraphs: [
        "Antes de mover código, identifique quem é dono dos dados, quais consumidores existem, como mudanças serão versionadas e o que acontece quando o novo serviço está indisponível. Uma extração incremental pode começar com uma interface interna e um adapter, mantendo a chamada local até a fronteira estar entendida.",
        "Compare a situação atual com uma hipótese mensurável: releases independentes mais frequentes, limites de escala diferentes ou redução de contenção entre equipes. Se não houver um indicador de sucesso, “separar para escalar” pode apenas transformar uma dificuldade visível em várias dificuldades distribuídas."
      ] },
      {
        type: "callout",
        id: "ideia-central",
        title: "Ideia para levar",
        body: "Separe um serviço quando o limite e a capacidade operacional justificarem a rede, os dados distribuídos e o trabalho de manter contratos.",
        tone: "result",
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-003-explicacao-1", title: "Organizar por responsabilidade ou por caminho de mudança" },
      { type: "paragraphs", id: "arq-003-explicacao-1-texto", paragraphs: [
        "Uma estrutura em camadas agrupa detalhes técnicos: controllers, serviços, repositórios. Uma fatia vertical agrupa os elementos que realizam um caso de uso: entrada, regra, persistência e saída. Nenhum eixo substitui o outro; a questão é qual torna mais fácil localizar e modificar a funcionalidade sem espalhar a mudança por toda a aplicação.",
        "Imagine uma busca de pedidos. Em camadas, a busca pode estar dividida em arquivos compartilhados com muitas operações; em fatias, o fluxo de busca fica próximo de outros componentes desse caso de uso. Uma equipe pode manter camadas internas dentro de cada fatia, desde que isso simplifique o entendimento em vez de duplicar abstrações."
      ] },
      { type: "heading", id: "arq-003-explicacao-2", title: "Como escolher sem transformar organização em dogma" },
      { type: "paragraphs", id: "arq-003-explicacao-2-texto", paragraphs: [
        "Observe o histórico de mudanças: quais arquivos costumam mudar juntos? Onde uma tarefa simples obriga a editar muitas áreas? Quais módulos têm razões distintas para mudar? Esses dados ajudam a decidir a estrutura a partir do fluxo real de trabalho, em vez de adotar uma árvore de diretórios por preferência estética.",
        "Um projeto pequeno pode começar com uma organização simples e mover uma funcionalidade quando surgirem sinais de dispersão ou acoplamento. A migração deve preservar contratos e testes, e pode ocorrer gradualmente. Não é necessário reescrever tudo para trocar o eixo de organização de um módulo."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escolha a estrutura observando onde as mudanças acontecem e mantenha explícitas as dependências que importam.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-004-explicacao-1", title: "O que merece uma porta" },
      { type: "paragraphs", id: "arq-004-explicacao-1-texto", paragraphs: [
        "Uma porta descreve uma necessidade do domínio ou do caso de uso; um adapter traduz essa necessidade para uma tecnologia concreta. “Carregar previsão por cidade” pode ser uma porta útil quando existem provedores alternativos ou quando testes precisam substituir a rede. Uma interface que só repete cada método de uma biblioteca, sem proteger regra nem permitir uma decisão, pode ser uma camada a mais sem ganho claro.",
        "A direção da dependência importa: a regra de aplicação define a interface que precisa, e o adapter externo a implementa. Assim, o domínio não precisa conhecer tipos de SDK, formatos HTTP ou detalhes do banco. Porém, a fronteira precisa traduzir erros, timeouts e semântica; esconder a tecnologia não elimina suas falhas."
      ] },
      { type: "heading", id: "arq-004-explicacao-2", title: "Testabilidade sem fingir que tudo é local" },
      { type: "paragraphs", id: "arq-004-explicacao-2-texto", paragraphs: [
        "Um fake em teste unitário ajuda a verificar a regra sem rede, mas não prova que o adapter real funciona com a API, banco ou fila. Mantenha testes de contrato ou integração para conferir serialização, autenticação, consultas e tratamento de falhas na borda real.",
        "Use a porta onde a troca de implementação, o isolamento de efeito externo ou a clareza do caso de uso compensem o custo. Evite interfaces criadas apenas para cada struct ter uma abstração correspondente. A arquitetura deve tornar explícita uma decisão que importa, não obrigar o código a atravessar cerimônias."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "A abstração deve proteger uma conversa importante; não é uma meta medir quantas interfaces existem.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-005-explicacao-1", title: "Agregados protegem invariantes" },
      { type: "paragraphs", id: "arq-005-explicacao-1-texto", paragraphs: [
        "Um agregado é uma fronteira de consistência para um conjunto de objetos que precisa preservar regras em conjunto. Se uma reserva não pode ultrapassar o estoque disponível, a operação que cria a reserva precisa controlar a invariável. O agregado não é simplesmente uma classe com objetos filhos: é uma decisão sobre quais alterações devem ser atômicas e quem tem autoridade para realizá-las.",
        "Um agregado muito grande concentra contenção e torna mudanças lentas. Um agregado muito pequeno pode deixar invariantes importantes espalhadas por transações e chamadas. Modele a partir das regras que precisam ser verdadeiras ao confirmar uma operação, e não de um diagrama que espelha todas as tabelas."
      ] },
      { type: "heading", id: "arq-005-explicacao-2", title: "Entidades, value objects e linguagem do domínio" },
      { type: "paragraphs", id: "arq-005-explicacao-2-texto", paragraphs: [
        "Uma entidade tem identidade que persiste apesar de mudanças em seus atributos. Um value object representa um valor definido por seus componentes e costuma ser imutável, como intervalo de datas ou quantidade com unidade. Essa distinção ajuda a expressar regras e comparar conceitos sem criar identidade artificial para todo dado.",
        "Os nomes do modelo devem corresponder ao vocabulário que produto e engenharia usam para discutir comportamento. DDD tático não é uma licença para criar fábricas, repositórios e eventos para qualquer operação. Use esses padrões quando ajudam a manter invariantes, limites de consistência e contratos compreensíveis."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escolha padrões táticos para expressar identidade, igualdade e invariantes reais; o modelo é ferramenta, não coleção de classes.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-006-explicacao-1", title: "O efeito idempotente depende da fronteira de persistência" },
      { type: "paragraphs", id: "arq-006-explicacao-1-texto", paragraphs: [
        "Uma chave de idempotência identifica a mesma operação lógica em tentativas diferentes. O consumidor pode registrar o identificador do evento numa tabela inbox com uma restrição única e aplicar a mudança de negócio na mesma transação local. Se a aplicação cair antes do commit, ambas podem ser repetidas; se o commit ocorreu mas o ack se perdeu, a duplicata encontra o registro e não repete o efeito.",
        "Quando o efeito ocorre em outro sistema, a transação local não o protege automaticamente. Uma chamada de pagamento pode ser aceita e a resposta se perder. Nesse caso, reutilize uma chave idempotente suportada pelo destino, guarde o estado da operação e reconcilie resultados desconhecidos em vez de assumir sucesso ou falha."
      ] },
      { type: "heading", id: "arq-006-explicacao-2", title: "Outbox, ordenação e limites do “exactly once”" },
      { type: "paragraphs", id: "arq-006-explicacao-2-texto", paragraphs: [
        "O transactional outbox grava a mudança de negócio e a intenção de publicar um evento na mesma transação do banco. Um processo separado envia o evento e pode enviá-lo novamente caso não consiga registrar a confirmação. Por isso, outbox e consumidor idempotente trabalham juntos: a publicação ainda pode se repetir.",
        "“Exactly once” só é significativo quando se define o escopo: uma entrega no broker, um processamento lógico ou um efeito externo? Diferentes tecnologias e configurações oferecem garantias diferentes. Descreva a garantia observável pelo negócio e teste falhas nas janelas entre persistir, publicar, processar e confirmar."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Defina a propriedade de negócio contra duplicatas e alinhe deduplicação, efeito e confirmação com uma fronteira de falha real.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-007-explicacao-1", title: "O atraso é parte do contrato de leitura" },
      { type: "paragraphs", id: "arq-007-explicacao-1-texto", paragraphs: [
        "Considere um pedido que acabou de ser confirmado, enquanto a tela consulta uma projeção atualizada por eventos. A gravação pode estar concluída e a busca ainda retornar o estado anterior. Se a interface não explicar isso, a pessoa interpreta um atraso esperado como perda da operação.",
        "Uma opção é devolver a versão ou o identificador da alteração e deixar a leitura aguardar até alcançar aquele ponto. Outra é mostrar estado “atualizando” e atualizar a projeção depois. Essas estratégias oferecem graus diferentes de read-your-writes e têm custos de latência e complexidade."
      ] },
      { type: "heading", id: "arq-007-explicacao-2", title: "Reconciliação, monotonicidade e limites" },
      { type: "paragraphs", id: "arq-007-explicacao-2-texto", paragraphs: [
        "Uma projeção eventual precisa de observabilidade sobre atraso, eventos pendentes, falhas e reconstrução. Reprocessar eventos pode corrigir uma projeção, mas exige handlers determinísticos ou mecanismos para evitar duplicar efeitos. Um número médio de atraso pode esconder uma cauda de partições travadas; acompanhe distribuição e idade do item mais antigo.",
        "Nem toda leitura pode tolerar dados atrasados. Saldo, limite de crédito ou autorização podem exigir uma fonte transacional mais forte. Defina por caso de uso o atraso máximo aceitável e o comportamento durante a defasagem. Consistência eventual é um trade-off explícito, não uma propriedade que deve ser imposta a todo o sistema."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Consistência eventual é um contrato sobre estados temporários e convergência, não uma promessa vaga de que tudo se corrigirá sozinho.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-008-explicacao-1", title: "Um ADR registra contexto, não apenas a conclusão" },
      { type: "paragraphs", id: "arq-008-explicacao-1-texto", paragraphs: [
        "Uma decisão sem contexto envelhece mal: “usaremos fila” não conta qual problema existia, quais alternativas foram consideradas ou qual custo foi aceito. Um ADR útil registra situação, forças envolvidas, opção escolhida e consequências, incluindo aquilo que será mais difícil depois.",
        "Mantenha o documento pequeno e próximo do código. A decisão precisa poder ser lida sem reunião ou contexto oral. Link para RFCs, incidentes ou métricas quando esses materiais são necessários, mas não transforme o ADR num arquivo de transcrição de debate."
      ] },
      { type: "heading", id: "arq-008-explicacao-2", title: "Estados e revisão das decisões" },
      { type: "paragraphs", id: "arq-008-explicacao-2-texto", paragraphs: [
        "ADRs são registros cronológicos, não uma enciclopédia que deve sempre conter apenas a decisão atual. Se uma decisão for substituída, crie um novo registro apontando para o anterior e marque seu estado como superseded. Assim, quem investiga o histórico entende o que era verdade em cada momento.",
        "Revisite uma decisão quando suas premissas mudarem: volume, equipe, requisitos regulatórios, custo de operação ou tecnologia. Evite reabrir escolhas sem um sinal novo. O valor do registro está em reduzir decisões repetidas e tornar explícitas as condições que fariam uma escolha deixar de servir."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escreva o suficiente para que outra pessoa entenda o contexto e o custo aceito; mantenha o registro perto do código.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-009-explicacao-1", title: "Logs, métricas e traces respondem perguntas diferentes" },
      { type: "paragraphs", id: "arq-009-explicacao-1-texto", paragraphs: [
        "Métricas resumem comportamento ao longo do tempo e ajudam a detectar mudanças como aumento de latência ou taxa de erro. Logs registram eventos com contexto; traces mostram o caminho de uma operação entre componentes e quanto tempo cada etapa consumiu. Nenhum sinal sozinho explica toda investigação.",
        "Use um identificador de correlação para seguir uma requisição entre serviços, mas não registre dados pessoais ou tokens como atalho de contexto. A cardinalidade das dimensões também importa: um ID de usuário em label de métrica pode explodir o volume e o custo. Escolha campos para responder perguntas operacionais reais."
      ] },
      { type: "heading", id: "arq-009-explicacao-2", title: "Instrumentar a jornada crítica" },
      { type: "paragraphs", id: "arq-009-explicacao-2-texto", paragraphs: [
        "Comece pelo caminho que representa uma tarefa importante: criar pedido, processar pagamento, concluir importação. Registre início, resultado, dependência chamada e duração; transforme taxas e latências em métricas; propague contexto de trace nas chamadas. A instrumentação precisa sobreviver a erros e cancelamentos, não apenas ao caminho feliz.",
        "Combine sinais com ownership e runbooks. Um dashboard que dispara alerta sem indicar impacto, responsável ou próximo passo aumenta ruído. Defina quais sintomas indicam degradação para a pessoa usuária, como distinguir erro interno de falha externa e como coletar contexto suficiente sem expor informação sensível."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Defina a pergunta operacional primeiro; emita sinais correlacionáveis e seguros para respondê-la.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-010-explicacao-1", title: "Retries podem amplificar a falha" },
      { type: "paragraphs", id: "arq-010-explicacao-1-texto", paragraphs: [
        "Se um serviço lento recebe mais tentativas de todos os clientes, cada retry adiciona carga justamente quando ele tem menos capacidade. A política precisa ter limite, backoff com jitter e um orçamento de tentativas ligado ao tempo total que a operação pode consumir. Só repita operações que sejam seguras para repetir ou protegidas por idempotência.",
        "Um timeout também precisa cobrir o orçamento da chamada inteira: conexão, espera por resposta e trabalho posterior. Se cada camada reiniciar um timeout completo, a latência total pode exceder muito o que o cliente aceita. Propague deadline e cancele trabalho que não terá mais utilidade."
      ] },
      { type: "heading", id: "arq-010-explicacao-2", title: "Circuit breaker não substitui timeout nem fila" },
      { type: "paragraphs", id: "arq-010-explicacao-2-texto", paragraphs: [
        "Um circuit breaker interrompe chamadas a um destino que aparenta falhar e permite sondagens de recuperação depois. Timeout limita quanto se espera por chamada; retry decide se uma tentativa pode ser feita de novo; bulkhead limita o recurso consumido por um grupo. Cada mecanismo trata um modo de falha diferente.",
        "Parâmetros precisam refletir latência normal e impacto de abrir o circuito. Um limite agressivo pode bloquear uma dependência que está se recuperando; um limite longo pode manter threads ocupadas e espalhar saturação. Meça, simule falhas e exponha estado e contagem de tentativas para que resiliência não vire comportamento invisível."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Limite espera, carga e concorrência. Para cada política, defina qual falha ela contém e como o usuário percebe o resultado.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-011-explicacao-1", title: "Aceitar trabalho assíncrono exige um recurso consultável" },
      { type: "paragraphs", id: "arq-011-explicacao-1-texto", paragraphs: [
        "Um endpoint pode validar a solicitação, persistir um job e responder com um identificador de operação. O cliente então consulta estado, recebe atualização por webhook ou acompanha uma stream, conforme a necessidade. “Aceito” precisa significar que o pedido foi guardado de forma durável, e não que existe apenas numa memória que pode ser perdida no próximo restart.",
        "Defina estados observáveis como queued, running, succeeded e failed, além de expiração e política de repetição. O cliente precisa saber se pode reenviar uma solicitação após timeout; uma chave de idempotência ajuda a impedir que uma incerteza de rede crie dois jobs."
      ] },
      { type: "heading", id: "arq-011-explicacao-2", title: "Síncrono quando o resultado é parte do fluxo" },
      { type: "paragraphs", id: "arq-011-explicacao-2-texto", paragraphs: [
        "Uma resposta síncrona é adequada quando a operação termina dentro de um orçamento curto e o resultado é necessário para continuar a interação. Ela oferece um contrato simples, mas mantém recursos ocupados enquanto dependências trabalham e pode falhar por timeout de gateway mesmo que o backend continue executando.",
        "Não escolha assíncrono apenas para mascarar lentidão. Ele adiciona estado, polling ou notificações, reprocessamento, filas e suporte a operações incompletas. Compare a duração e variabilidade reais, a experiência do cliente e o custo de recuperação. A interface deve refletir o trabalho em progresso e permitir retomar a consulta."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Responda imediatamente quando o resultado cabe no ciclo interativo; caso contrário, modele aceite, estado e conclusão como recursos distintos.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-012-explicacao-1", title: "Expand, migrate, contract em etapas" },
      { type: "paragraphs", id: "arq-012-explicacao-1-texto", paragraphs: [
        "Na fase expand, adicione a nova coluna ou estrutura de forma que o código antigo continue funcionando. Em seguida, publique código que escreve compativelmente no formato antigo e no novo, ou que leia com fallback enquanto migra dados. Só depois confirme que todos os leitores e escritores usam o novo formato.",
        "A fase contract remove a coluna antiga ou o caminho de compatibilidade após verificar uso residual, métricas e versões ainda em execução. Deploys com instâncias simultâneas tornam perigoso supor que uma única versão do código controla todos os acessos."
      ] },
      { type: "heading", id: "arq-012-explicacao-2", title: "Migração de dados e recuperação" },
      { type: "paragraphs", id: "arq-012-explicacao-2-texto", paragraphs: [
        "Uma transformação grande pode precisar de lotes pequenos, checkpoints, limitação de taxa e possibilidade de retomar. Registre quantos registros foram processados, quais falharam e como detectar inconsistências entre representações. Para reversão, voltar o binário não desfaz automaticamente dados já transformados.",
        "Planeje backup restaurável, critérios de abortar, estratégia de compensação e compatibilidade entre versões. Teste locks, duração e impacto no tráfego com volume representativo. A sequência segura depende do banco e da mudança; “zero downtime” não pode ser prometido apenas porque o comando de alteração é online."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Mantenha compatibilidade enquanto versões coexistem e só remova a forma antiga depois de verificar todos os consumidores.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-013-explicacao-1", title: "Uma flag precisa de dono e ciclo de vida" },
      { type: "paragraphs", id: "arq-013-explicacao-1-texto", paragraphs: [
        "Uma flag de lançamento pode começar restrita à equipe, avançar para um grupo e depois ser liberada. Cada etapa deve ter critério de avanço, métrica de saúde e plano para interromper a exposição. Uma flag permanente de configuração tem outra finalidade e precisa de governança diferente de um interruptor temporário de rollout.",
        "Flags acumuladas criam combinações que podem multiplicar caminhos de execução. Nome, responsável, data de revisão e condição de remoção ajudam a evitar que o sistema carregue branches esquecidos por anos. Remover a flag é parte da implementação, não uma tarefa administrativa opcional."
      ] },
      { type: "heading", id: "arq-013-explicacao-2", title: "Deploy, ativação e rollback são momentos diferentes" },
      { type: "paragraphs", id: "arq-013-explicacao-2-texto", paragraphs: [
        "Deploy coloca código no ambiente; ativação muda quem recebe a funcionalidade. Separar os dois permite lançar código antes de expô-lo a todo mundo, mas não protege contra incompatibilidades em banco, cache ou mensagens. O código novo precisa coexistir com o antigo durante a janela de rollout.",
        "Uma flag avaliada no cliente pode controlar interface, mas não autorização. A decisão de acesso sensível deve ser validada no servidor. Também defina o comportamento padrão quando o serviço de flags estiver indisponível, e garanta que flags de emergência não dependam de um caminho que falha junto com a funcionalidade."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Use uma flag para controlar uma mudança explícita e gerencie seu ciclo de vida como parte da entrega.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-014-explicacao-1", title: "Identidade, ação e recurso" },
      { type: "paragraphs", id: "arq-014-explicacao-1-texto", paragraphs: [
        "Menor privilégio fica mais preciso quando a permissão descreve quem pode realizar qual ação sobre qual recurso e em que contexto. Um worker que gera miniaturas pode ler objetos de entrada e gravar somente no prefixo de saída necessário; não precisa de acesso administrativo à conta ou à base inteira.",
        "Prefira identidades distintas por serviço e credenciais de curta duração quando a plataforma permitir. Segredos compartilhados tornam difícil atribuir ações, rotacionar acesso e limitar impacto. A política precisa acompanhar dependências indiretas: um serviço pode não ler dados diretamente, mas ainda ter permissão para chamar um componente que os expõe."
      ] },
      { type: "heading", id: "arq-014-explicacao-2", title: "Autorizar perto do efeito protegido" },
      { type: "paragraphs", id: "arq-014-explicacao-2-texto", paragraphs: [
        "Esconder uma ação na interface não impede que uma requisição seja construída manualmente. A validação de autorização deve ocorrer no servidor, próxima à operação que lê ou altera o recurso, usando identidade confiável e escopo correto. Checar apenas o papel global do usuário pode deixar passar acesso entre organizações.",
        "Audite permissões efetivas e remova grants obsoletos. Testes devem cobrir negação, não só acesso permitido, incluindo recursos de outro tenant e identidades de serviço. O objetivo é reduzir o raio de impacto de uma credencial comprometida sem quebrar rotinas legítimas; instrumentação e rollout gradual ajudam a encontrar dependências esquecidas."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Vincule identidade, ação e recurso; reduza permissões em cada fronteira e teste acessos indevidos.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-015-explicacao-1", title: "Isolamento é um espectro com custos operacionais" },
      { type: "paragraphs", id: "arq-015-explicacao-1-texto", paragraphs: [
        "Um schema compartilhado reduz duplicação de infraestrutura, mas exige que tenant_id acompanhe todas as consultas, constraints e jobs. Banco separado por cliente oferece uma fronteira mais forte, porém aumenta custo de provisionamento, migrações, backup, observabilidade e failover. Modelos híbridos podem manter clientes pequenos juntos e mover cargas específicas.",
        "A decisão depende de risco de vazamento, requisitos de residência, limites de performance, customização e custo. “Cada cliente tem seu próprio banco” não garante isolamento se credenciais ou processos de manutenção cruzarem a fronteira. “Tabela compartilhada” não é automaticamente insegura, desde que as políticas sejam aplicadas de forma consistente e testadas."
      ] },
      { type: "heading", id: "arq-015-explicacao-2", title: "O tenant precisa acompanhar todo caminho de dados" },
      { type: "paragraphs", id: "arq-015-explicacao-2-texto", paragraphs: [
        "Extraia a identidade do tenant de um contexto confiável e propague-a por filas, tarefas agendadas, logs e caches. Nunca aceite um tenant_id fornecido pelo cliente como prova de autorização. Uma chave de cache sem tenant pode entregar a resposta correta para o cliente errado.",
        "Inclua testes adversariais de isolamento: consultar, atualizar, exportar e processar em lote recursos pertencentes a outro tenant. Verifique políticas do banco e autorização da aplicação em conjunto. Migrações e ferramentas administrativas também precisam de limites explícitos, pois caminhos de suporte costumam contornar os fluxos normais."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escolha o grau de isolamento pelo risco, contrato e capacidade de operar; verifique o escopo em todo o caminho dos dados.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-016-explicacao-1", title: "Frescor precisa ser parte do contrato" },
      { type: "paragraphs", id: "arq-016-explicacao-1-texto", paragraphs: [
        "Cache-aside carrega um valor da fonte quando não está no cache e o armazena por um período. Depois de uma gravação, é preciso invalidar ou atualizar a chave. Se a invalidação falhar, a pessoa pode ver um dado antigo até a expiração; se o dado não pode tolerar isso, talvez o cache não pertença ao caminho de leitura.",
        "Defina uma janela de staleness aceitável por tipo de dado. Para catálogo, minutos podem ser aceitáveis; para autorização ou saldo, o custo de uma resposta antiga pode ser muito maior. TTL é um limite aproximado e não resolve sozinho invalidação, consistência de réplicas ou relógios diferentes."
      ] },
      { type: "heading", id: "arq-016-explicacao-2", title: "Stampede, chaves e falhas do cache" },
      { type: "paragraphs", id: "arq-016-explicacao-2-texto", paragraphs: [
        "Quando uma chave expira e muitos requests a solicitam ao mesmo tempo, todos podem consultar a fonte. Single-flight, jitter no TTL, stale-while-revalidate ou limites de concorrência ajudam, dependendo do sistema. Medir taxa de hit sem observar carga na fonte pode esconder um cache que transfere picos para o banco.",
        "Uma chave precisa incluir as dimensões que mudam o resultado, como tenant, idioma ou versão. Ainda assim, cardinalidade excessiva pode consumir memória e reduzir hits. Decida se uma falha do cache deve degradar para a fonte ou falhar a operação; o fallback pode ser correto funcionalmente e perigoso para a capacidade."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Defina fonte de verdade, frescor aceitável e comportamento em falha antes de adicionar uma cópia cacheada.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-017-explicacao-1", title: "O tempo de vida muda o modelo operacional" },
      { type: "paragraphs", id: "arq-017-explicacao-1-texto", paragraphs: [
        "Uma função curta é fácil de escalar por invocação, mas tem limites de duração e ambiente que podem afetar conexões, arquivos temporários e inicialização. Um job tem começo e fim observáveis, costuma permitir lotes e reexecução. Um worker contínuo consome mensagens enquanto está saudável e precisa lidar com shutdown, backpressure e atualização sem perder trabalho.",
        "Escolha a forma de execução a partir do perfil: duração, volume, latência esperada, dependências locais e necessidade de estado. Não mantenha um processo contínuo só porque parece eficiente se a carga é rara; não force uma tarefa longa numa função curta sem checkpoint ou retomada."
      ] },
      { type: "heading", id: "arq-017-explicacao-2", title: "Concorrência, cancelamento e encerramento" },
      { type: "paragraphs", id: "arq-017-explicacao-2-texto", paragraphs: [
        "Cada modelo precisa de limites de concorrência e política de retry. Mais workers podem aumentar throughput até saturar banco ou API externa. Propague cancelamento e deadline; ao receber shutdown, pare de aceitar trabalho novo, finalize ou devolva mensagens em processamento e feche recursos dentro do período permitido.",
        "Um job reexecutável deve registrar progresso ou ser idempotente. Logs e métricas precisam distinguir tentativa, operação lógica e resultado final. A experiência de deploy também importa: drenagem, health checks e mensagens invisíveis em memória podem determinar se uma atualização perde trabalho ou apenas interrompe uma execução segura."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Escolha o ciclo de execução pelo trabalho e pela recuperação necessária, depois selecione a plataforma que o suporta.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-018-explicacao-1", title: "Ownership inclui significado e qualidade" },
      { type: "paragraphs", id: "arq-018-explicacao-1-texto", paragraphs: [
        "Dizer que uma equipe é dona de uma tabela não define o que “receita”, “usuário ativo” ou “pedido concluído” significam. Ownership de dados precisa incluir semântica, regras de qualidade, classificação de sensibilidade, contrato de mudança e responsáveis por incidentes. Sem isso, consumidores recriam métricas com interpretações diferentes.",
        "Uma linhagem útil conecta origem, transformação e consumo: qual sistema produziu o campo, quais regras o alteraram, que versão do pipeline o calculou e quais relatórios dependem dele. Esse mapa facilita avaliar impacto antes de mudar um contrato ou corrigir um dado."
      ] },
      { type: "heading", id: "arq-018-explicacao-2", title: "Linhagem para investigar, não só documentar" },
      { type: "paragraphs", id: "arq-018-explicacao-2-texto", paragraphs: [
        "Quando um número muda inesperadamente, a equipe precisa responder se a origem mudou, se um job atrasou, se um filtro foi alterado ou se a definição do indicador divergiu. Metadados de execução, versão de transformação, timestamps e checks de qualidade tornam a investigação reproduzível.",
        "Não registre dados pessoais em metadados de lineage sem necessidade. Diferencie procedência técnica de autorização para uso: saber de onde um campo veio não significa que todo consumidor pode acessá-lo. Defina políticas, retenção e alertas junto da documentação para que a linhagem continue confiável quando os sistemas mudarem."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Siga um dado importante de sua origem até a decisão que ele informa; registre semântica, transformações e ownership.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-019-explicacao-1", title: "O custo da abstração aparece nos consumidores" },
      { type: "paragraphs", id: "arq-019-explicacao-1-texto", paragraphs: [
        "Uma abstração útil remove uma variação real que aparece em mais de um contexto e oferece um vocabulário mais simples para quem a usa. Uma abstração prematura tenta prever diferenças futuras; costuma expor muitos parâmetros, criar condicionais genéricas e exigir que toda mudança passe por um mecanismo que ninguém compreende.",
        "Duplicar algumas linhas pode ser mais barato quando duas regras parecem iguais hoje, mas mudam por motivos diferentes. O risco é a duplicação sem ownership, que permite divergência acidental. Nomeie as responsabilidades e observe mudanças conjuntas antes de extrair código comum."
      ] },
      { type: "heading", id: "arq-019-explicacao-2", title: "Sinais para extrair ou manter separado" },
      { type: "paragraphs", id: "arq-019-explicacao-2-texto", paragraphs: [
        "Extraia quando os consumidores compartilham invariantes e evoluem juntos, quando a mudança precisa ser coordenada e há um conceito comum claro. Mantenha separado quando só a forma parece igual, mas as regras, ciclo de vida ou fontes de verdade divergem. Testes de comportamento ajudam a perceber se uma abstração preserva diferenças importantes.",
        "Uma refatoração segura pode começar copiando o comportamento para um teste, identificar o contrato comum e migrar um consumidor por vez. Se cada caller precisa de exceções, a abstração talvez esteja no nível errado. Reavalie com evidência; “não repetir código” não é objetivo suficiente para acoplar módulos."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Extraia quando houver conhecimento e mudança compartilhados; mantenha duplicação localizada quando a semelhança ainda for superficial.",
    "tone": "result"
      },
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
    readingTime: "9 min",
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
      { type: "heading", id: "arq-020-explicacao-1", title: "Priorizar pelo risco de mudança" },
      { type: "paragraphs", id: "arq-020-explicacao-1-texto", paragraphs: [
        "Uma dívida merece atenção quando aumenta a chance ou o impacto de uma mudança futura. Um caminho crítico com alterações frequentes, deploy arriscado e recuperação lenta pode ser mais urgente que uma parte antiga mas estável. Combine frequência de mudança, impacto de falha, esforço de contorno e custo de oportunidade.",
        "Descreva a dívida como um problema observável: qual mudança ela torna difícil, que incidente pode amplificar e qual seria um sinal de melhora? Isso torna possível comparar com trabalho de produto sem fingir que todo débito técnico tem o mesmo valor ou que a solução já está definida."
      ] },
      { type: "heading", id: "arq-020-explicacao-2", title: "Pagar em parcelas com resultado verificável" },
      { type: "paragraphs", id: "arq-020-explicacao-2-texto", paragraphs: [
        "Uma iniciativa estrutural pode ser dividida em passos reversíveis: adicionar uma métrica, criar um contrato, mover um fluxo de cada vez e remover o caminho antigo depois de observar uso. Cada parcela deve reduzir um risco ou custo, não só reorganizar arquivos para deixar a arquitetura mais bonita.",
        "Evite prometer que uma reescrita elimina dívida. Ela pode trocar problemas conhecidos por riscos de migração, regressão e atraso de funcionalidade. Registre o antes e depois com tempo de ciclo, falhas, custo de suporte ou outra medida relevante, e revise a hipótese se os benefícios esperados não aparecerem."
      ] },
      {
        type: "callout",
    "id": "ideia-central",
    "title": "Ideia para levar",
    "body": "Priorize o problema técnico que afeta uma mudança ou risco real; escolha a menor intervenção que reduza esse custo.",
    "tone": "result"
      },
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
    readingTime: "5 min",
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
      { type: "heading", id: "py-001-quando-compartilhar", title: "Quando compartilhar o default é intencional" },
      { type: "paragraphs", id: "py-001-compartilhar-texto", paragraphs: [
        "O comportamento não é sempre um bug. Um cache local, uma tabela de consulta ou um acumulador pode ser mantido entre chamadas de propósito. Nesse caso, o estado compartilhado precisa ter um dono e um ciclo de vida claros; uma lista default escondida costuma ser um lugar surpreendente para guardar esse estado.",
        "O problema aparece quando a função promete uma operação independente, mas o default mutável faz chamadas futuras dependerem de chamadas anteriores. Escreva um teste com duas chamadas sem argumento e outro com uma lista fornecida explicitamente para verificar os dois contratos."
      ] },
      { type: "heading", id: "py-001-mutavel-versus-imutavel", title: "Por que um default imutável não acumula itens" },
      { type: "paragraphs", id: "py-001-imutavel-texto", paragraphs: [
        "Valores imutáveis, como uma string ou uma tupla, não podem ser alterados no lugar. Uma operação que combina uma string normalmente produz outro valor em vez de modificar o default compartilhado. Isso reduz esse tipo de surpresa, embora objetos imutáveis também possam conter referências a objetos mutáveis se forem construídos dessa forma.",
        "A decisão deve refletir a intenção: use `None` como sentinela quando cada chamada precisa construir estado próprio; use um objeto compartilhado somente quando a persistência entre chamadas for parte explícita da API."
      ] },
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
  {
    slug: "python-copia-superficial",
    title: "Cópia nova, surpresa antiga: listas dentro de listas",
    category: "Linguagens · Python",
    summary: "Uma cópia superficial cria outro contêiner, mas mantém referências para objetos aninhados. Veja quando `copy.copy` basta e quando a estrutura compartilhada continua sendo uma escolha.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-002-opening", paragraphs: ["Uma cópia superficial cria outro contêiner, mas mantém referências para objetos aninhados. Veja quando `copy.copy` basta e quando a estrutura compartilhada continua sendo uma escolha."] },
      { type: "heading", id: "py-002-h1", title: "O que realmente é copiado" },
      { type: "paragraphs", id: "py-002-p1", paragraphs: ["Uma lista como `[['café'], ['pão']]` contém referências para outras listas. `copy.copy` cria um novo contêiner externo e copia suas referências; por isso, adicionar um elemento à lista externa copiada não altera a original, mas editar uma lista interna aparece nas duas.", "Essa distinção importa em carrinhos, configurações e estruturas vindas de funções. O termo “cópia” sozinho não diz se os objetos internos foram recriados. Pense em níveis: qual objeto ganhou identidade nova e quais continuam compartilhados?"] },
      { type: "heading", id: "py-002-h2", title: "Escolha a profundidade pelo contrato" },
      { type: "paragraphs", id: "py-002-p2", paragraphs: ["`copy.deepcopy` percorre a estrutura e tenta copiar recursivamente os objetos encontrados. Isso pode ser o comportamento esperado para uma árvore simples, mas também custa memória e tempo, pode duplicar objetos que deveriam permanecer compartilhados e depende do protocolo de cópia de cada tipo.", "Uma alternativa costuma ser construir explicitamente a nova estrutura, copiando apenas os campos mutáveis que precisam ser independentes. Assim a função documenta quais dados podem mudar sem surpresa. Para estruturas grandes ou cíclicas, prefira entender o grafo e o comportamento dos tipos em vez de presumir que deep copy é sempre correto."] },
            { type: "code", id: "py-002-example-extra", language: "Python", code: "import copy\n\noriginal = [[\"café\"], [\"pão\"]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\n\nshallow[0].append(\"chá\")\nprint(original[0])  # ['café', 'chá']\nprint(deep[0])      # ['café']", caption: "PY-002 · a lista externa é nova, a lista aninhada continua compartilhada na cópia superficial." },
{ type: "heading", id: "py-002-h3", title: "Como testar isolamento" },
      { type: "paragraphs", id: "py-002-p3", paragraphs: ["Teste a operação que o consumidor realmente fará: altere um item interno na cópia e observe a original. Um teste que verifica apenas `copiada is not original` só prova que a lista externa tem outra identidade; não prova isolamento profundo.", "Se o contrato promete imutabilidade, considere estruturas imutáveis ou cópias direcionadas. Se o compartilhamento é intencional, deixe isso claro no nome e na documentação. O importante é que a fronteira entre cópia e referência corresponda ao ciclo de vida dos dados."] },
    ],
    references: [
      { label: "Python documentation — copy module", href: "https://docs.python.org/3/library/copy.html" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-002 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-tipagem-nao-valida-json",
    title: "Seu type hint não barra um dado errado da API",
    category: "Linguagens · Python",
    summary: "Type hints ajudam ferramentas e pessoas a entender o código, mas Python não valida automaticamente respostas JSON em runtime. Valide dados externos na fronteira antes de tratá-los como domínio confiável.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-003-opening", paragraphs: ["Type hints ajudam ferramentas e pessoas a entender o código, mas Python não valida automaticamente respostas JSON em runtime. Valide dados externos na fronteira antes de tratá-los como domínio confiável."] },
      { type: "heading", id: "py-003-h1", title: "Anotação não transforma dado recebido" },
      { type: "paragraphs", id: "py-003-p1", paragraphs: ["`json.loads` devolve valores Python a partir do conteúdo recebido. Uma anotação como `payload: User` não altera esses valores nem confirma que chegaram todos os campos esperados. Type checkers analisam o programa antes da execução; a resposta de rede continua sendo dado externo.", "Uma API pode mudar, retornar um erro HTML, enviar `null` onde se esperava número ou produzir um campo com tipo diferente. O tipo declarado descreve o que o código espera, não o que o servidor realmente entregou."] },
      { type: "heading", id: "py-003-h2", title: "Valide em uma fronteira explícita" },
      { type: "paragraphs", id: "py-003-p2", paragraphs: ["Uma estratégia simples é receber o valor como `object` ou `Any`, conferir a forma e converter para uma representação de domínio. A validação deve responder com erro útil, sem deixar um `KeyError` ou uma operação aritmética falhar muito depois da chamada HTTP.", "Para esquemas maiores, bibliotecas de validação podem centralizar conversão, erros por campo e regras. Ainda assim, revise coerções: aceitar automaticamente uma string numérica ou ignorar campos desconhecidos pode ser desejado num caso e perigoso em outro."] },
      { type: "code", id: "py-003-code2", language: "Python", code: "def parse_user(payload: object) -> dict[str, object]:\n    if not isinstance(payload, dict):\n        raise ValueError(\"expected a JSON object\")\n    name = payload.get(\"name\")\n    age = payload.get(\"age\")\n    if not isinstance(name, str) or not isinstance(age, int):\n        raise ValueError(\"invalid user payload\")\n    return {\"name\": name, \"age\": age}", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-003-h3", title: "`Any`, `object` e confiança" },
      { type: "paragraphs", id: "py-003-p3", paragraphs: ["`Any` desativa muitas verificações estáticas ao propagar-se pelo programa; `object` obriga o código a estreitar o tipo antes de usar operações específicas. Na fronteira de entrada, `object` pode tornar a validação mais visível.", "Depois da validação, converta para um tipo que represente os invariantes confiáveis. Evite espalhar casts para silenciar o checker: `cast` altera a visão estática, não verifica o valor em execução. A regra prática é validar uma vez, perto da entrada, e manter o resto do domínio com dados já interpretados."] },
    ],
    references: [
      { label: "Python documentation — typing module", href: "https://docs.python.org/3/library/typing.html" },
      { label: "Python documentation — Annotations", href: "https://docs.python.org/3/reference/compound_stmts.html#function-definitions" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-003 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-protocol-duck-typing-estatico",
    title: "Python pode aceitar o comportamento sem exigir a classe",
    category: "Linguagens · Python",
    summary: "`Protocol` descreve compatibilidade estrutural para ferramentas de tipagem: um objeto pode satisfazer um contrato pelos métodos e atributos que oferece, sem herdar de uma classe-base específica.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-004-opening", paragraphs: ["`Protocol` descreve compatibilidade estrutural para ferramentas de tipagem: um objeto pode satisfazer um contrato pelos métodos e atributos que oferece, sem herdar de uma classe-base específica."] },
      { type: "heading", id: "py-004-h1", title: "Tipagem estrutural sem herança obrigatória" },
      { type: "paragraphs", id: "py-004-p1", paragraphs: ["Uma função que precisa apenas de `read()` não deveria necessariamente depender de uma classe concreta de arquivo. Um `Protocol` nomeia esse contrato para o type checker; qualquer tipo com a forma compatível pode ser aceito sem declarar herança explícita.", "Isso combina com duck typing, mas acrescenta uma verificação estática. O runtime do Python não passa a rejeitar automaticamente objetos incompatíveis quando recebe o valor. A ferramenta de tipos pode encontrar usos inconsistentes no código que ela analisa."] },
      { type: "code", id: "py-004-code1", language: "Python", code: "from typing import Protocol\n\nclass Reader(Protocol):\n    def read(self, size: int = -1) -> bytes: ...\n\ndef first_byte(source: Reader) -> bytes:\n    return source.read(1)", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-004-h2", title: "Protocolo pequeno mantém substituição simples" },
      { type: "paragraphs", id: "py-004-p2", paragraphs: ["Escreva no protocolo somente as operações que o consumidor usa. Um contrato enorme acopla implementações a detalhes que podem mudar e dificulta criar fakes. Um protocolo pequeno também deixa mais claro por que uma função precisa daquela dependência.", "A compatibilidade estrutural pode ser útil em bibliotecas, adapters e testes, mas não é motivo para criar um Protocol para toda classe. Se existe uma implementação única e nenhuma fronteira que precise ser descrita, o tipo concreto pode ser mais direto."] },
      { type: "heading", id: "py-004-h3", title: "Limites de `runtime_checkable`" },
      { type: "paragraphs", id: "py-004-p3", paragraphs: ["`@runtime_checkable` permite alguns testes de presença com `isinstance`, mas não transforma o protocolo em validação completa de assinatura ou de tipos. Ele não confirma que os métodos se comportarão como o contrato promete.", "Use checagem estática para compatibilidade estrutural e testes de comportamento para semântica. Se um plugin externo precisa ser validado antes de uso, cheque capacidades necessárias e lide com falhas reais; a anotação do protocolo sozinha não fornece essa garantia."] },
    ],
    references: [
      { label: "Python documentation — Protocols and structural subtyping", href: "https://docs.python.org/3/library/typing.html#typing.Protocol" },
      { label: "PEP 544 — Protocols: Structural subtyping", href: "https://peps.python.org/pep-0544/" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-004 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-threads-io-cpu-gil",
    title: "Threads podem ajudar — dependendo do trabalho",
    category: "Linguagens · Python",
    summary: "Threads podem melhorar concorrência em espera de I/O, enquanto trabalho intensivo em Python pode continuar limitado pelo GIL em builds tradicionais do CPython. A resposta depende do tipo de carga, versão e build.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-005-opening", paragraphs: ["Threads podem melhorar concorrência em espera de I/O, enquanto trabalho intensivo em Python pode continuar limitado pelo GIL em builds tradicionais do CPython. A resposta depende do tipo de carga, versão e build."] },
      { type: "heading", id: "py-005-h1", title: "Esperar e calcular são trabalhos diferentes" },
      { type: "paragraphs", id: "py-005-p1", paragraphs: ["Num programa que busca várias páginas, grande parte do tempo pode ser espera de rede. Threads permitem iniciar outra operação enquanto uma chamada aguarda, reduzindo o tempo total sem exigir que a lógica seja reescrita como callback.", "Num loop que comprime imagens ou calcula números usando código Python, threads em builds convencionais do CPython não significam automaticamente execução paralela dos bytecodes. Mais threads podem adicionar coordenação sem acelerar a parte que consome CPU."] },
      { type: "heading", id: "py-005-h2", title: "Escolha o modelo depois de medir" },
      { type: "paragraphs", id: "py-005-p2", paragraphs: ["Para espera de I/O, compare threads e `asyncio` conforme o ecossistema das bibliotecas e o estilo do programa. Para CPU, processos podem executar em paralelo com custo de serialização, memória e comunicação; extensões nativas também podem liberar o GIL durante certas operações.", "Faça uma medição representativa e examine throughput, latência, uso de memória e saturação dos serviços chamados. Um benchmark minúsculo pode esconder contenção, limites de conexão ou tempo gasto empacotando dados entre processos."] },
            { type: "code", id: "py-005-example-extra", language: "Python", code: "from concurrent.futures import ThreadPoolExecutor\n\ndef fetch_one(item_id):\n    return api.get(item_id)  # operação de I/O\n\nwith ThreadPoolExecutor(max_workers=8) as pool:\n    responses = list(pool.map(fetch_one, item_ids))", caption: "PY-005 · threads podem sobrepor espera de I/O; medir o serviço e limitar concorrência." },
{ type: "heading", id: "py-005-h3", title: "O GIL não é uma promessa universal" },
      { type: "paragraphs", id: "py-005-p3", paragraphs: ["O comportamento depende da implementação e do build de Python. O CPython oferece builds free-threaded opcionais em versões recentes, mas compatibilidade de extensões, desempenho e configuração precisam ser avaliados no ambiente concreto. Não se deve inferir que todo CPython é free-threaded nem que qualquer programa escala linearmente sem o GIL.", "Também não confunda ausência do GIL com ausência de sincronização. Dados compartilhados ainda podem exigir locks para preservar invariantes, e bibliotecas podem ter restrições próprias. Documente o runtime usado e meça novamente quando mudar o build ou a versão."] },
    ],
    references: [
      { label: "Python documentation — threading and the GIL", href: "https://docs.python.org/3/library/threading.html#gil-and-performance-considerations" },
      { label: "Python documentation — free-threaded Python", href: "https://docs.python.org/3/howto/free-threading-python.html" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-005 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-generator-nao-executa-ate-consumir",
    title: "Você criou o gerador — mas ainda não leu os dados",
    category: "Linguagens · Python",
    summary: "Uma função geradora pode representar um fluxo de valores sem materializar tudo de uma vez. Seu corpo avança quando o iterador é consumido, o que afeta execução, erros, recursos e repetição.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-006-opening", paragraphs: ["Uma função geradora pode representar um fluxo de valores sem materializar tudo de uma vez. Seu corpo avança quando o iterador é consumido, o que afeta execução, erros, recursos e repetição."] },
      { type: "heading", id: "py-006-h1", title: "Construir o gerador não percorre a entrada" },
      { type: "paragraphs", id: "py-006-p1", paragraphs: ["Ao chamar uma função que contém `yield`, Python devolve um objeto gerador. O corpo começa quando uma operação como `next()` ou um `for` pede o próximo valor. Uma exceção que aparece dentro do corpo pode surgir durante a iteração, não no ponto em que o gerador foi criado.", "Isso ajuda a processar arquivos grandes ou resultados em etapas, porque cada elemento pode ser produzido sob demanda. Mas o consumidor controla o ritmo: se nunca iterar, o trabalho nunca acontece; se parar cedo, o restante do fluxo não será processado."] },
      { type: "code", id: "py-006-code1", language: "Python", code: "def linhas_validas(path):\n    with open(path, encoding=\"utf-8\") as arquivo:\n        for linha in arquivo:\n            if linha.strip():\n                yield linha.rstrip(\"\\n\")\n\n# A leitura avança durante a iteração, não na chamada acima.\nfor linha in linhas_validas(\"entrada.txt\"):\n    print(linha)", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-006-h2", title: "Gerador costuma ser um iterador de uma passagem" },
      { type: "paragraphs", id: "py-006-p2", paragraphs: ["Depois de consumir um gerador, ele está esgotado. Se precisar percorrer os dados várias vezes, talvez seja preciso criar um gerador novo ou materializar os valores numa lista, pagando memória para isso.", "Um generator expression também é preguiçoso, mas não torna todo o pipeline automaticamente eficiente: a função consumidora pode guardar todos os resultados. Observe onde a materialização acontece e se o consumidor encerra a iteração cedo."] },
      { type: "heading", id: "py-006-h3", title: "Recursos e cancelamento" },
      { type: "paragraphs", id: "py-006-p3", paragraphs: ["Se um gerador controla um recurso, como um arquivo, o bloco `with` mantém a duração ligada à execução do gerador. Encerrar a iteração cedo requer entender quando a limpeza ocorre; não esconda recursos de longa duração em iteradores sem documentar seu ciclo de vida.", "Use geradores quando produzir valores sob demanda simplifica o fluxo e reduz memória. Use uma coleção quando acesso repetido, comprimento imediato ou inspeção completa fizer parte do contrato. Preguiça é uma estratégia de avaliação, não uma vantagem automática."] },
    ],
    references: [
      { label: "Python Tutorial — Generators", href: "https://docs.python.org/3/tutorial/classes.html#generators" },
      { label: "Python documentation — Iterator types", href: "https://docs.python.org/3/library/stdtypes.html#iterator-types" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-006 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-closure-variavel-loop",
    title: "Por que três botões podem mostrar o mesmo número?",
    category: "Linguagens · Python",
    summary: "Uma closure mantém acesso a um binding; se callbacks criados num loop rodarem depois, podem todos observar o valor final da variável. Capturar o valor desejado muda esse comportamento.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-007-opening", paragraphs: ["Uma closure mantém acesso a um binding; se callbacks criados num loop rodarem depois, podem todos observar o valor final da variável. Capturar o valor desejado muda esse comportamento."] },
      { type: "heading", id: "py-007-h1", title: "A closure captura o binding, não uma foto do valor" },
      { type: "paragraphs", id: "py-007-p1", paragraphs: ["Imagine criar callbacks para os números de uma sequência e executá-los apenas depois que o loop termina. Cada função referencia a mesma variável de loop, que então contém o último valor. Por isso a saída pode repetir esse valor em todos os callbacks.", "A função foi criada em cada iteração, mas isso não significa que o objeto referenciado foi copiado. A diferença aparece em interfaces que registram eventos, tarefas agendadas e funções guardadas para uso posterior."] },
      { type: "code", id: "py-007-code1", language: "Python", code: "callbacks = []\nfor numero in range(3):\n    callbacks.append(lambda: numero)\n\nprint([callback() for callback in callbacks])  # [2, 2, 2]", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-007-h2", title: "Capture de valor explícita" },
      { type: "paragraphs", id: "py-007-p2", paragraphs: ["Uma solução comum em funções curtas é usar um argumento padrão para guardar o valor atual: `lambda numero=numero: numero`. O valor padrão é avaliado quando a função é criada, então cada callback recebe o valor daquela iteração.", "Para lógica mais rica, uma função auxiliar pode receber o número como argumento e devolver outro callback. Isso deixa o escopo explícito e evita esconder comportamento em uma lambda."] },
      { type: "code", id: "py-007-code2", language: "Python", code: "callbacks = []\nfor numero in range(3):\n    callbacks.append(lambda numero=numero: numero)\n\nprint([callback() for callback in callbacks])  # [0, 1, 2]", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-007-h3", title: "Avaliação no momento certo" },
      { type: "paragraphs", id: "py-007-p3", paragraphs: ["Em callbacks que executam imediatamente, o valor final pode não ser problema; a surpresa depende do atraso entre criação e chamada. Teste o comportamento assíncrono ou a ação de interface como ela realmente será executada.", "Não confunda late binding com uma regra de que closures são perigosas. Capturar uma variável compartilhada pode ser desejado, por exemplo quando uma função deve sempre observar o estado mais recente. O importante é decidir entre observar o binding e guardar um valor independente."] },
    ],
    references: [
      { label: "Python FAQ — Lambdas in a loop", href: "https://docs.python.org/3/faq/programming.html#why-do-lambdas-defined-in-a-loop-with-different-values-all-return-the-same-result" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-007 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-with-limpeza-excecao",
    title: "O arquivo fecha mesmo se o código der erro",
    category: "Linguagens · Python",
    summary: "O bloco `with` organiza entrada e saída de um recurso. Depois que a entrada tem sucesso, o mecanismo de saída é chamado ao deixar o bloco, inclusive quando o corpo levanta uma exceção.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-008-opening", paragraphs: ["O bloco `with` organiza entrada e saída de um recurso. Depois que a entrada tem sucesso, o mecanismo de saída é chamado ao deixar o bloco, inclusive quando o corpo levanta uma exceção."] },
      { type: "heading", id: "py-008-h1", title: "O protocolo por trás do `with`" },
      { type: "paragraphs", id: "py-008-p1", paragraphs: ["Uma expressão de contexto fornece `__enter__` e `__exit__`. O primeiro valor pode ser ligado a uma variável com `as`; ao sair, `__exit__` recebe informações sobre uma exceção, se ela ocorreu. Arquivos usam esse protocolo para fechar mesmo quando a leitura ou o processamento falha.", "A limpeza não é a mesma coisa que suprimir erros. Um `__exit__` que retorna um valor verdadeiro pode indicar que a exceção foi tratada; context managers comuns de arquivo não escondem automaticamente o erro do corpo."] },
      { type: "code", id: "py-008-code1", language: "Python", code: "with open(\"dados.txt\", encoding=\"utf-8\") as arquivo:\n    conteudo = arquivo.read()\n    processar(conteudo)\n# O arquivo é fechado ao sair, inclusive se processar lançar uma exceção.", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-008-h2", title: "Recursos múltiplos e `ExitStack`" },
      { type: "paragraphs", id: "py-008-p2", paragraphs: ["Vários context managers podem ser combinados na mesma instrução `with`. Quando a quantidade é dinâmica, `contextlib.ExitStack` permite registrar recursos à medida que são adquiridos e os libera em ordem inversa.", "Essa ordem importa: se recursos dependem uns dos outros, fechar primeiro o recurso adquirido por último costuma preservar as dependências durante a limpeza. Se a aquisição parcial falhar, os recursos já registrados ainda podem ser liberados."] },
      { type: "heading", id: "py-008-h3", title: "Quando `finally` continua fazendo sentido" },
      { type: "paragraphs", id: "py-008-p3", paragraphs: ["`try/finally` é útil para limpeza local que não implementa um protocolo de contexto ou quando o fluxo não se encaixa bem no `with`. Um context manager deixa o ciclo de vida reutilizável e visível na estrutura do código.", "Ao escrever seu próprio gerenciador, decida se ele pode suprimir exceções e documente essa decisão. A limpeza deve ocorrer sem apagar a falha original; erros durante o encerramento também merecem um tratamento consciente."] },
    ],
    references: [
      { label: "Python Language Reference — The with statement", href: "https://docs.python.org/3/reference/compound_stmts.html#the-with-statement" },
      { label: "PEP 343 — The with statement", href: "https://peps.python.org/pep-0343/" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-008 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-is-vs-equals",
    title: "Duas perguntas diferentes: o valor é igual ou é o mesmo objeto?",
    category: "Linguagens · Python",
    summary: "Em Python, `==` pergunta sobre igualdade definida pelos objetos; `is` verifica identidade. Para o singleton `None`, use `is None`; não dependa de identidade de strings ou inteiros.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-009-opening", paragraphs: ["Em Python, `==` pergunta sobre igualdade definida pelos objetos; `is` verifica identidade. Para o singleton `None`, use `is None`; não dependa de identidade de strings ou inteiros."] },
      { type: "heading", id: "py-009-h1", title: "Igualdade é comportamento do tipo" },
      { type: "paragraphs", id: "py-009-p1", paragraphs: ["Dois objetos podem ser distintos e ainda assim comparar iguais. Uma string construída separadamente pode ter o mesmo conteúdo, e listas diferentes podem conter os mesmos elementos. `==` chama a semântica de igualdade definida pelos tipos envolvidos.", "Essa semântica pode ser customizada; igualdade não é necessariamente comparação campo a campo simples. Classes também precisam respeitar regras consistentes, como igualdade reflexiva, simétrica e transitiva quando seu domínio espera essas propriedades."] },
      { type: "code", id: "py-009-code1", language: "Python", code: "a = [\"café\"]\nb = [\"café\"]\nprint(a == b)  # True: conteúdo igual\nprint(a is b)  # False: objetos diferentes", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-009-h2", title: "Identidade serve para sentinelas" },
      { type: "paragraphs", id: "py-009-p2", paragraphs: ["`None` é um singleton, então `valor is None` pergunta se a referência aponta para aquele objeto específico. O idioma é claro e não depende de uma implementação de igualdade.", "Para verificar identidade de dois objetos comuns, `is` pode ser útil quando a identidade faz parte do contrato, por exemplo uma sentinela privada. Para comparar conteúdo, use `==`. Strings e inteiros pequenos podem ser internados ou reutilizados como otimização; isso não é contrato para usar `is`."] },
      { type: "heading", id: "py-009-h3", title: "Cuidado com igualdade personalizada" },
      { type: "paragraphs", id: "py-009-p3", paragraphs: ["Um objeto pode definir `__eq__` e devolver resultados com semântica própria, inclusive valores que não sejam bool em alguns cenários. Isso torna a escolha do operador parte da intenção da comparação, não apenas estilo.", "Use `is None` em condições e defaults opcionais. Para estruturas de domínio, implemente igualdade apenas se houver uma noção coerente de equivalência e teste como ela interage com hashing e coleções."] },
    ],
    references: [
      { label: "Python Language Reference — Identity comparisons", href: "https://docs.python.org/3/reference/expressions.html#identity-comparisons" },
      { label: "Python FAQ — When can I rely on identity tests?", href: "https://docs.python.org/3/faq/programming.html#when-can-i-rely-on-identity-tests-with-the-is-operator" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-009 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-dataclass-default-factory",
    title: "Cada instância precisa da própria lista",
    category: "Linguagens · Python",
    summary: "`dataclasses.field(default_factory=list)` cria um valor padrão novo para cada instância. Isso evita compartilhar uma lista mutável entre objetos, sem exigir que a lista seja criada manualmente em toda chamada.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-010-opening", paragraphs: ["`dataclasses.field(default_factory=list)` cria um valor padrão novo para cada instância. Isso evita compartilhar uma lista mutável entre objetos, sem exigir que a lista seja criada manualmente em toda chamada."] },
      { type: "heading", id: "py-010-h1", title: "Por que dataclass rejeita alguns defaults" },
      { type: "paragraphs", id: "py-010-p1", paragraphs: ["Uma lista escrita diretamente como valor padrão seria um único objeto reutilizado pelas instâncias. Dataclasses detectam defaults mutáveis comuns e pedem uma factory, tornando explícito que cada objeto deve receber seu próprio contêiner.", "A factory é chamada quando a instância precisa daquele campo, e não no momento em que a classe é definida. Use a própria classe ou função sem argumentos quando possível; uma lambda é útil quando é preciso construir um valor com parâmetros."] },
      { type: "code", id: "py-010-code1", language: "Python", code: "from dataclasses import dataclass, field\n\n@dataclass\nclass Carrinho:\n    itens: list[str] = field(default_factory=list)\n\na = Carrinho()\nb = Carrinho()\na.itens.append(\"café\")\nprint(a.itens, b.itens)  # ['café'] []", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-010-h2", title: "Factory não é cópia de um template" },
      { type: "paragraphs", id: "py-010-p2", paragraphs: ["`default_factory` produz um valor novo; não recebe automaticamente o objeto padrão para copiar. Se um campo precisa de configuração derivada, defina uma factory com a lógica explícita e teste o isolamento entre instâncias.", "Uma factory pode ter efeitos colaterais, então evite trabalho caro ou dependente de ambiente durante a construção sem motivo. Para campos que compartilham deliberadamente um valor imutável, um default direto é mais claro."] },
      { type: "heading", id: "py-010-h3", title: "Mutabilidade e igualdade do dataclass" },
      { type: "paragraphs", id: "py-010-p3", paragraphs: ["`default_factory` resolve o ciclo de vida do campo, não torna o objeto imutável. A lista continua podendo ser alterada; uma dataclass `frozen=True` impede reatribuição de atributos, mas não congela automaticamente objetos mutáveis dentro dela.", "Decida separadamente se a instância pode mudar e se seus campos internos podem mudar. Uma tupla ou outro tipo imutável pode representar melhor um valor que não deve ser editado depois de construído."] },
    ],
    references: [
      { label: "Python documentation — dataclasses default_factory", href: "https://docs.python.org/3/library/dataclasses.html#default-factory-functions" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-010 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-dict-setdefault-avaliacao-ansiosa",
    title: "`setdefault` pode calcular o default mesmo quando a chave existe",
    category: "Linguagens · Python",
    summary: "Python avalia os argumentos antes de chamar uma função. Por isso `dict.setdefault(key, construir_valor())` executa `construir_valor` antes que `setdefault` descubra se já há valor para aquela chave.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-011-opening", paragraphs: ["Python avalia os argumentos antes de chamar uma função. Por isso `dict.setdefault(key, construir_valor())` executa `construir_valor` antes que `setdefault` descubra se já há valor para aquela chave."] },
      { type: "heading", id: "py-011-h1", title: "A ordem de avaliação é anterior à chamada" },
      { type: "paragraphs", id: "py-011-p1", paragraphs: ["`setdefault` insere um valor somente quando a chave não está presente e devolve o valor associado. Mas a expressão passada como segundo argumento já foi avaliada para construir a chamada; o método não recebe uma função preguiçosa para executar sob demanda.", "Isso costuma passar despercebido quando o default é barato, como uma lista vazia. Se ele consulta banco, calcula um objeto pesado ou registra efeitos colaterais, o trabalho pode ocorrer a cada acesso, inclusive quando não será usado."] },
      { type: "code", id: "py-011-code1", language: "Python", code: "def carregar_padrao():\n    print(\"calculando\")\n    return []\n\ncache = {\"usuarios\": [\"Ana\"]}\ncache.setdefault(\"usuarios\", carregar_padrao())\n# \"calculando\" aparece mesmo com a chave presente.", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "py-011-h2", title: "Escolha a ferramenta conforme a intenção" },
      { type: "paragraphs", id: "py-011-p2", paragraphs: ["Se a criação precisa ser preguiçosa, um `if chave not in dicionario` comunica diretamente quando a função deve rodar. Se a regra for sempre inicializar um valor simples para novas chaves, `defaultdict(list)` pode ser mais apropriado.", "`defaultdict` também tem uma nuance: a factory roda em acesso por `dicionario[chave]`, mas métodos como `get` não criam automaticamente a chave. Essa diferença de API deve ser conhecida por quem consome o mapa."] },
            { type: "code", id: "py-011-example-extra", language: "Python", code: "cache = {\"user\": existing_user}\ncache.setdefault(\"user\", create_user())  # create_user() já foi chamado\n\nif \"user\" not in cache:\n    cache[\"user\"] = create_user()  # chamada só quando falta", caption: "PY-011 · argumentos são avaliados antes da chamada; o if adia a criação." },
{ type: "heading", id: "py-011-h3", title: "Avalie efeitos colaterais além do custo" },
      { type: "paragraphs", id: "py-011-p3", paragraphs: ["Uma função de default pode alocar recursos, fazer chamadas de rede ou alterar métricas. Executá-la sem necessidade pode gerar custo e comportamento observável, não apenas uma pequena perda de desempenho.", "Evite otimizar por reflexo. Se o default é barato e sem efeitos, `setdefault` pode ser perfeitamente legível. Prefira o padrão condicional quando avaliação preguiçosa ou fluxo de erro fazem parte do contrato."] },
    ],
    references: [
      { label: "Python documentation — Dictionary setdefault", href: "https://docs.python.org/3/library/stdtypes.html#dict.setdefault" },
      { label: "Python Language Reference — Calls and argument evaluation", href: "https://docs.python.org/3/reference/expressions.html#calls" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-011 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "python-hash-equality-mutabilidade",
    title: "Mudar um campo usado no hash pode tornar uma chave difícil de encontrar",
    category: "Linguagens · Python",
    summary: "Chaves de dicionário e elementos de set dependem de hash estável enquanto estão na coleção. Se igualdade e hash usam um campo mutável que muda depois da inserção, a busca pode deixar de se comportar como esperado.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "py-012-opening", paragraphs: ["Chaves de dicionário e elementos de set dependem de hash estável enquanto estão na coleção. Se igualdade e hash usam um campo mutável que muda depois da inserção, a busca pode deixar de se comportar como esperado."] },
      { type: "heading", id: "py-012-h1", title: "Igualdade e hash precisam concordar" },
      { type: "paragraphs", id: "py-012-p1", paragraphs: ["Se dois objetos são iguais, eles precisam produzir o mesmo hash. O contrário não é garantido: colisões são possíveis e a igualdade ainda distingue chaves diferentes. Dicionários usam hash para localizar uma região e igualdade para confirmar a chave.", "Quando um objeto está num `dict` ou `set`, alterar o estado que participa de `__hash__` pode fazer o objeto continuar armazenado numa posição calculada com o hash antigo. A coleção não reindexa a chave automaticamente."] },
      { type: "heading", id: "py-012-h2", title: "Imutabilidade de chave é uma garantia prática" },
      { type: "paragraphs", id: "py-012-p2", paragraphs: ["Uma opção segura é usar chaves imutáveis, como tuplas de valores estáveis ou dataclasses congeladas quando seus campos também são hashable. `frozen=True` impede reatribuição direta, mas não torna uma lista interna imutável.", "Se a entidade precisa mudar de identidade ou atributos, use um identificador imutável como chave e guarde o objeto mutável como valor. Isso separa identidade de estado que evolui."] },
            { type: "code", id: "py-012-example-extra", language: "Python", code: "from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass UserKey:\n    user_id: int\n\nusers: dict[UserKey, str] = {UserKey(7): \"Ana\"}", caption: "PY-012 · uma chave imutável com campos hashable mantém identidade de lookup estável." },
{ type: "heading", id: "py-012-h3", title: "O que `dataclass` gera" },
      { type: "paragraphs", id: "py-012-p3", paragraphs: ["Com `eq=True` e `frozen=False`, dataclasses normalmente deixam a classe sem hash por padrão, evitando sugerir que uma instância mutável é uma chave segura. Uma dataclass congelada pode receber hash gerado a partir dos campos, se eles forem hashable.", "`unsafe_hash=True` permite gerar hash em classes mutáveis, mas transfere a responsabilidade para quem usa o tipo. Não é um conserto automático; só faça isso se os campos que participam do hash permanecerem estáveis durante a vida em qualquer set ou dicionário."] },
    ],
    references: [
      { label: "Python Data Model — __hash__", href: "https://docs.python.org/3/reference/datamodel.html#object.__hash__" },
      { label: "Python Glossary — Hashable", href: "https://docs.python.org/3/glossary.html#term-hashable" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial PY-012 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "go-interface-nil-nao-e-nil",
    title: "Um erro `nil` em Go pode não ser `nil`",
    category: "Linguagens · Go",
    summary: "Uma interface Go contém um tipo dinâmico e um valor dinâmico. Se ela contém um ponteiro tipado nil, a interface tem tipo presente e não é igual a nil; isso explica erros que parecem existir mesmo sem valor.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "go-001-opening", paragraphs: ["Uma interface Go contém um tipo dinâmico e um valor dinâmico. Se ela contém um ponteiro tipado nil, a interface tem tipo presente e não é igual a nil; isso explica erros que parecem existir mesmo sem valor."] },
      { type: "heading", id: "go-001-h1", title: "Interface vazia e interface com valor nil" },
      { type: "paragraphs", id: "go-001-p1", paragraphs: ["Pense numa interface como um par conceitual de tipo dinâmico e valor dinâmico. Uma interface nil não tem nenhum dos dois; depois de atribuir um ponteiro nil tipado, o tipo dinâmico está presente mesmo que o ponteiro armazenado seja nil.", "Esse é um modelo para entender igualdade e comportamento, não uma promessa sobre a representação de memória de toda implementação Go. O importante é a semântica: comparar a interface com nil retorna falso quando existe tipo dinâmico."] },
      { type: "code", id: "go-001-code1", language: "Go", code: "type Problem struct{}\nfunc (*Problem) Error() string { return \"problem\" }\n\nfunc maybeError(failed bool) error {\n    var p *Problem\n    if failed { p = &Problem{} }\n    return p // quando false, a interface error ainda contém *Problem\n}", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "go-001-h2", title: "Retorne `nil` na interface quando não há erro" },
      { type: "paragraphs", id: "go-001-p2", paragraphs: ["Uma função que retorna `error` deve devolver `nil` explícito no caminho de sucesso. Retornar uma variável ponteiro concreta que por acaso está nil converte esse ponteiro para a interface e produz uma interface não nil.", "Uma solução simples é retornar o erro concreto apenas quando existe falha e `nil` nos outros caminhos. Outra opção é evitar variáveis de ponteiro locais quando elas não ajudam a expressar o contrato."] },
      { type: "code", id: "go-001-code2", language: "Go", code: "func maybeError(failed bool) error {\n    if !failed { return nil }\n    return &Problem{}\n}", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "go-001-h3", title: "Métodos em receiver ponteiro e nil" },
      { type: "paragraphs", id: "go-001-p3", paragraphs: ["Um ponteiro nil dentro de uma interface ainda pode satisfazer uma interface se seu tipo implementa os métodos exigidos. Chamar esse método pode funcionar ou causar panic, conforme a implementação lida com receiver nil; não confunda interface não nil com objeto utilizável.", "Em APIs, documente se métodos aceitam receiver nil e valide invariantes onde o valor entra. Tests devem cobrir o retorno de sucesso e o comportamento de valores tipados nil para evitar que a interface esconda um estado inválido."] },
    ],
    references: [
      { label: "Go FAQ — Why is my nil error value not equal to nil?", href: "https://go.dev/doc/faq#nil_error" },
      { label: "A Tour of Go — Interface values with nil underlying values", href: "https://go.dev/tour/methods/12" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial GO-001 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "rust-future-nao-executa-sozinha",
    title: "Criar uma `Future` em Rust não significa executá-la",
    category: "Linguagens · Rust",
    summary: "Uma função `async` produz um valor `Future`. A computação progride quando um executor a polla; criar várias futures não as inicia automaticamente nem garante que rodarão em paralelo.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "rs-001-opening", paragraphs: ["Uma função `async` produz um valor `Future`. A computação progride quando um executor a polla; criar várias futures não as inicia automaticamente nem garante que rodarão em paralelo."] },
      { type: "heading", id: "rs-001-h1", title: "O corpo async vira um valor suspenso" },
      { type: "paragraphs", id: "rs-001-p1", paragraphs: ["Chamar uma função `async` constrói uma future que descreve o trabalho. Ela não executa o corpo como uma chamada comum até terminar; um executor precisa fazer polling e a future retorna `Pending` quando precisa aguardar algo.", "Quando o recurso esperado fica pronto, o mecanismo de wake informa ao executor que a tarefa pode avançar. Isso evita um loop ocupado chamando poll repetidamente sem necessidade. A future armazena o estado necessário para retomar a execução."] },
      { type: "code", id: "rs-001-code1", language: "Rust", code: "async fn buscar() -> String {\n    // o corpo progride quando um executor polla esta Future\n    \"resultado\".to_owned()\n}\n\nlet futuro = buscar(); // criada, ainda não executada por si só", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "rs-001-h2", title: "Await compõe; runtime dirige" },
      { type: "paragraphs", id: "rs-001-p2", paragraphs: ["Dentro de outra função async, `.await` permite que a future interna avance e suspende a externa quando necessário. O runtime fornece executor e, comumente, I/O assíncrono. Tipos da biblioteca padrão podem representar futures, mas Rust não impõe um runtime único.", "A forma de iniciar uma future depende do runtime ou executor usado. Macros como `block_on` aparecem em exemplos, mas bloqueiam a thread atual e não devem ser tratados como solução geral para aplicações assíncronas."] },
      { type: "heading", id: "rs-001-h3", title: "Concorrência não é automaticamente paralelismo" },
      { type: "paragraphs", id: "rs-001-p3", paragraphs: ["Compor futures pode permitir que operações avancem concorrentemente quando uma delas aguarda. Isso não significa que cada operação ocupa uma thread própria ou que o trabalho de CPU será distribuído em vários núcleos.", "Para paralelismo, é preciso um executor e uma forma de agendamento que use múltiplas threads, além de atender requisitos de compartilhamento e `Send` quando aplicável. Diferencie iniciar uma future, pollar uma future, aguardar concorrentemente e executar código em paralelo."] },
    ],
    references: [
      { label: "The Rust Programming Language — Futures and the Async Syntax", href: "https://doc.rust-lang.org/book/ch17-01-futures-and-syntax.html" },
      { label: "Rust Reference — Async functions", href: "https://doc.rust-lang.org/reference/items/functions.html#async-functions" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial RS-001 baseado no post de LinkedIn; revisar antes de publicar",
  },
  {
    slug: "typescript-javascript-types-runtime-validation",
    title: "TypeScript não valida a resposta da API em runtime",
    category: "Linguagens · TypeScript e JavaScript",
    summary: "TypeScript verifica compatibilidade no código durante o desenvolvimento, mas seus tipos são apagados ao gerar JavaScript. JSON vindo da rede continua sendo dado não confiável e precisa ser validado em runtime.",
    readingTime: "4 min",
    content: [],
    story: [
      { type: "paragraphs", id: "tsjs-001-opening", paragraphs: ["TypeScript verifica compatibilidade no código durante o desenvolvimento, mas seus tipos são apagados ao gerar JavaScript. JSON vindo da rede continua sendo dado não confiável e precisa ser validado em runtime."] },
      { type: "heading", id: "tsjs-001-h1", title: "O tipo estático não acompanha o JSON" },
      { type: "paragraphs", id: "tsjs-001-p1", paragraphs: ["Declarar `const user = await response.json() as User` informa ao compilador como o autor quer tratar o valor. A asserção não inspeciona os campos recebidos, não converte os dados e não impede uma resposta malformada.", "Uma mudança de backend, proxy com erro ou resposta parcial pode ultrapassar a fronteira com um formato diferente. Se a aplicação confia cegamente no tipo escrito, a exceção aparece mais tarde, longe da origem do dado."] },
      { type: "code", id: "tsjs-001-code1", language: "TypeScript", code: "type User = { id: string; name: string };\n\nconst payload: unknown = await response.json();\n// Ainda não há garantia de que payload seja User.", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "tsjs-001-h2", title: "Comece com `unknown` e estreite o tipo" },
      { type: "paragraphs", id: "tsjs-001-p2", paragraphs: ["`unknown` exige que o código valide antes de acessar propriedades. Uma função de type guard pode checar objeto, campos e tipos esperados, e então permitir que o restante da aplicação use uma forma confiável.", "Para objetos aninhados, valide recursivamente os campos que o domínio realmente utiliza. Uma checagem superficial de que o valor é objeto não prova que `user.profile.address` existe ou tem a estrutura certa."] },
      { type: "code", id: "tsjs-001-code2", language: "TypeScript", code: "function isUser(value: unknown): value is User {\n  if (typeof value !== \"object\" || value === null) return false;\n  const user = value as Record<string, unknown>;\n  return typeof user.id === \"string\" && typeof user.name === \"string\";\n}", caption: "Exemplo didático reduzido; revisar e executar antes de publicar." },
      { type: "heading", id: "tsjs-001-h3", title: "Validação também decide conversão e compatibilidade" },
      { type: "paragraphs", id: "tsjs-001-p3", paragraphs: ["Uma biblioteca de schema pode validar, transformar valores e produzir erros por campo. Decida como lidar com propriedades extras, valores ausentes, campos nulos e mudanças compatíveis; essas decisões fazem parte do contrato da API.", "Valide na borda: respostas HTTP, configuração, local storage e mensagens externas. Depois converta para um tipo de domínio mais estrito. TypeScript ajuda a manter consistência dentro do programa, enquanto a validação de runtime verifica aquilo que o compilador não pode observar."] },
    ],
    references: [
      { label: "TypeScript Handbook — The Basics: Erased Types", href: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html#erased-types" },
      { label: "TypeScript Handbook — Type Assertions", href: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions" }
    ],
    selected: true,
    published: false,
    sourceLabel: "Rascunho editorial TSJS-001 baseado no post de LinkedIn; revisar antes de publicar",
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
