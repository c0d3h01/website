import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/site";
import { getBlogPosts } from "@/lib/blog";

const parseLastModified = (dateString: string) => {
	const parsedDate = new Date(dateString);
	if (Number.isNaN(parsedDate.getTime())) {
		return new Date();
	}

	return parsedDate;
};

const sitemap = (): MetadataRoute.Sitemap => {
	const now = new Date();
	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: `${siteUrl}/`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${siteUrl}/blog`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${siteUrl}/projects`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${siteUrl}/experience`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${siteUrl}/llms.txt`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.4,
		},
	];

	const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
		url: `${siteUrl}/blog/${post.slug}`,
		lastModified: parseLastModified(post.date),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
		url: `${siteUrl}/projects/${project.slug}`,
		lastModified: now,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticRoutes, ...blogRoutes, ...projectRoutes];
};

export default sitemap;
