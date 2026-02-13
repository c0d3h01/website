"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
} from "react-icons/md"
import BlogPostCard from "@/components/blog/BlogPostCard"
import SectionHeading from "@/components/ui/SectionHeading"
import Tooltip from "@/components/ui/Tooltip"

interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
}

const WritingsSection = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([])
  const [isLoading, setIsLoading] = useState(true)

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

  const shouldShowViewAll = posts.length > 2
  const visiblePosts = posts.slice(0, 2)

  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="Blog" />

      <div className="flex flex-col gap-3.5 md:gap-2.5">
        {isLoading && <div className="opacity-70">Loading blog posts...</div>}

        {!isLoading && (
          <>
            {visiblePosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                description={post.description}
                href={`/blog/${post.slug}`}
                date={post.date}
              />
            ))}
          </>
        )}

        {!isLoading && visiblePosts.length === 0 && (
          <div className="opacity-70">No blog posts found.</div>
        )}
      </div>

      {shouldShowViewAll && (
        <Tooltip text="View All">
          <Link href="/blog" className="showMore-btn">
            <span className="flex items-center justify-center gap-0.5">
              <span className="animate-pulse">
                <MdKeyboardDoubleArrowDown />
              </span>
              View All
            </span>
          </Link>
        </Tooltip>
      )}
    </section>
  )
}

export default WritingsSection
