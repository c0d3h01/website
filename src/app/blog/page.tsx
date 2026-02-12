import Link from "next/link"
import type { Metadata } from "next"
import BlogPostCard from "@/components/blog/BlogPostCard"
import SectionHeading from "@/components/ui/SectionHeading"
import MainScreen from "@/layout/MainScreen"
import Screen from "@/layout/Screen"
import { getBlogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Markdown-based blog posts",
}

const BlogPage = () => {
  const posts = getBlogPosts()

  return (
    <MainScreen>
      <Screen>
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <SectionHeading title="Blog" />
            <Link className="btn text-sm" href="/">
              Back Home
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <BlogPostCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                image={post.image}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            ))}
          </div>
        </section>
      </Screen>
    </MainScreen>
  )
}

export default BlogPage
