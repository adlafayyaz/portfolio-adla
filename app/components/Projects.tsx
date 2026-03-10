"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type ProjectCategory } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

const categories: ProjectCategory[] = [
  "UI/UX Design",
  "Mobile Development",
  "Web Development",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("UI/UX Design");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref as any}
      className={`py-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
        Projects
      </h2>
      <p className="text-sm text-text-muted mb-8">
        A selection of things I've built and designed.
      </p>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Gallery */}
      <div className="space-y-8">
        {projects[activeCategory].map((project, i) => (
          <article
            key={`${activeCategory}-${i}`}
            className="group relative rounded-2xl overflow-hidden bg-surface/30 border border-border-subtle hover:border-accent/10 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-surface-alt">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-medium text-text-primary mb-2 group-hover:text-accent/90 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-lg">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent/5 text-accent/70 border border-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {/* Figma — UI/UX projects */}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5zM12 2h3.5a3.5 3.5 0 110 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0zM5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" />
                    </svg>
                    Figma
                  </a>
                )}

                {/* Pitch Deck — UI/UX projects */}
                {project.pitchDeckUrl && (
                  <a
                    href={project.pitchDeckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M9 17H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v1M13 21h6a1 1 0 001-1v-8.5L15.5 7H13a1 1 0 00-1 1v12a1 1 0 001 1z" />
                      <path d="M15 7v4h4" />
                    </svg>
                    Pitch Deck
                  </a>
                )}

                {/* Code — Mobile & Web projects */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                    Code
                  </a>
                )}

                {/* Download App — Mobile projects */}
                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download App
                  </a>
                )}

                {/* Live — Web projects */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Site
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
