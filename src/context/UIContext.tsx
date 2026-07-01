"use client";
import React, { createContext, useContext, useState } from "react";

interface UIContextValue {
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  toggleSidebar: () => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  inPageSearchOpen: boolean;
  setInPageSearchOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  inPageSearchQuery: string;
  setInPageSearchQuery: (q: string) => void;
}

const UIContext = createContext<UIContextValue>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
  toggleSidebar: () => {},
  commandPaletteOpen: false,
  setCommandPaletteOpen: () => {},
  inPageSearchOpen: false,
  setInPageSearchOpen: () => {},
  inPageSearchQuery: "",
  setInPageSearchQuery: () => {},
});

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [inPageSearchOpen, setInPageSearchOpen] = useState(false);
  const [inPageSearchQuery, setInPageSearchQuery] = useState("");

  const toggleSidebar = () => setSidebarOpen((v) => !v);

  return (
    <UIContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar,
        commandPaletteOpen,
        setCommandPaletteOpen,
        inPageSearchOpen,
        setInPageSearchOpen,
        inPageSearchQuery,
        setInPageSearchQuery,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
