import ProjectPage from "@/components/Projects/ProjectPage";
import { Metadata } from "next";
import React from "react";
import { siteConfig } from "@/lib/metadata";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function page() {
  return <ProjectPage />;
}
