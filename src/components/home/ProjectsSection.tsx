import ProjectList from "@/components/projects/ProjectList";
import MotionSection from "@/components/ui/MotionSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
	const visibleCount = 2;
	const shouldShowViewAll = projects.length > visibleCount;

	return (
		<MotionSection>
			<section id="projects" className="flex flex-col gap-3">
				<SectionHeading title="Projects" />
				<ProjectList items={projects} limit={visibleCount} />
				{shouldShowViewAll && <ViewAllLink href="/projects" />}
			</section>
		</MotionSection>
	);
};

export default ProjectsSection;
