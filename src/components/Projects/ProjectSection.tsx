import { projectsData } from "@/Data/data";
import React from "react";
import ProjectTile from "./ProjectTile";
import { H2Heading } from "../H2Heading";
import {Link} from "next-view-transitions";

import {  ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <div className="space-y-5">
      <H2Heading>projects</H2Heading>
      <div className="flex flex-col gap-5">
        {projectsData.slice(0, 2).map((project,index) => (
          <ProjectTile key={index} project={project} />
        ))}
      </div>
      <Link href="/projects" className="flex items-center text-base font-semibold text-blue-200 border-b border-blue-100/30 border-dashed w-max leading-none hover:text-blue-500 hover:border-blue-500 duration-300 transition-colors">
        View more projects <ArrowUpRight />
      </Link>
    </div>
  );
}
