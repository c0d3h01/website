import SectionHeading from "@/components/ui/SectionHeading"
import SupportCopyButton from "@/components/ui/SupportCopyButton"
import { supportMethods, supportText } from "@/data"

const SupportSection = () => {
  const renderSupportAction = (method: (typeof supportMethods)[number]) => {
    const Icon = method.icon

    if (method.type === "link") {
      return (
        <a
          key={method.id}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
          href={method.href}
        >
          <Icon />
          {method.label}
        </a>
      )
    }

    return (
      <SupportCopyButton
        key={method.id}
        label={method.label}
        value={method.value}
        mobileHref={method.mobileHref}
      >
        <Icon />
      </SupportCopyButton>
    )
  }

  return (
    <section className="flex flex-col gap-2">
      <SectionHeading title="Support Me" />
      <div className="section-copy flex flex-col gap-2.5">
        <p>{supportText}</p>
        <div className="flex flex-wrap items-center gap-2">
          {supportMethods.map(renderSupportAction)}
        </div>
      </div>
    </section>
  )
}

export default SupportSection
