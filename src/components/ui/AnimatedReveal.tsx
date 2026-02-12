"use client"

import { motion } from "motion/react"

interface AnimatedRevealProps {
  children: React.ReactNode
  delay?: number
}

const AnimatedReveal = ({ children, delay = 0 }: AnimatedRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedReveal
