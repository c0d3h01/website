import Link from "next/link"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import ProjectCard from "@/components/projects/ProjectCard"
import SectionHeading from "@/components/ui/SectionHeading"
import Tooltip from "@/components/ui/Tooltip"
import { projects } from "@/data"

const ProjectsSection = () => {
  const shouldShowViewAll = projects.length > 2
  const visibleProjects = projects.slice(0, 2)

  return (
    <section id="projects" className="flex flex-col gap-3">
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-3.5 md:gap-2.5">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            status={project.status}
            description={project.content}
            skills={project.skill}
            liveUrl={project.url || ""}
            githubUrl={project.github || ""}
            previewVideo={project.preview || ""}
          />
        ))}
      </div>

      {shouldShowViewAll && (
        <Tooltip text="View All">
          <Link href="/projects" className="showMore-btn">
            <span className="flex items-center justify-center gap-0.5">
              <span className="animate-pulse">
                <MdKeyboardDoubleArrowDown />
              </span>
              View All
            </span>
          </Link>
        </Tooltip>
      )}
    </section>
  )
}

export default ProjectsSection
