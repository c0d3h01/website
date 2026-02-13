"use client"

import dynamic from "next/dynamic"
import type { ProjectCardProps } from "@/components/projects/ProjectCard"

// Wrapped as client-only to avoid occasional dev-time hydration drift during fast refresh.
const ProjectCardClientOnly = dynamic<ProjectCardProps>(
  () => import("@/components/projects/ProjectCard"),
  {
    ssr: false,
  },
)

const ProjectCardNoSSR = (props: ProjectCardProps) => (
  <ProjectCardClientOnly {...props} />
)

export default ProjectCardNoSSR
