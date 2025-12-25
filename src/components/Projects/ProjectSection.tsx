import { H2Heading } from "@/components/H2Heading";
import ProjectTile from "@/components/Projects/ProjectTile";
import { projectsData } from "@/Data/data";
import { Link } from "next-view-transitions";

import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <div className="space-y-5">
      <H2Heading>projects</H2Heading>
      <div className="flex flex-col gap-5">
        {projectsData.slice(0, 2).map((project, index) => (
          <ProjectTile key={index} project={project} />
        ))}
      </div>
      <Link
        href="/projects"
        className="flex items-center text-base font-semibold text-orange-200 border-b border-orange-100/30 border-dashed w-max leading-none hover:text-orange-500 hover:border-orange-500 duration-300 transition-colors"
      >
        View more projects <ArrowUpRight />
      </Link>
    </div>
  );
}
