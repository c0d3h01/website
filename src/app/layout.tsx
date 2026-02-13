import "./globals.css"
import { profile, seoMetadata, siteUrl } from "@/data"

export const metadata = seoMetadata

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // Schema.org Person data for richer search snippets.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
