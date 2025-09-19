import { OpenSourceContributions } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { H2Heading } from "../H2Heading";
import { H3Heading } from "../H3Heading";
import Description from "../Description";

export function Contributions() {
  return (
    <div className="space-y-4">
      <H2Heading>contributions</H2Heading>
      <div className="flex flex-col gap-4 text-stone-400">
        {OpenSourceContributions.map((contribution, index) => (
          <a
            key={index}
            target="_blank"
            className="transition-colors text-stone-50 group"
            href={contribution.link}
          >
            <div className="flex items-center space-x-2">
              <Image
                className="rounded-full overflow-hidden"
                width={25}
                height={25}
                src={contribution.image}
                alt=""
              />
              <H3Heading>{contribution.title}</H3Heading>
            </div>
            <Description>{contribution.description}</Description>
          </a>
        ))}
      </div>
    </div>
  );
}
