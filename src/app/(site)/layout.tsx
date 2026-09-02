import type { ReactNode } from "react";
import ScrollRestorer from "@/components/ScrollRestorer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="mx-auto w-full max-w-5xl px-4 py-5 sm:px-8 sm:py-8 lg:px-10">
		<header className="flex items-center justify-between border-b border-[var(--gb-border)] pb-5 sm:pb-6">
			<a href="/" className="font-mono text-sm font-semibold tracking-tight text-[var(--gb-fg0)]">hs.dev</a>
			<nav aria-label="Primary navigation" className="flex items-center gap-4 text-sm text-[var(--gb-fg2)]">
				<a href="/projects" className="hover:text-[var(--gb-fg0)]">Projects</a>
				<a href="/experience" className="hover:text-[var(--gb-fg0)]">Experience</a>
				<ThemeToggle />
			</nav>
		</header>
		<ScrollRestorer />
		<main className="py-6 sm:py-10">{children}</main>
	</div>
);

export default SiteLayout;
