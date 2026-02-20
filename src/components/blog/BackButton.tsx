"use client"

import { useRouter } from "next/navigation"
import { ArrowLeftIcon } from "@/components/ui/icons"

type BackButtonProps = {
  fallbackHref?: string
  label?: string
  useHistory?: boolean
  variant?: "default" | "rail"
}

const BackButton = ({
  fallbackHref = "/blog",
  label = "Back",
  useHistory = true,
  variant = "default",
}: BackButtonProps) => {
  const router = useRouter()

  const handleBack = () => {
    if (useHistory && window.history.length > 1) {
      router.back()
      return
    }

    router.push(fallbackHref)
  }

  const baseClasses =
    variant === "rail"
      ? "fixed left-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-(--gb-border) bg-white/95 text-(--gb-fg0) shadow-md backdrop-blur"
      : "btn text-sm"

  return (
    <button type="button" className={baseClasses} onClick={handleBack}>
      {variant === "rail" ? (
        <>
          <span className="text-xl">
            <ArrowLeftIcon />
          </span>
          <span className="sr-only">{label}</span>
        </>
      ) : (
        `<- ${label}`
      )}
    </button>
  )
}

export default BackButton
