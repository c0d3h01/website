import Link from "next/link"
import { LuArrowLeft } from "react-icons/lu"

interface BackRailProps {
  href: string
  label?: string
  variant?: "fixed" | "attached"
  className?: string
}

// Minimal, always-visible back control pinned to the left.
const BackRail = ({
  href,
  label = "Back",
  variant = "fixed",
  className = "",
}: BackRailProps) => {
  const baseClasses =
    "group flex items-center justify-center rounded-full border border-(--gb-border) bg-[rgba(12,12,12,0.9)] text-(--gb-fg0) shadow-md backdrop-blur transition duration-150 hover:border-(--gb-fg2)"

  const positionClasses =
    variant === "fixed"
      ? "fixed left-3 top-1/2 z-40 h-12 w-12 -translate-y-1/2 hover:-translate-x-0.5"
      : "absolute -left-14 top-3 z-30 h-11 w-11"

  return (
    <Link
      href={href}
      aria-label={label}
      className={`${baseClasses} ${positionClasses} ${className}`.trim()}
    >
      <LuArrowLeft aria-hidden className="text-xl" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}

export default BackRail
