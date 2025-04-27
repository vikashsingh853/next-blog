"use client";

import { ThemeContext } from "@/lib/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React, { useContext } from "react";

const DarkModeToggler = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      aria-label={`Switch to ${mode === "dark" ? "dark" : "dark"} mode`}
    >
      {mode === "dark" ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-gray-700" />
      )}
    </button>
  );
};

export default DarkModeToggler;
