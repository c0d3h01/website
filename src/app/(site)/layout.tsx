import type { ReactNode } from "react";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="md:w-215 md:mx-auto px-4 md:py-14 py-4">
		<main className="py-3">{children}</main>
	</div>
);

export default SiteLayout;
