import type { Metadata } from "next";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Hire from "@/components/sections/hire";
import ProfileHeader from "@/components/sections/profileHeader";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Support from "@/components/sections/support";
import Writings from "@/components/sections/writings";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};
export const revalidate = 300;

const HomePageRoute = () => {
	return (
		<div className="section-stack">
			<ProfileHeader />
			<Reveal delay={0.1}>
				<About />
			</Reveal>
			<Reveal delay={0.1}>
				<Experience />
			</Reveal>
			<Reveal delay={0.1}>
				<Skills />
			</Reveal>
			<Reveal delay={0.1}>
				<Projects />
			</Reveal>
			<Reveal delay={0.1}>
				<Writings />
			</Reveal>
			<Reveal delay={0.1}>
				<Hire />
			</Reveal>
			<Reveal delay={0.1}>
				<Support />
			</Reveal>
			<Reveal delay={0.1}>
				<Footer />
			</Reveal>
		</div>
	);
};

export default HomePageRoute;
