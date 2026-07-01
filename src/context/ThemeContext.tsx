"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme =
  | "dark"
  | "night-owl"
  | "outrun"
  | "tokyo-night"
  | "quiet-light"
  | "light";

export const themes: Theme[] = [
  "dark",
  "night-owl",
  "outrun",
  "tokyo-night",
  "quiet-light",
  "light",
];

export const themeLabels: Record<Theme, string> = {
  "dark":         "HyperTerm Dark",
  "night-owl":    "Night Owl",
  "outrun":       "Outrun",
  "tokyo-night":  "Tokyo Night",
  "quiet-light":  "Quiet Light",
  "light":        "HyperTerm Light",
};

export const themeAccents: Record<Theme, string> = {
  "dark":         "#ff0090",
  "night-owl":    "#ff6db3",
  "outrun":       "#ff00ff",
  "tokyo-night":  "#7aa2f7",
  "quiet-light":  "#4078f2",
  "light":        "#c2006a",
};

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
  cycleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-theme") as Theme;
    if (stored && themes.includes(stored)) setThemeState(stored);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("portfolio-theme", t);
  };

  const cycleTheme = () => {
    const idx = themes.indexOf(theme);
    setTheme(themes[(idx + 1) % themes.length]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
