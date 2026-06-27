import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiGithub } from "react-icons/fi";
import { LuLink } from "react-icons/lu";
import { defaultOgImage, getProjectBySlug, profile, projects } from "@/content";

type ProjectPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

const getSocialImage = (bannerImage: string) => bannerImage || defaultOgImage;

export const generateStaticParams = () => {
	return projects.map((project) => ({
		slug: project.slug,
	}));
};

export const dynamicParams = false;
export const dynamic = "force-static";

export const generateMetadata = async ({
	params,
}: ProjectPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	const socialImage = getSocialImage(project.bannerImage);

	return {
		title: project.title,
		description: project.description,
		alternates: {
			canonical: `/projects/${project.slug}`,
		},
		openGraph: {
			title: project.title,
			description: project.description,
			type: "article",
			url: `/projects/${project.slug}`,
			authors: [profile.name],
			images: socialImage
				? [
						{
							url: socialImage,
							width: 1200,
							height: 420,
							alt: `${project.title} banner`,
						},
					]
				: undefined,
		},
		twitter: {
			card: "summary_large_image",
			title: project.title,
			description: project.description,
			images: socialImage ? [socialImage] : undefined,
			creator: `@${profile.twitterHandle}`,
		},
	};
};

const ProjectDetailPage = async ({ params }: ProjectPageProps) => {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<article className="flex flex-col gap-4">
			<div className="flex items-center justify-between gap-2">
				<h1 className="text-2xl font-bold text-(--gb-fg0)">{project.title}</h1>
				<Link
					className="btn cursor-pointer w-fit select-none flex flex-row gap-1.5 items-center px-2 py-1 rounded-md text-sm"
					href="/projects"
				>
					Back to Projects
				</Link>
			</div>

			<div className="overflow-hidden rounded-md border border-(--gb-border) bg-(--gb-surface)">
				<Image
					src={project.bannerImage}
					alt={`${project.title} banner`}
					width={1200}
					height={420}
					priority
					className="h-auto w-full object-cover"
				/>
			</div>

			<p className="opacity-80">{project.description}</p>

			<div className="flex flex-wrap gap-2">
				{project.liveUrl && (
					<a
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Open live project: ${project.title}`}
						className="btn cursor-pointer w-fit select-none flex flex-row gap-1.5 items-center px-2 py-1 rounded-md text-sm"
						href={project.liveUrl}
					>
						<LuLink />
						Live
					</a>
				)}

				{project.githubUrl && (
					<a
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Open GitHub repository for ${project.title}`}
						className="btn cursor-pointer w-fit select-none flex flex-row gap-1.5 items-center px-2 py-1 rounded-md text-sm"
						href={project.githubUrl}
					>
						<FiGithub />
						GitHub
					</a>
				)}
			</div>

			{project.highlights.length > 0 && (
				<section className="flex flex-col gap-2">
					<h2 className="text-lg font-semibold text-(--gb-fg0)">Highlights</h2>
					<ul className="list-disc pl-5">
						{project.highlights.map((highlight) => (
							<li key={`${project.slug}-highlight-${highlight}`}>
								{highlight}
							</li>
						))}
					</ul>
				</section>
			)}

			<section className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold text-(--gb-fg0)">Tech Stack</h2>
				<ul className="flex flex-wrap gap-1.5 select-none">
					{project.techStack.map((tech) => (
						<li
							key={`${project.slug}-${tech}`}
							className="list-none rounded-md border border-(--gb-border) px-2 py-0.5 text-sm"
						>
							{tech}
						</li>
					))}
				</ul>
			</section>

			{project.previewVideo && (
				<section className="flex flex-col gap-2">
					<h2 className="text-lg font-semibold text-(--gb-fg0)">Preview</h2>
					<video
						className="w-full rounded-md border border-(--gb-border)"
						loop
						autoPlay
						muted
						playsInline
						controls
						preload="metadata"
					>
						<source src={project.previewVideo} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</section>
			)}
		</article>
	);
};

export default ProjectDetailPage;
