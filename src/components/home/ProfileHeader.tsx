"use client"

import { useState } from "react"
import Image from "next/image"
import Tooltip from "@/components/ui/Tooltip"

interface ProfileHeaderProps {
  userName: string
  userBio: string
  userImage: string
}

const ProfileHeader = ({
  userName,
  userBio,
  userImage,
}: ProfileHeaderProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const openPreview = () => setIsPreviewOpen(true)
  const closePreview = () => setIsPreviewOpen(false)

  return (
    <section>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 md:gap-4">
          <Tooltip
            text="View Avatar"
            containerClassName="w-1/3 shrink-0 md:w-auto"
          >
            <button
              type="button"
              aria-label="Open avatar preview"
              onClick={openPreview}
              className="cursor-pointer select-none"
            >
              <span className="pro-pic-shell">
                <Image
                  src={userImage}
                  alt="Profile Picture"
                  className="pro-pic"
                  width={200}
                  height={200}
                  priority
                  sizes="(max-width: 768px) 108px, 130px"
                />
              </span>
            </button>
          </Tooltip>

          <div className="flex min-w-0 flex-col justify-center gap-1 text-left">
            <h1 className="head-name py-0 normal-case">{userName}</h1>
            <p>{userBio}</p>
          </div>
        </div>
      </div>

      {/* Simple click-outside modal for the avatar preview. */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex select-none items-center justify-center bg-black/80"
          onClick={closePreview}
        >
          <Tooltip
            text="Close"
            offset="compact"
            containerClassName="absolute top-4 right-4 z-10"
          >
            <button
              type="button"
              aria-label="Close avatar preview"
              onClick={closePreview}
              className="p-2 text-white hover:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Tooltip>

          <div
            className="w-[600px] max-w-[90vw] overflow-hidden rounded-lg md:max-w-[25vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={userImage}
              alt="Profile Picture Preview"
              className="h-full w-full rounded-lg object-contain"
              width={600}
              height={600}
              sizes="(max-width: 768px) 90vw, 25vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default ProfileHeader
