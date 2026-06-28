import BlogPostList from "@/components/sections/blogPostList";
import SectionHeading from "@/components/ui/SectionHeading";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { getBlogPosts } from "@/lib/blog";

const VISIBLE_POST_COUNT = 2;

const Writings = () => {
	const posts = getBlogPosts();
	const visiblePosts = posts.slice(0, VISIBLE_POST_COUNT);
	const hasMore = posts.length > VISIBLE_POST_COUNT;

	return (
		<section id="blog" className="section-fluid flex flex-col gap-4">
			<SectionHeading title="Blog" />

			{posts.length === 0 ? (
				<div className="opacity-70">No blog posts found.</div>
			) : (
				<BlogPostList posts={visiblePosts} />
			)}

			{hasMore && <ViewAllLink href="/blog" />}
		</section>
	);
};

export default Writings;
