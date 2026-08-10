// biome-ignore-all lint/security/noDangerouslySetInnerHtml: internal content
"use client";

import { motion } from "motion/react";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content";

const About = () => {
	const [expanded, setExpanded] = useState(false);
	const clamped = !expanded;

	return (
		<section className="flex flex-col gap-3">
			<SectionHeading title="About Me" />

			<motion.div className="relative" layout>
				<motion.article
					layout="position"
					dangerouslySetInnerHTML={{ __html: profile.aboutHtml }}
					aria-expanded={expanded}
					className={
						"section-copy space-y-3 text-sm leading-relaxed text-(--fg-secondary) " +
						(clamped
							? "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]"
							: "")
					}
				/>

				{clamped && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						aria-hidden
						className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-(--bg) to-transparent"
					/>
				)}
			</motion.div>

			<motion.button
				layout="position"
				type="button"
				onClick={() => setExpanded((v) => !v)}
				aria-expanded={expanded}
				className="text-(--fg-tertiary) hover:text-(--fg-primary) self-start text-sm font-medium underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
			>
				{expanded ? "See less" : "See more"}
			</motion.button>
		</section>
	);
};

export default About;
