import type { Experience } from "@/data/experience";

interface ExperienceListProps {
	items: Experience[];
}

const ExperienceList = ({ items }: ExperienceListProps) => {
	return (
		<div className="section-copy flex flex-col gap-2.5">
			{items.map(({ id, role, company, duration, location, highlights }) => (
				<article
					key={id}
					className="rounded-md border border-(--gb-border) bg-(--gb-surface) p-3"
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
				</article>
			))}
		</div>
	);
};

export default ExperienceList;
