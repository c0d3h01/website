"use server";

import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/components/mdx";

interface Blog {
  title: string;
  description: string;
  publishedAt: string;
}

const PATH = "src/Blogs";

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), PATH));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(process.cwd(), PATH, file);
      const slug = file.replace(".mdx", "");
      const content = await fs.readFile(filePath, "utf-8");

      const { frontmatter } = await compileMDX<Blog>({
        source: content,
        options: { parseFrontmatter: true },
      });

      if (!frontmatter) {
        throw new Error(`No front matter found in ${file}`);
      }

      return {
        slug,
        ...frontmatter,
      };
    })
  );

  return allBlogs.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });
};

export const getBlog = async (slug: string) => {
  const filePath = path.join(process.cwd(), PATH, `${slug}.mdx`);
  const content = await fs.readFile(filePath, "utf-8");

  const { content: compiledContent, frontmatter } = await compileMDX<Blog>({
    source: content,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  });

  if (!frontmatter) {
    throw new Error(`No front matter found in ${slug}.mdx`);
  }

  return {
    slug,
    content: compiledContent,
    ...frontmatter,
  };
};
