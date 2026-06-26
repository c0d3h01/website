"use client";

import { motion } from "motion/react";
import type { Experience } from "@/content";
import { staggerContainer, staggerItem } from "@/lib/utils";

interface ExperienceListProps {
	items: Experience[];
}

const ExperienceList = ({ items }: ExperienceListProps) => {
	return (
		<motion.div
			className="section-copy flex flex-col gap-2.5"
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-40px" }}
		>
			{items.map(({ id, role, company, duration, location, highlights }) => (
				<motion.article
					key={id}
					className="rounded-md border border-(--gb-border) bg-(--gb-surface) p-3"
					variants={staggerItem}
				>
					<div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
						<h3 className="text-[1.02rem] font-semibold text-(--gb-fg0)">
							{role} · {company}
						</h3>
						<p className="text-sm text-(--gb-fg2)">{duration}</p>
					</div>
					<p className="text-sm text-(--gb-fg2)">{location}</p>
					<ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] text-(--gb-fg1)">
						{highlights.map((highlight) => (
							<li key={`${id}-${highlight}`}>{highlight}</li>
						))}
					</ul>
				</motion.article>
			))}
		</motion.div>
	);
};

export default ExperienceList;