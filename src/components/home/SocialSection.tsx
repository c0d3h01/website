"use client";

import { motion } from "motion/react";
import ButtonLink from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/data/social";
import { staggerContainer, staggerItem } from "@/lib/motion";

const SocialSection = () => {
	return (
		<motion.section
			aria-label="Social links"
			className="flex w-full flex-wrap items-center justify-center gap-3 pt-1 md:w-auto md:justify-start"
			variants={staggerContainer}
			initial="hidden"
			animate="visible"
		>
			{SocialLinks.map((link) => (
				<motion.div key={link.id} variants={staggerItem}>
					<ButtonLink
						ariaLabel={link.name}
						href={link.href}
						className="social-link"
					>
						<link.icon className="social-link-icon" />
						<span className="social-link-tag">{link.name}</span>
					</ButtonLink>
				</motion.div>
			))}
		</motion.section>
	);
};

export default SocialSection;
