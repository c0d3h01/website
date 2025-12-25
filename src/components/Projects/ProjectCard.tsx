import { Project } from "@/Data/data";
import Description from "@/components/Description";
import UserCount from "@/components/Projects/UserCount";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard(project: Project) {
  return (
    <div className="border space-y-3 group border-muted-foreground/40 md:p-6 p-4 hover:border-orange-500 transition-colors duration-300">
      <a
        href={project.liveLink ? project.liveLink : project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between"
      >
        <h2 className="md:text-2xl text-xl flex items-center gap-3 font-semibold group-hover:text-orange-500 transition-colors duration-300">
          {project.title}
          {project.users && <UserCount count={project.users} />}
        </h2>
        <ArrowUpRight className="w-6 h-6 group-hover:text-orange-500 rotate-45 group-hover:rotate-0 transition-all duration-300" />
      </a>
      <Description>{project.description}</Description>

      <div>
        <h4 className="md:text-base text-sm font-medium text-white/80">
          Key Features
        </h4>
        <ul className="mt-2 list-disc list-inside text-muted-foreground">
          {project.keyFeatures?.map((feat, index) => (
            <li className="list-decimal md:text-base text-sm " key={index}>
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
