"use client"

import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { LuLink } from "react-icons/lu"
import type { ProjectStatus } from "@/data"
import Tooltip from "@/components/ui/Tooltip"

export interface ProjectCardProps {
  title: string
  status: ProjectStatus
  description: string
  liveUrl: string
  githubUrl: string
  skills: string[]
  previewVideo: string
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
    className: "bg-stone-200 text-stone-700",
  },
}

const ProjectCard = ({
  title,
  status,
  description,
  liveUrl,
  githubUrl,
  skills,
  previewVideo,
}: ProjectCardProps) => {
  const hasPreview = Boolean(previewVideo)
  const [showPreview, setShowPreview] = useState(false)
  const PreviewIcon = showPreview ? FaEyeSlash : FaEye
  const previewLabel = showPreview
    ? "Close project preview"
    : "Open project preview"
  const previewTooltip = showPreview ? "Close" : "Preview"

  return (
    <article className="project-card rounded-md">
      {showPreview && hasPreview && (
        <div className="overflow-hidden">
          <div className="p-2">
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

      <div className="p-2">
        <div className="flex flex-col gap-1 md:gap-0">
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-2">
              <h2 className="truncate text-2xl font-semibold">{title}</h2>
              <span
                aria-label={`Project status: ${statusMeta[status].label}`}
                className={`pointer-events-none shrink-0 rounded px-2 py-0.5 text-sm font-semibold leading-none tracking-wide ${statusMeta[status].className}`}
              >
                {statusMeta[status].label}
              </span>
            </div>

            <div className="flex select-none gap-2 px-2 text-base">
              {hasPreview && (
                <Tooltip text={previewTooltip} offset="compact">
                  <button
                    type="button"
                    aria-label={previewLabel}
                    aria-pressed={showPreview}
                    aria-expanded={showPreview}
                    onClick={() => setShowPreview((prev) => !prev)}
                    className="project-card-action cursor-pointer"
                  >
                    <PreviewIcon />
                  </button>
                </Tooltip>
              )}

              {liveUrl && (
                <Tooltip text="Live" offset="compact">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live project: ${title}`}
                    className="project-card-action"
                    href={liveUrl}
                  >
                    <LuLink />
                  </a>
                </Tooltip>
              )}

              {githubUrl && (
                <Tooltip text="GitHub" offset="compact">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open GitHub repository for ${title}`}
                    className="project-card-action"
                    href={githubUrl}
                  >
                    <FiGithub />
                  </a>
                </Tooltip>
              )}
            </div>
          </div>

          <p className="opacity-80">{description}</p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="mx-auto mt-3 flex w-[97%] border-t border-(--gb-border) md:mt-0" />
        <div className="flex items-center px-3 py-3 md:py-2">
          <ul className="flex flex-wrap gap-1.5 select-none">
            {skills.map((skill, index) => (
              <li
                key={`${title}-${index}`}
                className="list-none rounded-md border border-(--gb-border) px-2 py-0.5 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
