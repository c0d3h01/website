"use client";

import { ExternalLink, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";
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
			className: "status-dot-active",
		},
		building: {
			label: "Building",
			className: "status-dot-building",
		},
		archived: {
			label: "Archived",
			className: "status-dot-archived",
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
		<motion.article
			className="project-card relative flex flex-col h-full"
			whileHover={{ y: -2 }}
			transition={{ type: "spring", stiffness: 400, damping: 30 }}
		>
			<Link
				href={projectPagePath}
				aria-label={`Open project details for ${title}`}
				className="absolute inset-0 z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
			/>

			{hasPreview && (
				<div
					className="project-preview-clip relative z-30 bg-black/5 dark:bg-white/5"
					data-open={showPreview ? "true" : "false"}
					aria-hidden={!showPreview}
				>
					<div className="p-3">
						<video
							className="w-full rounded-md shadow-sm border border-white/10"
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

			<div className="p-3.5 flex flex-col flex-1 gap-2.5">
				<div className="flex items-start justify-between gap-3">
					<div className="flex min-w-0 flex-col items-start gap-1">
						<h2 className="truncate text-[1.15rem] leading-tight font-semibold text-(--fg-primary) max-w-full">
							{title}
						</h2>
						<div className="flex items-center gap-1.5 opacity-80">
							<span
								className={`status-dot ${statusInfo.className}`}
								aria-hidden="true"
							/>
							<span className="text-[0.65rem] font-mono tracking-wide uppercase text-(--fg-tertiary)">
								{statusInfo.label}
							</span>
						</div>
					</div>

					<div className="relative z-30 flex shrink-0 select-none gap-1 -mt-0.5 -mr-1">
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

				<p className="text-[0.92rem] leading-snug text-(--fg-secondary) opacity-90 line-clamp-2">
					{description}
				</p>
			</div>

			<div className="p-3 pt-0 mt-auto">
				<div className="flex flex-wrap gap-1.5 select-none">
					{skills.map((skill) => (
						<span key={`${title}-${skill}`} className="tech-pill">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.article>
	);
};

export default ProjectCard;
