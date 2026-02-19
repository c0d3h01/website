"use client"

import type { ImageProps } from "next/image"
import { useState, type ReactNode } from "react"
import ImagePreviewDialog from "@/components/ui/ImagePreviewDialog"

interface ImagePreviewProps {
  src: ImageProps["src"]
  alt: string
  trigger: ReactNode
  previewAlt?: string
  dialogLabel?: string
  triggerAriaLabel?: string
  triggerClassName?: string
  width?: number
  height?: number
  sizes?: string
  dialogWidthClassName?: string
  imageClassName?: string
}

const ImagePreview = ({
  src,
  alt,
  trigger,
  previewAlt,
  dialogLabel,
  triggerAriaLabel = "Open image preview",
  triggerClassName = "cursor-pointer select-none",
  width,
  height,
  sizes,
  dialogWidthClassName,
  imageClassName,
}: ImagePreviewProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label={triggerAriaLabel}
        onClick={() => setIsOpen(true)}
        className={triggerClassName}
      >
        {trigger}
      </button>

      <ImagePreviewDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src={src}
        alt={previewAlt ?? alt}
        dialogLabel={dialogLabel}
        width={width}
        height={height}
        sizes={sizes}
        dialogWidthClassName={dialogWidthClassName}
        imageClassName={imageClassName}
      />
    </>
  )
}

export default ImagePreview
