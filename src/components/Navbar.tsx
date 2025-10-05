"use client";

import { Link } from "next-view-transitions";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { ResumeButton } from "./ResumeButton";
import { resumeData } from "@/Data/data";

const links = [
  { href: "/", text: "home", key: "h", type: "route" },
  { href: "/projects", text: "projects", key: "p", type: "route" },
  { href: "/skills", text: "skills", key: "s", type: "route" },
  { href: "/blogs", text: "blogs", key: "b", type: "route" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    
    // Handle resume keybinding
    if (key === "r") {
      if (resumeData.isAvailable) {
        window.open(resumeData.url, "_blank");
      } else {
        router.push(resumeData.fallbackRoute);
      }
      return;
    }
    
    // Handle other navigation
    const link = links.find((link) => link.key === key);
    if (link) {
      router.push(link.href, { scroll: true });
    }
  };

  React.useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <nav className="flex max-w-3xl mx-auto pb-8 text-sm text-muted-foreground items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        {links.map(({ href, text, key }) => (
          <Link
            key={key}
            href={href}
            className="hover:text-orange-500 sm:text-sm text-xs duration-300 transition-colors"
          >
            <span
              className={`${
                pathname === href
                  ? "text-orange-500"
                  : pathname.startsWith("/w") && href === "/w"
                  ? "text-orange-500"
                  : ""
              }`}
            >
              [{key}]
            </span>{" "}
            {text}
          </Link>
        ))}
      </div>
      <ResumeButton />
    </nav>
  );
}