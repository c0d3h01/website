"use client"

import { useRouter } from "next/navigation"

type BackButtonProps = {
  fallbackHref?: string
  label?: string
  useHistory?: boolean
}

const BackButton = ({
  fallbackHref = "/blog",
  label = "Back",
  useHistory = true,
}: BackButtonProps) => {
  const router = useRouter()

  const handleBack = () => {
    if (useHistory && window.history.length > 1) {
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
