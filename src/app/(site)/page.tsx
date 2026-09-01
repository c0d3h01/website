import type { Metadata } from "next";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import GitHubProfileHeader from "@/components/sections/githubProfileHeader";
import Hire from "@/components/sections/hire";
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
		<div className="section-stack flex flex-col gap-4">
			<div id="home">
				<GitHubProfileHeader />
			</div>
			<Reveal id="about" delay={0.1}>
				<About />
			</Reveal>
			<Reveal id="experience" delay={0.1}>
				<Experience />
			</Reveal>
			<Reveal id="skills" delay={0.1}>
				<Skills />
			</Reveal>
			<Reveal id="projects" delay={0.1}>
				<Projects />
			</Reveal>
			<Reveal id="blog" delay={0.1}>
				<Writings />
			</Reveal>
			<Reveal id="hire" delay={0.1}>
				<Hire />
			</Reveal>
			<Reveal id="support" delay={0.1}>
				<Support />
			</Reveal>
			<Reveal delay={0.1}>
				<Footer />
			</Reveal>
		</div>
	);
};

export default HomePageRoute;
