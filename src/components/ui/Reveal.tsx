"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
	children: ReactNode;
	delay?: number;
	id?: string;
}

const Reveal = ({ children, delay = 0, id }: RevealProps) => {
	return (
		<motion.div
			id={id}
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
