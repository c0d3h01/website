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
  title: "Go Installer",
  description:
    "A quick Go installer written in Rust. Published and downloaded over 100+ times on crates.io.",
  githubLink: "https://github.com/c0d3h01/go-installer",
  liveLink: "https://crates.io/crates/go-installer",
  keyFeatures: [
    "Quick and easy installation of the Go programming language",
    "Written in Rust for performance and safety",
    "Command-line interface for user-friendly operation",
    "MIT-licensed and open source",
  ],

  technologies: ["Rust", "CLI", "MIT License", "Crates.io"],
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
