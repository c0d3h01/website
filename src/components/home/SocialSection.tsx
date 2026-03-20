import ButtonLink from "@/components/ui/ButtonLink";
import { footerSocialLinks } from "@/data";

const SocialSection = () => {
	return (
		<section className="flex flex-col gap-2.5">
			<div className="flex flex-wrap items-center gap-2.5">
				{footerSocialLinks.map((link) => (
					<ButtonLink key={link.id} href={link.href}>
						<link.icon />
						{link.name}
					</ButtonLink>
				))}
			</div>
		</section>
	);
};

export default SocialSection;
