"use client";

import { motion, type Variants } from "motion/react";
import ProjectCard from "@/components/sections/projectCard";
import type { Project } from "@/content";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 24 },
	},
};

interface ProjectListProps {
	items: Project[];
	limit?: number;
}

const ProjectList = ({ items, limit }: ProjectListProps) => {
	const visibleItems =
		typeof limit === "number" ? items.slice(0, limit) : items;

	return (
		<motion.div
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-40px" }}
			className="flex flex-col gap-2.5 md:gap-3.5"
		>
			{visibleItems.map((project) => (
				<motion.div key={project.slug} variants={itemVariants}>
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
