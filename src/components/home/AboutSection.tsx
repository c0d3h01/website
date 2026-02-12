"use client"

import { userAbout } from "@/data"
import SectionHeading from "@/components/ui/SectionHeading"

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-0.5">
      <SectionHeading title="About Me" />
      <div className="flex flex-col gap-2">
        <div
          dangerouslySetInnerHTML={{
            __html: userAbout,
          }}
          className="flex flex-col gap-1"
        />
      </div>
    </section>
  )
}

export default AboutSection
