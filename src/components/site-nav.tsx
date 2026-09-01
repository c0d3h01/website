"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const cx = (...classes: Array<string | false>) => classes.filter(Boolean).join(" ");

const links = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Notes" },
] as const;

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)} aria-label="Harshal Sawant home">
          <span className="brand-dot" aria-hidden="true" />
          HS<span className="brand-slash">/</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Desktop navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cx("nav-link", isActive(link.href) && "nav-link-active")}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button type="button" className="menu-trigger md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          <span className={cx(open && "rotate-45 translate-y-1")} />
          <span className={cx(open && "-rotate-45 -translate-y-1")} />
        </button>
      </header>
      <div id="mobile-menu" className={cx("mobile-menu md:hidden", open ? "mobile-menu-open" : "pointer-events-none opacity-0 -translate-y-4")} aria-hidden={!open}>
        <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={cx("mobile-nav-link", open && "mobile-nav-link-open")} style={{ transitionDelay: `${index * 60}ms` }}>
              <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>{link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
