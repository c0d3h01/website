import ButtonLink from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/data/social";

const SocialSection = () => {
	return (
		<section
			aria-label="Social links"
			className="flex w-full flex-wrap items-center justify-center gap-3 pt-1 md:w-auto md:justify-start"
		>
			{SocialLinks.map((link) => (
				<ButtonLink
					key={link.id}
					ariaLabel={link.name}
					href={link.href}
					className="social-link"
				>
					<link.icon className="social-link-icon" />
					<span className="social-link-tag">{link.name}</span>
				</ButtonLink>
			))}
		</section>
	);
};

export default SocialSection;
