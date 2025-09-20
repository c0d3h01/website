import { Metadata } from "next";

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

export interface OpenSourceContribution {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Writings {
  title: string;
  link: string;
  Date: string;
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
  "Netlify",
  "Vercel",
  "NPM",
  "Node.js",
  "Express",
  "JQuery",
  "Markdown",
  "TypeScript",
  "Next.js",
  "Remix",
  "Firebase",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Supabase",
  "Nginx",
  "Cloudflare",
  "BullMQ",
  "Nodemon",
  "Socket.io",
  "JWT",
  "Auth.js",
  "Prisma",
  "ESLint",
  "Storybook",
  "Postman",
  "Monorepo",
  "Bash",
  "Powershell",
  "Gsap",
  "Python",
  "Docker",
  "Kubernetes",
  "AWS",
  "Nginx",
  "Redis",
  "Better Auth",
  "Cloudflare",
  "React Native",
  "Vite",
  "Blender",
  "Stack Overflow",
  "Zustand",
  "Motion",
];

export const projectsData = [
  // {
  //   id: 1,
  //   title: "Go Installer",
  //   description: "A quick Go installer written in Rust.",
  //   githubLink: "https://github.com/c0d3h01/go-installer",
  //   technologies: ["Rust"],
  //   keyFeatures: [],
  // },
  {
    id: 1,
    title: "Androidtweaker",
    description: "Android performance enhancer.",
    githubLink: "https://github.com/c0d3h01/androidtweaker",
    technologies: ["Shell", "kernel"],
    keyFeatures: [],
  },
  {
    id: 2,
    title: "Core Task Optimizer",
    description: "Adaptive core CPU nice optimizer.",
    githubLink: "https://github.com/c0d3h01/coretaskoptimizer",
    technologies: ["Shell", "C++", "CMake", "Nix"],
    keyFeatures: [],
  },
  {
    id: 3,
    title: "Archinstall",
    description: "Automated Arch Linux Installation",
    githubLink: "https://github.com/c0d3h01/archinstall",
    technologies: ["Shell"],
    keyFeatures: [],
  },
  {
    id: 4,
    title: "ASCII",
    description: "ASCII - Moving donought written in rust",
    githubLink: "https://github.com/c0d3h01/ascii",
    technologies: ["Rust", "Nix", "Shell"],
    keyFeatures: [],
  },
  {
    id: 5,
    title: "PHP-Portfolio",
    description: "Personal portfolio written in PHP",
    githubLink: "https://github.com/c0d3h01/php-portfolio",
    technologies: ["PHP", "CSS", "JavaScript", "Nix", "Other"],
    keyFeatures: [],
  },
  {
    id: 6,
    title: "Dotfiles",
    description: "Declarative -  Flake based dotfiles",
    githubLink: "https://github.com/c0d3h01/dotfiles",
    technologies: ["Nix", "Lua", "Shell", "Python", "Just"],
    keyFeatures: [],
  },
];


export const OpenSourceContributions = [
  {
    id: 1,
    title: "isabelroses/dotfiles",
    description:
      "Suggested improvements to documentation structure and clarity for better usability, including step-by-step guides and user adaptation tips.",
    image: "/dotfiles.png",
    link: "https://github.com/isabelroses/dotfiles/issues/421",
  },
  {
    id: 2,
    title: "RiProG-id/Universal-Shell-Dec",
    description:
      "Raised and discussed a bug report regarding decryption failure in the Universal-Shell-Dec project.",
    image: "/shell-dec.png",
    link: "https://github.com/RiProG-id/Universal-Shell-Dec/issues/1",
  },
];

export const writingsData: Writings[] = [
  {
    title: "Kleos CLI: Mindsdb Knowledge Base supercharged",
    link: "https://dev.to/yashksaini/kleos-cli-mindsdb-knowledge-base-supercharged-1a83",
    Date: "June 30, 2025",
  }
];

export const siteMetadata: Metadata = {
  title: "Harshal Sawant",
  description: "Backend engineer from India",
  keywords: [
    "Harshal Sawant",
    "Backend developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "India",
    "nix",
    "linux"
  ],
  authors: [{ name: "Harshal Sawant" }],
  creator: "Harshal Sawant",
  publisher: "Harshal Sawant",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.c0d3h01.tech/"), //deployed website url
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
    site: "@c0d3h01.vercel.app",
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
