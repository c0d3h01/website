import type { Metadata } from "next"
import type { ComponentType } from "react"
import { BiLogoPostgresql } from "react-icons/bi"
import { BsFiletypeSql } from "react-icons/bs"
import { DiJavascript } from "react-icons/di"
import { FaDocker } from "react-icons/fa"
import {
  FaGithub,
  FaGitAlt,
  FaLinkedinIn,
  FaPython,
  FaRegHeart,
  FaXTwitter,
} from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md"
import { PiFigmaLogoBold } from "react-icons/pi"
import {
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiBuymeacoffee,
  SiCodeforces,
  SiDjango,
  SiExpress,
  SiMongodb,
  SiPaytm,
  SiPostman,
  SiRedis,
  SiSolana,
  SiVercel,
} from "react-icons/si"
import { TbBrandCpp, TbBrandTypescript } from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"

type IconComponent = ComponentType<{ className?: string }>

// Global profile identity and social handles.
export interface Profile {
  name: string
  shortName: string
  bio: string
  image: string
  githubUsername: string
  twitterHandle: string
  linkedinSlug: string
  codeforcesUsername: string
  email: string
  website: string
  support: {
    githubSponsorsUsername: string
    buyMeACoffeeUsername: string
    solanaAddress: string
    paytmUpiId: string
  }
  aboutHtml: string
}

export const profile: Profile = {
  name: "Harshal Sawant",
  shortName: "Harshal",
  bio: "Software Engineer",
  image: "/Images/pfp/pfp.png",
  githubUsername: "c0d3h01",
  twitterHandle: "haarshalsawant",
  linkedinSlug: "haarshalsawant",
  codeforcesUsername: "c0d3h01",
  email: "harshalsawant.dev@gmail.com",
  website: "https://c0d3h01.tech",
  support: {
    githubSponsorsUsername: "c0d3h01",
    buyMeACoffeeUsername: "c0d3h01",
    solanaAddress: "BvVsoRAUvRpiuG1tVSb4kRRf4MJWsEvgBBSH3PUnVgFF",
    paytmUpiId: "8828166801@ptsbi",
  },
  aboutHtml: `
  <p>
    Hi, I&apos;m Harshal Sawant, a product-focused software engineer based in Mumbai, India.
  </p>
  <p>
    I enjoy building reliable software, <strong>improving performance</strong>, and contributing to open-source projects that solve practical engineering problems.
  </p>
`,
}

// Compatibility exports used across existing components.
export const userImage = profile.image
export const userName = profile.name
export const userShortName = profile.shortName
export const userBio = profile.bio
export const userAbout = profile.aboutHtml

export const emailLink = `mailto:${profile.email}?subject=Interested%20in%20Hiring%20You`
export const resumeFilePath = "/assets/docs/resume.pdf"

// Public links shown on the home page.
export interface SocialLink {
  id: number
  name: string
  href: string
  icon: IconComponent
  iconClassName?: string
}

export const footerSocialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Mail",
    href: `mailto:${profile.email}`,
    icon: MdOutlineMail,
    iconClassName: "text-[#EA4335]",
  },
  {
    id: 2,
    name: "Github",
    href: `https://github.com/${profile.githubUsername}`,
    icon: FaGithub,
    iconClassName: "text-zinc-100",
  },
  {
    id: 3,
    name: "Twitter",
    href: `https://x.com/intent/follow?screen_name=${profile.twitterHandle}`,
    icon: FaXTwitter,
    iconClassName: "text-zinc-100",
  },
  {
    id: 4,
    name: "LinkedIn",
    href: `https://www.linkedin.com/in/${profile.linkedinSlug}`,
    icon: FaLinkedinIn,
    iconClassName: "text-[#0A66C2]",
  },
  {
    id: 5,
    name: "Codeforces",
    href: `https://codeforces.com/profile/${profile.codeforcesUsername}`,
    icon: SiCodeforces,
    iconClassName: "text-[#1F8ACB]",
  },
]

// Compatibility alias for old imports.
export const userFooterLink = footerSocialLinks

export const hireText =
  "I’m open to software engineering roles and freelance work where I can build reliable backend systems, developer tools, and cloud-native products."

// Experience cards rendered in home and dedicated experience pages.
export interface Experience {
  id: number
  role: string
  company: string
  location: string
  duration: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Freelance Software Engineer",
    company: "Freelance",
    location: "Remote",
    duration: "2024 - Present",
    highlights: [
      "Built and maintained backend services and developer tools for client projects.",
      "Delivered production-ready features across web platforms with a focus on performance and reliability.",
      "Partnered directly with clients from planning through deployment and ongoing support.",
    ],
  },
]

export type ProjectStatus = "active" | "building" | "archived"

