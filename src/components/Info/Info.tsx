import React from "react";
import { HyperText } from "@/components/ui/HyperText";
import Image from "next/image";
import Description from "@/components/Description";
import CustomATag from "@/components/ui/CustomATag";
import { IoLocationSharp } from "react-icons/io5";

const PROFILE = {
  name: "Harshal Sawant",
  location: { city: "Mumbai", country: "IN", flag: "/india.svg" },
  projects: [
    { name: "AndroidTweaker", url: "https://github.com/c0d3h01/androidtweaker", desc: "Android performance enhancement" },
    { name: "CoreTaskOptimizer", url: "https://github.com/c0d3h01/coretaskoptimizer", desc: "adaptive CPU optimization" },
    { name: "ArchInstall", url: "https://github.com/c0d3h01/archinstall", desc: "automated Linux setup" },
    { name: "Go-Installer", url: "https://github.com/c0d3h01/go-installer", desc: "creative CLI tools" },
    { name: "ASCII", url: "https://github.com/c0d3h01/ascii", desc: "creative CLI tools" },
  ],
};

const ProfileHeader = () => (
  <div className="flex md:flex-row flex-col md:items-center justify-between">
    <HyperText>{PROFILE.name}</HyperText>
    <h2 className="text-muted-foreground md:text-sm text-xs flex items-center gap-2">
      <IoLocationSharp size={16} />
      {PROFILE.location.city}, {PROFILE.location.country}
      <Image src={PROFILE.location.flag} height={23} width={23} alt={PROFILE.location.country} />
    </h2>
  </div>
);

const Bio = () => {
  const [p0, p1, p2, p3, p4] = PROFILE.projects;
  return (
    <Description>
      Linux and systems enthusiast focused on automation, performance, and open source | Creator of{" "}
      <CustomATag href={p0.url}>{p0.name}</CustomATag> for {p0.desc},{" "}
      <CustomATag href={p1.url}>{p1.name}</CustomATag> for {p1.desc}, and{" "}
      <CustomATag href={p2.url}>{p2.name}</CustomATag> for {p2.desc} | Experiments with Rust, Nix, and shell scripting — recently shipped{" "}
      <CustomATag href={p3.url}>{p3.name}</CustomATag> and <CustomATag href={p4.url}>{p4.name}</CustomATag> for {p4.desc} | Passionate about reproducible environments, dotfiles, and sharing knowledge through open source contributions.
    </Description>
  );
};

export function Info() {
  return (
    <div className="space-y-4">
      <ProfileHeader />
      <Bio />
    </div>
  );
}