import Link from "next/link"
import type { Metadata } from "next"
import ProjectCard from "@/components/projects/ProjectCard"
import SectionHeading from "@/components/ui/SectionHeading"
import MainScreen from "@/layout/MainScreen"
import Screen from "@/layout/Screen"
import { projects } from "@/data"

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of software projects",
}

const ProjectsPage = () => {
  return (
    <MainScreen>
      <Screen>
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <SectionHeading title="Projects" />
            <Link className="btn text-sm" href="/">
              Back Home
            </Link>
          </div>

          <div className="flex flex-col gap-3.5 md:gap-2.5">
            {projects.map((project) => (
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
        </section>
      </Screen>
    </MainScreen>
  )
}

export default ProjectsPage
