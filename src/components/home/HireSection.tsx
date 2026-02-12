"use client"

import { PiFilePdfBold, PiSuitcaseSimpleBold } from "react-icons/pi"
import { emailLink, hireText, resumeFilePath } from "@/data"
import SectionHeading from "@/components/ui/SectionHeading"

const HireSection = () => {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeading title="Hire Me" />
      <div className="section-copy flex flex-col gap-2.5">
        <p>{hireText}</p>
        <div className="flex flex-wrap items-center gap-2.5">
          <a className="btn" target="_blank" rel="noreferrer" href={emailLink}>
            <PiSuitcaseSimpleBold />
            Hire Me
          </a>
          <a className="btn" target="_blank" rel="noreferrer" href={resumeFilePath}>
            <PiFilePdfBold />
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default HireSection
