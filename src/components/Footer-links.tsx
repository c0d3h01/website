import Link from "next/link";
import { SiGmail, SiX, SiGithub, SiLinkedin } from "react-icons/si";
import { BsCalendar3 } from "react-icons/bs";
import { H2Heading } from "@/components/H2Heading";

const links = [
  {
    title: "Gmail",
    href: "mailto:harshalsawant.dev@gmail.com",
    icon: SiGmail,
  },
  {
    title: "Twitter(X)",
    href: "https://x.com/haarshalsawant",
    icon: SiX,
  },
  {
    title: "GitHub",
    href: "https://github.com/c0d3h01",
    icon: SiGithub,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/haarshalsawant",
    icon: SiLinkedin,
  },
  {
    title: "Book a Call",
    href: "https://cal.com/c0d3h01",
    icon: BsCalendar3,
  },
];

export function LinksSection() {
  return (
    <div className="networks mt-6 space-y-5">
      <H2Heading>Social networks</H2Heading>
      <div className="flex flex-wrap gap-6 text-sm">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center gap-4"
            >
              <Icon size={16} />
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
