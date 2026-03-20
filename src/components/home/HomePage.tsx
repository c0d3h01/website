import AboutSection from "@/components/home/AboutSection"
import ExperienceSection from "@/components/home/ExperienceSection"
import FooterSection from "@/components/home/FooterSection"
import GitHubProfileHeader from "@/components/home/GitHubProfileHeader"
import HireSection from "@/components/home/HireSection"
import ProjectsSection from "@/components/home/ProjectsSection"
import QuotesSection from "@/components/home/QuotesSection"
import SkillsSection from "@/components/home/SkillsSection"
import SocialSection from "@/components/home/SocialSection"
import SupportSection from "@/components/home/SupportSection"
import WritingsSection from "@/components/home/WritingsSection"
import Screen from "@/layout/Screen"

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
  )
}

export default HomePage
