"use client"

import AnimatedReveal from "@/components/ui/AnimatedReveal"
import Screen from "@/layout/Screen"
import AboutSection from "./AboutSection"
import FooterSection from "./FooterSection"
import HireSection from "./HireSection"
import ProfileHeader from "./ProfileHeader"
import ProjectsSection from "./ProjectsSection"
import QuoteSection from "./QuoteSection"
import SkillsSection from "./SkillsSection"
import SupportSection from "./SupportSection"
import WritingsSection from "./WritingsSection"

const HomePage = () => {
  return (
    <Screen>
      <div className="flex flex-col gap-5">
        <AnimatedReveal delay={0.15}>
          <ProfileHeader />
        </AnimatedReveal>
        <AnimatedReveal delay={0.25}>
          <AboutSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.35}>
          <HireSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.45}>
          <SkillsSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.55}>
          <ProjectsSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.65}>
          <WritingsSection />
        </AnimatedReveal>
        <AnimatedReveal delay={0.75}>
          <SupportSection />
        </AnimatedReveal>
        <AnimatedReveal delay={1.05}>
          <QuoteSection />
        </AnimatedReveal>
      </div>
      <AnimatedReveal delay={1.05}>
        <FooterSection />
      </AnimatedReveal>
    </Screen>
  )
}

export default HomePage
