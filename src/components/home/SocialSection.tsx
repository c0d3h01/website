import SectionHeading from "@/components/ui/SectionHeading"
import Tooltip from "@/components/ui/Tooltip"
import { userFooterLink } from "@/data"

const SocialSection = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <SectionHeading title="Social" />
      <div className="flex flex-wrap items-center gap-2.5">
        {userFooterLink.map((link) => (
          <Tooltip key={link.id} text={link.name}>
            <a className="btn" target="_blank" rel="noreferrer" href={link.link}>
              <link.icon className={link.iconClassName} />
              {link.name}
            </a>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}

export default SocialSection
