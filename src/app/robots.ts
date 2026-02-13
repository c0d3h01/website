import type { MetadataRoute } from "next"
import { siteUrl } from "@/data"

const baseUrl = siteUrl

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

export default robots
