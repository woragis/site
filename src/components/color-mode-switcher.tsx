"use client";

import { useTheme } from "@/components/theme-provider";

const modes = [
  { value: "system", label: "Sistema" },
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
] as const;

export function ColorModeSwitcher() {
  const { colorMode, setColorMode } = useTheme();

  return (
    <label className="theme-switcher theme-switcher--appearance">
      <span className="theme-switcher__label">Aparência</span>
      <select
        aria-label="Escolher aparência clara, escura ou do sistema"
        value={colorMode}
        onChange={(event) => setColorMode(event.target.value as typeof colorMode)}
      >
        {modes.map((mode) => <option key={mode.value} value={mode.value}>{mode.label}</option>)}
      </select>
    </label>
  );
}
