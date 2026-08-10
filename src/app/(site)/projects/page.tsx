import type { Metadata } from "next";
import ProjectListClient from "@/components/sections/projectListClient";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { defaultOgImage, projects } from "@/content";

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
		<section className="flex flex-col gap-4">
			<div className="flex items-center justify-between gap-2">
				<SectionHeading title="Projects" as="h1" />
				<ButtonLink href="/" target="_self" rel="" className="text-sm">
					Back Home
				</ButtonLink>
			</div>

			<ProjectListClient items={projects} />
		</section>
	);
};

export default ProjectsPage;
