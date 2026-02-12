"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { toast } from "react-hot-toast"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { LuLink, LuShare } from "react-icons/lu"
import Tooltip from "@/components/ui/Tooltip"

interface ProjectCardProps {
  title: string
  description: string
  liveUrl: string
  githubUrl: string
  skills: string[]
  previewVideo: string
}

const ProjectCard = ({
  title,
  description,
  liveUrl,
  githubUrl,
  skills,
  previewVideo,
}: ProjectCardProps) => {
  const [showPreview, setShowPreview] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".project-card")) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)
    return () => document.removeEventListener("click", handleOutsideClick)
  }, [])

  const handleShare = async (url: string) => {
    const shareData = {
      title: "Check out this Project",
      url,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        return
      }

      await navigator.clipboard.writeText(url)
      toast.success("Copied to clipboard")
    } catch (error) {
      console.error("Error sharing:", error)
      toast.error("Error sharing")
    }
  }

  return (
    <div
      onClick={() => setIsExpanded((prev) => !prev)}
      className="project-card cursor-pointer rounded-md border border-zinc-700 bg-zinc-900 transition-colors duration-100 hover:bg-zinc-800/75"
    >
      <AnimatePresence mode="wait">
        {showPreview && (
          <motion.div
            onClick={(event) => {
              event.stopPropagation()
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-2">
              <video className="w-full rounded-md" loop autoPlay controls>
                <source src={previewVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-2">
        <div className="flex flex-col gap-1 md:gap-0">
          <div className="flex items-center justify-between">
            <div className="truncate">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>

            <div className="flex select-none gap-2 px-2 text-base">
              {previewVideo &&
                (showPreview ? (
                  <Tooltip text="Close" offset="compact">
                    <a
                      onClick={(event) => {
                        event.stopPropagation()
                        setShowPreview((prev) => !prev)
                      }}
                      className="cursor-pointer transition-colors duration-100 hover:text-zinc-400"
                    >
                      <FaEyeSlash />
                    </a>
                  </Tooltip>
                ) : (
                  <Tooltip text="Preview" offset="compact">
                    <a
                      onClick={(event) => {
                        event.stopPropagation()
                        setShowPreview((prev) => !prev)
                      }}
                      className="cursor-pointer transition-colors duration-100 hover:text-zinc-400"
                    >
                      <FaEye />
                    </a>
                  </Tooltip>
                ))}

              {liveUrl && (
                <Tooltip text="Live" offset="compact">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-100 hover:text-zinc-400"
                    href={liveUrl}
                    onClick={(event) => {
                      event.stopPropagation()
                    }}
                  >
                    <LuLink />
                  </a>
                </Tooltip>
              )}

              {githubUrl && (
                <Tooltip text="GitHub" offset="compact">
                  <a
                    onClick={(event) => {
                      event.stopPropagation()
                    }}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-100 hover:text-zinc-400"
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

      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mx-auto mt-3 flex w-[97%] border-t border-zinc-700 md:mt-0" />
            <div className="flex items-center justify-between px-3 py-3 transition-all duration-100 md:py-2">
              <div className="flex flex-wrap gap-1.5 select-none">
                {skills.map((skill, index) => (
                  <p
                    key={index}
                    className="rounded-md border border-zinc-700 px-2 py-0.5 text-sm"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-4 px-2.5 text-xl md:px-2 md:text-lg">
                <button
                  type="button"
                  className="cursor-pointer select-none transition-colors duration-100 hover:text-zinc-400"
                  onClick={(event) => {
                    event.stopPropagation()
                    handleShare(liveUrl || githubUrl)
                  }}
                >
                  <LuShare />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectCard
