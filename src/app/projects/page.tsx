import ProjectPage from "@/components/Projects/ProjectPage";
import { siteConfig } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function page() {
  return <ProjectPage />;
}
