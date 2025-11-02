import React from "react";
import { ProjectsSection } from "@/components/Projects/ProjectSection";
import { CurrentProject } from "@/components/Projects/CurrentProject";
import { Info } from "@/components/Info/Info";
import GitHubCalendar from "@/components/Info/GithubCalender";
import { LinksSection } from "@/components/Footer-links";
import { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";

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
