import ButtonLink from "@/components/ui/ButtonLink";
import CryptoDonationSelectorClient from "@/components/ui/CryptoDonationSelectorClient";
import SectionHeading from "@/components/ui/SectionHeading";
import { supportMethods, supportText } from "@/content";

const Support = () => {
	return (
		<section className="section-static section-copy relative flex flex-col gap-2 overflow-visible">
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
				<CryptoDonationSelectorClient />
			</div>
		</section>
	);
};

export default Support;
