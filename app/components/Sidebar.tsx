"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "../data";

const navItems = [
  {
    label: "About",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Experience",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Projects",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  },
  {
    label: "Skills",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    label: "Contact",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("About");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.label.toLowerCase());
        if (!el) return { id: item.label, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.label, top: rect.top };
      });

      // Check if scrolled to the bottom
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      if (isAtBottom) {
        setActiveSection("Contact");
        return;
      }

      const current = sections.reduce(
        (closest, section) => {
          if (section.top <= 150 && section.top > closest.top) return section;
          return closest;
        },
        { id: "About", top: -Infinity },
      );

      setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync document title and URL hash with active section
  useEffect(() => {
    document.title = `${activeSection} | ${personalInfo.name}`;
    window.history.replaceState(null, "", `#${activeSection.toLowerCase()}`);
  }, [activeSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border-subtle animate-fade-in-up delay-100">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-accent/20">
              <Image
                src="/logo.png"
                alt="Adla Fayyaz"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-text-primary">
              Adla Fayyaz
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-secondary hover:text-text-primary transition-colors p-1"
            aria-label="Toggle navigation"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="px-5 pb-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.label)}
                className={`flex items-center gap-3 text-left text-sm py-2.5 px-3 rounded-xl transition-all duration-200 ${
                  activeSection === item.label
                    ? "text-accent bg-accent/5"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={item.icon} />
                </svg>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar — Seamless Column Layout */}
      <aside className="hidden lg:flex flex-col justify-between sticky top-24 h-[calc(100vh-192px)] w-[280px] shrink-0 z-40">
        <div>
          {/* Identity */}
          <div className="mb-12">
            {/* Profile Image with glow */}
            <div className="relative w-[88px] h-[88px] mb-6">
              <div className="absolute -inset-1 rounded-full bg-linear-to-br from-accent/30 via-[#818cf8]/20 to-[#a78bfa]/30 blur-sm" />
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-accent/15 bg-background">
                <Image
                  src="/logo.png"
                  alt="Adla Fayyaz"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Online indicator with tooltip */}
              <div className="absolute bottom-1 right-1 group cursor-help z-50">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 ring-[3px] ring-background" />
                <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 px-2.5 py-1.5 bg-surface border border-border-subtle rounded-lg text-[11px] font-medium text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-sm">
                  Available for opportunities
                </div>
              </div>
            </div>

            {/* Name & role */}
            <h1 className="text-2xl font-bold text-text-primary tracking-tight mb-1.5 align-middle">
              Adla Fayyaz
            </h1>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-3">
              {personalInfo.title}
            </p>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/40 border border-border-subtle w-max mb-5 hover:border-accent/40 transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[12px] font-medium text-text-secondary tracking-wide">
                Tangerang, Indonesia
              </span>
            </div>

            <p className="text-[13px] text-text-muted/70 italic leading-relaxed pl-3 border-l-2 border-accent/20">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Navigation - Larger font per request */}
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.label)}
                className={`group flex items-center gap-3.5 text-left py-3.5 px-5 rounded-xl transition-all duration-300 ${
                  activeSection === item.label
                    ? "text-accent bg-accent/10 shadow-sm shadow-accent/5"
                    : "text-text-muted hover:text-text-secondary hover:bg-white/5"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-colors duration-300 ${
                    activeSection === item.label
                      ? "text-accent"
                      : "text-text-muted/60 group-hover:text-text-secondary"
                  }`}
                >
                  <path d={item.icon} />
                </svg>
                <span className="text-[16px] font-semibold tracking-wide">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="mt-12 text-[11px] text-text-muted/40 tracking-wide">
          <p>© 2026 adlafayyaz</p>
          <p className="mt-1">Designed & built with passion</p>
        </div>
      </aside>
    </>
  );
}
