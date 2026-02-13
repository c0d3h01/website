import ProjectList from "@/components/projects/ProjectList"
import SectionHeading from "@/components/ui/SectionHeading"
import ViewAllLink from "@/components/ui/ViewAllLink"
import { projects } from "@/data"

const ProjectsSection = () => {
  const shouldShowViewAll = projects.length > 2

  return (
    <section id="projects" className="flex flex-col gap-3">
      <SectionHeading title="Projects" />
      <ProjectList items={projects} limit={2} />
      {shouldShowViewAll && <ViewAllLink href="/projects" />}
    </section>
  )
}

export default ProjectsSection
