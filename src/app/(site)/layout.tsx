import type { ReactNode } from "react";
import ScrollRestorer from "@/components/ScrollRestorer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="mx-auto min-h-[100dvh] max-w-6xl px-5 sm:px-8">
		<header className="sticky top-0 z-20 -mx-5 border-b border-(--gb-border)/80 bg-(--gb-surface)/90 px-5 backdrop-blur sm:-mx-8 sm:px-8">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
				<a
					href="#top"
					className="font-mono text-sm font-semibold tracking-[-0.04em] text-(--gb-fg0)"
				>
					HS<span className="text-(--gb-yellow)">.</span>
				</a>
				<nav
					aria-label="Primary navigation"
					className="hidden items-center gap-6 text-xs font-medium text-(--gb-fg2) md:flex"
				>
					<a className="transition-colors hover:text-(--gb-fg0)" href="#about">
						About
					</a>
					<a
						className="transition-colors hover:text-(--gb-fg0)"
						href="#experience"
					>
						Experience
					</a>
					<a
						className="transition-colors hover:text-(--gb-fg0)"
						href="#projects"
					>
						Projects
					</a>
					<a
						className="transition-colors hover:text-(--gb-fg0)"
						href="#writings"
					>
						Writing
					</a>
					<a
						className="rounded-full bg-(--gb-yellow) px-4 py-2 text-(--gb-surface) transition-transform active:scale-95"
						href="#hire"
					>
						Contact
					</a>
					<ThemeToggle />
				</nav>
				<div className="md:hidden">
					<ThemeToggle />
				</div>
			</div>
		</header>
		<ScrollRestorer />
		<main id="top">{children}</main>
	</div>
);

export default SiteLayout;
