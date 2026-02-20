"use client"

import { type ReactNode, useEffect, useState } from "react"

interface SupportCopyButtonProps {
  label: string
  value: string
  mobileHref?: string
  children?: ReactNode
  displayLabel?: ReactNode
  buttonClassName?: string
  ariaLabel?: string
}

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    mobile?: boolean
  }
}

const isLikelyMobileDevice = () => {
  if (typeof navigator === "undefined") {
    return false
  }

  const nav = navigator as NavigatorWithUserAgentData
  if (typeof nav.userAgentData?.mobile === "boolean") {
    return nav.userAgentData.mobile
  }

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
}

const SupportCopyButton = ({
  label,
  value,
  mobileHref,
  children,
  displayLabel,
  buttonClassName = "btn",
  ariaLabel,
}: SupportCopyButtonProps) => {
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle",
  )

  useEffect(() => {
    if (copyStatus === "idle") {
      return
    }

    const timeout = window.setTimeout(() => {
      setCopyStatus("idle")
    }, 2200)

    return () => window.clearTimeout(timeout)
  }, [copyStatus])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopyStatus("success")
    } catch {
      setCopyStatus("error")
    }
  }

  const handleClick = async () => {
    if (mobileHref && isLikelyMobileDevice()) {
      window.location.assign(mobileHref)
      return
    }

    await handleCopy()
  }

  const defaultAriaLabel = mobileHref
    ? `Pay with ${label} or copy on desktop`
    : `Copy ${label}`

  const visibleStatusLabel =
    copyStatus === "success"
      ? "Copied"
      : copyStatus === "error"
        ? "Copy failed"
        : ""

  return (
    <>
      <div className="inline-flex items-center gap-2">
        <button
          type="button"
          className={buttonClassName}
          aria-label={ariaLabel ?? defaultAriaLabel}
          onClick={handleClick}
        >
          {children}
          {displayLabel ?? label}
        </button>

        {visibleStatusLabel && (
          <span
            aria-hidden="true"
            className="rounded-md border border-(--gb-border) bg-(--gb-surface) px-2 py-1 text-xs text-(--gb-fg2)"
          >
            {visibleStatusLabel}
          </span>
        )}
      </div>

      <output className="sr-only" aria-live="polite">
        {copyStatus === "success" && `${label} copied to clipboard`}
        {copyStatus === "error" && `Failed to copy ${label}`}
      </output>
    </>
  )
}

export default SupportCopyButton
