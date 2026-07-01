"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2, RxCaretDown, RxCaretRight } from "react-icons/rx";
import { useUI } from "@/context/UIContext";
import InPageSearch from "@/components/InPageSearch";

type Section = "bio" | "education" | "interests";

function BioCode() {
  return (
    <div className="text-[13px] leading-7">
      <div className="flex gap-4">
        <span className="text-[var(--line-number)] w-5 text-right select-none">1</span>
        <span>
          <span className="text-[var(--color-accent)]">const</span>{" "}
          <span className="text-[var(--color-cyan)]">developer</span>{" "}
          <span className="text-[var(--text-primary)]">= {"{"}</span>
        </span>
      </div>
      {[
        { key: "name", val: "Shailja Yadav" },
        { key: "role", val: "Full Stack Developer" },
      ].map(({ key, val }, i) => (
        <div key={key} className="flex gap-4">
          <span className="text-[var(--line-number)] w-5 text-right select-none">{i + 2}</span>
          <span className="pl-6">
            <span className="text-[var(--color-purple)]">{key}</span>
            <span className="text-[var(--text-primary)]">: </span>
            <span className="text-[var(--color-green)]">&quot;{val}&quot;</span>
            <span className="text-[var(--text-primary)]">,</span>
          </span>
        </div>
      ))}
      <div className="flex gap-4">
        <span className="text-[var(--line-number)] w-5 text-right select-none">4</span>
        <span className="pl-6">
          <span className="text-[var(--color-purple)]">stack</span>
          <span className="text-[var(--text-primary)]">: [</span>
          {["JavaScript", "TypeScript", "React", "Next.js", "Node.js"].map((s, i, arr) => (
            <span key={s}>
              <span className="text-[var(--color-green)]">&quot;{s}&quot;</span>
              {i < arr.length - 1 && <span className="text-[var(--text-primary)]">, </span>}
            </span>
          ))}
          <span className="text-[var(--text-primary)]">],</span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="text-[var(--line-number)] w-5 text-right select-none">5</span>
        <span className="pl-6">
          <span className="text-[var(--color-purple)]">quote</span>
          <span className="text-[var(--text-primary)]">: </span>
          <span className="text-[var(--color-green)]">
            &quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;
          </span>
          <span className="text-[var(--text-primary)]">,</span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="text-[var(--line-number)] w-5 text-right select-none">6</span>
        <span><span className="text-[var(--text-primary)]">{"}"}</span></span>
      </div>
    </div>
  );
}

function EducationCode() {
  const entries = [
    { key: "tenth", val: "Nirmala Convent Inter College" },
    { key: "twelfth", val: "Nirmala Convent Inter College" },
    { key: "graduation", val: "University of Lucknow" },
  ];
  return (
    <div className="text-[13px] leading-7">
      <div className="flex gap-4">
        <span className="text-[var(--line-number)] w-5 text-right select-none">1</span>
        <span>
          <span className="text-[var(--color-accent)]">const</span>{" "}
          <span className="text-[var(--color-cyan)]">education</span>{" "}
          <span className="text-[var(--text-primary)]">= {"{"}</span>
        </span>
      </div>
      {entries.map(({ key, val }, i) => (
        <div key={key} className="flex gap-4">
          <span className="text-[var(--line-number)] w-5 text-right select-none">{i + 2}</span>
          <span className="pl-6">
            <span className="text-[var(--color-purple)]">{key}</span>
            <span className="text-[var(--text-primary)]">: </span>
            <span className="text-[var(--color-green)]">&quot;{val}&quot;</span>
            <span className="text-[var(--text-primary)]">,</span>
          </span>
        </div>
      ))}
      <div className="flex gap-4">
        <span className="text-[var(--line-number)] w-5 text-right select-none">{entries.length + 2}</span>
        <span><span className="text-[var(--text-primary)]">{"}"}</span></span>
      </div>
    </div>
  );
}

function InterestsCode() {
  const items = ["Web Development", "Music", "Anime"];
  return (
    <div className="text-[13px] leading-7">
      <div className="flex gap-4">
        <span className="text-[var(--line-number)] w-5 text-right select-none">1</span>
        <span>
          <span className="text-[var(--color-accent)]">const</span>{" "}
          <span className="text-[var(--color-cyan)]">interests</span>{" "}
          <span className="text-[var(--text-primary)]">= [</span>
        </span>
      </div>
      {items.map((item, i) => (
        <div key={item} className="flex gap-4">
          <span className="text-[var(--line-number)] w-5 text-right select-none">{i + 2}</span>
          <span className="pl-6">
            <span className="text-[var(--color-green)]">&quot;{item}&quot;</span>
            <span className="text-[var(--text-primary)]">,</span>
          </span>
        </div>
      ))}
      <div className="flex gap-4">
        <span className="text-[var(--line-number)] w-5 text-right select-none">{items.length + 2}</span>
        <span><span className="text-[var(--text-primary)]">]</span></span>
      </div>
    </div>
  );
}

const sectionComponents: Record<Section, React.ReactNode> = {
  bio: <BioCode />,
  education: <EducationCode />,
  interests: <InterestsCode />,
};

