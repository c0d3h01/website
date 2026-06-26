"use client";

import dynamic from "next/dynamic";
import MotionSection from "@/components/ui/MotionSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { projects } from "@/content";

// Code-split the project list (motion + react-icons + video element) out of
// the initial client bundle. The placeholder keeps the flex column height
// stable so the surrounding MotionSection does not shift when the chunk
// arrives.
const ProjectList = dynamic(
	() => import("@/components/sections/projectList"),
	{
		loading: () => (
			<div className="flex flex-col gap-3.5 md:gap-2.5" aria-hidden="true" />
		),
	},
);

const Projects = () => {
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

export default Projects;