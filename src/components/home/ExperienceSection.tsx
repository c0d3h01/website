import ExperienceList from "@/components/experience/ExperienceList";
import SectionHeading from "@/components/ui/SectionHeading";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { experiences } from "@/data/experience";

const ExperienceSection = () => {
	const activeExperiences = experiences.filter((item) =>
		/present/i.test(item.duration),
	);
	const visibleExperiences =
		activeExperiences.length > 0 ? activeExperiences : experiences.slice(0, 1);

	const shouldShowViewAll = experiences.length > visibleExperiences.length;

	return (
		<section className="flex flex-col gap-3">
			<SectionHeading title="Experience" />
			<ExperienceList items={visibleExperiences} />
			{shouldShowViewAll && <ViewAllLink href="/experience" />}
		</section>
	);
};

export default ExperienceSection;
