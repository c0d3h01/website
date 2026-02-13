import type { Metadata } from "next"
import ExperienceList from "@/components/experience/ExperienceList"
import PageShell from "@/layout/PageShell"
import { experiences } from "@/data"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional and freelance experience",
}

const ExperiencePage = () => {
  return (
    <PageShell title="Experience">
      <ExperienceList items={experiences} headingTag="h2" />
    </PageShell>
  )
}

export default ExperiencePage
