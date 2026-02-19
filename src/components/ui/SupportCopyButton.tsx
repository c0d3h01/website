"use client"

import type { ReactNode } from "react"
import { toast } from "react-toastify"

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
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      toast.success(`${label} copied to clipboard`)
    } catch {
      toast.error(`Failed to copy ${label}`)
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
    <button
      type="button"
      className="btn"
      aria-label={mobileHref ? `Pay with ${label} or copy on desktop` : `Copy ${label}`}
      onClick={handleClick}
    >
      {children}
      {label}
    </button>
  )
}

export default SupportCopyButton
