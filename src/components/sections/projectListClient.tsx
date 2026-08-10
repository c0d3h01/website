"use client";

import dynamic from "next/dynamic";
import type { Project } from "@/content";

// Lazy-load the per-card list on /projects so motion + react-icons stay out
// of the initial route JS bundle.
const ProjectList = dynamic(() => import("@/components/sections/projectList"), {
	loading: () => (
		<div className="flex flex-col gap-2.5 md:gap-3.5" aria-hidden="true" />
	),
});

interface ProjectListClientProps {
	items: Project[];
	limit?: number;
}

const ProjectListClient = ({ items, limit }: ProjectListClientProps) => (
	<ProjectList items={items} limit={limit} />
);

export default ProjectListClient;
