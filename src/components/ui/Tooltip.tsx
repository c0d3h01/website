import type { ReactNode } from "react"

interface TooltipProps {
  text: string
  children: ReactNode
  offset?: "default" | "compact"
  containerClassName?: string
  groupClassName?: string
}

const Tooltip = ({ children }: TooltipProps) => {
  return <>{children}</>
}

export default Tooltip
