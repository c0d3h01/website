import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import type { BlogPostMeta } from "@/content";

// Markdown source files for blog content.
const postsDirectory = path.join(process.cwd(), "src/content/blog");
const markdownProcessor = remark().use(remarkGfm).use(remarkHtml, {
	sanitize: false,
});

interface BlogPost extends BlogPostMeta {
	content: string;
}

const byDateDesc = (a: BlogPostMeta, b: BlogPostMeta) =>
	new Date(b.date).getTime() - new Date(a.date).getTime();

const parsePost = (fileName: string): BlogPost | null => {
	const slug = fileName.replace(/\.md$/, "");

	try {
		const filePath = path.join(postsDirectory, fileName);
		const source = fs.readFileSync(filePath, "utf8");
		const { data, content } = matter(source);

		return {
			slug,
			title: typeof data.title === "string" && data.title ? data.title : slug,
			description: typeof data.description === "string" ? data.description : "",
			date: typeof data.date === "string" ? data.date : "",
			content,
		};
	} catch (error) {
		console.error(`[blog] Failed to parse "${fileName}":`, error);
		return null;
	}
};

const loadPosts = cache((): BlogPost[] => {
	if (!fs.existsSync(postsDirectory)) {
		return [];
	}

	const files = fs
		.readdirSync(postsDirectory)
		.filter((fileName) => fileName.endsWith(".md"));

	return files.map(parsePost).filter((post): post is BlogPost => post !== null);
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
	if (!markdown) {
		return "";
	}

	try {
		const processed = await markdownProcessor.process(markdown);
		return processed.toString();
	} catch (error) {
		console.error("[blog] Failed to render markdown:", error);
		return `<p><em>Failed to render post content.</em></p>`;
	}
};
