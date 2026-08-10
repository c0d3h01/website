import { Bitcoin, Heart, Mail } from "lucide-react";
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
	FaXTwitter,
} from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import {
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
		bitcoinAddress: string;
		ethereumAddress: string;
		solanaAddress: string;
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
	website: "https://harshalsawant.vercel.app",
	support: {
		githubSponsorsUsername: "c0d3h01",
		bitcoinAddress: "bc1qdy2acxf0jk4j94stnmccnkyk5avfhqqc09xjvl",
		ethereumAddress: "0x87EdD72c510ecc537B167FF21ef726B62f7f600B",
		solanaAddress: "4RdWWahnTrrtFfFCWy2wgznYGcJseCotphaPbcpSnR8H",
	},
	aboutHtml: `
		<p>I'm Harshal Sawant, a backend and systems engineer based in Mumbai, India. I got into programming the hard way - through Android rooting, kernel modules, and digging into Linux internals - and never really stopped going deeper.</p>
		<p>Today I build low-latency backend services, distributed systems, and developer tooling, mostly in Rust and Go. I care about things that most people abstract away: scheduler behavior, memory pressure, syscall overhead, and what actually happens under the hood when your system is under load.</p>
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
// Projects
// ---------------------------------------------------------------------------

export type ProjectStatus = "active" | "building" | "archived";

export interface Project {
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
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
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
	{
		slug: "url-shortener",
		title: "shrty",
		status: "building",
		description:
			"A URL shortener with click analytics, geo-IP lookup, and a write-heavy cache layer. Designed to handle viral-link hot-key scenarios without melting Redis.",
		highlights: [
			"REST API in Go (Fiber or Chi) for short-link creation, redirect, and click-event ingestion with rate-limited public endpoints.",
			"Base62 short-code generator with nanoid fallback and collision check against the `links` table before insert.",
			"Postgres schema for links, clicks, and referrers, with partitioning on the clicks table by month to bound retention cost.",
			"Redis cache in front of Postgres for redirect lookups, with jittered TTLs and read-through replicas to absorb hot-link spikes.",
			"Asynchronous click-event ingest path: redirect returns 302 immediately, click is enqueued via Redis Streams and batched into ClickHouse.",
			"Geo-IP resolution via MaxMind GeoLite2 served from a Cloudflare Worker edge cache to keep lookup latency under 5 ms.",
			"Observability with OpenTelemetry traces, Prometheus metrics (`shrty_redirects_total`, `shrty_cache_hit_ratio`), and pprof in non-prod.",
			"Docker Compose stack: app, Postgres 16, Redis 7, ClickHouse, and a seed script that loads 1 M synthetic links for load tests.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: [
			"Go",
			"Postgres",
			"Redis",
			"ClickHouse",
			"OpenTelemetry",
			"Docker",
			"Cloudflare Workers",
		],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	{
		slug: "api-gateway-token-bucket",
		title: "ratelock",
		status: "building",
		description:
			"A per-tenant API gateway built around atomic Redis Lua token buckets, plan-aware quotas, per-route cost weights, and standard X-RateLimit response headers.",
		highlights: [
			"Edge gateway in Go using `net/http` reverse proxy mode, terminating TLS and forwarding to upstream service meshes.",
			"Atomic token-bucket implementation in Redis Lua (HSET of tokens + last-refill, EVAL'd per request) to avoid check-then-set races.",
			"Plan-aware quota engine: `free`, `pro`, `enterprise` plans each carry burst capacity, refill rate, and per-route cost weights.",
			"Per-route weight table so cheap routes (`GET /healthz`) cost 0 tokens while expensive routes (`POST /reports`) cost 50 tokens.",
			"Standard response headers on every request: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, plus `Retry-After` on 429.",
			"Tenant identification via JWT claim, API key header, or `X-Tenant-Id` for service-to-service traffic, all validated against a Redis cache.",
			"`GET /v1/me/limits` debug endpoint that returns current bucket state, plan tier, and refill schedule for the calling tenant.",
			"Load-tested with k6 against 1k simulated tenants, including one noisy neighbor scenario to validate isolation.",
		],
		liveUrl: "",
		githubUrl: "",
		techStack: [
			"Go",
			"Redis",
			"Lua",
			"Postgres",
			"k6",
			"OpenTelemetry",
			"Docker",
		],
		bannerImage: "/images/banners/projects.gif",
		previewVideo: "",
	},
	// ponytail: 8 additional planned projects were commented out below. Re-enable
	// by uncommenting the desired block when the project ships; git history has
	// the original content if anything older is needed.
];

export const getProjectBySlug = (slug: string) =>
	projects.find((project) => project.slug === slug);

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export interface Experience {
	role: string;
	company: string;
	location: string;
	duration: string;
	isCurrent: boolean;
	highlights: string[];
}

export const experiences: Experience[] = [
	{
		role: "Software Engineer",
		company: "Freelance",
		location: "Remote",
		duration: "2024 - Present",
		isCurrent: true,
		highlights: [
			"Built backend services in Rust using Actix Web, focused on fast and reliable requests.",
			"Built REST APIs and backends, handling routing, auth, validation, and errors.",
			"Used PostgreSQL, Redis, Docker, and CI/CD to keep services stable and easy to maintain.",
		],
	},
];

// ---------------------------------------------------------------------------
// Social, hire + support
// ---------------------------------------------------------------------------

export const emailLink = `mailto:${profile.email}?subject=Interested%20in%20Hiring%20You`;
export const resumeFilePath = "/public/docs/harshal_sawant-resume.pdf";

interface SocialLink {
	name: string;
	href: string;
	icon: IconComponent;
}

export const SocialLinks: SocialLink[] = [
	{
		name: "Email",
		href: `mailto:${profile.email}`,
		icon: Mail,
	},
	{
		name: "GitHub",
		href: `https://github.com/${profile.githubUsername}`,
		icon: FaGithub,
	},
	{
		name: "X (Twitter)",
		href: `https://x.com/intent/follow?screen_name=${profile.twitterHandle}`,
		icon: FaXTwitter,
	},
	{
		name: "LinkedIn",
		href: `https://www.linkedin.com/in/${profile.linkedinSlug}`,
		icon: FaLinkedinIn,
	},
];

export const hireText =
	"I'm open to software engineering roles and freelance work where I can build reliable backend systems, developer tools, and performance-critical products.";

interface SupportLink {
	label: string;
	href: string;
	icon: IconComponent;
}

export interface CryptoDonationOption {
	name: string;
	shortName: string;
	address: string;
	icon: IconComponent;
}

export const supportText =
	"If my open-source work, tools, or technical writing helps you, consider supporting me. It helps me keep building and sharing useful developer tools.";

export const supportMethods: SupportLink[] = [
	{
		label: "GitHub Sponsors",
		href: `https://github.com/sponsors/${profile.support.githubSponsorsUsername}`,
		icon: Heart,
	},
];

export const cryptoDonationOptions: CryptoDonationOption[] = [
	{
		name: "Bitcoin",
		shortName: "BTC",
		address: profile.support.bitcoinAddress,
		icon: Bitcoin,
	},
	{
		name: "Ethereum",
		shortName: "ETH",
		address: profile.support.ethereumAddress,
		icon: SiEthereum,
	},
	{
		name: "Solana",
		shortName: "SOL",
		address: profile.support.solanaAddress,
		icon: SiSolana,
	},
];
