import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import ButtonLink from "@/components/ui/ButtonLink";

type SocialLink = {
	name: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
};

const SocialLinks: SocialLink[] = [
	{ name: "Email", href: "mailto:harshalsawant.dev@gmail.com", icon: Mail },
	{ name: "GitHub", href: "https://github.com/c0d3h01", icon: FaGithub },
	{
		name: "X (Twitter)",
		href: "https://x.com/intent/follow?screen_name=haarshalsawant",
		icon: FaXTwitter,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/haarshalsawant",
		icon: FaLinkedinIn,
	},
];

const Social = () => {
	return (
		<section
			aria-label="Social links"
			className="flex w-full flex-wrap items-center justify-center gap-3 pt-1 sm:w-auto sm:justify-start"
		>
			{SocialLinks.map((link) => (
				<div key={link.name}>
					<ButtonLink
						ariaLabel={link.name}
						href={link.href}
						className="social-link relative overflow-visible px-2 py-1.5"
					>
						<link.icon className="social-link-icon size-4 shrink-0" />
						<span className="social-link-tag">{link.name}</span>
					</ButtonLink>
				</div>
			))}
		</section>
	);
};

export default Social;
