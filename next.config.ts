import createBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = createBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
	poweredByHeader: false,
	experimental: {
		// Tree-shake named imports from heavy icon/animation libraries.
		// `react-icons` ships per-family barrels; without this, importing
		// a single icon pulls the whole family. `motion` (the new Motion
		// One) also re-exports through package entrypoints that benefit
		// from barrel optimization.
		optimizePackageImports: ["react-icons", "motion"],
	},
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
