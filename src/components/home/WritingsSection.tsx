"use client"

import { useEffect, useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import BlogPostCard from "@/components/blog/BlogPostCard"
import AnimatedReveal from "@/components/ui/AnimatedReveal"
import SectionHeading from "@/components/ui/SectionHeading"

interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  image?: string
}

const WritingsSection = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showAllPosts, setShowAllPosts] = useState(false)

  useEffect(() => {
    let isMounted = true

    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog", { cache: "no-store" })
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts")
        }

        const data = (await response.json()) as { posts: BlogPostMeta[] }
        if (isMounted) {
          setPosts(data.posts)
        }
      } catch {
        if (isMounted) {
          setPosts([])
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchPosts()

    return () => {
      isMounted = false
    }
  }, [])

  const shouldShowToggle = posts.length > 2
  const visiblePosts = showAllPosts ? posts : posts.slice(0, 2)

  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="Writings" />

      <div className="flex flex-col gap-3.5 md:gap-2.5">
        {isLoading && <div className="opacity-70">Loading blog posts...</div>}

        {!isLoading &&
          visiblePosts.map((post, index) => (
            <AnimatedReveal key={post.slug} delay={index * 0.075}>
              <BlogPostCard
                image={post.image}
                title={post.title}
                description={post.description}
                href={`/blog/${post.slug}`}
                date={post.date}
              />
            </AnimatedReveal>
          ))}

        {!isLoading && visiblePosts.length === 0 && (
          <div className="opacity-70">No blog posts found.</div>
        )}
      </div>

      {shouldShowToggle && (
        <button className="showMore-btn" onClick={() => setShowAllPosts((prev) => !prev)}>
          {showAllPosts ? (
            <span className="flex items-center justify-center gap-0.5">
              <span className="animate-pulse">
                <MdKeyboardDoubleArrowUp />
              </span>
              Show less
            </span>
          ) : (
            <span className="flex items-center justify-center gap-0.5">
              <span className="animate-pulse">
                <MdKeyboardDoubleArrowDown />
              </span>
              Show all
            </span>
          )}
        </button>
      )}
    </section>
  )
}

export default WritingsSection
