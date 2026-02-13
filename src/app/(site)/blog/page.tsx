import type { Metadata } from "next"
import BlogPostCard from "@/components/blog/BlogPostCard"
import { defaultOgImage } from "@/data"
import PageShell from "@/layout/PageShell"
import { getBlogPosts } from "@/lib/blog"

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
}
export const dynamic = "force-static"

const BlogPage = () => {
  const posts = getBlogPosts()

  return (
    <PageShell
      title="Blog"
    >
      <div className="flex flex-col gap-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          ))
        ) : (
          <p className="opacity-75">No blog posts published yet.</p>
        )}
      </div>
    </PageShell>
  )
}

export default BlogPage
