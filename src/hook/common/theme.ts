"use client";
import { useState, useEffect } from "react";

export const useTheme = (props?: any) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let tmpTheme = "light";
    if (typeof window !== "undefined") {
      tmpTheme = window.localStorage.getItem("theme") || "light";
    }
    setTheme(tmpTheme);
  }, []);

  const handleTheme = (theme: string) => {
    setTheme(theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
    document.documentElement.setAttribute("data-theme", theme);
  };

  return {
    handleTheme,
    theme,
  };
};
