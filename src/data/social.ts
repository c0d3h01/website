import type { IconComponent } from "@/data/github";
import { profile } from "@/data/github";
import {
	FaGithub,
	FaLinkedinIn,
	FaRegHeart,
	FaXTwitter,
} from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SiBitcoin, SiBuymeacoffee, SiCodeforces, SiEthereum, SiSolana } from "react-icons/si";

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
	{
		id: 5,
		name: "Codeforces",
		href: `https://codeforces.com/profile/${profile.codeforcesUsername}`,
		icon: SiCodeforces,
	},
	{
		id: 6,
		name: "Calendar",
		href: `https://cal.com/${profile.calComUsername}`,
		icon: LuCalendarClock,
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
