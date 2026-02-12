"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { userBio, userImage, userName } from "@/data"
import { HyperText } from "@/components/ui/HyperText"

const ProfileHeader = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <section>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="w-1/3 shrink-0 cursor-pointer select-none md:w-auto"
          >
            <span className="pro-pic-shell">
              <Image
                src={userImage}
                alt="Profile Picture"
                className="pro-pic"
                width={200}
                height={200}
              />
            </span>
          </button>

          <div className="flex min-w-0 flex-col justify-center gap-1 text-left">
            <HyperText
              as="h1"
              className="head-name py-0 normal-case"
              duration={700}
            >
              {userName}
            </HyperText>
            <p>{userBio}</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex select-none items-center justify-center bg-black/80"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-gray-300"
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
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-[600px] max-w-[90vw] overflow-hidden rounded-lg md:max-w-[25vw]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={userImage}
                alt="Profile Picture"
                className="h-full w-full rounded-lg object-contain"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProfileHeader
