"use client";

import React from "react";
import { skillGroups } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

import {
  SiJavascript,
  SiDart,
  SiKotlin,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiAndroidstudio,
  SiAndroid,
  SiFlutter,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiGithub,
} from "react-icons/si";

const skillIcons: Record<string, React.ReactNode> = {
  JavaScript: <SiJavascript className="w-5 h-5" color="#F7DF1E" />,
  Dart: <SiDart className="w-5 h-5" color="#0175C2" />,
  Kotlin: <SiKotlin className="w-5 h-5" color="#7F52FF" />,
  HTML: <SiHtml5 className="w-5 h-5" color="#E34F26" />,
  CSS: <SiCss className="w-5 h-5" color="#1572B6" />,
  React: <SiReact className="w-5 h-5" color="#61DAFB" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5" color="#38B2AC" />,
  "Android Studio": <SiAndroidstudio className="w-5 h-5" color="#3DDC84" />,
  "Android (Kotlin)": <SiAndroid className="w-5 h-5" color="#3DDC84" />,
  Flutter: <SiFlutter className="w-5 h-5" color="#02569B" />,
  MySQL: <SiMysql className="w-5 h-5" color="#4479A1" />,
  Firebase: <SiFirebase className="w-5 h-5" color="#FFCA28" />,
  Git: <SiGit className="w-5 h-5" color="#F05032" />,
  Figma: <SiFigma className="w-5 h-5" color="#F24E1E" />,
  GitHub: <SiGithub className="w-5 h-5" color="#FFFFFF" />,
};

function DefaultIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref as any}
      className={`py-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
        Skills
      </h2>
      <p className="text-sm text-text-muted mb-10">
        Technologies and tools I work with.
      </p>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold text-text-muted/60 uppercase tracking-[0.15em] mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface/40 border border-border-subtle hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-text-muted/60 group-hover:text-accent transition-colors duration-300">
                    {skillIcons[skill] || <DefaultIcon />}
                  </span>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
