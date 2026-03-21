import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import SupportCopyButton from "@/components/ui/SupportCopyButton";
import { supportMethods, supportText } from "@/data/social";

const SupportSection = () => {
	return (
		<section className="flex flex-col gap-2">
			<SectionHeading title="Support Me" />
			<div className="section-copy flex flex-col gap-2.5">
				<p>{supportText}</p>
				<div className="flex flex-wrap items-center gap-2">
					{supportMethods.map((method) => {
						const Icon = method.icon;

						if (method.type === "link") {
							return (
								<ButtonLink key={method.id} href={method.href}>
									<Icon />
									{method.label}
								</ButtonLink>
							);
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
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default SupportSection;
