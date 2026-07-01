"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "_hello", href: "/" },
  { label: "_about-me", href: "/About" },
  { label: "_projects", href: "/Projects" },
  { label: "_contact-me", href: "/Contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="border-b border-[var(--border-color)]/60 flex items-center justify-between bg-[var(--bg-sidebar)] flex-shrink-0">
      <Link
        href="/"
        className="text-sm text-[var(--color-accent)] hover:text-[var(--text-primary)] border-b-2 border-transparent hover:border-b-[var(--color-accent)] p-2 pr-24 pl-4 transition-colors font-semibold whitespace-nowrap"
      >
        shailja-yadav
      </Link>

      <div className="flex items-center">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          const isSecondToLast = idx === navItems.length - 2;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm p-2 border-l border-[var(--border-color)]/60 border-b-2 pr-8 pl-8 transition-all whitespace-nowrap ${
                isSecondToLast ? "border-r border-[var(--border-color)]/60" : ""
              } ${
                isActive
                  ? "border-b-[var(--color-accent)] text-[var(--color-accent)]"
                  : "border-b-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-b-[var(--color-accent)]/50"
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="border-l border-[var(--border-color)]/60 pl-2 pr-2 ml-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
