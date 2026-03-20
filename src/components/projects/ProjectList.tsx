import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/data";

interface ProjectListProps {
	items: Project[];
	limit?: number;
}

const ProjectList = ({ items, limit }: ProjectListProps) => {
	const visibleItems =
		typeof limit === "number" ? items.slice(0, limit) : items;

	return (
		<div className="flex flex-col gap-3.5 md:gap-2.5">
			{visibleItems.map((project) => (
				<ProjectCard
					key={project.id}
					slug={project.slug}
					title={project.title}
					status={project.status}
					description={project.description}
					skills={project.techStack}
					liveUrl={project.liveUrl}
					githubUrl={project.githubUrl}
					previewVideo={project.previewVideo}
				/>
			))}
		</div>
	);
};

export default ProjectList;
