"use client";

import { Eye, EyeOff, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import Button from "@/components/ui/Button";
import type { ProjectStatus } from "@/content";

interface ProjectCardProps {
	slug: string;
	title: string;
	status: ProjectStatus;
	description: string;
	liveUrl: string;
	githubUrl: string;
	skills: string[];
	previewVideo: string;
}

const statusMeta: Record<ProjectStatus, { label: string; className: string }> =
	{
		active: {
			label: "Active",
			className: "bg-emerald-100 text-emerald-700",
		},
		building: {
			label: "Building",
			className: "bg-amber-100 text-amber-700",
		},
		archived: {
			label: "Archived",
			className: "border border-amber-500 bg-amber-50 text-amber-700",
		},
	};

const ProjectCard = ({
	slug,
	title,
	status,
	description,
	liveUrl,
	githubUrl,
	skills,
	previewVideo,
}: ProjectCardProps) => {
	const hasPreview = Boolean(previewVideo);
	const projectPagePath = `/projects/${slug}`;
	const statusInfo = statusMeta[status];
	const [showPreview, setShowPreview] = useState(false);
	const previewLabel = showPreview
		? "Close project preview"
		: "Open project preview";

	return (
		<article className="project-card relative rounded-md">
			<Link
				href={projectPagePath}
				aria-label={`Open project details for ${title}`}
				className="absolute inset-0 z-20 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gb-fg0)"
			/>

			{hasPreview && (
				<div
					className="project-preview-clip relative z-30 overflow-hidden"
					data-open={showPreview ? "true" : "false"}
					aria-hidden={!showPreview}
				>
					<div className="p-2.5">
						<video
							className="w-full rounded-md"
							loop
							autoPlay
							muted
							playsInline
							controls
							preload="metadata"
						>
							<source src={previewVideo} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			)}

			<div className="p-2.5">
				<div className="flex flex-col gap-1">
					<div className="flex items-center justify-between">
						<div className="flex min-w-0 items-center gap-2">
							<h2 className="truncate text-2xl font-semibold">{title}</h2>
							<span
								className={`pointer-events-none shrink-0 rounded px-2 py-0.5 text-sm font-semibold leading-none tracking-wide ${statusInfo.className}`}
							>
								{statusInfo.label}
							</span>
						</div>

						<div className="relative z-30 flex select-none gap-2 px-2 text-base">
							{hasPreview && (
								<Button
									variant="unstyled"
									aria-label={previewLabel}
									aria-pressed={showPreview}
									aria-expanded={showPreview}
									onClick={() => setShowPreview((prev) => !prev)}
									className="project-card-action"
								>
									{showPreview ? <EyeOff /> : <Eye />}
								</Button>
							)}

							{liveUrl && (
								<a
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Open live project: ${title}`}
									className="project-card-action"
									href={liveUrl}
								>
									<ExternalLink />
								</a>
							)}

							{githubUrl && (
								<a
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Open GitHub repository for ${title}`}
									className="project-card-action"
									href={githubUrl}
								>
									<FiGithub />
								</a>
							)}
						</div>
					</div>

					<p className="opacity-80">{description}</p>
				</div>
			</div>

			<div className="overflow-hidden">
				<div className="mt-3 flex border-t border-(--gb-border) md:mt-0" />
				<div className="flex items-center px-2 py-2 md:py-1.5">
					<ul className="flex flex-wrap gap-1.5 select-none">
						{skills.map((skill) => (
							<li
								key={`${title}-${skill}`}
								className="list-none rounded-md border border-(--gb-border) px-2 py-0.5 text-sm"
							>
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
