import { profile } from "@/content";

const Footer = () => {
	return (
		<footer className="section-static grid-rule flex flex-col gap-2 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
			<p className="text-muted-foreground">
				Built thoughtfully by {profile.name}.
			</p>
			<p className="font-mono text-xs text-muted-foreground">
				© {new Date().getFullYear()} / {profile.githubUsername}
			</p>
		</footer>
	);
};

export default Footer;
