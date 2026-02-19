import ExperienceList from "@/components/experience/ExperienceList"
import SectionHeading from "@/components/ui/SectionHeading"
import ViewAllLink from "@/components/ui/ViewAllLink"
import { experiences } from "@/data"

const ExperienceSection = () => {
  const presentExperiences = experiences.filter((experience) =>
    /present/i.test(experience.duration),
  )

  const defaultExperiences =
    presentExperiences.length > 0 ? presentExperiences : experiences.slice(0, 1)

  const shouldShowViewAll = experiences.length > defaultExperiences.length

  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="Experience" />
      <ExperienceList items={defaultExperiences} />
      {shouldShowViewAll && <ViewAllLink href="/experience" />}
    </section>
  )
}

export default ExperienceSection
