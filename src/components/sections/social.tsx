"use client";

import { motion } from "motion/react";
import { SocialLinks } from "@/content";
import { springTransition, tapScale } from "@/lib/utils";

const Social = () => {
	return (
		<nav
			aria-label="Social links"
			className="flex flex-wrap items-center gap-1"
		>
			{SocialLinks.map((link) => (
				<motion.a
					key={link.name}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.name}
					className="social-link"
					whileTap={tapScale}
					transition={springTransition}
				>
					<link.icon className="social-link-icon" />
					<span className="social-link-tag">{link.name}</span>
				</motion.a>
			))}
		</nav>
	);
};

export default Social;
