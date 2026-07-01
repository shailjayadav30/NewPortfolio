"use client";
import React, { useState, useRef, useEffect } from "react";
import { MdPalette } from "react-icons/md";
import { useTheme, themes, themeLabels, themeAccents } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change color theme"
        title="Change color theme"
        className="flex items-center justify-center w-8 h-8 rounded text-[var(--text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--border-color)]/30 transition-colors"
      >
        <MdPalette size={16} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-[var(--bg-sidebar)] border border-[var(--border-color)]/80 rounded shadow-xl z-50 min-w-[11rem] py-1 overflow-hidden">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => { setTheme(t); setOpen(false); }}
              className={`w-full text-left px-3 py-1.5 text-xs flex items-center gap-2.5 transition-colors ${
                theme === t
                  ? "text-[var(--color-accent)] bg-[var(--color-accent)]/10"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/20"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 border border-white/10"
                style={{ backgroundColor: themeAccents[t] }}
              />
              {themeLabels[t]}
              {theme === t && (
                <span className="ml-auto text-[10px] text-[var(--color-accent)]">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
