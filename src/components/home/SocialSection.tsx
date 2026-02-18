import SectionHeading from "@/components/ui/SectionHeading"
import Tooltip from "@/components/ui/Tooltip"
import { footerSocialLinks } from "@/data"

const SocialSection = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <SectionHeading title="Social" />
      <div className="flex flex-wrap items-center gap-2.5">
        {footerSocialLinks.map((link) => (
          <Tooltip key={link.id} text={link.name}>
            <a
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
            >
              <link.icon />
              {link.name}
            </a>
          </Tooltip>
        ))}
      </div>
    </section>
  )
}

export default SocialSection
