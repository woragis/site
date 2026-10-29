export const site = {
  name: "Jezreel",
  role: "Desenvolvedor de software",
  headline: "Código bem pensado. Produtos feitos para durar.",
  introduction:
    "Sou desenvolvedor de software. Neste espaço, compartilho projetos, decisões técnicas e aprendizados que mostram como transformo problemas complexos em experiências úteis.",
  location: "Brasil · disponível para oportunidades",
  email: "seu-email@exemplo.com",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  description:
    "Portfólio profissional de Jezreel, desenvolvedor de software. Projetos, experiência e artigos sobre engenharia de software.",
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  year: string;
  role: string;
  stack: string[];
  context: string;
  approach: string;
  outcome: string;
  featured: boolean;
  published: boolean;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "produto-digital-exemplo",
    title: "Produto digital de ponta a ponta",
    eyebrow: "Case demonstrativo",
    summary:
      "Um espaço para apresentar o problema, as decisões de engenharia e o impacto de um projeto real.",
    year: "20XX",
    role: "Engenharia de software",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    context:
      "Descreva o contexto do projeto, para quem foi construído e qual problema precisava resolver.",
    approach:
      "Explique as decisões técnicas relevantes, as alternativas avaliadas e como você contribuiu para a entrega.",
    outcome:
      "Inclua resultados verificáveis: métricas, ganhos de desempenho, adoção ou impacto para o negócio.",
    featured: true,
    published: false,
  },
  {
    slug: "plataforma-exemplo",
    title: "Plataforma preparada para crescer",
    eyebrow: "Case demonstrativo",
    summary:
      "Demonstre como arquitetura, produto e qualidade se conectam em uma entrega consistente.",
    year: "20XX",
    role: "Engenharia de software",
    stack: ["React", "Node.js", "Cloud"],
    context:
      "Troque este texto pela necessidade que deu origem ao projeto e pelas restrições importantes.",
    approach:
      "Conte como você estruturou a solução, colaborou com outras pessoas e cuidou da qualidade.",
    outcome:
      "Substitua este texto por efeitos observáveis e, quando possível, números com contexto.",
    featured: false,
    published: false,
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  content: string[];
  published: boolean;
};

export const articles: Article[] = [
  {
    slug: "escrever-bons-estudos-de-caso",
    title: "Como contar a história técnica de um projeto",
    category: "Estudos de caso",
    summary:
      "Um roteiro para explicar contexto, decisões, trade-offs e impacto sem transformar o case em uma lista de tecnologias.",
    publishedAt: "20XX-01-01",
    readingTime: "6 min",
    content: [
      "Um bom estudo de caso começa pelo problema. Antes de falar da stack, explique quem precisava de uma solução e o que tornava aquele desafio relevante.",
      "Depois, mostre as decisões. Traga as restrições, as opções consideradas e os trade-offs que orientaram a implementação. É essa parte que revela como você pensa como engenheiro.",
      "Feche com resultados verificáveis e aprendizados. Contextualize as métricas e deixe claro qual foi sua contribuição. Um relato honesto e específico gera mais confiança do que uma coleção de adjetivos.",
    ],
    published: false,
  },
  {
    slug: "qualidade-de-software-na-pratica",
    title: "Qualidade de software é uma decisão de produto",
    category: "Engenharia",
    summary:
      "Manutenibilidade, desempenho e confiabilidade também definem a experiência de quem usa e de quem constrói um produto.",
    publishedAt: "20XX-01-01",
    readingTime: "5 min",
    content: [
      "Qualidade costuma ser tratada como uma etapa final. Na prática, ela aparece em decisões cotidianas: como nomear uma abstração, como observar um fluxo e onde investir em automação.",
      "Essas escolhas afetam a velocidade de entrega futura e a confiança das pessoas no produto. Por isso, qualidade não é um acabamento separado do produto; é parte do que ele oferece.",
      "O nível certo depende do contexto. Explicitar os riscos e escolher conscientemente onde investir torna a conversa sobre qualidade mais concreta e compartilhada.",
    ],
    published: false,
  },
];

export const experience = [
  {
    period: "20XX — atual",
    role: "Desenvolvedor de software",
    company: "Empresa ou projeto independente",
    description:
      "Descreva seu escopo, as pessoas com quem trabalha e os resultados pelos quais foi responsável.",
  },
  {
    period: "20XX — 20XX",
    role: "Experiência anterior",
    company: "Empresa ou iniciativa",
    description:
      "Destaque uma contribuição concreta, uma responsabilidade crescente ou algo que aprendeu e aplicou.",
  },
];

export const skills = [
  { label: "Frontend", items: ["TypeScript", "React", "Next.js"] },
  { label: "Backend", items: ["Node.js", "APIs", "Modelagem de dados"] },
  { label: "Práticas", items: ["Arquitetura", "Testes", "Acessibilidade"] },
];

export const publishedProjects = projects.filter((project) => project.published);
export const publishedArticles = articles.filter((article) => article.published);
