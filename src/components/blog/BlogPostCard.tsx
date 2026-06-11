"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { formatShortDate } from "@/lib/date";
import { hoverLift, springTransition, tapScale } from "@/lib/motion";

interface BlogPostCardProps {
	title: string;
	description: string;
	href: string;
	date: string;
}

const BlogPostCard = ({
	title,
	description,
	href,
	date,
}: BlogPostCardProps) => {
	const publishedAt = formatShortDate(date);

	return (
		<Link href={href} className="blog-card block">
			<div className="flex w-full flex-col gap-0.5">
				<h2 className="wrap-break-word text-xl font-semibold md:text-lg">
					{title}
				</h2>
				<p className="text-sm opacity-70">{publishedAt}</p>
				<p className="wrap-break-word opacity-80">{description}</p>
			</div>
		</Link>
		// </motion.div>
	);
};

export default BlogPostCard;
