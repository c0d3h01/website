"use client";

import BlogPostCard from "@/components/sections/blogPostCard";
import type { BlogPostMeta } from "@/content";

interface BlogPostListProps {
	posts: BlogPostMeta[];
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
	return (
		<div className="flex flex-col gap-2.5 md:gap-3.5 contain-layout">
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
