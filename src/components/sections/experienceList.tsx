"use client";

import { motion } from "motion/react";
import type { Experience } from "@/content";
import { listContainerVariants, listItemVariants } from "@/lib/utils";

interface ExperienceListProps {
	items: Experience[];
}

const ExperienceList = ({ items }: ExperienceListProps) => {
	return (
		<motion.div
			variants={listContainerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-40px" }}
			className="flex flex-col gap-3"
		>
			{items.map(({ role, company, duration, location, highlights }) => {
				const entryKey = `${role}·${company}`;
				return (
					<motion.article
						variants={listItemVariants}
						whileHover={{ y: -2 }}
						transition={{ type: "spring", stiffness: 400, damping: 30 }}
						key={entryKey}
						className="experience-card flex gap-3.5 p-4"
					>
						{/* Left accent bar */}
						<div
							className="w-0.5 shrink-0 rounded-full self-stretch bg-(--accent)"
							aria-hidden="true"
						/>

						{/* Content */}
						<div className="flex flex-col gap-1.5 min-w-0">
							<div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
								<h3 className="font-semibold text-(--fg-primary) text-sm">
									{role}
									<span className="text-(--fg-tertiary) font-normal mx-1.5">
										·
									</span>
									{company}
								</h3>
								<span className="font-mono text-xs text-(--fg-tertiary) shrink-0 whitespace-nowrap">
									{duration}
								</span>
							</div>
							<p className="text-xs text-(--fg-tertiary) uppercase tracking-wide font-medium">
								{location}
							</p>
							<ul className="flex flex-col gap-1 mt-1.5">
								{highlights.map((highlight) => (
									<li
										key={`${entryKey}-${highlight}`}
										className="flex gap-2 text-sm text-(--fg-secondary) leading-relaxed"
									>
										<span
											className="text-(--accent) shrink-0 mt-0.5 select-none"
											aria-hidden="true"
										>
											▸
										</span>
										{highlight}
									</li>
								))}
							</ul>
						</div>
					</motion.article>
				);
			})}
		</motion.div>
	);
};

export default ExperienceList;
