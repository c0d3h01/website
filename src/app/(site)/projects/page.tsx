import type { Metadata } from "next";
import ProjectList from "@/components/projects/ProjectList";
import { defaultOgImage, projects } from "@/data";
import PageShell from "@/layout/PageShell";

export const metadata: Metadata = {
	title: "Projects",
	description: "Showcase of software projects",
	alternates: {
		canonical: "/projects",
	},
	openGraph: {
		title: "Projects",
		description: "Showcase of software projects",
		url: "/projects",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects",
		description: "Showcase of software projects",
		images: [defaultOgImage],
	},
};
export const dynamic = "force-static";

const ProjectsPage = () => {
	return (
		<PageShell title="Projects">
			<ProjectList items={projects} />
		</PageShell>
	);
};

export default ProjectsPage;
