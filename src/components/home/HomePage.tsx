import { Suspense } from "react";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import FooterSection from "@/components/home/FooterSection";
import GitHubProfileHeader from "@/components/home/GitHubProfileHeader";
import HireSection from "@/components/home/HireSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import SupportSection from "@/components/home/SupportSection";
import WritingsSection from "@/components/home/WritingsSection";
import Screen from "@/layout/Screen";

const HomePage = () => {
	return (
		<Screen>
			<div className="section-stack flex flex-col gap-4">
				<GitHubProfileHeader />
				<AboutSection />
				<ExperienceSection />
				<SkillsSection />
				<ProjectsSection />
				<Suspense
					fallback={<div className="h-48 animate-pulse rounded-xl bg-muted" />}
				>
					<WritingsSection />
				</Suspense>
				<HireSection />
				<SupportSection />
				<FooterSection />
			</div>
		</Screen>
	);
};

export default HomePage;
