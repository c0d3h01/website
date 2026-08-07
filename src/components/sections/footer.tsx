import { profile } from "@/content";

const Footer = () => {
	return (
		<footer className="section-static border-t border-(--gb-border) pt-3 text-center text-sm">
			<p className="text-(--gb-fg2)">
				Developed by {profile.name} aka {profile.githubUsername}
			</p>
		</footer>
	);
};

export default Footer;
