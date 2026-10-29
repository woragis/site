"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultTheme, themes, type ThemeId } from "@/themes/registry";

export type ColorMode = "light" | "dark" | "system";

const preferencesKey = "portfolio-preferences";
const legacyThemeKey = "portfolio-theme";

const ThemeContext = createContext<{
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(defaultTheme);
  const [colorMode, setColorMode] = useState<ColorMode>("system");
  const [preferencesLoaded, setPreferencesLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(preferencesKey);
      const preferences = saved ? JSON.parse(saved) as { theme?: string; colorMode?: string } : null;
      const savedTheme = preferences?.theme ?? window.localStorage.getItem(legacyThemeKey);

      if (themes.some((option) => option.id === savedTheme)) setTheme(savedTheme as ThemeId);
      if (["light", "dark", "system"].includes(preferences?.colorMode ?? "")) {
        setColorMode(preferences?.colorMode as ColorMode);
      }
    } catch {
      // Preferências indisponíveis (por exemplo, storage bloqueado): usar os padrões.
    } finally {
      setPreferencesLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!preferencesLoaded) return;

    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.colorMode = colorMode;
    try {
      window.localStorage.setItem(preferencesKey, JSON.stringify({ theme, colorMode }));
      window.localStorage.setItem(legacyThemeKey, theme);
    } catch {
      // O tema continua aplicado durante esta sessão mesmo sem persistência.
    }

    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncThemeColor = () => {
      const dark = colorMode === "dark" || (colorMode === "system" && media.matches);
      root.style.colorScheme = dark ? "dark" : "light";
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#171915" : "#f1ede5");
    };

    syncThemeColor();
    if (colorMode === "system") media.addEventListener("change", syncThemeColor);
    return () => media.removeEventListener("change", syncThemeColor);
  }, [theme, colorMode, preferencesLoaded]);

  return <ThemeContext.Provider value={{ theme, setTheme, colorMode, setColorMode }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme precisa estar dentro de ThemeProvider.");
  return context;
}
