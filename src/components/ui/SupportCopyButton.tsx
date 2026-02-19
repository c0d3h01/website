"use client"

import type { ReactNode } from "react"
import { toast } from "react-toastify"

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
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      toast.success(`${label} copied to clipboard`)
    } catch {
      toast.error(`Failed to copy ${label}`)
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
      {label}
    </button>
  )
}

export default SupportCopyButton
