import SectionHeading from "@/components/ui/SectionHeading"
import { footerSocialLinks } from "@/data"

const SocialSection = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <SectionHeading title="Social" />
      <div className="flex flex-wrap items-center gap-2.5">
        {footerSocialLinks.map((link) => (
          <a
            key={link.id}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
          >
            <link.icon />
            {link.name}
          </a>
        ))}
      </div>
    </section>
  )
}

export default SocialSection
