"use client";

import { ThemeContext } from "@/lib/context/ThemeContext";
import React, { useContext } from "react";

const DarkModeToggler = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div>
      <button className="px-2" onClick={toggle}>
        {mode === "dark" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default DarkModeToggler;
