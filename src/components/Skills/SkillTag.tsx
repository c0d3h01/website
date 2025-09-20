"use client";

import { useMemo } from "react";

const highlightedSkills = [
  "c++",
  "nix",
  "flakes",
  "rust",
  "shell",
  "typescript",
  "tailwind css",
  "react",
  "node.js",
  "next.js",
  "postgresql",
  "mongodb",
  "docker",
  "javascript",
  "git",
  "github",
  "github actions",
  "bash",
  "linux",
  "vercel",
];

export function SkillTag({ skill }: { skill: string }) {
  const isHighlighted = useMemo(
    () => highlightedSkills.includes(skill.toLowerCase()),
    [skill]
  );

  return (
    <span
      className={`
        md:text-sm text-xs 
        ${isHighlighted ? "text-blue-500" : "text-stone-300"}
        bg-stone-900 border hover:text-blue-500 
        transition-colors duration-300 border-stone-700 
        px-4 py-2 flex items-center justify-center select-none
      `}
      aria-label={`Skill: ${skill}`}
    >
      {skill.toLowerCase()}
    </span>
  );
}
