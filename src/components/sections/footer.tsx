import { profile } from "@/content";

const Footer = () => {
	return (
		<footer className="pt-6 pb-2 text-center text-sm">
			<p className="text-(--fg-tertiary) font-mono text-[0.8rem]">
				© {new Date().getFullYear()} {profile.name} (
				<a
					href={`https://github.com/${profile.githubUsername}`}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-(--accent) transition-colors"
				>
					{profile.githubUsername}
				</a>
				)
			</p>
		</footer>
	);
};

export default Footer;
