import { Link } from "next-view-transitions";
import { ArrowLeftIcon } from "lucide-react";
import { getBlog } from "@/lib/BlogUtils";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.publishedAt,
      url: `/w/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return (
    <div className="max-w-3xl mx-auto font-sans w-full">
      <div className="mb-8">
        <Link href="/w" className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors">
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to writings</span>
        </Link>
      </div>
      <article className="prose-invert max-w-none">
        {blog.content}
      </article>
    </div>
  );
}
