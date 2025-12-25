import { LinksSection } from "@/components/Footer-links";
import GitHubCalendar from "@/components/Info/GithubCalender";
import { Info } from "@/components/Info/Info";
import { CurrentProject } from "@/components/Projects/CurrentProject";
import { ProjectsSection } from "@/components/Projects/ProjectSection";
import { siteConfig } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description
};

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-12">
        <Info />
        <GitHubCalendar />
        <CurrentProject />
        <ProjectsSection />
        <LinksSection />
      </div>
    </div>
  );
}
