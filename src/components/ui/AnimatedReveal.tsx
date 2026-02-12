"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

interface AnimatedRevealProps {
  children: ReactNode
  delay?: number
  exitDelay?: number
  layout?: boolean | "position" | "size"
  offsetY?: number
}

const AnimatedReveal = ({
  children,
  delay = 0,
  exitDelay = 0,
  layout,
  offsetY = 20,
}: AnimatedRevealProps) => {
  return (
    <motion.div
      layout={layout}
      initial={{ opacity: 0, y: offsetY }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: -Math.max(8, offsetY * 0.45),
        transition: {
          duration: 0.22,
          delay: exitDelay,
          ease: "easeInOut",
        },
      }}
      transition={{
        duration: 0.32,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedReveal
