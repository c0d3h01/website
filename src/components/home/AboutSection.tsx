import SectionHeading from "@/components/ui/SectionHeading"
import { profile } from "@/data"

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeading title="About Me" />
      <div
        dangerouslySetInnerHTML={{
          __html: profile.aboutHtml,
        }}
        className="section-copy flex flex-col gap-2.5"
      />
    </section>
  )
}

export default AboutSection
