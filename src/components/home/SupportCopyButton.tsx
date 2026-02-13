"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"

interface SupportCopyButtonProps {
  label: string
  value: string
  children: ReactNode
}

const SupportCopyButton = ({
  label,
  value,
  children,
}: SupportCopyButtonProps) => {
  const [copyState, setCopyState] = useState<"idle" | "done" | "error">("idle")

  useEffect(() => {
    if (copyState === "idle") {
      return
    }

    // Reset feedback label after a short acknowledgement window.
    const timeout = window.setTimeout(() => {
      setCopyState("idle")
    }, 1400)

    return () => window.clearTimeout(timeout)
  }, [copyState])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopyState("done")
    } catch {
      setCopyState("error")
    }
  }

  return (
    <button
      type="button"
      className="btn"
      aria-label={`Copy ${label}`}
      onClick={handleCopy}
    >
      {children}
      {copyState === "done"
        ? "Copied"
        : copyState === "error"
          ? "Copy Failed"
          : label}
    </button>
  )
}

export default SupportCopyButton