// Source of truth for project cards across home and /projects.
export interface Project {
  id: number
  title: string
  status: ProjectStatus
  description: string
  liveUrl: string
  githubUrl: string
  techStack: string[]
  previewVideo: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "androidtweaker",
    status: "active",
    description:
      "Built and maintained a shell-driven Android optimization toolkit for rooted devices, focused on runtime tuning, repeatable tweak workflows, and easier long-term maintenance.",
    liveUrl: "",
    githubUrl: "https://github.com/c0d3h01/androidtweaker",
    techStack: ["Shell", "Android", "Linux", "Performance Tuning"],
    previewVideo: "",
  },
  {
    id: 2,
    title: "coretaskoptimizer",
    status: "building",
    description:
      "Implemented a native C++ root module that applies CPU affinity, scheduler policy, and I/O priority to critical Android system tasks with low-overhead boot-time execution.",
    liveUrl: "",
    githubUrl: "https://github.com/c0d3h01/coretaskoptimizer",
    techStack: ["C++", "CMake", "Linux Syscalls", "Kernel Optimization"],
    previewVideo: "",
  },
  {
    id: 3,
    title: "firuslab/obfussor",
    status: "active",
    description:
      "Contributed to a cross-platform LLVM-based C/C++ obfuscation suite and worked on the Svelte + Tauri app workflow for job execution and protection metric review.",
    liveUrl: "",
    githubUrl: "https://github.com/firuslab/obfussor",
    techStack: ["TypeScript", "Svelte", "Tauri", "Rust", "LLVM"],
    previewVideo: "",
  },
  {
    id: 4,
    title: "nix-dotfiles",
    status: "archived",
    description:
      "Engineered a flake-driven NixOS + Home Manager setup with modular host profiles, Disko provisioning, and secure secret management for reproducible workstation bootstrap.",
    liveUrl: "",
    githubUrl: "https://github.com/c0d3h01/nix-dotfiles",
    techStack: ["Nix", "Nix Flakes", "Home Manager", "sops-nix", "Disko"],
    previewVideo: "",
  },
]

export interface Skill {
  id: number
  icon: IconComponent
  text: string
}

export const skills: Skill[] = [
  { id: 1, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 2, icon: DiJavascript, text: "JavaScript" },
  { id: 3, icon: FaPython, text: "Python" },
  { id: 4, icon: TbBrandCpp, text: "C++" },
  { id: 5, icon: RiJavaLine, text: "Java" },
  { id: 6, icon: BsFiletypeSql, text: "SQL" },
  { id: 7, icon: RiReactjsLine, text: "React" },
  { id: 8, icon: RiNextjsLine, text: "Next.js" },
  { id: 9, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 10, icon: IoLogoNodejs, text: "Node.js" },
  { id: 11, icon: SiExpress, text: "Express" },
  { id: 12, icon: SiDjango, text: "Django" },
  { id: 13, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 14, icon: SiMongodb, text: "MongoDB" },
  { id: 15, icon: SiRedis, text: "Redis" },
  { id: 16, icon: FaDocker, text: "Docker" },
  { id: 17, icon: VscTerminalLinux, text: "Linux" },
  { id: 18, icon: FaGitAlt, text: "Git" },
  { id: 19, icon: FaGithub, text: "GitHub Actions" },
  { id: 20, icon: SiVercel, text: "Cloud Deployments" },
  { id: 21, icon: SiPostman, text: "API Testing" },
  { id: 22, icon: PiFigmaLogoBold, text: "Product Collaboration" },
]

export type SupportMethod =
  | {
      id: number
      label: string
      type: "link"
      href: string
      icon: IconComponent
      iconClassName: string
    }
  | {
      id: number
      label: string
      type: "copy"
      value: string
      icon: IconComponent
      iconClassName: string
    }

export const supportText =
  "If my open-source work, tools, or technical writing helps you, consider supporting me. It helps me keep building and sharing useful developer tools."

export const supportMethods: SupportMethod[] = [
  {
    id: 1,
    label: "GitHub Sponsors",
    type: "link",
    href: `https://github.com/sponsors/${profile.support.githubSponsorsUsername}`,
    icon: FaRegHeart,
    iconClassName: "text-[#DB61A2]",
  },
  {
    id: 2,
    label: "Buy Me a Coffee",
    type: "link",
    href: `https://buymeacoffee.com/${profile.support.buyMeACoffeeUsername}`,
    icon: SiBuymeacoffee,
    iconClassName: "text-[#FFDD00]",
  },
  {
    id: 3,
    label: "Solana",
    type: "copy",
    value: profile.support.solanaAddress,
    icon: SiSolana,
    iconClassName: "text-[#14F195]",
  },
  {
    id: 4,
    label: "Paytm",
    type: "copy",
    value: profile.support.paytmUpiId,
    icon: SiPaytm,
    iconClassName: "text-[#00BAF2]",
  },
]

const siteUrl = profile.website
const siteTitle = profile.name
const siteDescription =
  "Portfolio of Harshal Sawant - Software Engineer focused on backend systems, developer tooling, and cloud services."
const ogImage =
  "https://res.cloudinary.com/dhcocqegu/image/upload/v1753737110/OGN_o7spwl.png"

export const seoMetadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Harshal Sawant",
    "Portfolio",
    "Software Engineer",
    "Backend Engineer",
    "TypeScript",
    "Node.js",
    "Cloud Services",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/Images/icon/icon.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Images/icon/icon.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/Images/icon/icon.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Images/icon/icon.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: profile.name,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
    creator: `@${profile.twitterHandle}`,
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
}
