import SectionHeading from "@/components/ui/SectionHeading"
import { userFooterLink } from "@/data"

const SocialSection = () => {
  return (
    <section className="flex flex-col gap-2.5">
      <SectionHeading title="Social" />
      <div className="flex flex-wrap items-center gap-2.5">
        {userFooterLink.map((link) => (
          <a
            key={link.id}
            className="btn"
            target="_blank"
            rel="noreferrer"
            href={link.link}
          >
            <link.icon className={link.iconClassName} />
            {link.name}
          </a>
        ))}
      </div>
    </section>
  )
}

export default SocialSection
