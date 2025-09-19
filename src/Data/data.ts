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
  "Yarn",
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
  "AWS",
  "Nginx",
  "Redis",
  "Better Auth",
  "Cloudflare",
  "React Native",
  "Vite",
  "Blender",
  "C",
  "Stack Overflow",
  "Zustand",
  "Motion",
];

export const projectsData = [
  {
    id: 1,
    title: "androidtweaker",
    description: "Android performance enhancer.",
    githubLink: "https://github.com/c0d3h01/androidtweaker",
    technologies: [],
    keyFeatures: [],
  },
  {
    id: 2,
    title: "coretaskoptimizer",
    description: "Adaptive core CPU nice optimizer.",
    githubLink: "https://github.com/c0d3h01/coretaskoptimizer",
    technologies: ["Shell", "C++", "CMake", "Nix"],
    keyFeatures: [],
  },
  {
    id: 3,
    title: "go-installer",
    description: "A quick Go installer written in Rust.",
    githubLink: "https://github.com/c0d3h01/go-installer",
    technologies: ["Rust"],
    keyFeatures: [],
  },
  {
    id: 4,
    title: "archinstall",
    description: "Automated Arch Linux Installation",
    githubLink: "https://github.com/c0d3h01/archinstall",
    technologies: ["Shell"],
    keyFeatures: [],
  },
  {
    id: 5,
    title: ".github",
    description: "My GitHub Profile",
    githubLink: "https://github.com/c0d3h01/.github",
    technologies: [],
    keyFeatures: [],
  },
  {
    id: 6,
    title: "ascii",
    description: "ASCII - Moving donought written in rust",
    githubLink: "https://github.com/c0d3h01/ascii",
    technologies: ["Rust", "Nix", "Shell"],
    keyFeatures: [],
  },
  {
    id: 7,
    title: "website",
    description: "Portfolio website",
    githubLink: "https://github.com/c0d3h01/website",
    technologies: ["TypeScript", "CSS", "Nix", "JavaScript"],
    keyFeatures: [],
  },
  {
    id: 8,
    title: "php-portfolio",
    description: "Personal portfolio written in PHP",
    githubLink: "https://github.com/c0d3h01/php-portfolio",
    technologies: ["PHP", "CSS", "JavaScript", "Nix", "Other"],
    keyFeatures: [],
  },
  {
    id: 9,
    title: "c0d3h01.github.io",
    description: "",
    githubLink: "https://github.com/c0d3h01/c0d3h01.github.io",
    technologies: [],
    keyFeatures: [],
  },
  {
    id: 10,
    title: "dotfiles",
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
  description: "Full-stack engineer from India",
  keywords: [
    "Harshal Sawant",
    "Frontend developer",
    "Backend developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Web developer",
    "India",
  ],
  authors: [{ name: "Harshal Sawant" }],
  creator: "Harshal Sawant",
  publisher: "Harshal Sawant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://c0d3h01.vercel.app/"), //deployed website url
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
    url: "https://c0d3h01.vercel.app/",
    title: "Harshal Sawant - Full-stack Engineer",
    description:
      "Full-stack engineer from India specializing in modern web technologies",
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
    title: "Harshal Sawant - Full-stack Engineer",
    description:
      "Full-stack engineer from India specializing in modern web technologies",
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
