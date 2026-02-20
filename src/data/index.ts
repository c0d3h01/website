import profileImage from "@public/Images/pfp/pfp.webp"
import type { Metadata } from "next"
import type { ComponentType } from "react"
import { BiLogoPostgresql } from "react-icons/bi"
import { BsFiletypeSql } from "react-icons/bs"
import { DiJavascript } from "react-icons/di"
import { FaDocker, FaRust } from "react-icons/fa"
import {
  FaGithub,
  FaGolang,
  FaLinkedinIn,
  FaPython,
  FaRegHeart,
  FaXTwitter,
} from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { LuCalendarClock } from "react-icons/lu"
import { MdOutlineMail } from "react-icons/md"
import { RiJavaLine, RiNextjsLine, RiReactjsLine } from "react-icons/ri"
import {
  SiBuymeacoffee,
  SiCodeforces,
  SiDjango,
  SiGooglepay,
  SiNixos,
  SiPostman,
  SiRedis,
  SiSolana,
} from "react-icons/si"
import { TbBracketsAngle, TbBrandTypescript } from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"

type IconComponent = ComponentType<{ className?: string }>
export { profileImage }

// Global profile identity and social handles.
interface Profile {
  name: string
  shortName: string
  bio: string
  image: string
  githubUsername: string
  twitterHandle: string
  linkedinSlug: string
  codeforcesUsername: string
  calComUsername: string
  email: string
  website: string
  support: {
    githubSponsorsUsername: string
    buyMeACoffeeUsername: string
    solanaAddress: string
    upiId: string
  }
  aboutHtml: string
}

export const profile: Profile = {
  name: "Harshal Sawant",
  shortName: "Harshal",
  bio: "Software Engineer",
  image: profileImage.src,
  githubUsername: "c0d3h01",
  twitterHandle: "haarshalsawant",
  linkedinSlug: "haarshalsawant",
  codeforcesUsername: "c0d3h01",
  calComUsername: "c0d3h01",
  email: "harshalsawant.dev@gmail.com",
  website: "https://c0d3h01.tech",
  support: {
    githubSponsorsUsername: "c0d3h01",
    buyMeACoffeeUsername: "c0d3h01",
    solanaAddress: "BvVsoRAUvRpiuG1tVSb4kRRf4MJWsEvgBBSH3PUnVgFF",
    upiId: "harshalsawant.dev@okicici",
  },
  aboutHtml: `
  <p>
    Hi, I&apos;m Harshal Sawant, a software engineer based in Mumbai, India.
  </p>
  <p>
    I like building finance systems, HFT-style platforms, algorithm-heavy services, and <strong>low-latency distributed systems</strong> where reliability is non-negotiable and every millisecond matters.
  </p>
  <p>
    I&apos;m the kind of engineer who gets genuinely excited by profiling traces, clean architecture, and shaving off latency that most people can&apos;t even see. If a queue is backed up, I treat it like a mystery novel.
  </p>
`,
}

export const emailLink = `mailto:${profile.email}?subject=Interested%20in%20Hiring%20You`
export const resumeFilePath = "/assets/docs/resume.pdf"

// Public links shown on the home page.
interface SocialLink {
  id: number
  name: string
  href: string
  icon: IconComponent
}

export const footerSocialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Mail",
    href: `mailto:${profile.email}`,
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    href: `https://github.com/${profile.githubUsername}`,
    icon: FaGithub,
  },
  {
    id: 3,
    name: "Twitter",
    href: `https://x.com/intent/follow?screen_name=${profile.twitterHandle}`,
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    href: `https://www.linkedin.com/in/${profile.linkedinSlug}`,
    icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "Codeforces",
    href: `https://codeforces.com/profile/${profile.codeforcesUsername}`,
    icon: SiCodeforces,
  },
  {
    id: 6,
    name: "Cal.com",
    href: `https://cal.com/${profile.calComUsername}`,
    icon: LuCalendarClock,
  },
]

