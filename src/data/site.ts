import type { Metadata } from "next";
import type { ComponentType } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaDocker, FaRust } from "react-icons/fa";
import { FaGithub, FaGolang, FaPython } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { RiJavaLine, RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import {
    SiDjango,
    SiNixos,
    SiPostman,
    SiRedis,
} from "react-icons/si";
import { TbBracketsAngle, TbBrandTypescript } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";
import { profile } from "@/data/github";

type IconComponent = ComponentType<{ className?: string }>;

interface Skill {
    id: number;
    icon: IconComponent;
    text: string;
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
