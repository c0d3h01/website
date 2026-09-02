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

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};
export const revalidate = 300;

const HomePageRoute = () => {
	return (
		<div className="section-stack flex flex-col gap-4">
			<GitHubProfileHeader />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Writings />
			<Hire />
			<Support />
			<Footer />
		</div>
	);
};

export default HomePageRoute;
