"use client";

import Link from "next/link";
import React, { useState } from "react";

const developerLines = [
  { num: 1,  content: <span className="text-[var(--text-muted)]">{"/**"}</span> },
  { num: 2,  content: <span className="text-[var(--text-muted)]">&nbsp;{"* @author Shailja Yadav"}</span> },
  { num: 3,  content: <span className="text-[var(--text-muted)]">&nbsp;{"* @role   Full Stack Developer"}</span> },
  { num: 4,  content: <span className="text-[var(--text-muted)]">&nbsp;{"*/"}</span> },
  { num: 5,  content: null },
  {
    num: 6,
    content: (
      <>
        <span className="text-[var(--color-accent)]">const</span>{" "}
        <span className="text-[var(--color-cyan)]">developer</span>{" "}
        <span className="text-[var(--text-primary)]">= {"{"}</span>
      </>
    ),
  },
  {
    num: 7,
    content: (
      <span className="pl-4 block">
        <span className="text-[var(--color-purple)]">name</span>
        <span className="text-[var(--text-primary)]">: </span>
        <span className="text-[var(--color-green)]">&quot;Shailja Yadav&quot;</span>
        <span className="text-[var(--text-primary)]">,</span>
      </span>
    ),
  },
  {
    num: 8,
    content: (
      <span className="pl-4 block">
        <span className="text-[var(--color-purple)]">skills</span>
        <span className="text-[var(--text-primary)]">: [</span>
        <span className="text-[var(--color-green)]">&quot;React&quot;</span>
        <span className="text-[var(--text-primary)]">, </span>
        <span className="text-[var(--color-green)]">&quot;Next.js&quot;</span>
        <span className="text-[var(--text-primary)]">, </span>
        <span className="text-[var(--color-green)]">&quot;Node.js&quot;</span>
        <span className="text-[var(--text-primary)]">],</span>
      </span>
    ),
  },
  {
    num: 9,
    content: (
      <span className="pl-4 block">
        <span className="text-[var(--color-purple)]">languages</span>
        <span className="text-[var(--text-primary)]">: [</span>
        <span className="text-[var(--color-green)]">&quot;TypeScript&quot;</span>
        <span className="text-[var(--text-primary)]">, </span>
        <span className="text-[var(--color-green)]">&quot;JavaScript&quot;</span>
        <span className="text-[var(--text-primary)]">],</span>
      </span>
    ),
  },
  {
    num: 10,
    content: (
      <span className="pl-4 block">
        <span className="text-[var(--color-purple)]">hobbies</span>
        <span className="text-[var(--text-primary)]">: [</span>
        <span className="text-[var(--color-green)]">&quot;Music&quot;</span>
        <span className="text-[var(--text-primary)]">, </span>
        <span className="text-[var(--color-green)]">&quot;Anime&quot;</span>
        <span className="text-[var(--text-primary)]">],</span>
      </span>
    ),
  },
  { num: 11, content: <span className="text-[var(--text-primary)]">{"}"}</span> },
  { num: 12, content: null },
  {
    num: 13,
    content: (
      <>
        <span className="text-[var(--text-muted)]">{"// "}</span>
        <span className="text-[var(--text-muted)]">availability status</span>
      </>
    ),
  },
  {
    num: 14,
    content: (
      <>
        <span className="text-[var(--color-accent)]">const</span>{" "}
        <span className="text-[var(--color-cyan)]">status</span>{" "}
        <span className="text-[var(--text-primary)]">= </span>
        <span className="text-[var(--color-green)]">&quot;open to work&quot;</span>
        <span className="text-[var(--text-primary)]">;</span>
      </>
    ),
  },
];

