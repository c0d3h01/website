"use client"

import { userAbout } from "@/data"
import SectionHeading from "@/components/ui/SectionHeading"

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeading title="About Me" />
      <div
        dangerouslySetInnerHTML={{
          __html: userAbout,
        }}
        className="section-copy flex flex-col gap-2.5"
      />
    </section>
  )
}

export default AboutSection
