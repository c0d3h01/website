"use client"

import { type ReactNode, useEffect, useState } from "react"

interface SupportCopyButtonProps {
  label: string
  value: string
  mobileHref?: string
  children: ReactNode
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

  return (
    <>
      <button
        type="button"
        className="btn"
        aria-label={
          mobileHref ? `Pay with ${label} or copy on desktop` : `Copy ${label}`
        }
        onClick={handleClick}
      >
        {children}
        {label}
      </button>

      <output className="sr-only" aria-live="polite">
        {copyStatus === "success" && `${label} copied to clipboard`}
        {copyStatus === "error" && `Failed to copy ${label}`}
      </output>
    </>
  )
}

export default SupportCopyButton
