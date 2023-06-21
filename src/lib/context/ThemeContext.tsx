"use client";

import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext<any>({});

export const ThemeProvider = ({ children }: { children: any }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode}`}> {children}</div>
    </ThemeContext.Provider>
  );
};
