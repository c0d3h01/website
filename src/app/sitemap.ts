import type { MetadataRoute } from "next"
import { siteUrl } from "@/data"
import { getBlogPosts } from "@/lib/blog"

const baseUrl = siteUrl

const parseLastModified = (dateString: string) => {
  const parsedDate = new Date(dateString)
  if (Number.isNaN(parsedDate.getTime())) {
    return new Date()
  }

  return parsedDate
}

const sitemap = (): MetadataRoute.Sitemap => {
  const now = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseLastModified(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}

export default sitemap
