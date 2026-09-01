import type { ReactNode } from "react";
import ScrollRestorer from "@/components/ScrollRestorer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="mx-auto min-h-screen max-w-5xl px-5 py-5 sm:px-8 sm:py-8">
		<header className="flex items-center justify-between border-b border-(--gb-border) pb-5">
			<a
				href="#top"
				className="font-mono text-sm font-bold tracking-tight text-foreground transition-colors hover:text-primary"
			>
				HS<span className="text-primary">.</span>
			</a>
			<nav
				aria-label="Primary navigation"
				className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex"
			>
				<a href="#work" className="transition-colors hover:text-foreground">
					Work
				</a>
				<a href="#writing" className="transition-colors hover:text-foreground">
					Writing
				</a>
				<a href="#contact" className="transition-colors hover:text-foreground">
					Contact
				</a>
			</nav>
			<ThemeToggle />
		</header>
		<ScrollRestorer />
		<main id="top">{children}</main>
	</div>
);

export default SiteLayout;
