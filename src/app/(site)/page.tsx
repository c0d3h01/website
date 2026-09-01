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
	title: "Software Engineer",
	alternates: { canonical: "/" },
};
export const revalidate = 300;

const HomePageRoute = () => (
	<div className="section-stack flex flex-col">
		<GitHubProfileHeader />
		<Reveal delay={0.08}>
			<About />
		</Reveal>
		<Reveal delay={0.08}>
			<Experience />
		</Reveal>
		<Reveal delay={0.08}>
			<Skills />
		</Reveal>
		<Reveal delay={0.08}>
			<div id="work">
				<Projects />
			</div>
		</Reveal>
		<Reveal delay={0.08}>
			<div id="writing">
				<Writings />
			</div>
		</Reveal>
		<Reveal delay={0.08}>
			<div id="contact">
				<Hire />
			</div>
		</Reveal>
		<Reveal delay={0.08}>
			<Support />
		</Reveal>
		<Reveal delay={0.08}>
			<Footer />
		</Reveal>
	</div>
);
export default HomePageRoute;
