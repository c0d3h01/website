import "server-only"

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"

// Markdown source files for blog content.
const postsDirectory = path.join(process.cwd(), "src/content/blog")

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

const getFilePath = (slug: string) => path.join(postsDirectory, `${slug}.md`)
const byDateDesc = (a: BlogPostMeta, b: BlogPostMeta) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()

const parsePost = (fileName: string): BlogPost => {
  const slug = fileName.replace(/\.md$/, "")
  const filePath = path.join(postsDirectory, fileName)
  const source = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(source)

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    content,
  }
}

export const getBlogPosts = (): BlogPostMeta[] => {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
  const posts = files.map(parsePost)

  return posts
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
    }))
    .sort(byDateDesc)
}

export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  const filePath = getFilePath(slug)
  if (!fs.existsSync(filePath)) {
    return null
  }

  return parsePost(`${slug}.md`)
}

export const renderMarkdown = async (markdown: string): Promise<string> => {
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown)

  return processed.toString()
}
