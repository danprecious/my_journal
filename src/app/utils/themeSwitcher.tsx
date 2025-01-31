"use client";

import React, { useEffect, useState } from "react";
import { Theme } from "../types/globalTypes";

const ThemeSwitcher: React.FC<Theme> = ({ value, text }) => {
  const [theme, setTheme] = useState<string>("light");

  const switchTheme = (e: any) => {
    const themetype = e.target.value;

    console.log(themetype);

    setTheme(themetype);

    if (window.document !== undefined) {
      document.documentElement.setAttribute("theme", themetype);
    }
  };

  return (
    <button
      className="w-full h-full"
      value={value}
      onClick={(e) => {
        switchTheme(e);
      }}
    >
      {text}
    </button>
  );
};

export default ThemeSwitcher;
