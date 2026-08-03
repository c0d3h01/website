import type { ReactNode } from "react";
import ScrollRestorer from "@/components/ScrollRestorer";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="md:max-w-3xl md:mx-auto px-4 md:py-14 py-4">
		<ScrollRestorer />
		<main className="py-3">{children}</main>
	</div>
);

export default SiteLayout;
