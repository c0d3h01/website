import { supportMethods, supportText } from "@/data"
import SupportCopyButton from "@/components/home/SupportCopyButton"
import SectionHeading from "@/components/ui/SectionHeading"
import Tooltip from "@/components/ui/Tooltip"

const SupportSection = () => {
  const renderSupportAction = (method: (typeof supportMethods)[number]) => {
    const Icon = method.icon

    if (method.type === "link") {
      return (
        <Tooltip key={method.id} text={method.label}>
          <a
            className="btn"
            target="_blank"
            rel="noreferrer"
            href={method.href}
          >
            <Icon className={method.iconClassName} />
            {method.label}
          </a>
        </Tooltip>
      )
    }

    return (
      <Tooltip key={method.id} text={method.label}>
        <SupportCopyButton label={method.label} value={method.value}>
          <Icon className={method.iconClassName} />
        </SupportCopyButton>
      </Tooltip>
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
