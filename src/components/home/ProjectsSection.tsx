"use client"

import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import { projects } from "@/data"
import ProjectCard from "@/components/projects/ProjectCard"
import AnimatedReveal from "@/components/ui/AnimatedReveal"
import SectionHeading from "@/components/ui/SectionHeading"

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const shouldShowToggle = projects.length > 2
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2)

  return (
    <section id="projects" className="flex flex-col gap-3">
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-3.5 md:gap-2.5">
        {visibleProjects.map((project, index) => (
          <AnimatedReveal key={project.id} delay={index * 0.075}>
            <ProjectCard
              title={project.title}
              image={project.img}
              description={project.content}
              isActive={project.status}
              skills={project.skill}
              liveUrl={project.url || ""}
              githubUrl={project.github || ""}
              previewVideo={project.preview || ""}
            />
          </AnimatedReveal>
        ))}
      </div>

      {shouldShowToggle && (
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
      )}
    </section>
  )
}

export default ProjectsSection
