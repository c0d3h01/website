import CryptoDonationSelector from "@/components/home/CryptoDonationSelector";
import ButtonLink from "@/components/ui/ButtonLink";
import MotionSection from "@/components/ui/MotionSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { supportMethods, supportText } from "@/data/social";

const SupportSection = () => {
	return (
		<MotionSection style={{ contain: "none", contentVisibility: "visible" }}>
			<section className="section-copy relative flex flex-col gap-2 overflow-visible">
				<SectionHeading title="Support Me" />
				<p>{supportText}</p>
				<div className="flex flex-wrap items-center gap-2">
					{supportMethods.map((method) => {
						const Icon = method.icon;

						return (
							<ButtonLink key={method.id} href={method.href}>
								<Icon />
								{method.label}
							</ButtonLink>
						);
					})}
					<CryptoDonationSelector />
				</div>
			</section>
		</MotionSection>
	);
};

export default SupportSection;
