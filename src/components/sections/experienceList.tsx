"use client";

import type { Experience } from "@/content";

interface ExperienceListProps {
	items: Experience[];
}

const ExperienceList = ({ items }: ExperienceListProps) => {
	return (
		<div className="section-copy flex flex-col gap-2.5">
			{items.map(({ role, company, duration, location, highlights }) => {
				const entryKey = `${role}·${company}`;
				return (
					<article
						key={entryKey}
						className="experience-card rounded-md border border-(--gb-border) bg-(--gb-surface) p-2.5"
					>
						<div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
							<h3 className="min-w-0 text-[1.02rem] font-semibold text-(--gb-fg0)">
								{role} · {company}
							</h3>
							<p className="shrink-0 whitespace-nowrap text-sm text-(--gb-fg2)">
								{duration}
							</p>
						</div>
						<p className="text-sm text-(--gb-fg2)">{location}</p>
						<ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem] text-(--gb-fg1)">
							{highlights.map((highlight) => (
								<li key={`${entryKey}-${highlight}`}>{highlight}</li>
							))}
						</ul>
					</article>
				);
			})}
		</div>
	);
};

export default ExperienceList;
