import React from "react";
import { HyperText } from "../ui/HyperText";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/Data/data";
import { Star } from "../Star";
import { currentProject } from "./CurrentProject";

export default function ProjectPage() {
  return (
    <div className="max-w-3xl mx-auto min-h-screen">
      <div className="flex text-4xl font-semibold items-center gap-2">
        <Star />
        <HyperText>projects</HyperText>
      </div>
      <div className="md:mt-6 mt-4 space-y-10">
        {currentProject && <ProjectCard {...currentProject} />}
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
