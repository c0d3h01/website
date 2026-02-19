"use client"

import { useState, type FocusEvent, type ReactNode } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

interface TooltipProps {
  text: string
  children: ReactNode
  offset?: "default" | "compact"
  containerClassName?: string
  groupClassName?: string
}

const offsetClassMap = {
  default: "bottom-9",
  compact: "bottom-6",
} as const
const tooltipTransition = {
  duration: 0.14,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
}

const Tooltip = ({
  text,
  children,
  offset = "default",
  containerClassName = "",
  groupClassName = "",
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget
    if (!(relatedTarget instanceof Node)) {
      setIsOpen(false)
      return
    }

    if (!event.currentTarget.contains(relatedTarget)) {
      setIsOpen(false)
    }
  }

  return (
    <div
      className={`relative flex items-center select-none ${containerClassName}`.trim()}
    >
      <div
        className={`group relative flex ${groupClassName}`.trim()}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocusCapture={() => setIsOpen(true)}
        onBlurCapture={handleBlur}
      >
        {children}
        <AnimatePresence>
          {isOpen && (
            <motion.span
              initial={shouldReduceMotion ? false : { opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.95 }}
              transition={tooltipTransition}
              className={`info-tip pointer-events-none absolute ${offsetClassMap[offset]} left-1/2 mb-2 w-max -translate-x-1/2 rounded-md px-1.5 py-1 text-sm font-medium`}
            >
              {text}
              <span className="info-tip-arrow absolute top-full left-1/2 -translate-x-1/2 transform border-8 border-transparent" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Tooltip
