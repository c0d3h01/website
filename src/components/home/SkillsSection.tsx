import { skills } from "@/data"
import SectionHeading from "@/components/ui/SectionHeading"

const SkillsSection = () => {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeading title="Skills & Tools" />
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span key={skill.id} className="skills-card">
            <skill.icon />
            {skill.text}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
