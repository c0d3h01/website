"use client"

import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import ProjectCard from "@/components/projects/ProjectCard"
import SectionHeading from "@/components/ui/SectionHeading"
import Tooltip from "@/components/ui/Tooltip"
import { projects } from "@/data"

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const shouldShowToggle = projects.length > 2
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2)

  return (
    <section id="projects" className="flex flex-col gap-3">
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-3.5 md:gap-2.5">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.content}
            skills={project.skill}
            liveUrl={project.url || ""}
            githubUrl={project.github || ""}
            previewVideo={project.preview || ""}
          />
        ))}
      </div>

      {shouldShowToggle && (
        <Tooltip text={showAllProjects ? "Show less" : "Show all"}>
          <button
            className="showMore-btn"
            onClick={() => setShowAllProjects((prev) => !prev)}
          >
            {showAllProjects ? (
              <span className="flex items-center justify-center gap-0.5">
                <span className="animate-pulse">
                  <MdKeyboardDoubleArrowUp />
                </span>
                Show less
              </span>
            ) : (
              <span className="flex items-center justify-center gap-0.5">
                <span className="animate-pulse">
                  <MdKeyboardDoubleArrowDown />
                </span>
                Show all
              </span>
            )}
          </button>
        </Tooltip>
      )}
    </section>
  )
}

export default ProjectsSection
