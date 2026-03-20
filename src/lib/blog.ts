import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

// Markdown source files for blog content.
const postsDirectory = path.join(process.cwd(), "src/blog");

interface BlogPostMeta {
	slug: string;
	title: string;
	description: string;
	date: string;
}

interface BlogPost extends BlogPostMeta {
	content: string;
}

const byDateDesc = (a: BlogPostMeta, b: BlogPostMeta) =>
	new Date(b.date).getTime() - new Date(a.date).getTime();

const parsePost = (fileName: string): BlogPost => {
	const slug = fileName.replace(/\.md$/, "");
	const filePath = path.join(postsDirectory, fileName);
	const source = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(source);

	return {
		slug,
		title: String(data.title ?? slug),
		description: String(data.description ?? ""),
		date: String(data.date ?? ""),
		content,
	};
};

const loadPosts = cache((): BlogPost[] => {
	if (!fs.existsSync(postsDirectory)) {
		return [];
	}

	const files = fs
		.readdirSync(postsDirectory)
		.filter((fileName) => fileName.endsWith(".md"));

	return files.map(parsePost);
});

export const getBlogPosts = (): BlogPostMeta[] =>
	loadPosts()
		.map((post) => ({
			slug: post.slug,
			title: post.title,
			description: post.description,
			date: post.date,
		}))
		.sort(byDateDesc);

export const getBlogPostBySlug = (slug: string): BlogPost | null => {
	const post = loadPosts().find((entry) => entry.slug === slug);
	return post ?? null;
};

export const renderMarkdown = async (markdown: string): Promise<string> => {
	const processed = await remark()
		.use(remarkGfm)
		.use(remarkHtml, { sanitize: false })
		.process(markdown);

	return processed.toString();
};
