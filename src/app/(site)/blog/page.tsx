import type { Metadata } from "next";
import BlogPostList from "@/components/sections/blogPostList";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { defaultOgImage } from "@/content";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
	title: "Blog",
	description: "Markdown-based blog posts",
	alternates: {
		canonical: "/blog",
	},
	openGraph: {
		title: "Blog",
		description: "Markdown-based blog posts",
		url: "/blog",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog",
		description: "Markdown-based blog posts",
		images: [defaultOgImage],
	},
};
export const dynamic = "force-static";

const BlogPage = () => {
	const posts = getBlogPosts();

	return (
		<section className="flex flex-col gap-3">
			<div className="flex items-center justify-between gap-2">
				<SectionHeading title="Blog" as="h1" />
				<ButtonLink href="/" target="_self" rel="" className="text-sm">
					Back Home
				</ButtonLink>
			</div>

			<div className="content-rail flex flex-col gap-3">
				{posts.length > 0 ? (
					<BlogPostList posts={posts} />
				) : (
					<p className="opacity-75">No blog posts published yet.</p>
				)}
			</div>
		</section>
	);
};

export default BlogPage;
