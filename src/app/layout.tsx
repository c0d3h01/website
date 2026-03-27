import { siteFontVariables } from "@/app/fonts";
import PageTransition from "@/components/ui/PageTransition";
import { profile } from "@/data/github";
import { seoMetadata, siteUrl } from "@/data/site";
import type { Viewport } from "next";
import "./globals.css";

export const metadata = seoMetadata;
export const viewport: Viewport = {
	colorScheme: "light",
	themeColor: "#ffffff",
};

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: profile.name,
	url: siteUrl,
	image: `${siteUrl}${profile.image}`,
	jobTitle: profile.bio,
	email: `mailto:${profile.email}`,
	sameAs: [
		`https://github.com/${profile.githubUsername}`,
		`https://x.com/${profile.twitterHandle}`,
		`https://www.linkedin.com/in/${profile.linkedinSlug}`,
		`https://codeforces.com/profile/${profile.codeforcesUsername}`,
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={siteFontVariables}>
			<head>
				<script
					type="application/ld+json"
					// Schema.org Person data for richer search snippets.
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
				<script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
			</head>
			<body className="antialiased">
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
