import { currentProject } from "@/components/Projects/CurrentProject";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Star } from "@/components/Star";
import { HyperText } from "@/components/ui/HyperText";
import { projectsData } from "@/Data/data";

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
