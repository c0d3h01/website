import type { Metadata } from "next"
import type { ComponentType } from "react"
import { BiLogoPostgresql } from "react-icons/bi"
import { BsFiletypeSql } from "react-icons/bs"
import { DiJavascript } from "react-icons/di"
import { FaDocker } from "react-icons/fa"
import { FaGithub, FaGitAlt, FaLinkedinIn, FaPython, FaRegHeart, FaXTwitter } from "react-icons/fa6"
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
  SiDjango,
  SiExpress,
  SiLeetcode,
  SiMongodb,
  SiPaytm,
  SiPostman,
  SiRedis,
  SiSolana,
  SiVercel,
} from "react-icons/si"
import { TbBrandCpp, TbBrandTypescript } from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"

export const profile = {
  name: "Harshal Sawant",
  shortName: "Harshal",
  bio: "Software Engineer",
  image: "/assets/Images/pfp/pfp.png",
  githubUsername: "c0d3h01",
  twitterHandle: "haarshalsawant",
  linkedinSlug: "haarshalsawant",
  leetcodeUsername: "c0d3h01",
  email: "harshalsawant.dev@gmail.com",
  website: "https://c0d3h01.tech",
  support: {
    githubSponsorsUsername: "c0d3h01",
    buyMeACoffeeUsername: "c0d3h01",
    solanaAddress: "BvVsoRAUvRpiuG1tVSb4kRRf4MJWsEvgBBSH3PUnVgFF",
    paytmUpiId: "8828166801@ptsbi",
  },
  about: `
  <p>
    Hi, I&apos;m Harshal Sawant, a product-focused software engineer based in Mumbai, India.
  </p>
  <p>
    I enjoy building reliable software, <strong>improving performance</strong>, and contributing to open-source projects that solve practical engineering problems.
  </p>
`,
} as const

export const userImage = profile.image
export const userName = profile.name
export const userShortName = profile.shortName
export const userBio = profile.bio
export const userAbout = profile.about

export const emailLink = `mailto:${profile.email}?subject=Interested%20in%20Hiring%20You`

export const resumeFilePath = "/assets/docs/resume.pdf"

export const userLink = [
  {
    id: 1,
    name: "Github",
    link: `https://github.com/${profile.githubUsername}`,
    icon: FaGithub,
  },
  {
    id: 2,
    name: "Twitter",
    link: `https://x.com/intent/follow?screen_name=${profile.twitterHandle}`,
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: `https://www.linkedin.com/in/${profile.linkedinSlug}`,
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    name: "LeetCode",
    link: `https://leetcode.com/u/${profile.leetcodeUsername}`,
    icon: SiLeetcode,
  },
]

export const userFooterLink = [
  {
    id: 1,
    name: "Mail",
    link: `mailto:${profile.email}`,
    icon: MdOutlineMail,
    iconClassName: "text-[#EA4335]",
  },
  {
    id: 2,
    name: "Github",
    link: `https://github.com/${profile.githubUsername}`,
    icon: FaGithub,
    iconClassName: "text-zinc-100",
  },
  {
    id: 3,
    name: "Twitter",
    link: `https://x.com/intent/follow?screen_name=${profile.twitterHandle}`,
    icon: FaXTwitter,
    iconClassName: "text-zinc-100",
  },
  {
    id: 4,
    name: "LinkedIn",
    link: `https://www.linkedin.com/in/${profile.linkedinSlug}`,
    icon: FaLinkedinIn,
    iconClassName: "text-[#0A66C2]",
  },
  {
    id: 5,
    name: "LeetCode",
    link: `https://leetcode.com/u/${profile.leetcodeUsername}`,
    icon: SiLeetcode,
    iconClassName: "text-[#FFA116]",
  },
]

export const hireText =
  "I’m open to software engineering roles and freelance work where I can build reliable backend systems, developer tools, and cloud-native products."

export const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Northstar Labs",
    location: "Austin, TX",
    duration: "May 2023 - Present",
    highlights: [
      "Led migration of core APIs from a monolith to services, reducing average response time by 38%.",
      "Designed event-driven workflows with Kafka and Redis for billing and notification pipelines.",
      "Introduced CI quality gates and integration tests, reducing production rollback frequency by 45%.",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Bluewave Commerce",
    location: "Remote",
    duration: "Jan 2021 - Apr 2023",
    highlights: [
      "Built order management features used by 120k+ monthly users across web and mobile clients.",
      "Delivered internal admin tooling that cut manual support tasks by 12 hours per week.",
      "Partnered with product and design teams to ship 20+ roadmap features with predictable release cadence.",
    ],
  },
  {
    id: 3,
    role: "Junior Backend Engineer",
    company: "Harbor Data Systems",
    location: "Denver, CO",
    duration: "Jun 2018 - Dec 2020",
    highlights: [
      "Implemented REST APIs and SQL reporting endpoints for operations dashboards.",
      "Improved test coverage from 42% to 71% across critical backend modules.",
      "Automated deployment checks with GitHub Actions to reduce release defects.",
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: "androidtweaker",
    status: true,
    content:
      "Built and maintained a shell-driven Android optimization toolkit for rooted devices, focused on runtime tuning, repeatable tweak workflows, and easier long-term maintenance.",
    url: "",
    github: "https://github.com/c0d3h01/androidtweaker",
    skill: ["Shell", "Android", "Linux", "Performance Tuning"],
    preview: "",
  },
  {
    id: 2,
    title: "coretaskoptimizer",
    status: true,
    content:
      "Implemented a native C++ root module that applies CPU affinity, scheduler policy, and I/O priority to critical Android system tasks with low-overhead boot-time execution.",
    url: "",
    github: "https://github.com/c0d3h01/coretaskoptimizer",
    skill: ["C++", "CMake", "Linux Syscalls", "Kernel Optimization"],
    preview: "",
  },
  {
    id: 3,
    title: "firuslab/obfussor",
    status: true,
    content:
      "Contributed to a cross-platform LLVM-based C/C++ obfuscation suite and worked on the Svelte + Tauri app workflow for job execution and protection metric review.",
    url: "",
    github: "https://github.com/firuslab/obfussor",
    skill: ["TypeScript", "Svelte", "Tauri", "Rust", "LLVM"],
    preview: "",
  },
  {
    id: 4,
    title: "nix-dotfiles",
    status: true,
    content:
      "Engineered a flake-driven NixOS + Home Manager setup with modular host profiles, Disko provisioning, and secure secret management for reproducible workstation bootstrap.",
    url: "",
    github: "https://github.com/c0d3h01/nix-dotfiles",
    skill: ["Nix", "Nix Flakes", "Home Manager", "sops-nix", "Disko"],
    preview: "",
  },
]

export const skills = [
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

type SupportMethod =
  | {
      id: number
      label: string
      type: "link"
      href: string
      icon: ComponentType<{ className?: string }>
      iconClassName: string
    }
  | {
      id: number
      label: string
      type: "copy"
      value: string
      icon: ComponentType<{ className?: string }>
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
const siteTitle = `${profile.name}`
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
    siteName: "Harshal Sawant",
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
