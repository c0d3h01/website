import { Metadata } from "next";
import { use } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  liveLink?: string;
  githubLink: string;
  technologies?: string[];
  keyFeatures?: string[];
  users?: number;
}

export const skillsData: string[] = [
  "C",
  "C++",
  "Rust",
  "Nix",
  "Shell",
  "PHP",
  "Lua",
  "Python",
  "Just",
  "Zig",
  "CMake",
  "Git",
  "Vim",
  "Tmux",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "JavaScript",
  "React",
  "React Router",
  "React Hook Form",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Node.js",
  "Express",
  "JQuery",
  "Markdown",
  "TypeScript",
  "Next.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Postman",
  "Bash",
  "Docker",
  "Kubernetes",
  ];

export const projectsData = [
  {
    id: 1,
    users: 220,
    title: "Go Installer",
    description: "A quick Go installer written in Rust.",
    githubLink: "https://github.com/c0d3h01/go-installer",
    liveLink: "https://crates.io/crates/go-installer",
    technologies: [ "Rust", "CLI" ],
    keyFeatures: [
      "Quick and easy installation of the Go programming language",
      "Written in Rust for performance and safety",
      "Command-line interface for user-friendly operation",
    ],
  },
];

export const resumeData = {
  // Set to false when you don't have resume, true when you do
  isAvailable: false,
  
  // Add your Google Drive link here when ready
  url: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
  
  // Fallback route when not available
  fallbackRoute: "/not-found",
};

export const siteMetadata: Metadata = {
  title: "Harshal Sawant",
  description: "Backend engineer",
  keywords: [
    "Harshal Sawant",
    "Backend developer",
    "Blockchain developer",
    "Solana",
    "Rust",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "India",
    "Mumbai",
    "Nix",
    "Linux"
  ],
  authors: [{ name: "Harshal Sawant" }],
  creator: "Harshal Sawant",
  publisher: "Harshal Sawant",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.c0d3h01.tech/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.c0d3h01.tech/",
    title: "Harshal Sawant - Backend Engineer",
    description:
      "Backend engineer from India specializing in modern web technologies",
    siteName: "Harshal Sawant Portfolio",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Harshal Sawant Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@c0d3h01.tech",
    title: "Harshal Sawant - Backend Engineer",
    description:
      "Backend engineer from India specializing in modern web technologies",
    images: ["/logo.jpg"],
  },
  category: "technology",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.jpg",
    },
  },
  manifest: "/manifest.json",
};
