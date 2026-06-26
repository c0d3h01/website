"use client";

import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { fadeSlideUp } from "@/lib/utils";

interface MotionSectionProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	/** Delay before animation starts (seconds). */
	delay?: number;
}

/**
 * Thin client wrapper that triggers a fade+slide-up animation when
 * the element scrolls into the viewport. Used by server components
 * to get scroll-reveal without becoming client components themselves.
 */
const MotionSection = ({
	children,
	className,
	style,
	delay = 0,
}: MotionSectionProps) => {
	return (
		<motion.div
			variants={fadeSlideUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-60px" }}
			transition={delay > 0 ? { delay } : undefined}
			className={className}
			style={style}
		>
			{children}
		</motion.div>
	);
};

export default MotionSection;
