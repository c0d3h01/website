import type { ReactNode } from "react";
import ScrollRestorer from "@/components/ScrollRestorer";
import { SectionDock } from "@/components/ui/SectionDock";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="mx-auto max-w-3xl px-4 py-6 pb-28 sm:px-6 sm:py-8 sm:pb-32 md:py-14">
		<header className="flex justify-end pb-4 sm:pb-6" />
		<ScrollRestorer />
		<main className="py-3">{children}</main>
		<SectionDock />
	</div>
);

export default SiteLayout;
