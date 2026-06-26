import type { Metadata } from "next";
import type { ComponentType } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaDocker, FaRust } from "react-icons/fa";
import {
	FaGithub,
	FaGolang,
	FaLinkedinIn,
	FaPython,
	FaRegHeart,
	FaXTwitter,
} from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import {
	SiBitcoin,
	SiBuymeacoffee,
	SiDjango,
	SiEthereum,
	SiNixos,
	SiPostman,
	SiSolana,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";

export type IconComponent = ComponentType<{ className?: string }>;

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

interface Profile {
	name: string;
	shortName: string;
	bio: string;
	githubUsername: string;
	twitterHandle: string;
	linkedinSlug: string;
	codeforcesUsername: string;
	calComUsername: string;
	email: string;
	website: string;
	support: {
		githubSponsorsUsername: string;
		buyMeACoffeeUsername: string;
		bitcoinAddress: string;
		ethereumAddress: string;
		solanaAddress: string;
		upiId: string;
	};
	aboutHtml: string;
}

export const profile: Profile = {
	name: "Harshal Sawant",
	shortName: "Harshal",
	bio: "Software Engineer",
	githubUsername: "c0d3h01",
	twitterHandle: "haarshalsawant",
	linkedinSlug: "haarshalsawant",
	codeforcesUsername: "c0d3h01",
	calComUsername: "c0d3h01",
	email: "harshalsawant.dev@gmail.com",
	website: "https://www.c0d3h01.tech",
	support: {
		githubSponsorsUsername: "c0d3h01",
		buyMeACoffeeUsername: "c0d3h01",
		bitcoinAddress: "bc1qdy2acxf0jk4j94stnmccnkyk5avfhqqc09xjvl",
		ethereumAddress: "0x87EdD72c510ecc537B167FF21ef726B62f7f600B",
		solanaAddress: "4RdWWahnTrrtFfFCWy2wgznYGcJseCotphaPbcpSnR8H",
		upiId: "harshalsawant.dev@okicici",
	},
	aboutHtml: `
  <p>
		I&apos;m Harshal Sawant, a backend and systems engineer based in Mumbai, India. I got into programming the hard way - through Android rooting, kernel modules, and digging into Linux internals - and never really stopped going deeper.
  </p>
  <p>
		Today I build low-latency backend services, distributed systems, and developer tooling, mostly in Rust and Go. I care about things that most people abstract away: scheduler behavior, memory pressure, syscall overhead, and what actually happens under the hood when your system is under load.
	</p>
`,
};

/**
 * Tokenless profile picture: GitHub serves the user's avatar directly from
 * `github.com/<username>.png` without authentication, no API call, no quota.
 */
export const profileAvatarUrl = `https://github.com/${profile.githubUsername}.png`;

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

interface Skill {
	icon: IconComponent;
	name: string;
}

export const skills: Skill[] = [
	{ icon: FaGolang, name: "Go" },
	{ icon: FaRust, name: "Rust" },
	{ icon: FaPython, name: "Python" },
	{ icon: BsFiletypeSql, name: "SQL" },
	{ icon: IoLogoNodejs, name: "Node.js" },
	{ icon: SiDjango, name: "Django" },
	{ icon: BiLogoPostgresql, name: "PostgreSQL" },
	{ icon: FaDocker, name: "Docker" },
	{ icon: VscTerminalLinux, name: "Linux" },
	{ icon: SiNixos, name: "Nix, NixOS" },
	{ icon: FaGithub, name: "GitHub Actions" },
	{ icon: SiPostman, name: "API Testing" },
	{ icon: TbBrandTypescript, name: "TypeScript" },
	{ icon: DiJavascript, name: "JavaScript" },
	{ icon: RiReactjsLine, name: "React" },
	{ icon: RiNextjsLine, name: "Next.js" },
];

// ---------------------------------------------------------------------------
// SEO / site metadata
// ---------------------------------------------------------------------------

const normalizeSiteUrl = (url: string) => url.replace(/\/$/, "");

const isValidAbsoluteUrl = (url: string) => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";

export const siteUrl =
	configuredSiteUrl && isValidAbsoluteUrl(configuredSiteUrl)
		? normalizeSiteUrl(configuredSiteUrl)
		: normalizeSiteUrl(profile.website);

const siteTitle = profile.name;
const siteDescription =
	"Portfolio of Harshal Sawant - Software Engineer focused on distributed systems, developer tooling, and high-performance software.";

export const defaultOgImage = "/favicon.ico";

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
		icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
		shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
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
};

