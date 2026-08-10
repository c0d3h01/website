"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
	children: ReactNode;
	delay?: number;
}

const Reveal = ({ children, delay = 0 }: RevealProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay }}
		>
			{children}
		</motion.div>
	);
};

export default Reveal;
