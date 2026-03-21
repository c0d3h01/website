import BlogPostCard from "@/components/blog/BlogPostCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { getBlogPosts } from "@/lib/blog";

const VISIBLE_POST_COUNT = 2;

const WritingsSection = () => {
	const posts = getBlogPosts();
	const visiblePosts = posts.slice(0, VISIBLE_POST_COUNT);
	const hasMore = posts.length > VISIBLE_POST_COUNT;

	return (
		<section id="blog" className="flex flex-col gap-3">
			<SectionHeading title="Blog" />

			<div className="flex flex-col gap-3.5 md:gap-2.5">
				{posts.length === 0 ? (
					<div className="opacity-70">No blog posts found.</div>
				) : (
					visiblePosts.map((post) => (
						<BlogPostCard
							key={post.slug}
							title={post.title}
							description={post.description}
							href={`/blog/${post.slug}`}
							date={post.date}
						/>
					))
				)}
			</div>

			{hasMore && <ViewAllLink href="/blog" />}
		</section>
	);
};

export default WritingsSection;
