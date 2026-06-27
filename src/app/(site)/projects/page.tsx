import type { Metadata } from "next";
import Link from "next/link";
import ProjectListClient from "@/components/sections/projectListClient";
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
				<Link
					className="btn cursor-pointer w-fit select-none flex flex-row gap-1.5 items-center px-2 py-1 rounded-md text-sm w-fit"
					href="/"
				>
					Back Home
				</Link>
			</div>

			<ProjectListClient items={projects} />
		</section>
	);
};

export default ProjectsPage;
