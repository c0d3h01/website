"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HyperTextProps extends Omit<MotionProps, 'children'> {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  animateOnHover?: boolean;
  characterSet?: string[];
}

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`".split("");

export function HyperText({
  children,
  className,
  duration = 1200,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = false,
  characterSet = CYBER_CHARS,
  ...props
}: HyperTextProps) {
  const MotionComponent = motion.create(Component, { forwardMotionProps: true });

  const [displayText, setDisplayText] = useState(() => children.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const iterationRef = useRef(0);
  const elementRef = useRef<HTMLElement>(null);

  // Start animation based on view or delay
  useEffect(() => {
    if (!startOnView) {
      const timer = setTimeout(() => setIsAnimating(true), delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsAnimating(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Glitch effect interval
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scramble animation
  useEffect(() => {
    if (!isAnimating) return;

    const chars = children.split("");
    const intervalTime = duration / (chars.length * 10);

    const interval = setInterval(() => {
      if (iterationRef.current >= chars.length) {
        setIsAnimating(false);
        clearInterval(interval);
        return;
      }

      setDisplayText((current) =>
        current.map((char, i) => {
          if (char === " ") return " ";
          if (i <= iterationRef.current) return chars[i];
          return characterSet[Math.floor(Math.random() * characterSet.length)];
        })
      );

      iterationRef.current += 0.15;
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isAnimating, children, duration, characterSet]);

  const handleHover = () => {
    if (animateOnHover && !isAnimating) {
      iterationRef.current = 0;
      setIsAnimating(true);
    }
  };

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "overflow-hidden py-2 font-mono font-bold tracking-wider",
        "text-2xl md:text-3xl text-orange-400",
        glitch && "animate-pulse",
        className
      )}
      onMouseEnter={handleHover}
      style={{
        textShadow: glitch
          ? "0 0 10px #fb923c, 0 0 20px #fb923c, 0 0 30px #fb923c"
          : "0 0 5px rgba(251,146,60,0.3)",
      }}
      {...props}
    >
      <AnimatePresence mode="wait">
        {displayText.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: [0.5, 1, 0.7, 1],
              y: glitch ? [0, -2, 2, 0] : 0,
            }}
            transition={{
              duration: 0.3,
              delay: i * 0.02,
            }}
            className={cn(
              "inline-block",
              char === " " && "w-3",
              isAnimating && "text-orange-500"
            )}
          >
            {char.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}
