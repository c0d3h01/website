import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BackButton from "@/components/blog/BackButton"
import MainScreen from "@/layout/MainScreen"
import Screen from "@/layout/Screen"
import { formatLongDate } from "@/lib/date"
import { getBlogPostBySlug, getBlogPosts, renderMarkdown } from "@/lib/blog"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const generateStaticParams = () => {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const htmlContent = await renderMarkdown(post.content)

  return (
    <MainScreen>
      <Screen>
        <article className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm opacity-70">{formatLongDate(post.date)}</p>
            <BackButton
              fallbackHref="/blog"
              label="Back to Blog"
              useHistory={false}
            />
          </div>

          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="opacity-80">{post.description}</p>

          <div
            className="blog-content flex flex-col gap-4"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </Screen>
    </MainScreen>
  )
}

export default BlogPostPage
