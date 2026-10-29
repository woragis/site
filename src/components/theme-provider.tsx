"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultTheme, themes, type ThemeId } from "@/themes/registry";

const ThemeContext = createContext<{ theme: ThemeId; setTheme: (theme: ThemeId) => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(defaultTheme);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    if (themes.some((option) => option.id === stored)) setTheme(stored as ThemeId);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme precisa estar dentro de ThemeProvider.");
  return context;
}
