"use client"

import Image, { type ImageProps } from "next/image"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface ImagePreviewDialogProps {
  isOpen: boolean
  onClose: () => void
  src: ImageProps["src"]
  alt: string
  dialogLabel?: string
  width?: number
  height?: number
  sizes?: string
  dialogWidthClassName?: string
  imageClassName?: string
}

const ImagePreviewDialog = ({
  isOpen,
  onClose,
  src,
  alt,
  dialogLabel = "Image preview",
  width = 600,
  height = 600,
  sizes = "(max-width: 768px) 90vw, 25vw",
  dialogWidthClassName = "w-[min(90vw,24rem)]",
  imageClassName = "h-full w-full rounded-lg object-contain",
}: ImagePreviewDialogProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const placeholder = typeof src === "string" ? "empty" : "blur"

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={dialogLabel}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onClose()
        }
      }}
    >
      <div
        className={`${dialogWidthClassName} relative overflow-hidden rounded-lg`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close image preview"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 rounded-full bg-black/70 p-2.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg
            aria-hidden="true"
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

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          placeholder={placeholder}
          className={imageClassName}
        />
      </div>
    </div>
  )

  return createPortal(dialog, document.body)
}

export default ImagePreviewDialog
