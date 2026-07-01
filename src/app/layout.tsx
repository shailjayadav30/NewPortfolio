import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { UIProvider } from "@/context/UIContext";
import CommandPalette from "@/components/CommandPalette";
import KeyboardProvider from "@/components/KeyboardProvider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shailja Yadav | Full Stack Developer",
  description:
    "Portfolio of Shailja Yadav — Full Stack Developer specializing in React, Next.js, and Node.js",
};

/* Synchronously stamps data-theme on <html> before first paint to prevent
   flash-of-wrong-theme. Works with any theme value stored in localStorage. */
const themeScript = `(function(){
  var t = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistMono.variable} bg-[var(--bg-primary)] h-screen w-screen overflow-hidden`}
      >
        <ThemeProvider>
          <UIProvider>
            <KeyboardProvider>
              <div className="h-full w-full p-2">
                <main className="flex flex-col h-full w-full text-[var(--text-primary)] bg-[var(--bg-editor)] border border-[var(--border-color)]/60 rounded-lg overflow-hidden">
                  <Header />
                  <div className="flex-1 min-h-0 overflow-hidden">
                    {children}
                  </div>
                  <Footer />
                </main>
              </div>
              {/* Global overlays */}
              <CommandPalette />
            </KeyboardProvider>
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
