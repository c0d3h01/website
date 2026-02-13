import Link from "next/link"
import type { Metadata } from "next"
import SectionHeading from "@/components/ui/SectionHeading"
import MainScreen from "@/layout/MainScreen"
import Screen from "@/layout/Screen"
import { experiences } from "@/data"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional and freelance experience",
}

const ExperiencePage = () => {
  return (
    <MainScreen>
      <Screen>
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <SectionHeading title="Experience" />
            <Link className="btn text-sm" href="/">
              Back Home
            </Link>
          </div>

          <div className="section-copy flex flex-col gap-2.5">
            {experiences.map((experience) => (
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
        </section>
      </Screen>
    </MainScreen>
  )
}

export default ExperiencePage
