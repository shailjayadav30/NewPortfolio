import Link from "next/link";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaSquareXTwitter />,
    href: "https://x.com/Shailja5911",
    label: "Twitter",
  },
  {
    icon: <TiSocialLinkedin />,
    href: "https://www.linkedin.com/in/shailja-yadav-643853252",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/shailjayadav30",
    label: "GitHub",
  },
];

const Footer = () => {
  return (
    <div className="border-t border-[var(--border-color)]/60 flex items-center justify-between bg-[var(--bg-sidebar)] flex-shrink-0">
      <span className="text-sm text-[var(--text-muted)] p-[5px] pr-10 pl-3">
        find me in:
      </span>

      <div className="flex items-center ml-auto">
        {socialLinks.map((item, idx) => {
          const isSecondToLast = idx === socialLinks.length - 2;

          return (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`p-2 border-l border-[var(--border-color)]/60 border-b-2 border-b-transparent text-[var(--text-muted)] hover:text-[var(--color-accent)] hover:border-b-[var(--color-accent)] pr-8 pl-8 transition-all ${
                isSecondToLast ? "border-r border-[var(--border-color)]/60" : ""
              }`}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
