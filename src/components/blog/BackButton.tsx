"use client"

import { useRouter } from "next/navigation"

type BackButtonProps = {
  fallbackHref?: string
  label?: string
}

const BackButton = ({ fallbackHref = "/blog", label = "Back" }: BackButtonProps) => {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
      return
    }

    router.push(fallbackHref)
  }

  return (
    <button type="button" className="btn text-sm" onClick={handleBack}>
      {`<- ${label}`}
    </button>
  )
}

export default BackButton
