"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { currentTheme, setTheme, availableThemes } = context;

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3 flex-col md:flex-row">
      {availableThemes.map((theme) => (
        <motion.button
          key={theme}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(theme)}
          className={`px-4 py-2 text-sm font-black uppercase tracking-widest transition-all p5-clip-path p5-skew border-2 border-primary ${
            currentTheme === theme
              ? "bg-accent text-primary p5-shadow"
              : "bg-text text-primary hover:bg-accent hover:text-primary"
          }`}
        >
          {theme}
        </motion.button>
      ))}
    </div>
  );
};