export const hireText =
  "I’m open to software engineering roles and freelance work where I can build reliable backend systems, developer tools, and performance-critical products."

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
    role: "Software Engineer",
    company: "Freelance",
    location: "Remote",
    duration: "2024 - Present",
    highlights: [
      "Designed and shipped backend services in Rust using Actix Web, with a focus on low-latency request handling and reliable production behavior.",
      "Built REST APIs and web application backends around HTTP fundamentals, including routing, middleware, authentication, validation, error handling, and API versioning.",
      "Worked across PostgreSQL, Redis, Docker, and CI/CD pipelines to deliver maintainable services with strong observability, performance tuning, and long-term support.",
    ],
  },
]

export type ProjectStatus = "active" | "building" | "archived"

// Source of truth for project cards across home and /projects.
export interface Project {
  id: number
  slug: string
  title: string
  status: ProjectStatus
  description: string
  highlights: string[]
  liveUrl: string
  githubUrl: string
  techStack: string[]
  bannerImage: string
  previewVideo: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "androidtweaker",
    title: "androidtweaker",
    status: "active",
    description:
      "Built and maintained a shell-driven Android optimization toolkit for rooted devices, focused on runtime tuning, repeatable tweak workflows, and easier long-term maintenance.",
    highlights: [
      "Built a shell-first automation workflow to apply performance tweaks consistently on rooted Android devices.",
      "Added repeatable profiles for CPU, memory, and background-task behavior to reduce manual trial-and-error.",
      "Kept the toolkit modular so tweaks can be added or removed safely during long-term maintenance.",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/c0d3h01/androidtweaker",
    techStack: ["Shell", "Android", "Linux", "Performance Tuning"],
    bannerImage: "/Images/projects/banners/androidtweaker-banner.svg",
    previewVideo: "",
  },
  {
    id: 2,
    slug: "coretaskoptimizer",
    title: "coretaskoptimizer",
    status: "building",
    description:
      "Implemented a native C++ root module that applies CPU affinity, scheduler policy, and I/O priority to critical Android system tasks with low-overhead boot-time execution.",
    highlights: [
      "Implemented a native module that applies task scheduling and affinity rules during boot with minimal overhead.",
      "Focused on critical system process prioritization to keep foreground responsiveness stable under load.",
      "Designed the rule pipeline for low-level Linux controls such as scheduler policy and I/O priority.",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/c0d3h01/coretaskoptimizer",
    techStack: ["C++", "CMake", "Linux Syscalls", "Kernel Optimization"],
    bannerImage: "/Images/projects/banners/coretaskoptimizer-banner.svg",
    previewVideo: "",
  },
  {
    id: 3,
    slug: "firuslab-obfussor",
    title: "firuslab/obfussor",
    status: "active",
    description:
      "Contributed to a cross-platform LLVM-based C/C++ obfuscation suite and worked on the Svelte + Tauri app workflow for job execution and protection metric review.",
    highlights: [
      "Contributed to the workflow that drives obfuscation jobs and surfaces protection metrics for review.",
      "Worked across the desktop stack with Svelte and Tauri to keep the operator experience clear and fast.",
      "Helped improve integration flow around LLVM-based transformations for practical day-to-day usage.",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/firuslab/obfussor",
    techStack: ["TypeScript", "Svelte", "Tauri", "Rust", "LLVM"],
    bannerImage: "/Images/projects/banners/obfussor-banner.svg",
    previewVideo: "",
  },
  {
    id: 4,
    slug: "nix-dotfiles",
    title: "nix-dotfiles",
    status: "archived",
    description:
      "Engineered a flake-driven NixOS + Home Manager setup with modular host profiles, Disko provisioning, and secure secret management for reproducible workstation bootstrap.",
    highlights: [
      "Structured hosts and modules to enable reproducible machine setup with flakes and Home Manager.",
      "Automated storage layout with Disko so fresh installations can be bootstrapped predictably.",
      "Integrated secrets handling with sops-nix to keep configuration secure while staying reproducible.",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/c0d3h01/nix-dotfiles",
    techStack: ["Nix", "Nix Flakes", "Home Manager", "sops-nix", "Disko"],
    bannerImage: "/Images/projects/banners/nix-dotfiles-banner.svg",
    previewVideo: "",
  },
]

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug)
}

interface Skill {
  id: number
  icon: IconComponent
  text: string
}

export const skills: Skill[] = [
  { id: 1, icon: FaGolang, text: "Go" },
  { id: 2, icon: FaRust, text: "Rust" },
  { id: 3, icon: TbBracketsAngle, text: "C++" },
  { id: 4, icon: FaPython, text: "Python" },
  { id: 5, icon: RiJavaLine, text: "Java" },
  { id: 6, icon: BsFiletypeSql, text: "SQL" },
  { id: 7, icon: IoLogoNodejs, text: "Node.js" },
  { id: 8, icon: SiDjango, text: "Django" },
  { id: 9, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 10, icon: SiRedis, text: "Redis" },
  { id: 11, icon: FaDocker, text: "Docker" },
  { id: 12, icon: VscTerminalLinux, text: "Linux" },
  { id: 13, icon: SiNixos, text: "Nix, NixOS" },
  { id: 14, icon: FaGithub, text: "GitHub Actions" },
  { id: 15, icon: SiPostman, text: "API Testing" },
  { id: 16, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 17, icon: DiJavascript, text: "JavaScript" },
  { id: 18, icon: RiReactjsLine, text: "React" },
  { id: 19, icon: RiNextjsLine, text: "Next.js" },
]

type SupportMethod =
  | {
      id: number
      label: string
      type: "link"
      href: string
      icon: IconComponent
    }
  | {
      id: number
      label: string
      type: "copy"
      value: string
      mobileHref?: string
      icon: IconComponent
    }

export const supportText =
  "If my open-source work, tools, or technical writing helps you, consider supporting me. It helps me keep building and sharing useful developer tools."

export const gpgFingerprint =
  "A7A7 A172 5FBF 10AB 04BF 1355 B424 2C21 BAF7 4B7C"
const upiPayLink = `upi://pay?pa=${encodeURIComponent(profile.support.upiId)}&pn=${encodeURIComponent(profile.name)}&cu=INR`

export const supportMethods: SupportMethod[] = [
  {
    id: 1,
    label: "GitHub Sponsors",
    type: "link",
    href: `https://github.com/sponsors/${profile.support.githubSponsorsUsername}`,
    icon: FaRegHeart,
  },
  {
    id: 2,
    label: "Buy Me a Coffee",
    type: "link",
    href: `https://buymeacoffee.com/${profile.support.buyMeACoffeeUsername}`,
    icon: SiBuymeacoffee,
  },
  {
    id: 3,
    label: "Solana",
    type: "copy",
    value: profile.support.solanaAddress,
    icon: SiSolana,
  },
  {
    id: 4,
    label: "Google Pay",
    type: "copy",
    value: profile.support.upiId,
    mobileHref: upiPayLink,
    icon: SiGooglepay,
  },
]

const normalizeSiteUrl = (url: string) => url.replace(/\/$/, "")
const isValidAbsoluteUrl = (url: string) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? ""

export const siteUrl =
  configuredSiteUrl && isValidAbsoluteUrl(configuredSiteUrl)
    ? normalizeSiteUrl(configuredSiteUrl)
    : normalizeSiteUrl(profile.website)
const siteTitle = profile.name
const siteDescription =
  "Portfolio of Harshal Sawant - Software Engineer focused on distributed systems, developer tooling, and high-performance software."
export const defaultOgImage = ""

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
    "Distributed Systems",
    "TypeScript",
    "Node.js",
    "High Performance Systems",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      {
        url: "/Images/icon/icon.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
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
        url: defaultOgImage,
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
    images: [defaultOgImage],
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
