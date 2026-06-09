// biome-ignore-all lint/security/noDangerouslySetInnerHtml: aboutHtml is curated local profile content.
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/github";

const AboutSection = () => {
	const aboutHtml = profile.aboutHtml;

	return (
		<section className="flex flex-col gap-2">
			<SectionHeading title="About Me" />
			<article
				dangerouslySetInnerHTML={{
					__html: aboutHtml,
				}}
				className="section-copy flex flex-col gap-2.5"
			/>
		</section>
	);
};

export default AboutSection;
