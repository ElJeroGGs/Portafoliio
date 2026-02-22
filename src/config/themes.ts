export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundAlt: string;
  text: string;
  textAlt: string;
  border: string;
  success: string;
  warning: string;
  error: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export const THEMES: Record<string, Theme> = {
  persona: {
    name: "Persona",
    colors: {
      primary: "#1a1a2e",
      secondary: "#16213e",
      accent: "#00d4ff",
      background: "#0f1419",
      backgroundAlt: "#1a1f2e",
      text: "#ffffff",
      textAlt: "#c0c0c0",
      border: "#00d4ff",
      success: "#00ff88",
      warning: "#ffaa00",
      error: "#ff0055",
    },
  },
  danganronpa: {
    name: "Danganronpa",
    colors: {
      primary: "#2d1b2e",
      secondary: "#4a0e0e",
      accent: "#ff1744",
      background: "#1a0f1a",
      backgroundAlt: "#2d1b2e",
      text: "#ffffff",
      textAlt: "#e0e0e0",
      border: "#ff1744",
      success: "#00d84c",
      warning: "#ffaa00",
      error: "#ff1744",
    },
  },
  cyberpunk: {
    name: "Cyberpunk",
    colors: {
      primary: "#0a0e27",
      secondary: "#1a1f3a",
      accent: "#00ff88",
      background: "#0d0221",
      backgroundAlt: "#15003b",
      text: "#00ff88",
      textAlt: "#ffbe0b",
      border: "#00ff88",
      success: "#00ff88",
      warning: "#ffbe0b",
      error: "#ff006e",
    },
  },
  minimal: {
    name: "Minimal",
    colors: {
      primary: "#ffffff",
      secondary: "#f0f0f0",
      accent: "#000000",
      background: "#fafafa",
      backgroundAlt: "#f0f0f0",
      text: "#1a1a1a",
      textAlt: "#666666",
      border: "#e0e0e0",
      success: "#4caf50",
      warning: "#ff9800",
      error: "#f44336",
    },
  },
};

export const DEFAULT_THEME = "persona";
