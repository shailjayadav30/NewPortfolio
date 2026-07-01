"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useUI } from "@/context/UIContext";

const pages = [
  { label: "_hello.tsx",      description: "Home / hero page",           href: "/" },
  { label: "_about-me.tsx",   description: "Bio, education, interests",  href: "/About" },
  { label: "_projects.tsx",   description: "Projects showcase",          href: "/Projects" },
  { label: "_contact-me.tsx", description: "Contact form & social links", href: "/Contact" },
];

export default function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen } = useUI();
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = pages.filter(
    (p) =>
      p.label.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (commandPaletteOpen) {
      setQuery("");
      setSelectedIdx(0);
      /* Defer focus to let the DOM paint first */
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [commandPaletteOpen]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  const navigate = (href: string) => {
    router.push(href);
    setCommandPaletteOpen(false);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (filtered[selectedIdx]) navigate(filtered[selectedIdx].href);
    } else if (e.key === "Escape") {
      setCommandPaletteOpen(false);
    }
  };

  if (!commandPaletteOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm"
      onClick={() => setCommandPaletteOpen(false)}
    >
      <div
        className="w-full max-w-lg border border-[var(--border-color)] bg-[var(--bg-sidebar)] shadow-2xl rounded overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header hint row */}
        <div className="flex items-center gap-2 px-4 py-1.5 border-b border-[var(--border-color)]/60 text-[10px] text-[var(--text-muted)]">
          <span className="text-[var(--color-accent)] font-semibold">Go to page</span>
          <span className="ml-auto">↑↓ navigate · ↵ open · Esc close</span>
        </div>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a page name..."
          className="w-full px-4 py-3 bg-transparent text-[var(--text-primary)] outline-none border-b border-[var(--border-color)]/60 placeholder:text-[var(--text-muted)] text-sm"
        />

        <div className="max-h-60 overflow-y-auto">
          {filtered.map((page, i) => (
            <button
              key={page.href}
              onClick={() => navigate(page.href)}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                i === selectedIdx
                  ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/20"
              }`}
            >
              <span className="text-[var(--color-cyan)] flex-shrink-0 text-base">◈</span>
              <span className="flex-1 min-w-0">
                <span className="block font-medium">{page.label}</span>
                <span className="text-[10px] text-[var(--text-muted)] block">{page.description}</span>
              </span>
              {i === selectedIdx && (
                <span className="text-[10px] text-[var(--text-muted)] flex-shrink-0">↵</span>
              )}
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="px-4 py-5 text-sm text-[var(--text-muted)] text-center">
              No pages match &quot;{query}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
