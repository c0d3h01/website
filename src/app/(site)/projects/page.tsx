import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { defaultOgImage, projects } from "@/content";

const ProjectList = nextDynamic(
	() => import("@/components/sections/projectList"),
	{
		loading: () => (
			<div className="flex flex-col gap-2.5 md:gap-3.5" aria-hidden="true" />
		),
	},
);

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

			<ProjectList items={projects} />
		</section>
	);
};

export default ProjectsPage;
