"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail, MdPhone } from "react-icons/md";
import { useUI } from "@/context/UIContext";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const contacts = [
  {
    icon: <MdEmail className="text-[var(--color-accent)]" />,
    label: "email",
    href: "mailto:shailjayadav7275@gmail.com",
    value: "shailjayadav7275@gmail.com",
  },
  {
    icon: <FaGithub className="text-[var(--color-purple)]" />,
    label: "github",
    href: "https://github.com/shailjayadav30",
    value: "shailjayadav30",
  },
  {
    icon: <TiSocialLinkedin className="text-[var(--color-cyan)]" />,
    label: "linkedin",
    href: "https://www.linkedin.com/in/shailja-yadav-643853252",
    value: "shailja-yadav",
  },
  {
    icon: <FaSquareXTwitter className="text-[var(--text-primary)]" />,
    label: "twitter",
    href: "https://x.com/Shailja5911",
    value: "@Shailja5911",
  },
  {
    icon: <MdPhone className="text-[var(--color-green)]" />,
    label: "phone",
    href: "tel:+917275967453",
    value: "+91 7275967453",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { sidebarOpen, toggleSidebar } = useUI();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Activity bar */}
      <div className="h-full w-8 border-r border-[var(--border-color)]/60 flex justify-center pt-4 flex-shrink-0">
        <button
          onClick={toggleSidebar}
          title="Toggle sidebar (Ctrl+B)"
          className="text-[var(--text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div
          data-sidebar
          className="border-r border-[var(--border-color)]/60 w-52 flex flex-col pt-4 flex-shrink-0 bg-[var(--bg-sidebar)]"
        >
          <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] px-4 pb-3">
            contacts
          </p>
          <div className="flex flex-col space-y-1 px-3">
            {contacts.map(({ icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-[var(--text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--border-color)]/20 focus:outline-none focus:text-[var(--color-accent)] transition-colors"
              >
                <span className="flex-shrink-0">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main editor */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Tab */}
        <div className="flex border-b border-[var(--border-color)]/60 bg-[var(--bg-sidebar)] flex-shrink-0">
          <div className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-accent)] border-b-2 border-b-[var(--color-accent)] bg-[var(--bg-editor)] border-r border-r-[var(--border-color)]/60">
            contact.ts
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto flex items-center justify-center p-8">
          {submitted ? (
            <div className="text-center space-y-4">
              <p className="text-[var(--color-green)] text-2xl">
                <span className="text-[var(--text-muted)]">&#47;&#47; </span>message sent!
              </p>
              <p className="text-[13px]">
                <span className="text-[var(--color-accent)]">console</span>
                <span className="text-[var(--text-primary)]">.</span>
                <span className="text-[var(--color-green)]">log</span>
                <span className="text-[var(--text-primary)]">(</span>
                <span className="text-[var(--color-yellow)]">
                  &quot;Thanks! I&apos;ll get back to you soon 💌&quot;
                </span>
                <span className="text-[var(--text-primary)]">);</span>
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-4 px-5 py-2 text-sm border border-[var(--color-accent)]/50 text-[var(--color-accent)] rounded hover:bg-[var(--color-accent)]/10 transition-colors"
              >
                send-another
              </button>
            </div>
          ) : (
            <div className="w-full max-w-lg">
              <div className="text-[13px] mb-6 space-y-0.5">
                <p className="text-[var(--text-muted)]">
                  <span className="text-[var(--color-accent)]">&#47;&#47; </span>
                  have a project in mind? let&apos;s build something great together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[13px] text-[var(--text-muted)] block mb-1">
                    <span className="text-[var(--color-accent)]">const</span>{" "}
                    <span className="text-[var(--color-cyan)]">name</span>{" "}
                    <span className="text-[var(--text-primary)]">=</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder='"your name"'
                    required
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)]/60 rounded px-4 py-2 text-sm text-[var(--color-yellow)] placeholder-[var(--border-color)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-[var(--text-muted)] block mb-1">
                    <span className="text-[var(--color-accent)]">const</span>{" "}
                    <span className="text-[var(--color-cyan)]">email</span>{" "}
                    <span className="text-[var(--text-primary)]">=</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder='"your@email.com"'
                    required
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)]/60 rounded px-4 py-2 text-sm text-[var(--color-yellow)] placeholder-[var(--border-color)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[13px] text-[var(--text-muted)] block mb-1">
                    <span className="text-[var(--color-accent)]">const</span>{" "}
                    <span className="text-[var(--color-cyan)]">message</span>{" "}
                    <span className="text-[var(--text-primary)]">=</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder='"your message here..."'
                    required
                    rows={4}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)]/60 rounded px-4 py-2 text-sm text-[var(--color-yellow)] placeholder-[var(--border-color)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/50 text-[var(--color-accent)] rounded hover:bg-[var(--color-accent)]/20 transition-colors text-sm tracking-wide"
                >
                  submit-message
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
