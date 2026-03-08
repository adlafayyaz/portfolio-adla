"use client";

import { experiences } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref as any}
      className={`py-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
        Experience
      </h2>
      <p className="text-sm text-text-muted mb-10">
        Where I've been and what I've done.
      </p>

      <div className="relative">
        {/* Vertical connector line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-linear-to-b from-accent/20 via-border to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 group">
              {/* Dot */}
              <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-border bg-background group-hover:border-accent/40 transition-colors duration-300">
                <div className="absolute inset-[3px] rounded-full bg-text-muted/30 group-hover:bg-accent/50 transition-colors duration-300" />
              </div>

              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-xs text-text-muted font-medium tracking-wide">
                  {exp.year}
                </span>
                <h3 className="text-lg font-medium text-text-primary mt-1 group-hover:text-accent/90 transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-sm text-accent/60 mb-2">{exp.company}</p>
                <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
