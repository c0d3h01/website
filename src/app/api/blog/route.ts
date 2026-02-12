import { NextResponse } from "next/server"
import { getBlogPosts } from "@/lib/blog"

export const dynamic = "force-static"

export const GET = async () => {
  const posts = getBlogPosts()
  return NextResponse.json({ posts })
}
