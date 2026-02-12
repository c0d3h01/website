"use client"

import { userFooterLink, userShortName } from "@/data"

const FooterSection = () => {
  return (
    <footer className="mb-16 md:mb-12">
      <div className="my-6 border-t border-zinc-700" />
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
          {userFooterLink.map((link) => (
            <a
              key={link.id}
              className="flex select-none items-center gap-1 text-xl transition duration-100 hover:opacity-75 md:text-base"
              target="_blank"
              rel="noreferrer"
              href={link.link}
            >
              <link.icon /> <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm">© 2025 {userShortName}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterSection
