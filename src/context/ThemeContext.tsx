"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_THEME, THEMES } from "@/config/themes";

type ThemeContextType = {
  currentTheme: string;
  setTheme: (theme: string) => void;
  availableThemes: string[];
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentThemeState] = useState(DEFAULT_THEME);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Forzar el tema por defecto (persona)
    setCurrentThemeState(DEFAULT_THEME);
    document.documentElement.setAttribute("data-theme", DEFAULT_THEME);
  }, []);

  const setTheme = (theme: string) => {
    if (Object.keys(THEMES).includes(theme)) {
      setCurrentThemeState(theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        availableThemes: Object.keys(THEMES),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
