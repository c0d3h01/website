import ExperienceList from "@/components/experience/ExperienceList";
import MotionSection from "@/components/ui/MotionSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { experiences } from "@/data/experience";

const ExperienceSection = () => {
	const activeExperiences = experiences.filter((item) => item.isCurrent);
	const visibleExperiences =
		activeExperiences.length > 0 ? activeExperiences : experiences.slice(0, 1);

	const shouldShowViewAll = experiences.length > visibleExperiences.length;

	return (
		<MotionSection>
			<section className="flex flex-col gap-3">
				<SectionHeading title="Experience" />
				<ExperienceList items={visibleExperiences} />
				{shouldShowViewAll && <ViewAllLink href="/experience" />}
			</section>
		</MotionSection>
	);
};

export default ExperienceSection;