const contactLinks = [
  { label: "email", href: "mailto:shailjayadav7275@gmail.com" },
  { label: "phone", href: "tel:+7275967453" },
];

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

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [openMenus, setOpenMenus] = useState({ personal: true, contacts: true });

  const { sidebarOpen, toggleSidebar, inPageSearchQuery } = useUI();

  const toggleMenu = (menu: "personal" | "contacts") =>
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));

  const handleSectionClick = (section: Section) =>
    setActiveSection((prev) => (prev === section ? null : section));

  const allPersonalSections: { id: Section; label: string }[] = [
    { id: "bio", label: "bio" },
    { id: "education", label: "education" },
    { id: "interests", label: "interests" },
  ];

  const q = inPageSearchQuery.toLowerCase();
  const personalSections = q
    ? allPersonalSections.filter((s) => s.label.includes(q))
    : allPersonalSections;
  const filteredContacts = q
    ? contactLinks.filter((c) => c.label.includes(q))
    : contactLinks;

  return (
    <div className="flex h-full overflow-hidden">
      {/* Activity bar — clicking FaBars toggles the sidebar panel */}
      <div className="h-full w-8 border-r border-[var(--border-color)]/60 flex justify-center pt-4 flex-shrink-0">
        <button onClick={toggleSidebar} title="Toggle sidebar (Ctrl+B)" className="text-[var(--text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
          <FaBars />
        </button>
      </div>

      {/* Sidebar — hidden when sidebarOpen is false */}
      {sidebarOpen && (
        <div
          data-sidebar
          onKeyDown={handleSidebarArrowNav}
          className="border-r border-[var(--border-color)]/60 w-48 flex flex-col pt-2 flex-shrink-0 bg-[var(--bg-sidebar)] focus-within:outline-none"
        >
          {/* Personal Info */}
          <div className="flex flex-col">
            <button
              className="flex items-center gap-1 pb-2 border-b border-[var(--border-color)]/60 px-3 text-sm font-semibold cursor-pointer hover:text-[var(--color-accent)] text-[var(--text-primary)] transition-colors text-left"
              onClick={() => toggleMenu("personal")}
            >
              {openMenus.personal ? (
                <RxCaretDown className="text-[var(--text-muted)]" />
              ) : (
                <RxCaretRight className="text-[var(--text-muted)]" />
              )}
              personal-info
            </button>

            {openMenus.personal && (
              <div className="flex flex-col px-4 mt-2 space-y-1 text-sm">
                {personalSections.map(({ id, label }) => (
                  <button
                    key={id}
                    className="flex items-center gap-1 cursor-pointer text-left transition-colors hover:text-[var(--color-accent)] focus:outline-none focus:text-[var(--color-accent)]"
                    onClick={() => handleSectionClick(id)}
                  >
                    {activeSection === id ? (
                      <RxCaretDown className="text-[var(--color-accent)] flex-shrink-0" />
                    ) : (
                      <RxCaretRight className="text-[var(--text-muted)] flex-shrink-0" />
                    )}
                    <span className={activeSection === id ? "text-[var(--color-accent)]" : "text-[var(--text-muted)]"}>
                      {label}
                    </span>
                  </button>
                ))}
                {q && personalSections.length === 0 && (
                  <span className="text-[10px] text-[var(--text-muted)] italic px-1">no match</span>
                )}
              </div>
            )}
          </div>

          {/* Contacts */}
          <div className="flex flex-col mt-2">
            <button
              className="flex items-center gap-1 px-3 text-sm font-semibold pb-2 pt-2 border-t border-[var(--border-color)]/60 cursor-pointer hover:text-[var(--color-accent)] text-[var(--text-primary)] transition-colors text-left"
              onClick={() => toggleMenu("contacts")}
            >
              {openMenus.contacts ? (
                <RxCaretDown className="text-[var(--text-muted)]" />
              ) : (
                <RxCaretRight className="text-[var(--text-muted)]" />
              )}
              contacts
            </button>

            {openMenus.contacts && (
              <div className="flex flex-col px-6 mt-1 space-y-2 text-sm">
                {filteredContacts.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-[var(--text-muted)] hover:text-[var(--color-accent)] focus:outline-none focus:text-[var(--color-accent)] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                {q && filteredContacts.length === 0 && (
                  <span className="text-[10px] text-[var(--text-muted)] italic">no match</span>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main editor area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Open tabs bar */}
        <div className="flex border-b border-[var(--border-color)]/60 bg-[var(--bg-sidebar)] flex-shrink-0">
          {activeSection ? (
            <div className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-accent)] border-b-2 border-b-[var(--color-accent)] bg-[var(--bg-editor)] border-r border-r-[var(--border-color)]/60">
              <span>{activeSection}.ts</span>
              <button
                onClick={() => setActiveSection(null)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                <RxCross2 />
              </button>
            </div>
          ) : (
            <div className="px-4 py-2 text-sm text-[var(--text-muted)] italic">
              — select a file —
            </div>
          )}
        </div>

        {/* Content — relative so InPageSearch can anchor to it */}
        <div className="relative flex-1 overflow-y-auto p-8">
          <InPageSearch />
          {activeSection ? (
            <div className="max-w-2xl">
              {sectionComponents[activeSection]}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-3">
                <p className="text-[var(--text-muted)] text-sm">
                  <span className="text-[var(--color-accent)]">&#47;&#47;</span> select a section from the sidebar
                </p>
                <p className="text-[13px]">
                  <span className="text-[var(--color-accent)]">const</span>{" "}
                  <span className="text-[var(--color-cyan)]">waiting</span>{" "}
                  <span className="text-[var(--text-primary)]">= </span>
                  <span className="text-[var(--color-green)]">&quot;for your click&quot;</span>
                  <span className="text-[var(--text-primary)]">;</span>
                  <span className="inline-block w-2 h-4 bg-[var(--color-accent)] cursor-blink align-middle ml-1" />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
