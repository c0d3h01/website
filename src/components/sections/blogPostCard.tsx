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
		<motion.div
			whileHover={{ y: -1, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
			transition={{ type: "spring", stiffness: 400, damping: 30 }}
		>
			<Link
				href={href}
				className="blog-card cursor-pointer p-2 rounded-md block hover:bg-gray-100 transition-colors"
			>
				<div className="flex w-full flex-col gap-0.5">
					<h2 className="wrap-break-word text-base sm:text-lg font-semibold">
						{title}
					</h2>
					<p className="text-sm opacity-70">{publishedAt}</p>
					<p className="wrap-break-word opacity-80">{description}</p>
				</div>
			</Link>
		</motion.div>
	);
});

export default BlogPostCard;
