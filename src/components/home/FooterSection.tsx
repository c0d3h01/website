import { FaKey } from "react-icons/fa6"
import SupportCopyButton from "@/components/ui/SupportCopyButton"
import { gpgFingerprint } from "@/data"

const FooterSection = () => {
  const fingerprintLabel = "GPG fingerprint"

  return (
    <footer className="mb-16 border-x border-(--gb-border) px-[clamp(0.7rem,1.35vw,1rem)] md:mb-12">
      <div className="my-6 border-t border-(--gb-border)" />
      <div className="flex flex-col gap-2 pr-0.5 text-sm">
        <p className="text-(--gb-fg2)">GPG Fingerprint</p>
        <div className="flex flex-wrap items-center gap-2">
          <SupportCopyButton
            label={fingerprintLabel}
            value={gpgFingerprint}
            ariaLabel={`Copy ${fingerprintLabel}`}
            buttonClassName="inline-flex max-w-full cursor-pointer items-center gap-1.5 rounded-md border border-(--gb-border) bg-(--gb-surface) px-2 py-1"
            displayLabel={
              <code className="font-mono text-[0.83rem] tracking-wide text-(--gb-fg0)">
                {gpgFingerprint}
              </code>
            }
          >
            <FaKey className="shrink-0 text-(--gb-fg2)" />
          </SupportCopyButton>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
