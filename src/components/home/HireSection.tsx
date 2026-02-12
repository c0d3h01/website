"use client"

import { PiSuitcaseSimpleBold } from "react-icons/pi"
import { emailLink, hireText } from "@/data"
import SectionHeading from "@/components/ui/SectionHeading"

const HireSection = () => {
  return (
    <section className="flex flex-col gap-0.5">
      <SectionHeading title="Hire Me" />
      <div className="flex flex-col gap-2">
        <p>{hireText}</p>
        <div>
          <a className="btn" target="_blank" rel="noreferrer" href={emailLink}>
            <PiSuitcaseSimpleBold />
            Hire Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default HireSection
