"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { memo } from "react";
import { formatShortDate } from "@/lib/utils";

interface BlogPostCardProps {
	title: string;
	description: string;
	href: string;
	date: string;
}

const BlogPostCard = memo(function BlogPostCard({
	title,
	description,
	href,
	date,
}: BlogPostCardProps) {
	const publishedAt = formatShortDate(date);

	return (
		<Link
			href={href}
			className="blog-row group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent) rounded-sm"
		>
			<motion.article
				className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between px-2 py-1 -mx-2 rounded-md transition-colors group-hover:bg-(--bg-subtle)"
				whileHover={{ x: 4 }}
				transition={{ type: "spring", stiffness: 400, damping: 30 }}
			>
				<div className="flex flex-col min-w-0 flex-1 pr-4">
					<h3 className="text-[1.05rem] font-semibold text-(--fg-primary) leading-snug truncate group-hover:text-(--accent) transition-colors">
						{title}
					</h3>
					<p className="text-[0.92rem] text-(--fg-secondary) truncate opacity-90">
						{description}
					</p>
				</div>
				<time className="shrink-0 font-mono text-[0.8rem] text-(--fg-tertiary) sm:text-right mt-1 sm:mt-0 opacity-80">
					{publishedAt}
				</time>
			</motion.article>
		</Link>
	);
});

export default BlogPostCard;