// ---------------------------------------------------------------------------
// Blog metadata shape
// ---------------------------------------------------------------------------

export interface BlogPostMeta {
	slug: string;
	title: string;
	description: string;
	date: string;
}

// ---------------------------------------------------------------------------
// Projects (single source of truth — no live API metrics)
// ---------------------------------------------------------------------------

export type ProjectStatus = "active" | "building" | "archived";

export interface Project {
	id: number;
	slug: string;
	title: string;
	status: ProjectStatus;
	description: string;
	highlights: string[];
	liveUrl: string;
	githubUrl: string;
	techStack: string[];
	bannerImage: string;
	previewVideo: string;
}

export const projects: Project[] = [
	{
		id: 1,
		slug: "androidtweaker",
		title: "androidtweaker",
		status: "archived",
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
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		id: 2,
		slug: "coretaskoptimizer",
		title: "coretaskoptimizer",
		status: "active",
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
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
];

export const getProjectBySlug = (slug: string) =>
	projects.find((project) => project.slug === slug);

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export interface Experience {
	id: number;
	role: string;
	company: string;
	location: string;
	duration: string;
	isCurrent: boolean;
	highlights: string[];
}

export const experiences: Experience[] = [
	{
		id: 1,
		role: "Software Engineer",
		company: "Freelance",
		location: "Remote",
		duration: "2024 - Present",
		isCurrent: true,
		highlights: [
			"Designed and shipped backend services in Rust using Actix Web, with a focus on low-latency request handling and reliable production behavior.",
			"Built REST APIs and web application backends around HTTP fundamentals, including routing, middleware, authentication, validation, error handling, and API versioning.",
			"Worked across PostgreSQL, Redis, Docker, and CI/CD pipelines to deliver maintainable services with strong observability, performance tuning, and long-term support.",
		],
	},
];

// ---------------------------------------------------------------------------
// Social, hire + support
// ---------------------------------------------------------------------------

export const emailLink = `mailto:${profile.email}?subject=Interested%20in%20Hiring%20You`;
export const resumeFilePath = "/assets/docs/resume.pdf";

interface SocialLink {
	id: number;
	name: string;
	href: string;
	icon: IconComponent;
}

export const SocialLinks: SocialLink[] = [
	{
		id: 1,
		name: "Email",
		href: `mailto:${profile.email}`,
		icon: MdOutlineMail,
	},
	{
		id: 2,
		name: "GitHub",
		href: `https://github.com/${profile.githubUsername}`,
		icon: FaGithub,
	},
	{
		id: 3,
		name: "X (Twitter)",
		href: `https://x.com/intent/follow?screen_name=${profile.twitterHandle}`,
		icon: FaXTwitter,
	},
	{
		id: 4,
		name: "LinkedIn",
		href: `https://www.linkedin.com/in/${profile.linkedinSlug}`,
		icon: FaLinkedinIn,
	},
];

export const hireText =
	"I'm open to software engineering roles and freelance work where I can build reliable backend systems, developer tools, and performance-critical products.";

interface SupportLink {
	id: number;
	label: string;
	href: string;
	icon: IconComponent;
}

export interface CryptoDonationOption {
	id: number;
	name: string;
	shortName: string;
	address: string;
	icon: IconComponent;
}

export const supportText =
	"If my open-source work, tools, or technical writing helps you, consider supporting me. It helps me keep building and sharing useful developer tools.";

export const supportMethods: SupportLink[] = [
	{
		id: 1,
		label: "GitHub Sponsors",
		href: `https://github.com/sponsors/${profile.support.githubSponsorsUsername}`,
		icon: FaRegHeart,
	},
	{
		id: 2,
		label: "Buy Me a Coffee",
		href: `https://buymeacoffee.com/${profile.support.buyMeACoffeeUsername}`,
		icon: SiBuymeacoffee,
	},
];

export const cryptoDonationOptions: CryptoDonationOption[] = [
	{
		id: 1,
		name: "Bitcoin",
		shortName: "BTC",
		address: profile.support.bitcoinAddress,
		icon: SiBitcoin,
	},
	{
		id: 2,
		name: "Ethereum",
		shortName: "ETH",
		address: profile.support.ethereumAddress,
		icon: SiEthereum,
	},
	{
		id: 3,
		name: "Solana",
		shortName: "SOL",
		address: profile.support.solanaAddress,
		icon: SiSolana,
	},
];