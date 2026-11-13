"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { defaultTheme, themes, type ThemeId } from "@/themes/registry";

export type ColorMode = "light" | "dark" | "system";

const preferencesKey = "portfolio-preferences";
const legacyThemeKey = "portfolio-theme";
type Preferences = { theme: ThemeId; colorMode: ColorMode };
const defaultPreferences: Preferences = { theme: defaultTheme, colorMode: "system" };
let clientPreferences: Preferences | null = null;
const preferenceListeners = new Set<() => void>();

function readPreferences(): Preferences {
  try {
    const saved = window.localStorage.getItem(preferencesKey);
    const preferences = saved ? JSON.parse(saved) as { theme?: string; colorMode?: string } : null;
    const legacyTheme = window.localStorage.getItem(legacyThemeKey);
    return {
      theme: themes.some((option) => option.id === preferences?.theme)
        ? preferences!.theme as ThemeId
        : themes.some((option) => option.id === legacyTheme) ? legacyTheme as ThemeId : defaultTheme,
      colorMode: ["light", "dark", "system"].includes(preferences?.colorMode ?? "")
        ? preferences!.colorMode as ColorMode
        : "system",
    };
  } catch {
    return defaultPreferences;
  }
}

function getClientPreferences() {
  clientPreferences ??= readPreferences();
  return clientPreferences;
}

function subscribeToPreferences(listener: () => void) {
  preferenceListeners.add(listener);
  const onStorage = () => {
    clientPreferences = readPreferences();
    preferenceListeners.forEach((notify) => notify());
  };
  window.addEventListener("storage", onStorage);
  return () => {
    preferenceListeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function updatePreferences(update: Partial<Preferences>) {
  const next = { ...getClientPreferences(), ...update };
  clientPreferences = next;
  try {
    window.localStorage.setItem(preferencesKey, JSON.stringify(next));
    window.localStorage.setItem(legacyThemeKey, next.theme);
  } catch {
    // O tema continua aplicado durante esta sessão mesmo sem persistência.
  }
  preferenceListeners.forEach((listener) => listener());
}

const ThemeContext = createContext<{
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const preferences = useSyncExternalStore(subscribeToPreferences, getClientPreferences, () => defaultPreferences);
  const { theme, colorMode } = preferences;
  const setTheme = useCallback((value: ThemeId) => updatePreferences({ theme: value }), []);
  const setColorMode = useCallback((value: ColorMode) => updatePreferences({ colorMode: value }), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.colorMode = colorMode;

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
  }, [theme, colorMode]);

  return <ThemeContext.Provider value={{ theme, setTheme, colorMode, setColorMode }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme precisa estar dentro de ThemeProvider.");
  return context;
}
