"use client";
import React, { useState } from "react";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useUI } from "@/context/UIContext";
import InPageSearch from "@/components/InPageSearch";

interface Project {
  id: string;
  filename: string;
  title: string;
  tech: string[];
  description: string;
  github: string;
  live?: string;
  status: "live" | "completed" | "in-progress";
}

const projects: Project[] = [
  {
    id: "blog-website",
    filename: "blog-app.tsx",
    title: "Blog Website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "MongoDB", "mongoose"],
    description:
      "A full-stack blogging platform built with Next.js featuring secure authentication, CRUD operations for blog posts, and a responsive UI. Currently under active development with more features planned.",
    github: "https://github.com/shailjayadav30",
    live: "https://blog-next-js-gold.vercel.app/",
    status: "in-progress",
  },
  {
    id: "safari-booking-website",
    filename: "safari-app.tsx",
    title: "Safari Booking",
    tech: ["Next.js", "TypeScript", "Tailwind css", "Postgress"],
    description:
      "A modern safari booking platform that enables users to create accounts, securely log in, and book safari experiences through an intuitive interface. The application includes authentication, user registration, password management, and a responsive booking workflow. The frontend has been completed, while backend development and API integration are currently in progress.",
    github: "https://github.com/shailjayadav30",
    status: "in-progress",
    live: "https://vercel.com/shailja-yadavs-projects/jungle-safari-frontend",
  },
  {
    id: "cricket-website",
    filename: "cricket-app.tsx",
    title: "Weather Dashboard",
    tech: ["React", "OpenWeather API", "Chart.js"],
    description:
      "A responsive frontend-only cricket website built with React, Javascript, and Tailwind CSS. The project features a modern interface for displaying live scores, match schedules, team details, player profiles, and cricket news using static and mock data. It showcases responsive design, reusable components, and a clean user experience.",
    github: "https://github.com/shailjayadav30",
    status: "completed",
    live: "https://cricket-website-tan.vercel.app/login",
  },
  {
    id: "portfolio",
    filename: "portfolio.tsx",
    title: "Portfolio Website",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Personal developer portfolio with a HyperTerm theme — tabs, file-explorer sidebar, and syntax-highlighted code blocks.",
    github: "https://github.com/shailjayadav30",
    live: "https://github.com/shailjayadav30",
    status: "live",
  },
];

const statusColorVar: Record<Project["status"], string> = {
  live: "var(--color-green)",
  completed: "var(--color-cyan)",
  "in-progress": "var(--color-orange)",
};

/* Arrow-key navigation within a sidebar container */
function handleSidebarArrowNav(e: React.KeyboardEvent) {
  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
  e.preventDefault();
  const items = Array.from(
    (e.currentTarget as HTMLElement).querySelectorAll<HTMLElement>("button, a[href]")
  );
  const idx = items.indexOf(document.activeElement as HTMLElement);
  const next =
    e.key === "ArrowDown"
      ? Math.min(idx + 1, items.length - 1)
      : Math.max(idx - 1, 0);
  items[idx >= 0 ? next : 0]?.focus();
}

