import toast from "react-hot-toast"
import { supportMethods, supportText } from "@/data"
import SectionHeading from "@/components/ui/SectionHeading"

const SupportSection = () => {
  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value)
    toast.success("Copied to clipboard")
  }

  return (
    <section className="flex flex-col gap-2">
      <SectionHeading title="Support Me" />
      <div className="section-copy flex flex-col gap-2.5">
        <p>{supportText}</p>
        <div className="flex flex-wrap items-center gap-2">
          {supportMethods.map((method) => {
            const Icon = method.icon

            if (method.type === "link") {
              return (
                <a
                  key={method.id}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                  href={method.href}
                >
                  <Icon className={method.iconClassName} />
                  {method.label}
                </a>
              )
            }

            return (
              <button
                key={method.id}
                type="button"
                className="btn"
                onClick={() => handleCopy(method.value)}
              >
                <Icon className={method.iconClassName} />
                {method.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SupportSection
