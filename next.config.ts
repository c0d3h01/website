import createBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = createBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
	poweredByHeader: false,
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
