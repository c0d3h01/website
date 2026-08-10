"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/sections/projectCard";
import type { Project } from "@/content";
import { listContainerVariants, listItemVariants } from "@/lib/utils";

interface ProjectListProps {
	items: Project[];
	limit?: number;
}

const ProjectList = ({ items, limit }: ProjectListProps) => {
	const visibleItems =
		typeof limit === "number" ? items.slice(0, limit) : items;

	return (
		<motion.div
			variants={listContainerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-40px" }}
			className="flex flex-col gap-2.5 md:gap-3.5"
		>
			{visibleItems.map((project) => (
				<motion.div key={project.slug} variants={listItemVariants}>
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
				</motion.div>
			))}
		</motion.div>
	);
};

export default ProjectList;
