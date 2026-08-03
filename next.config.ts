import createBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = createBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
	poweredByHeader: false,
	// Restore scroll position on back/forward navigation so clicking "back to home"
	// from a blog or project detail lands the user where they left the list, not at the top.
	scrollRestoration: true,
	onDemandEntries: {
		// Reduce memory usage for long-running dev servers
		maxInactiveAge: 60 * 1000,
		pagesBufferLength: 5,
	},
	async redirects() {
		return [
			{
				source: "/resume",
				destination: "/assets/docs/resume.pdf",
				permanent: false,
			},
		];
	},
	images: {
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 60 * 60 * 24 * 30,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
				pathname: "/*.png",
			},
		],
	},
};

export default withBundleAnalyzer(nextConfig);
