import profileImage from "@public/images/pfp.webp";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;
export { profileImage };

// Global profile identity and social handles.
interface Profile {
	name: string;
	shortName: string;
	bio: string;
	image: string;
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
		solanaAddress: string;
		upiId: string;
	};
	aboutHtml: string;
}

export type { IconComponent };

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
	website: "https://www.c0d3h01.tech",
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
`,
};
