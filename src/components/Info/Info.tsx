import Description from "@/components/Description";
import CustomATag from "@/components/ui/CustomATag";
import { HyperText } from "@/components/ui/HyperText";
import { Terminal } from "lucide-react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

const PROFILE = {
  name: "Harshal Sawant",
  location: { city: "Mumbai", country: "IN", flag: "/india.svg" },
  projects: [
    {
      name: "AndroidTweaker",
      url: "https://github.com/c0d3h01/androidtweaker",
      desc: "Android performance enhancement",
    },
    {
      name: "CoreTaskOptimizer",
      url: "https://github.com/c0d3h01/coretaskoptimizer",
      desc: "adaptive CPU optimization",
    },
    {
      name: "ArchInstall",
      url: "https://github.com/c0d3h01/archinstall",
      desc: "automated Linux setup",
    },
    {
      name: "Go-Installer",
      url: "https://github.com/c0d3h01/go-installer",
      desc: "creative CLI tools",
    },
    {
      name: "ASCII",
      url: "https://github.com/c0d3h01/ascii",
      desc: "creative CLI tools",
    },
  ],
};

const ProfileHeader = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center justify-between">
      <div className="flex items-center gap-3">
        <Terminal className="h-6 w-6 text-orange-500" />
        <HyperText>{PROFILE.name}</HyperText>
      </div>
      <h2 className="text-muted-foreground md:text-sm text-xs flex items-center gap-2">
        <IoLocationSharp size={16} />
        <span className="animate-gradient bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent bg-[length:200%_auto] font-semibold">
          {PROFILE.location.city}, {PROFILE.location.country}
        </span>
        <Image
          src={PROFILE.location.flag}
          alt={PROFILE.location.country}
          height={20}
          width={20}
          className="w-[23px] h-auto inline-block align-middle"
          priority
        />
      </h2>
    </div>
  );
};

const Bio = () => {
  const [p0, p1, p2, p3, p4] = PROFILE.projects;
  return (
    <Description>
      Linux and systems enthusiast focused on automation, performance, and open
      source | Creator of <CustomATag href={p0.url}>{p0.name}</CustomATag> for{" "}
      {p0.desc}, <CustomATag href={p1.url}>{p1.name}</CustomATag> for {p1.desc},
      and <CustomATag href={p2.url}>{p2.name}</CustomATag> for {p2.desc} |
      Experiments with Rust, Nix, and shell scripting — recently shipped{" "}
      <CustomATag href={p3.url}>{p3.name}</CustomATag> and{" "}
      <CustomATag href={p4.url}>{p4.name}</CustomATag> for {p4.desc} |
      Passionate about reproducible environments, dotfiles, and sharing
      knowledge through open source contributions.
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