export default function ProjectsPage() {
  const [active, setActive] = useState<Project>(projects[0]);
  const [explorerOpen, setExplorerOpen] = useState(true);

  const { sidebarOpen, toggleSidebar, inPageSearchQuery } = useUI();

  const q = inPageSearchQuery.toLowerCase();
  const filteredProjects = q
    ? projects.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q))
      )
    : projects;

  return (
    <div className="flex h-full overflow-hidden">
      {/* Activity bar */}
      <div className="h-full w-8 border-r border-[var(--border-color)]/60 flex justify-center pt-4 flex-shrink-0">
        <button onClick={toggleSidebar} title="Toggle sidebar (Ctrl+B)" className="text-[var(--text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div
          data-sidebar
          onKeyDown={handleSidebarArrowNav}
          className="border-r border-[var(--border-color)]/60 w-52 flex flex-col pt-2 flex-shrink-0 bg-[var(--bg-sidebar)]"
        >
          <button
            className="flex items-center gap-1 pb-2 border-b border-[var(--border-color)]/60 px-3 text-sm font-semibold cursor-pointer hover:text-[var(--color-accent)] text-[var(--text-primary)] transition-colors text-left"
            onClick={() => setExplorerOpen((v) => !v)}
          >
            {explorerOpen ? (
              <RxCaretDown className="text-[var(--text-muted)]" />
            ) : (
              <RxCaretRight className="text-[var(--text-muted)]" />
            )}
            projects
            {q && (
              <span className="ml-auto text-[10px] text-[var(--text-muted)]">
                {filteredProjects.length}/{projects.length}
              </span>
            )}
          </button>

          {explorerOpen && (
            <div className="flex flex-col mt-2 space-y-0.5 px-2 text-sm">
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded cursor-pointer transition-colors text-left w-full focus:outline-none ${
                    active.id === p.id
                      ? "bg-[var(--border-color)]/50 text-[var(--color-accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/20 focus:text-[var(--color-accent)]"
                  }`}
                >
                  <span className="text-[var(--color-cyan)] flex-shrink-0">◈</span>
                  <span className="truncate">{p.filename}</span>
                </button>
              ))}
              {q && filteredProjects.length === 0 && (
                <p className="px-3 py-2 text-[10px] text-[var(--text-muted)] italic">
                  no projects match &quot;{inPageSearchQuery}&quot;
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Tab bar */}
        <div className="flex border-b border-[var(--border-color)]/60 bg-[var(--bg-sidebar)] flex-shrink-0">
          <div className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-accent)] border-b-2 border-b-[var(--color-accent)] bg-[var(--bg-editor)] border-r border-r-[var(--border-color)]/60">
            <span>◈</span>
            <span>{active.filename}</span>
          </div>
        </div>

        {/* Editor content — relative so InPageSearch can anchor */}
        <div className="relative flex-1 overflow-y-auto p-8">
          <InPageSearch />
          <div className="max-w-2xl text-[13px] leading-7">
            {/* Line 1 */}
            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">1</span>
              <span><span className="text-[var(--text-muted)]">{"/**"}</span></span>
            </div>
            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">2</span>
              <span className="text-[var(--text-muted)]">&nbsp;{"* @project "}{active.title}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">3</span>
              <span className="text-[var(--text-muted)]">&nbsp;{"*/"}</span>
            </div>

            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">4</span>
              <span />
            </div>

            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">5</span>
              <span>
                <span className="text-[var(--color-accent)]">const</span>{" "}
                <span className="text-[var(--color-cyan)]">project</span>{" "}
                <span className="text-[var(--text-primary)]">= {"{"}</span>
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">6</span>
              <span className="pl-6">
                <span className="text-[var(--color-purple)]">name</span>
                <span className="text-[var(--text-primary)]">: </span>
                <span className="text-[var(--color-green)]">&quot;{active.title}&quot;</span>
                <span className="text-[var(--text-primary)]">,</span>
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">7</span>
              <span className="pl-6">
                <span className="text-[var(--color-purple)]">description</span>
                <span className="text-[var(--text-primary)]">: </span>
                <span className="text-[var(--color-green)]">&quot;{active.description}&quot;</span>
                <span className="text-[var(--text-primary)]">,</span>
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">8</span>
              <span className="pl-6">
                <span className="text-[var(--color-purple)]">tech</span>
                <span className="text-[var(--text-primary)]">: [</span>
                {active.tech.map((t, i) => (
                  <span key={t}>
                    <span className="text-[var(--color-green)]">&quot;{t}&quot;</span>
                    {i < active.tech.length - 1 && (
                      <span className="text-[var(--text-primary)]">, </span>
                    )}
                  </span>
                ))}
                <span className="text-[var(--text-primary)]">],</span>
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">9</span>
              <span className="pl-6">
                <span className="text-[var(--color-purple)]">status</span>
                <span className="text-[var(--text-primary)]">: </span>
                <span style={{ color: statusColorVar[active.status] }}>
                  &quot;{active.status}&quot;
                </span>
                <span className="text-[var(--text-primary)]">,</span>
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">10</span>
              <span className="pl-6">
                <span className="text-[var(--color-purple)]">github</span>
                <span className="text-[var(--text-primary)]">: </span>
                <Link
                  href={active.github}
                  target="_blank"
                  className="text-[var(--color-cyan)] hover:text-[var(--color-accent)] transition-colors underline decoration-[var(--border-color)]"
                >
                  &quot;{active.github}&quot;
                </Link>
                <span className="text-[var(--text-primary)]">,</span>
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[var(--line-number)] w-5 text-right select-none">11</span>
              <span><span className="text-[var(--text-primary)]">{"}"}</span></span>
            </div>
          </div>

          {/* Tech tag pills */}
          <div className="mt-8 flex gap-2 flex-wrap max-w-2xl">
            {active.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs border border-[var(--border-color)]/60 rounded-full text-[var(--color-purple)] bg-[var(--border-color)]/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex gap-4">
            <Link
              href={active.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm border border-[var(--color-accent)]/50 text-[var(--color-accent)] rounded hover:bg-[var(--color-accent)]/10 transition-colors"
            >
              view-on-github
            </Link>
            {active.live && (
              <Link
                href={active.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm border border-[var(--color-green)]/50 text-[var(--color-green)] rounded hover:bg-[var(--color-green)]/10 transition-colors"
              >
                live-demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
