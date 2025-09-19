import React from "react";
import { H3Heading } from "../H3Heading";
import { Project } from "@/Data/data";
import Description from "../Description";
import { ArrowUpRight } from "lucide-react";
import LivePing from "../ui/LivePing";

interface ProjectTileProps {
  project: Project;
}

export default function ProjectTile({ project }: ProjectTileProps) {
  return (
    <a
      className="group relative"
      key={project.id}
      href={project.liveLink ? project.liveLink : project.githubLink}
      target="_blank"
    >
      <div className="flex flex-col">
        <H3Heading className="flex items-center gap-2">
          {project.title} {project.title == "Voxer" && <LivePing />}
        </H3Heading>
        <Description>{project.description}</Description>
      </div>
      <span className="absolute top-0 right-0 text-blue-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight />
      </span>
    </a>
  );
}
