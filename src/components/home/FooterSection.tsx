import { FaKey } from "react-icons/fa6"
import SupportCopyButton from "@/components/ui/SupportCopyButton"
import { gpgFingerprint } from "@/data"

const FooterSection = () => {
  return (
    <footer className="mb-16 border-x border-(--gb-border) px-[clamp(0.7rem,1.35vw,1rem)] md:mb-12">
      <div className="my-6 border-t border-(--gb-border)" />
      <div className="flex flex-col gap-2 pr-0.5 text-sm">
        <p className="text-(--gb-fg2)">GPG Fingerprint</p>
        <div className="flex flex-wrap items-center gap-2">
          <code className="rounded-md border border-(--gb-border) bg-(--gb-surface) px-2 py-1 font-mono text-[0.83rem] tracking-wide text-(--gb-fg0)">
            {gpgFingerprint}
          </code>
          <SupportCopyButton label="Copy GPG" value={gpgFingerprint}>
            <FaKey />
          </SupportCopyButton>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
