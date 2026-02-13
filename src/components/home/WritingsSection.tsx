import BlogPostCard from "@/components/blog/BlogPostCard"
import SectionHeading from "@/components/ui/SectionHeading"
import ViewAllLink from "@/components/ui/ViewAllLink"
import { getBlogPosts } from "@/lib/blog"

const WritingsSection = () => {
  const posts = getBlogPosts()
  const shouldShowViewAll = posts.length > 2
  const visiblePosts = posts.slice(0, 2)

  return (
    <section id="blog" className="flex flex-col gap-3">
      <SectionHeading title="Blog" />

      <div className="flex flex-col gap-3.5 md:gap-2.5">
        {visiblePosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            href={`/blog/${post.slug}`}
            date={post.date}
          />
        ))}

        {visiblePosts.length === 0 && (
          <div className="opacity-70">No blog posts found.</div>
        )}
      </div>

      {shouldShowViewAll && <ViewAllLink href="/blog" />}
    </section>
  )
}

export default WritingsSection
