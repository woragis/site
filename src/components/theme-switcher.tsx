"use client";

import { useTheme } from "@/components/theme-provider";
import { themes } from "@/themes/registry";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="theme-switcher theme-switcher--style">
      <span className="theme-switcher__label">Estilo</span>
      <select
        aria-label="Escolher tema visual"
        value={theme}
        onChange={(event) => setTheme(event.target.value as typeof theme)}
      >
        {themes.map((option) => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </label>
  );
}
