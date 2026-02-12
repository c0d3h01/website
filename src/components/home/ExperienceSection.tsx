"use client"

import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import SectionHeading from "@/components/ui/SectionHeading"
import { experiences } from "@/data"

const ExperienceSection = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false)

  const presentExperiences = experiences.filter((experience) =>
    /present/i.test(experience.duration)
  )

  const defaultExperiences =
    presentExperiences.length > 0 ? presentExperiences : experiences.slice(0, 1)

  const visibleExperiences = showAllExperiences ? experiences : defaultExperiences
  const shouldShowToggle = experiences.length > defaultExperiences.length

  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="Experience" />

      <div className="section-copy flex flex-col gap-2.5">
        {visibleExperiences.map((experience) => (
          <article
            key={experience.id}
            className="rounded-md border border-[var(--gb-border)] bg-[rgba(12,12,12,0.88)] p-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-[1.02rem] font-semibold text-[var(--gb-fg0)]">
                {experience.role} · {experience.company}
              </h3>
              <p className="text-sm text-[var(--gb-fg2)]">{experience.duration}</p>
            </div>
            <p className="text-sm text-[var(--gb-fg2)]">{experience.location}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] text-[var(--gb-fg1)]">
              {experience.highlights.map((highlight, index) => (
                <li key={`${experience.id}-${index}`}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {shouldShowToggle && (
        <button
          className="showMore-btn"
          onClick={() => setShowAllExperiences((prev) => !prev)}
        >
          {showAllExperiences ? (
            <span className="flex items-center justify-center gap-0.5">
              <span className="animate-pulse">
                <MdKeyboardDoubleArrowUp />
              </span>
              Show less
            </span>
          ) : (
            <span className="flex items-center justify-center gap-0.5">
              <span className="animate-pulse">
                <MdKeyboardDoubleArrowDown />
              </span>
              Show all
            </span>
          )}
        </button>
      )}
    </section>
  )
}

export default ExperienceSection
