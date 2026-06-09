import { profile } from "@/data/github";
import type { Metadata } from "next";
import type { ComponentType } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaDocker, FaRust } from "react-icons/fa";
import { FaGithub, FaGolang, FaPython } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { SiDjango, SiNixos, SiPostman } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";

type IconComponent = ComponentType<{ className?: string }>;

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
export const defaultOgImage = "/images/icon.png";

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
				url: "/images/icon.png",
				type: "image/png",
			},
		],
		shortcut: [
			{
				url: "/images/icon.png",
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
};
