"use client";

import { useState } from "react";
import { personalInfo } from "../data";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-6">
      {/* Greeting */}
      <div className="mb-8 animate-fade-in-up delay-100">
        <p className="text-sm uppercase tracking-[0.2em] text-text-muted mb-3">
          HI,
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] flex items-center gap-3">
          <span className="text-text-primary">I'm </span>
          <div className="relative inline-block">
            <span className="relative z-10 inline-block animate-text-reveal bg-clip-text text-transparent bg-linear-to-r from-accent via-white to-accent">
              adlafayyaz
            </span>

            {/* Animated underline that draws itself on load */}
            <span className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-linear-to-r from-accent to-[#818cf8] animate-expand-line" />
          </div>
        </h2>
        <p className="mt-4 text-base text-text-muted">{personalInfo.title}</p>
      </div>

      {/* Intro */}
      <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-8 animate-fade-in-up delay-200">
        {personalInfo.introText}
      </p>

      {/* Read More */}
      <div className="relative animate-fade-in-up delay-300">
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6 pb-6">
            <div className="pl-4 border-l-2 border-accent/20">
              <h3 className="text-sm font-medium text-accent/70 uppercase tracking-wider mb-2">
                Background
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {personalInfo.expandedText.background}
              </p>
            </div>

            <div className="pl-4 border-l-2 border-accent/20">
              <h3 className="text-sm font-medium text-accent/70 uppercase tracking-wider mb-2">
                Interests
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {personalInfo.expandedText.interests}
              </p>
            </div>

            <div className="pl-4 border-l-2 border-accent/20">
              <h3 className="text-sm font-medium text-accent/70 uppercase tracking-wider mb-2">
                My Journey
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {personalInfo.expandedText.journey}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="group flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors duration-300"
        >
          <span className="h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
          {expanded ? "Read less" : "Read more about me"}
        </button>
      </div>
    </section>
  );
}
