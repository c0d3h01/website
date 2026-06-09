export type ProjectStatus = "active" | "building" | "archived";

export interface Project {
	id: number;
	slug: string;
	title: string;
	status: ProjectStatus;
	description: string;
	highlights: string[];
	liveUrl: string;
	githubUrl: string;
	techStack: string[];
	bannerImage: string;
	previewVideo: string;
}

export const projects: Project[] = [
	{
		id: 1,
		slug: "androidtweaker",
		title: "androidtweaker",
		status: "archived",
		description:
			"Built and maintained a shell-driven Android optimization toolkit for rooted devices, focused on runtime tuning, repeatable tweak workflows, and easier long-term maintenance.",
		highlights: [
			"Built a shell-first automation workflow to apply performance tweaks consistently on rooted Android devices.",
			"Added repeatable profiles for CPU, memory, and background-task behavior to reduce manual trial-and-error.",
			"Kept the toolkit modular so tweaks can be added or removed safely during long-term maintenance.",
		],
		liveUrl: "",
		githubUrl: "https://github.com/c0d3h01/androidtweaker",
		techStack: ["Shell", "Android", "Linux", "Performance Tuning"],
		bannerImage: "/images/banners/androidtweaker-banner.svg",
		previewVideo: "",
	},
	{
		id: 2,
		slug: "coretaskoptimizer",
		title: "coretaskoptimizer",
		status: "active",
		description:
			"Implemented a native C++ root module that applies CPU affinity, scheduler policy, and I/O priority to critical Android system tasks with low-overhead boot-time execution.",
		highlights: [
			"Implemented a native module that applies task scheduling and affinity rules during boot with minimal overhead.",
			"Focused on critical system process prioritization to keep foreground responsiveness stable under load.",
			"Designed the rule pipeline for low-level Linux controls such as scheduler policy and I/O priority.",
		],
		liveUrl: "",
		githubUrl: "https://github.com/c0d3h01/coretaskoptimizer",
		techStack: ["C++", "CMake", "Linux Syscalls", "Kernel Optimization"],
		bannerImage: "/images/banners/coretaskoptimizer-banner.svg",
		previewVideo: "",
	},
];

export const getProjectBySlug = (slug: string) => {
	return projects.find((project) => project.slug === slug);
};