const skillsLines = [
  { num: 1,  content: <span className="text-[var(--text-primary)]">{"{"}</span> },
  {
    num: 2,
    content: (
      <span className="pl-4 block">
        <span className="text-[var(--color-purple)]">&quot;frontend&quot;</span>
        <span className="text-[var(--text-primary)]">: [</span>
      </span>
    ),
  },
  {
    num: 3,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;React&quot;</span>
        <span className="text-[var(--text-primary)]">,</span>
      </span>
    ),
  },
  {
    num: 4,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;Next.js&quot;</span>
        <span className="text-[var(--text-primary)]">,</span>
      </span>
    ),
  },
  {
    num: 5,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;TypeScript&quot;</span>
        <span className="text-[var(--text-primary)]">,</span>
      </span>
    ),
  },
  {
    num: 6,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;Tailwind CSS&quot;</span>
      </span>
    ),
  },
  { num: 7,  content: <span className="pl-4 block text-[var(--text-primary)]">{"],"}</span> },
  {
    num: 8,
    content: (
      <span className="pl-4 block">
        <span className="text-[var(--color-purple)]">&quot;backend&quot;</span>
        <span className="text-[var(--text-primary)]">: [</span>
      </span>
    ),
  },
  {
    num: 9,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;Node.js&quot;</span>
        <span className="text-[var(--text-primary)]">,</span>
      </span>
    ),
  },
  {
    num: 10,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;Express&quot;</span>
        <span className="text-[var(--text-primary)]">,</span>
      </span>
    ),
  },
  {
    num: 11,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;REST APIs&quot;</span>
      </span>
    ),
  },
  { num: 12, content: <span className="pl-4 block text-[var(--text-primary)]">{"],"}</span> },
  {
    num: 13,
    content: (
      <span className="pl-4 block">
        <span className="text-[var(--color-purple)]">&quot;tools&quot;</span>
        <span className="text-[var(--text-primary)]">: [</span>
      </span>
    ),
  },
  {
    num: 14,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;Git&quot;</span>
        <span className="text-[var(--text-primary)]">,</span>
      </span>
    ),
  },
  {
    num: 15,
    content: (
      <span className="pl-8 block">
        <span className="text-[var(--color-green)]">&quot;VS Code&quot;</span>
        <span className="text-[var(--text-primary)]">,</span>
      </span>
    ),
  },
  // {
  //   num: 16,
  //   content: (
  //     <span className="pl-8 block">
  //       <span className="text-[var(--color-green)]">&quot;Figma&quot;</span>
  //     </span>
  //   ),
  // },
  { num: 17, content: <span className="pl-4 block text-[var(--text-primary)]">{"],"}</span> },
  // {
  //   num: 18,
  //   content: (
  //     <span className="pl-4 block">
  //       <span className="text-[var(--color-purple)]">&quot;learning&quot;</span>
  //       <span className="text-[var(--text-primary)]">: [</span>
  //     </span>
  //   ),
  // },
  // {
  //   num: 19,
  //   content: (
  //     <span className="pl-8 block">
  //       <span className="text-[var(--color-green)]">&quot;GraphQL&quot;</span>
  //       <span className="text-[var(--text-primary)]">,</span>
  //     </span>
  //   ),
  // },
  // {
  //   num: 20,
  //   content: (
  //     <span className="pl-8 block">
  //       <span className="text-[var(--color-green)]">&quot;Docker&quot;</span>
  //     </span>
  //   ),
  // },
  // { num: 21, content: <span className="pl-4 block text-[var(--text-primary)]">{"]"}</span> },
  { num: 22, content: <span className="text-[var(--text-primary)]">{"}"}</span> },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"developer" | "skills">("developer");

  const lines = activeTab === "developer" ? developerLines : skillsLines;
  const cursorLineNum = activeTab === "developer" ? 15 : 23;

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Left: Hero text */}
      <div className="flex-1 flex items-center justify-center px-12">
        <div className="leading-relaxed">
          <p className="text-[var(--text-muted)] text-sm pb-1">Hi, I&apos;m</p>
          <h1 className="text-[var(--text-primary)] text-6xl font-bold pb-3 tracking-tight">
            Shailja
          </h1>
          <p className="text-3xl pb-12 text-[var(--color-accent)] accent-glow">
            &gt; Full Stack Developer
          </p>

          <p className="text-[var(--text-muted)] pb-1 text-sm">
            <span className="text-[var(--color-accent)]">&#47;&#47;</span> find my profile on github
          </p>
          <p className="text-sm">
            <span className="text-[var(--color-accent)]">const</span>{" "}
            <span className="text-[var(--color-cyan)]">githubLink</span>{" "}
            <span className="text-[var(--text-primary)]">= </span>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-green)] hover:text-[var(--color-accent)] transition-colors underline decoration-[var(--border-color)] hover:decoration-[var(--color-accent)]"
              href="https://github.com/shailjayadav30"
            >
              &quot;https://github.com/shailjayadav30&quot;
            </Link>
          </p>
        </div>
      </div>

      {/* Vertical divider */}
      <div className="w-px bg-[var(--border-color)]/60" />

      {/* Right: VS Code-style editor panel */}
      <div className="flex-1 flex items-center justify-center px-10">
        <div className="w-full max-w-md border border-[var(--border-color)]/60 rounded-lg overflow-hidden shadow-lg shadow-[var(--color-accent)]/5">
          {/* Editor title bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[var(--bg-sidebar)] border-b border-[var(--border-color)]/60">
            <span className="w-3 h-3 rounded-full bg-[var(--color-orange)]/70" />
            <span className="w-3 h-3 rounded-full bg-[var(--color-yellow)]/70" />
            <span className="w-3 h-3 rounded-full bg-[var(--color-green)]/70" />
          </div>

          {/* Editor tabs */}
          <div className="flex bg-[var(--bg-sidebar)] border-b border-[var(--border-color)]/60">
            <button
              onClick={() => setActiveTab("developer")}
              className={`px-4 py-2 text-xs transition-colors border-r border-r-[var(--border-color)]/60 ${
                activeTab === "developer"
                  ? "text-[var(--color-accent)] border-b-2 border-b-[var(--color-accent)] bg-[var(--bg-editor)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              }`}
            >
              developer.ts
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-4 py-2 text-xs transition-colors ${
                activeTab === "skills"
                  ? "text-[var(--color-accent)] border-b-2 border-b-[var(--color-accent)] bg-[var(--bg-editor)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
              }`}
            >
              skills.json
            </button>
          </div>

          {/* Code lines */}
          <div className="p-4 text-[13px] leading-6 bg-[var(--bg-editor)]">
            {lines.map((line) => (
              <div key={line.num} className="flex gap-4 min-h-[24px]">
                <span className="text-[var(--line-number)] w-5 text-right select-none flex-shrink-0">
                  {line.num}
                </span>
                <span className="flex-1">{line.content}</span>
              </div>
            ))}

            {/* Blinking cursor line */}
            <div className="flex gap-4 mt-1">
              <span className="text-[var(--line-number)] w-5 text-right select-none flex-shrink-0">
                {cursorLineNum}
              </span>
              <span className="flex-1">
                <span className="inline-block w-2 h-4 bg-[var(--color-accent)] cursor-blink align-middle" />
              </span>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-3 py-1 bg-[var(--color-accent)]/10 border-t border-[var(--border-color)]/60 text-[10px]">
            <span className="text-[var(--color-accent)]">
              {activeTab === "developer" ? "TypeScript" : "JSON"}
            </span>
            <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-green)] animate-pulse" />
              available for hire
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
