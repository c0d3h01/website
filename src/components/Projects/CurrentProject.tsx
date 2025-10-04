import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";
import Description from "../Description";
import { Project } from "@/Data/data";
import LivePing from "../ui/LivePing";
import UserCount from "./UserCount";

export const currentProject: Project = {
  id: 1,
  // users: 127,
  title: "Obfussor",
  description: "A cross-platform obfuscator for C and C++ code.",
  githubLink: "https://github.com/matrixbytes/Obfussor",
  technologies: ["Rust", "Tauri", "Angular"],
  keyFeatures: [
    "Cross-platform support for obfuscating C and C++ code",
    "Built with Tauri for a modern desktop application experience",
    "Rust-powered backend for performance and reliability",
    "Angular-based user interface for intuitive code obfuscation",
    "Open-source with MIT License for community collaboration",
  ],
};

export function CurrentProject() {
  return (
    <div className="projects mt-6 space-y-5">
      <H2Heading>Currently working on</H2Heading>
      <div className="flex flex-col group">
        <H3Heading>
          <span className="font-semibold md:text-[16px] text-base w-full">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <a
                  target="_blank"
                  href={currentProject.liveLink || currentProject.githubLink}
                  className="hover:text-blue-100 transition-colors"
                >
                  {currentProject.title}
                </a>
                <LivePing />
              </div>
              {currentProject.users && (
                <UserCount count={currentProject.users} />
              )}
            </div>
            <span className="h-10 w-10 bg-green-400 rounded-full" />
          </span>
        </H3Heading>
        <Description>{currentProject.description}</Description>
      </div>
    </div>
  );
}
