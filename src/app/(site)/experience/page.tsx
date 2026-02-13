import type { Metadata } from "next"
import { defaultOgImage, experiences } from "@/data"
import ExperienceList from "@/components/experience/ExperienceList"
import PageShell from "@/layout/PageShell"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional and freelance experience",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Experience",
    description: "Professional and freelance experience",
    url: "/experience",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience",
    description: "Professional and freelance experience",
    images: [defaultOgImage],
  },
}
export const dynamic = "force-static"

const ExperiencePage = () => {
  return (
    <PageShell title="Experience">
      <ExperienceList items={experiences} headingTag="h2" />
    </PageShell>
  )
}

export default ExperiencePage
