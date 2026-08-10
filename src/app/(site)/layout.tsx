import type { ReactNode } from "react";
import ScrollRestorer from "@/components/ScrollRestorer";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="max-w-screen-sm mx-auto py-6 sm:py-10 md:py-14">
		<header className="flex justify-end pb-5 px-5 sm:px-[1.75rem]">
			<ThemeToggle />
		</header>
		<ScrollRestorer />
		<main>{children}</main>
	</div>
);

export default SiteLayout;
