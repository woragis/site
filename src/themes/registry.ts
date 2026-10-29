export type ThemeId = "editorial" | "atelier" | "index";

export type ThemeDefinition = {
  id: ThemeId;
  name: string;
  note: string;
  layouts: {
    projects: "feature-grid" | "numbered-list" | "feature-stack";
    articles: "editorial-list" | "card-grid" | "index-list";
    experience: "timeline" | "columns" | "ledger";
  };
};

export const themes: ThemeDefinition[] = [
  {
    id: "editorial",
    name: "Editorial",
    note: "Com contraste e composição de revista.",
    layouts: { projects: "feature-grid", articles: "editorial-list", experience: "timeline" },
  },
  {
    id: "atelier",
    name: "Ateliê",
    note: "Mais tátil, modular e descontraído.",
    layouts: { projects: "numbered-list", articles: "card-grid", experience: "columns" },
  },
  {
    id: "index",
    name: "Índice",
    note: "Uma leitura compacta de arquivo técnico.",
    layouts: { projects: "feature-stack", articles: "index-list", experience: "ledger" },
  },
];

export const defaultTheme: ThemeId = "editorial";

export function getTheme(id: string | undefined) {
  return themes.find((theme) => theme.id === id) ?? themes[0];
}
