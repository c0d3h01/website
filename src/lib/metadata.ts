import { Metadata } from "next";

const siteConfig = {
  name: "Harshal Sawant",
  title: "Harshal Sawant - Software Engineer",
  description: "Software Engineer - Building at the intersection of systems optimization and algorithmic logic. Interested in finance automation, distributed protocols, and cryptographic systems.",
  url: "http://www.c0d3h01.tech",
  ogImage: "/logo.jpg",
  auther: "Harshal Sawant",
  creator: "c0d3h01 @ github",
  twitterHandle: "@haarshalsawant",
  keywords: [
    "Harshal",
    "Sawant",
    "Software engineer",
    "Backend Developer",
    "programming",
    "github",
    "Blockchain Developer",
    "Rust engineer",
    "System Architech",
    "solana",
    "Next.js",
    "Typescript",
    "India",
    "Nix",
    "C++",
    "Linux"
  ],
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.auther }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/"
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.jpg" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "512x512", type: "image/jpeg" }
    ],
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_us",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.creator,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ siteConfig.ogImage ],
  },
  category: "technology",
};

export { siteConfig };
