"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content";

// Bio runs long; clamp to 5 lines and let the reader expand.
const COLLAPSED_LINES = 5;

const About = () => {
	const [expanded, setExpanded] = useState(false);
	const clamped = !expanded;

	return (
		<section className="section-static flex flex-col gap-2">
			<SectionHeading title="About Me" />

			<div className="relative">
				<article
					dangerouslySetInnerHTML={{ __html: profile.aboutHtml }}
					aria-expanded={expanded}
					className={
						"section-copy space-y-3 " +
						(clamped
							? "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]"
							: "")
					}
				/>

				{clamped && (
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-(--background) to-transparent"
					/>
				)}
			</div>

			<button
				type="button"
				onClick={() => setExpanded((v) => !v)}
				aria-expanded={expanded}
				className="text-muted-foreground hover:text-foreground self-start text-sm font-medium underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gb-fg0)"
			>
				{expanded ? "See less" : "See more"}
			</button>
		</section>
	);
};

export default About;
