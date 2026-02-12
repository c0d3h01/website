"use client"

import Link from "next/link"
import { PiFilePdfBold, PiSuitcaseSimpleBold } from "react-icons/pi"
import { emailLink, hireText, resumePreviewPath } from "@/data"
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
          <Link className="btn" href={resumePreviewPath}>
            <PiFilePdfBold />
            Resume
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HireSection
