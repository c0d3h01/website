// biome-ignore-all lint/security/noDangerouslySetInnerHtml: rendered markdown comes from local blog files.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { defaultOgImage, profile } from "@/content";
import { getBlogPostBySlug, getBlogPosts, renderMarkdown } from "@/lib/blog";
import { formatLongDate } from "@/lib/utils";

type BlogPostPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export const generateStaticParams = () => {
	return getBlogPosts().map((post) => ({
		slug: post.slug,
	}));
};

export const dynamicParams = false;

export const generateMetadata = async ({
	params,
}: BlogPostPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const post = getBlogPostBySlug(slug);

	if (!post) {
		return {
			title: "Post Not Found",
		};
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
	};
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
	const { slug } = await params;
	const post = getBlogPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const htmlContent = await renderMarkdown(post.content);

	return (
		<article className="content-rail flex flex-col gap-4">
			<div className="flex flex-wrap items-center justify-between gap-2">
				<p className="text-sm opacity-70">{formatLongDate(post.date)}</p>
				<Link className="btn text-sm" href="/blog">
					{"<- Back to Blog"}
				</Link>
			</div>

			<h1 className="wrap-break-word text-2xl font-bold">{post.title}</h1>
			<p className="wrap-break-word opacity-80">{post.description}</p>

			<div
				className="blog-prose flex flex-col gap-4"
				dangerouslySetInnerHTML={{ __html: htmlContent }}
			/>
		</article>
	);
};

export default BlogPostPage;