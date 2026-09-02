import type { ReactNode } from "react";
import ScrollRestorer from "@/components/ScrollRestorer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-14">
		<header className="flex justify-end pb-4 sm:pb-6">
			<ThemeToggle />
		</header>
		<ScrollRestorer />
		<main className="py-3">{children}</main>
	</div>
);

export default SiteLayout;
