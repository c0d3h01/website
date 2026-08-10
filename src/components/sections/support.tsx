import ButtonLink from "@/components/ui/ButtonLink";
import CryptoDonationSelectorClient from "@/components/ui/CryptoDonationSelectorClient";
import SectionHeading from "@/components/ui/SectionHeading";
import { supportMethods, supportText } from "@/content";

const Support = () => {
	return (
		<section className="section-copy relative flex flex-col gap-3 overflow-visible pb-10">
			<SectionHeading title="Support Me" />
			<p className="text-(--fg-secondary)">{supportText}</p>
			<div className="flex flex-wrap items-center gap-2 mt-1">
				{supportMethods.map((method) => {
					const Icon = method.icon;
					return (
						<ButtonLink key={method.label} href={method.href}>
							<Icon className="size-4" />
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
