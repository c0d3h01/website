import BlogPostList from "@/components/sections/blogPostList";
import MotionSection from "@/components/ui/MotionSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ViewAllLink from "@/components/ui/ViewAllLink";
import { getBlogPosts } from "@/lib/blog";

const VISIBLE_POST_COUNT = 2;

const Writings = () => {
	const posts = getBlogPosts();
	const visiblePosts = posts.slice(0, VISIBLE_POST_COUNT);
	const hasMore = posts.length > VISIBLE_POST_COUNT;

	return (
		<MotionSection>
			<section id="blog" className="flex flex-col gap-3">
				<SectionHeading title="Blog" />

				{posts.length === 0 ? (
					<div className="opacity-70">No blog posts found.</div>
				) : (
					<BlogPostList posts={visiblePosts} />
				)}

				{hasMore && <ViewAllLink href="/blog" />}
			</section>
		</MotionSection>
	);
};

export default Writings;