// biome-ignore-all lint/security/noDangerouslySetInnerHtml: aboutHtml is curated local profile content.

import MotionSection from "@/components/ui/MotionSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content";

const About = () => {
	const aboutHtml = profile.aboutHtml;

	return (
		<MotionSection>
			<section className="flex flex-col gap-2">
				<SectionHeading title="About Me" />
				<article
					dangerouslySetInnerHTML={{ __html: aboutHtml }}
					className="section-copy flex flex-col gap-2.5"
				/>
			</section>
		</MotionSection>
	);
};

export default About;