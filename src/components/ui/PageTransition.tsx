"use client"

import type { ReactNode } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  const initialAnimation = shouldReduceMotion
    ? false
    : { opacity: 0, y: 12, scale: 0.992 }
  const exitAnimation = shouldReduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: -8, scale: 0.996 }
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : {
      opacity: {
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
      y: {
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
      scale: {
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        style={{ willChange: "opacity, transform" }}
        initial={initialAnimation}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={exitAnimation}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
