"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
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
      <motion.div layout className="flex flex-col gap-3.5 md:gap-2.5">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleProjects.map((project, index) => (
            <AnimatedReveal
              key={project.id}
              layout="position"
              delay={index * 0.07}
              exitDelay={index * 0.03}
              offsetY={16}
            >
              <ProjectCard
                title={project.title}
                description={project.content}
                skills={project.skill}
                liveUrl={project.url || ""}
                githubUrl={project.github || ""}
                previewVideo={project.preview || ""}
              />
            </AnimatedReveal>
          ))}
        </AnimatePresence>
      </motion.div>

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
