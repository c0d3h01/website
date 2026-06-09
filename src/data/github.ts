import profileImage from "@public/images/pfp.webp";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

export { profileImage };

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
		bitcoinAddress: string;
		ethereumAddress: string;
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
