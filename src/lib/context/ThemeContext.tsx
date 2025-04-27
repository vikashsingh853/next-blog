"use client";

import { ReactNode, createContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  mode: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Theme>("light");

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setMode('dark');
    } else if (systemPrefersDark) {
      setMode("dark");
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem("theme", mode);
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(mode);
    
    // Force a reflow to ensure the transition works
    root.style.display = 'none';
    root.offsetHeight; // Trigger reflow
    root.style.display = '';
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "dark" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
