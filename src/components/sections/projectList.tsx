"use client";

import ProjectCard from "@/components/sections/projectCard";
import type { Project } from "@/content";

interface ProjectListProps {
	items: Project[];
	limit?: number;
}

const ProjectList = ({ items, limit }: ProjectListProps) => {
	const visibleItems =
		typeof limit === "number" ? items.slice(0, limit) : items;

	return (
		<div className="flex flex-col gap-2.5 md:gap-3.5">
			{visibleItems.map((project) => (
				<div key={project.slug}>
					<ProjectCard
						slug={project.slug}
						title={project.title}
						status={project.status}
						description={project.description}
						skills={project.techStack}
						liveUrl={project.liveUrl}
						githubUrl={project.githubUrl}
						previewVideo={project.previewVideo}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectList;
