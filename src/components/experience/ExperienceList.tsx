import type { Experience } from "@/data"

interface ExperienceListProps {
  items: Experience[]
  headingTag?: "h2" | "h3"
}

const ExperienceList = ({ items, headingTag = "h3" }: ExperienceListProps) => {
  const HeadingTag = headingTag

  return (
    <div className="section-copy flex flex-col gap-2.5">
      {items.map((experience) => (
        <article
          key={experience.id}
          className="rounded-md border border-(--gb-border) bg-[rgba(12,12,12,0.88)] p-3"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <HeadingTag className="text-[1.02rem] font-semibold text-(--gb-fg0)">
              {experience.role} · {experience.company}
            </HeadingTag>
            <p className="text-sm text-(--gb-fg2)">{experience.duration}</p>
          </div>
          <p className="text-sm text-(--gb-fg2)">{experience.location}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] text-(--gb-fg1)">
            {experience.highlights.map((highlight, index) => (
              <li key={`${experience.id}-${index}`}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default ExperienceList
