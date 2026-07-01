# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Next.js, port 3000; falls back to 3001+ if occupied)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (`next/core-web-vitals` + `next/typescript` configs)
- `npx tsc --noEmit -p tsconfig.json` — type-check only, no test runner is configured in this project

There is no test suite configured (no Jest/Vitest/Playwright). Don't assume one exists.

## Architecture

This is a personal portfolio site (Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4) styled as a fake VS Code / terminal editor — tabs, file-explorer sidebars, line numbers, and syntax-colored code blocks are the running visual motif across every page, not just decoration on one page.

### Theme system (CSS variables, not Tailwind dark: variant)

All color is driven by CSS custom properties defined in `src/app/globals.css` under `[data-theme="dark"]` and `[data-theme="light"]` selectors (theme: "HyperTerm" — near-black/neon dark, high-contrast light counterpart). Components consume tokens via Tailwind arbitrary values, e.g. `text-[var(--color-accent)]`, `bg-[var(--bg-editor)]`, `border-[var(--border-color)]/60`.

**Never hardcode hex colors in component files.** Add or reuse a CSS variable token instead, so both themes stay in sync. Token names: `--bg-primary`, `--bg-editor`, `--bg-sidebar`, `--color-accent`, `--color-purple`, `--color-cyan`, `--color-green`, `--color-yellow`, `--color-orange`, `--border-color`, `--text-primary`, `--text-muted`, `--line-number`, `--glow-color`.

Switching mechanism (three pieces, all required together):
- `src/context/ThemeContext.tsx` — `ThemeProvider` + `useTheme()` hook; persists choice to `localStorage` key `portfolio-theme`.
- `src/components/ThemeToggle.tsx` — sun/moon icon button, mounted inside `Header.tsx`.
- `src/app/layout.tsx` — has an inline `<script>` in `<head>` that synchronously reads `localStorage` and sets `data-theme` on `<html>` *before paint* to prevent a flash of the wrong theme, plus `suppressHydrationWarning` on `<html>` (required because the attribute is intentionally mutated client-side after SSR).

### Layout shell

`src/app/layout.tsx` renders a fixed-viewport "VS Code window": `body` is `h-screen w-screen overflow-hidden`, wrapping a bordered `main` panel containing `Header` → `{children}` (flex-1, scrolls internally per-page) → `Footer`. Pages are expected to manage their own internal scrolling (`overflow-y-auto`) rather than scrolling the whole window.

`Header.tsx` is a client component (`usePathname`) that highlights the active route tab and hosts `ThemeToggle`. Route labels use a leading underscore (`_about-me`, `_projects`) to read like file/tab names.

### Page pattern

Each route under `src/app/` (`page.tsx`, `About/page.tsx`, `Projects/page.tsx`, `Contact/page.tsx`) follows the same internal structure: a left activity-bar / file-explorer sidebar (often with expand/collapse state), an editor-style tab bar, and a main content pane rendering hand-built syntax-highlighted JSX (manual `<span>` coloring with line-number gutters) rather than a markdown/MDX or syntax-highlighter library — there is no `react-syntax-highlighter` or similar dependency. When adding new "code block" content, follow the existing per-token `<span className="text-[var(--color-...)]">` + line-number-gutter pattern already used in `About/page.tsx` and `Projects/page.tsx`.

`src/app/Hello/page.tsx` is an orphaned early draft (not linked from `Header`'s nav, not theme-token-converted) — leave it alone unless asked to clean it up specifically.

### Styling

Tailwind CSS v4 is configured via `@import "tailwindcss"` in `globals.css` (no `tailwind.config.js` — v4's CSS-first config). Font is JetBrains Mono throughout (loaded via Google Fonts `@import` in `globals.css`), plus `Geist_Mono` from `next/font/google` wired into `layout.tsx` as a CSS variable but not actively applied to `body`'s font stack.
