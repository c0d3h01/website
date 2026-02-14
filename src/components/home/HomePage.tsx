import AboutSection from "@/components/home/AboutSection"
import ExperienceSection from "@/components/home/ExperienceSection"
import FooterSection from "@/components/home/FooterSection"
import HireSection from "@/components/home/HireSection"
import ProfileHeader from "@/components/home/ProfileHeader"
import ProjectsSection from "@/components/home/ProjectsSection"
import SocialSection from "@/components/home/SocialSection"
import SkillsSection from "@/components/home/SkillsSection"
import SupportSection from "@/components/home/SupportSection"
import WritingsSection from "@/components/home/WritingsSection"
import Screen from "@/layout/Screen"
import { profile } from "@/data"

const HomePage = () => {
  return (
    <Screen>
      <div className="section-stack flex flex-col gap-5">
        {/* Section order matches how visitors usually scan a portfolio. */}
        <ProfileHeader
          userName={profile.name}
          userBio={profile.bio}
          userImage={profile.image}
        />
        <AboutSection />
        <SocialSection />
        <ExperienceSection />
        <HireSection />
        <SkillsSection />
        <ProjectsSection />
        <WritingsSection />
        <SupportSection />
      </div>
      <FooterSection />
    </Screen>
  )
}

export default HomePage
