import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BackButton from "@/components/blog/BackButton"
import { defaultOgImage, profile } from "@/data"
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

export const dynamicParams = false

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
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [profile.name],
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [defaultOgImage],
      creator: `@${profile.twitterHandle}`,
    },
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
