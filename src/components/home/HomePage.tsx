import AboutSection from "@/components/home/AboutSection"
import ExperienceSection from "@/components/home/ExperienceSection"
import FooterSection from "@/components/home/FooterSection"
import HireSection from "@/components/home/HireSection"
import ProfileHeader from "@/components/home/ProfileHeader"
import ProjectsSection from "@/components/home/ProjectsSection"
import SkillsSection from "@/components/home/SkillsSection"
import SocialSection from "@/components/home/SocialSection"
import SupportSection from "@/components/home/SupportSection"
import WritingsSection from "@/components/home/WritingsSection"
import { profile, profileImage } from "@/data"
import Screen from "@/layout/Screen"

const HomePage = () => {
  return (
    <Screen>
      <div className="section-stack flex flex-col gap-5">
        <ProfileHeader
          userName={profile.name}
          userBio={profile.bio}
          userImage={profileImage}
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
