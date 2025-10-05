import React from "react";
import {Link} from "next-view-transitions";
import { HyperText } from "@/components/ui/HyperText";
import { Star } from "@/components/Star";
import { getBlogs } from "@/lib/BlogUtils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Harshal Sawant",
  description: "Blog page"
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();
  return (
    <main className="flex flex-col max-w-3xl mx-auto">
      <div className="flex text-4xl font-semibold items-center gap-2">
        <Star />
        <HyperText>blogs</HyperText>
      </div>

      <section className="mt-4 flex flex-col gap-6">
        {allBlogs.map((blog, index) => (
          <Link
            href={"/blogs/" + blog.slug}
            passHref
            key={blog.slug}
          >
            <div className="pb-2 flex justify-between align-middle gap-2 group">
              <div className="space-y-2">
                <h3 className="md:text-base group-hover:text-orange-500 transition-colors duration-200">
                  {blog.title}
                </h3>
                <p className="text-stone-400 md:text-sm text-sm md:line-clamp-3 line-clamp-2">
                  {blog.description}
                </p>
                <p className="text-xs text-stone-400">
                  {blog.publishedAt && blog.publishedAt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
