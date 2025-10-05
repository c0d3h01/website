"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type CharacterSet = string[] | readonly string[];

interface HyperTextProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  animateOnHover?: boolean;
  characterSet?: CharacterSet;
}

// Cyber hacker character set with symbols and numbers
const CYBER_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`".split("")
) as readonly string[];

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export function HyperText({
  children,
  className,
  duration = 1200,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = false,
  characterSet = CYBER_CHARACTER_SET,
  ...props
}: HyperTextProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const router = useRouter();

  const [displayText, setDisplayText] = useState<string[]>(() =>
    children.split("")
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef<HTMLElement>(null);

  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Cyber glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Enhanced scramble animation with faster character cycling
  useEffect(() => {
    if (!isAnimating) return;

    const intervalDuration = duration / (children.length * 15);
    const maxIterations = children.length;

    const interval = setInterval(() => {
      if (iterationCount.current < maxIterations) {
        setDisplayText((currentText) =>
          currentText.map((letter, index) =>
            letter === " "
              ? letter
              : index <= iterationCount.current
              ? children[index]
              : characterSet[getRandomInt(characterSet.length)]
          )
        );
        iterationCount.current = iterationCount.current + 0.15;
      } else {
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [children, duration, isAnimating, characterSet, router]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "overflow-hidden py-2 text-2xl md:text-3xl font-mono font-bold tracking-wider",
        "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]",
        glitchEffect && "animate-pulse",
        className
      )}
      onMouseEnter={handleAnimationTrigger}
      style={{
        textShadow: glitchEffect
          ? "0 0 10px #fb923c, 0 0 20px #fb923c, 0 0 30px #fb923c"
          : "0 0 5px rgba(251,146,60,0.3)",
      }}
      {...props}
    >
      <AnimatePresence>
        {displayText.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: [0.5, 1, 0.7, 1],
              y: glitchEffect ? [0, -2, 2, 0] : 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.02,
            }}
            className={cn(
              "inline-block",
              letter === " " ? "w-3" : "",
              isAnimating && "text-orange-500"
            )}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}
