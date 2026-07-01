"use client";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUI } from "@/context/UIContext";

const NAV_ROUTES = ["/", "/About", "/Projects", "/Contact"];

export default function KeyboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const {
    toggleSidebar,
    setCommandPaletteOpen,
    setInPageSearchOpen,
    setInPageSearchQuery,
    commandPaletteOpen,
    inPageSearchOpen,
  } = useUI();

  /* Use refs so the stable listener always sees the latest values without
     having to re-register on every state change. */
  const stateRef = useRef({
    pathname,
    toggleSidebar,
    setCommandPaletteOpen,
    setInPageSearchOpen,
    setInPageSearchQuery,
    commandPaletteOpen,
    inPageSearchOpen,
  });

  useEffect(() => {
    stateRef.current = {
      pathname,
      toggleSidebar,
      setCommandPaletteOpen,
      setInPageSearchOpen,
      setInPageSearchQuery,
      commandPaletteOpen,
      inPageSearchOpen,
    };
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const s = stateRef.current;
      const inInput =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement;

      /* Escape always closes overlays, even from inputs */
      if (e.key === "Escape") {
        if (s.commandPaletteOpen) s.setCommandPaletteOpen(false);
        if (s.inPageSearchOpen) {
          s.setInPageSearchOpen(false);
          s.setInPageSearchQuery("");
        }
        return;
      }

      if (inInput) return;

      /* Ctrl-only shortcuts */
      if (e.ctrlKey && !e.shiftKey && !e.altKey) {
        switch (e.key.toLowerCase()) {
          case "b":
            e.preventDefault();
            s.toggleSidebar();
            break;

          case "p":
            e.preventDefault();
            s.setCommandPaletteOpen((v) => !v);
            break;

          case "f":
            e.preventDefault();
            if (s.inPageSearchOpen) {
              /* Re-focus if already open */
              document
                .querySelector<HTMLInputElement>("[data-search-input]")
                ?.focus();
            } else {
              s.setInPageSearchQuery("");
              s.setInPageSearchOpen(true);
            }
            break;

          /* Ctrl+1–4  → jump directly to that page */
          case "1":
          case "2":
          case "3":
          case "4": {
            e.preventDefault();
            const target = NAV_ROUTES[parseInt(e.key) - 1];
            if (target) router.push(target);
            break;
          }
        }
      }

      /* Ctrl+Shift+E → focus the sidebar (VS Code Explorer shortcut) */
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "e") {
        e.preventDefault();
        const first = document
          .querySelector<HTMLElement>("[data-sidebar] button, [data-sidebar] a[href]");
        first?.focus();
      }

      /* Alt+← / Alt+→  → prev / next page */
      if (e.altKey && !e.ctrlKey && !e.shiftKey) {
        const idx = NAV_ROUTES.indexOf(s.pathname);
        if (e.key === "ArrowLeft" && idx > 0) {
          e.preventDefault();
          router.push(NAV_ROUTES[idx - 1]);
        } else if (e.key === "ArrowRight" && idx < NAV_ROUTES.length - 1) {
          e.preventDefault();
          router.push(NAV_ROUTES[idx + 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]); /* router is stable; all mutable state goes through stateRef */

  return <>{children}</>;
}
