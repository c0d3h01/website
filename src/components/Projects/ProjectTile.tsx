import Description from "@/components/Description";
import { H3Heading } from "@/components/H3Heading";
import LivePing from "@/components/ui/LivePing";
import { Project } from "@/Data/data";
import { ArrowUpRight } from "lucide-react";

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
      <span className="absolute top-0 right-0 text-orange-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight />
      </span>
    </a>
  );
}
