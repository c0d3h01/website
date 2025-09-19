import React from "react";
import { HyperText } from "@/components/ui/HyperText";
import Image from "next/image";
import Description from "../Description";
import CustomATag from "../ui/CustomATag";

export function Info() {
  return (
    <div className="space-y-4">
      <div className="flex md:flex-row flex-col md:items-center justify-between">
        <HyperText className="">Harshal Sawant</HyperText>
        <h2 className="text-muted-foreground md:text-sm text-xs flex items-center gap-3">
          Mumbai, India{" "}
          <Image
            src={"/Flag_of_India.svg.webp"}
            height={23}
            width={23}
            alt="india"
          />
        </h2>
      </div>
      <div>
        <Description>
  Linux and systems enthusiast focused on automation, performance, and open source | Creator of{" "}
  <CustomATag href="https://github.com/c0d3h01/androidtweaker">
    AndroidTweaker
  </CustomATag>{" "}
  for Android performance enhancement,{" "}
  <CustomATag href="https://github.com/c0d3h01/coretaskoptimizer">
    CoreTaskOptimizer
  </CustomATag>{" "}
  for adaptive CPU optimization, and{" "}
  <CustomATag href="https://github.com/c0d3h01/archinstall">
    ArchInstall
  </CustomATag>{" "}
  for automated Linux setup | Experiments with Rust, Nix, and shell scripting — recently shipped{" "}
  <CustomATag href="https://github.com/c0d3h01/go-installer">
    Go-Installer
  </CustomATag>
  {" "}and{" "}
  <CustomATag href="https://github.com/c0d3h01/ascii">
    ASCII
  </CustomATag>
  {" "}for creative CLI tools | Passionate about reproducible environments, dotfiles, and sharing knowledge through open source contributions.
</Description>
      </div>
      <Description>
        you can find me on{" "}
        <CustomATag href="https://x.com/haarshalsawant">x</CustomATag>,{" "}
        <CustomATag href="https://www.linkedin.com/in/haarshalsawant/">
          linkedIn
        </CustomATag>
        ,{" "}
        <CustomATag href="https://github.com/c0d3h01">github</CustomATag>
      </Description>
    </div>
  );
}
