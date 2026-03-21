import {
	FaGithub,
	FaLinkedinIn,
	FaRegHeart,
	FaXTwitter,
} from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import {
	SiBuymeacoffee,
	SiCodeforces,
	SiGooglepay,
	SiSolana,
} from "react-icons/si";
import type { IconComponent } from "@/data/github";
import { profile } from "@/data/github";

export const emailLink = `mailto:${profile.email}?subject=Interested%20in%20Hiring%20You`;
export const resumeFilePath = "/assets/docs/resume.pdf";

// Public links shown on the home page.
interface SocialLink {
	id: number;
	name: string;
	href: string;
	icon: IconComponent;
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
];

export const hireText =
	"I'm open to software engineering roles and freelance work where I can build reliable backend systems, developer tools, and performance-critical products.";

type SupportMethod =
	| {
			id: number;
			label: string;
			type: "link";
			href: string;
			icon: IconComponent;
	  }
	| {
			id: number;
			label: string;
			type: "copy";
			value: string;
			mobileHref?: string;
			icon: IconComponent;
	  };

export const supportText =
	"If my open-source work, tools, or technical writing helps you, consider supporting me. It helps me keep building and sharing useful developer tools.";

export const gpgFingerprint =
	"A7A7 A172 5FBF 10AB 04BF 1355 B424 2C21 BAF7 4B7C";
const upiPayLink = `upi://pay?pa=${encodeURIComponent(profile.support.upiId)}&pn=${encodeURIComponent(profile.name)}&cu=INR`;

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
];
