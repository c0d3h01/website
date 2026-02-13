import type { Metadata } from "next"
import BlogPostCard from "@/components/blog/BlogPostCard"
import PageShell from "@/layout/PageShell"
import { getBlogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Markdown-based blog posts",
}

const BlogPage = () => {
  const posts = getBlogPosts()

  return (
    <PageShell title="Blog">
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <BlogPostCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </PageShell>
  )
}

export default BlogPage
