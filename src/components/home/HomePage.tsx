"use client"

import AnimatedReveal from "@/components/ui/AnimatedReveal"
import Screen from "@/layout/Screen"
import AboutSection from "./AboutSection"
import ExperienceSection from "./ExperienceSection"
import FooterSection from "./FooterSection"
import HireSection from "./HireSection"
import ProfileHeader from "./ProfileHeader"
import ProjectsSection from "./ProjectsSection"
import SocialSection from "./SocialSection"
import SkillsSection from "./SkillsSection"
import SupportSection from "./SupportSection"
import WritingsSection from "./WritingsSection"

const HomePage = () => {
  return (
    <Screen>
      <div className="section-stack flex flex-col gap-5">
        <AnimatedReveal delay={0.15}>
          <ProfileHeader />
        </AnimatedReveal>
        <AnimatedReveal delay={0.25}>
          <AboutSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.3}>
          <SocialSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.35}>
          <ExperienceSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.4}>
          <HireSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.5}>
          <SkillsSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.6}>
          <ProjectsSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.7}>
          <WritingsSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.8}>
          <SupportSection />
        </AnimatedReveal>
      </div>
      <AnimatedReveal delay={1.1}>
        <FooterSection />
      </AnimatedReveal>
    </Screen>
  )
}

export default HomePage
