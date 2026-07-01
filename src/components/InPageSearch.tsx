"use client";
import React, { useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useUI } from "@/context/UIContext";

export default function InPageSearch() {
  const {
    inPageSearchOpen,
    setInPageSearchOpen,
    inPageSearchQuery,
    setInPageSearchQuery,
  } = useUI();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inPageSearchOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [inPageSearchOpen]);

  const close = () => {
    setInPageSearchOpen(false);
    setInPageSearchQuery("");
  };

  if (!inPageSearchOpen) return null;

  return (
    <div className="absolute top-2 right-2 z-40 flex items-center gap-2 bg-[var(--bg-sidebar)] border border-[var(--border-color)]/80 rounded px-3 py-1.5 shadow-lg">
      <span className="text-[10px] text-[var(--text-muted)] whitespace-nowrap select-none">
        search:
      </span>
      <input
        ref={inputRef}
        data-search-input
        value={inPageSearchQuery}
        onChange={(e) => setInPageSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") close();
        }}
        placeholder="filter content..."
        className="bg-transparent text-sm text-[var(--text-primary)] outline-none w-44 placeholder:text-[var(--text-muted)]"
      />
      {inPageSearchQuery && (
        <button
          onClick={() => setInPageSearchQuery("")}
          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          title="Clear"
        >
          <RxCross2 size={11} />
        </button>
      )}
      <button
        onClick={close}
        className="text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors ml-1 border-l border-[var(--border-color)]/60 pl-2"
        title="Close (Esc)"
      >
        <RxCross2 size={12} />
      </button>
    </div>
  );
}
