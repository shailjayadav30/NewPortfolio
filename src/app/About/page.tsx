"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2, RxCaretDown, RxCaretRight } from "react-icons/rx";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openMenus, setOpenMenus] = useState({
    personal: true,
    contacts: true,
  });

  const toggleMenu = (menu: "personal" | "contacts") => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  const sectionContent: Record<string, string> = {
    bio: `/**
 * Bio
 * const developer = {
 *   name: "Shailja yadav",
 *   role: "Full Stack Developer",
 *   code: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
 *   quote: "Code is like humor. When you have to explain it, it’s bad."
 * }
 */
`,

    education: `/**
 * Education
 * - School: Nirmala Convent Inter College
 * - University: Lucknow University (2022 - 2027)
 * Bachelor’s Degree in Computer Science
 * Master's Degree in Computer Science
 */`,

    interests: `/**
 * Interests
 * - Web Development
 * - Music & Travel
 */`,
  };
  const handleSectionClick = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };
  return (
    <div className="flex h-full">
      {/* Left vertical bar */}
      <div className="h-full w-8 border-r-opacity-10 border-r-2 border-[#646d7d]/40 flex justify-center pt-4">
        <FaBars className="text-gray-400 hover:text-white cursor-pointer" />
      </div>

      {/* Sidebar */}
      <div className="border-r-opacity-10 border-r-2 border-[#646d7d]/40 w-[11.91rem] flex flex-col pt-2.5">
        {/* Personal Info Section */}
        <div className="flex flex-col">
          <div
            className="flex items-center pb-2.5 gap-1 border-b-2 border-[#646d7d]/40 px-4 text-sm font-semibold cursor-pointer hover:text-white"
            onClick={() => toggleMenu("personal")}
          >
            {openMenus.personal ? (
              <RxCaretDown className="text-gray-400" />
            ) : (
              <RxCaretRight className="text-gray-400" />
            )}
            personal-info
          </div>

          {openMenus.personal && (
            <div className="flex flex-col px-6 mt-2 space-y-1 text-sm">
              <div
                className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white"
                onClick={() => handleSectionClick("bio")}
              >
                {activeSection === "bio" ? (
                  <RxCaretDown className="text-gray-400" />
                ) : (
                  <RxCaretRight className="text-gray-400" />
                )}
                <span
                  className={`${activeSection === "bio" ? "text-white" : ""}`}
                >
                  bio
                </span>
              </div>
              {/* education */}
              <div
                className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white"
                onClick={() => handleSectionClick("education")}
              >
                {activeSection === "education" ? (
                  <RxCaretDown className="text-gray-400" />
                ) : (
                  <RxCaretRight className="text-gray-400" />
                )}
                <span
                  className={`${
                    activeSection === "education" ? "text-white" : ""
                  }`}
                >
                  education
                </span>
              </div>
              {/* interest */}
              <div
                className="flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white"
                onClick={() => handleSectionClick("interests")}
              >
                {activeSection === "interests" ? (
                  <RxCaretDown className="text-gray-400" />
                ) : (
                  <RxCaretRight className="text-gray-400" />
                )}
                <span
                  className={`${
                    activeSection === "interests" ? "text-white" : ""
                  }`}
                >
                  interests
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Contacts Section */}
        <div className="flex flex-col justify-center mt-1 ">
          <div
            className="flex items-center gap-1 border-b-2 border-[#646d7d]/40 px-4 text-sm font-semibold pb-2 pt-2 cursor-pointer hover:text-white"
            onClick={() => toggleMenu("contacts")}
          >
            {openMenus.contacts ? (
              <RxCaretDown className="text-gray-400" />
            ) : (
              <RxCaretRight className="text-gray-400" />
            )}
            contacts
          </div>

          {openMenus.contacts && (
            <div className="flex flex-col px-6 mt-2 space-y-1 text-sm">
              <Link href="mailto:shailjayadav7275@gmail.com" className="hover:text-white text-gray-400">
                email
              </Link>
              <Link href="tel:+7275967453" className="hover:text-white text-gray-400">
                number
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {activeSection && (
          <div className="flex border-b border-[#646d7d]/40 text-sm">
            <div className="py-2.5 cursor-pointer border-r border-[#646d7d]/40 text-gray-400 hover:text-white flex gap-2 items-center px-3">
              <h1>{activeSection}</h1>
              <RxCross2
                className="text-gray-400 text-sm cursor-pointer hover:text-white"
                onClick={() => setActiveSection(null)}
              />
            </div>
          </div>
        )}

        {/* Content area */}
        <div className="flex flex-1">
          {/* Left code block */}
          {activeSection && (
            <div className="flex-1 px-6 py-6 text-sm border-r border-[#646d7d]/40">
              <pre className="whitespace-pre-wrap">
                {sectionContent[activeSection]}
              </pre>
            </div>
          )}

          {/* Right code snippet section */}
          {/* <div className="w-1/3 px-6 py-6 text-xs text-gray-400">
            <div className="mb-4 font-semibold text-white">
              Code snippet showcase:
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-gray-500 mb-1">@username · 5 months ago</div>
                <pre className="bg-[#161b22] p-3 rounded-md overflow-x-auto text-[11px]">
                  {`function initializeModelChunk<T>(chunk: T): T {
  const value = parseModel(chunk);  
  return value;
}`}
                </pre>
              </div>
              <div>
                <div className="text-gray-500 mb-1">@username · 9 months ago</div>
                <pre className="bg-[#161b22] p-3 rounded-md overflow-x-auto text-[11px]">
                  {`export function parseModelTuple(response: Response): any {
  const tuple = [1, 2, 3];
  return tuple;
}`}
                </pre>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
