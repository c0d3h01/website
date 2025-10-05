"use client";

import React from "react";
import { HiDocumentText } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { resumeData } from "@/Data/data";

export function ResumeButton() {
  const router = useRouter();

  const handleClick = () => {
    if (resumeData.isAvailable) {
      window.open(resumeData.url, "_blank");
    } else {
      router.push(resumeData.fallbackRoute);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
    >
      <HiDocumentText size={16} />
      <span>[r] resume</span>
    </button>
  );
}