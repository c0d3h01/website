import dynamic from "next/dynamic";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import FooterSection from "@/components/home/FooterSection";
import GitHubProfileHeader from "@/components/home/GitHubProfileHeader";
import HireSection from "@/components/home/HireSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import QuotesSection from "@/components/home/QuotesSection";
import SkillsSection from "@/components/home/SkillsSection";
import SocialSection from "@/components/home/SocialSection";
import SupportSection from "@/components/home/SupportSection";
import Screen from "@/layout/Screen";

// Dynamic Lazy loader - Havy context loader/>
const WritingsSection = dynamic(
	() => import("@/components/home/WritingsSection"),
	{
		loading: () => <div className="h-48 anmate-pulse rounded-x1 bg-muted" />,
	},
);

const HomePage = () => {
	return (
		<Screen>
			<div className="section-stack flex flex-col gap-5">
				<GitHubProfileHeader />
				<SocialSection />
				<AboutSection />
				<ExperienceSection />
				<HireSection />
				<SkillsSection />
				<ProjectsSection />
				<WritingsSection />
				<SupportSection />
				<QuotesSection />
				<FooterSection />
			</div>
		</Screen>
	);
};

export default HomePage;
