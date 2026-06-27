// biome-ignore-all lint/security/noDangerouslySetInnerHtml: aboutHtml is curated local profile content.

import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content";

const About = () => {
	const aboutHtml = profile.aboutHtml;

	return (
		<section className="section-static flex flex-col gap-2">
			<SectionHeading title="About Me" />
			<article
				dangerouslySetInnerHTML={{ __html: aboutHtml }}
				className="section-copy flex flex-col gap-2.5"
			/>
		</section>
	);
};

export default About;
