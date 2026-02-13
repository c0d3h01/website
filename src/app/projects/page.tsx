import type { Metadata } from "next"
import ProjectList from "@/components/projects/ProjectList"
import PageShell from "@/layout/PageShell"
import { projects } from "@/data"

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of software projects",
}

const ProjectsPage = () => {
  return (
    <PageShell title="Projects">
      <ProjectList items={projects} />
    </PageShell>
  )
}

export default ProjectsPage
