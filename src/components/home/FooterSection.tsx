import { FaKey } from "react-icons/fa6";
import SupportCopyButton from "@/components/ui/SupportCopyButton";
import { gpgFingerprint } from "@/data";

const FooterSection = () => {
	const fingerprintLabel = "GPG fingerprint";

	return (
		<footer className="mb-16 md:mb-12">
			<div className="my-6 border-t border-(--gb-border)" />
			<div className="flex flex-col gap-2 pr-0.5 text-sm">
				<p className="text-(--gb-fg2)">GPG Fingerprint</p>
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
		</footer>
	);
};

export default FooterSection;
