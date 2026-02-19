"use client"

import Image from "next/image"
import ImagePreview from "@/components/ui/ImagePreview"
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
  return (
    <section>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 md:gap-4">
          <Tooltip
            text="View Avatar"
            containerClassName="w-1/3 shrink-0 md:w-auto"
          >
            <ImagePreview
              src={userImage}
              alt="Profile Picture"
              previewAlt="Profile Picture Preview"
              dialogLabel="Profile picture preview"
              triggerAriaLabel="Open avatar preview"
              trigger={
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
              }
            />
          </Tooltip>

          <div className="flex min-w-0 flex-col justify-center gap-1 text-left">
            <h1 className="head-name py-0 normal-case">{userName}</h1>
            <p>{userBio}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader
