"use client";

import dynamic from "next/dynamic";
import type { BlogPostMeta } from "@/content";

// Lazy-load the per-card component (motion + next/link). Keeps the initial
// bundle smaller and lets the chunk resolve while the parent layout paints.
const BlogPostCard = dynamic(() => import("@/components/sections/blogPostCard"), {
	loading: () => (
		<div className="flex flex-col gap-3.5 md:gap-2.5" aria-hidden="true" />
	),
});

interface BlogPostListProps {
	posts: BlogPostMeta[];
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
	return (
		<div className="flex flex-col gap-3.5 md:gap-2.5">
			{posts.map((post) => (
				<BlogPostCard
					key={post.slug}
					title={post.title}
					description={post.description}
					href={`/blog/${post.slug}`}
					date={post.date}
				/>
			))}
		</div>
	);
};

export default BlogPostList;