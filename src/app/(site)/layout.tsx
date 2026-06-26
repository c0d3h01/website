import type { ReactNode } from "react";

const SiteLayout = ({ children }: { children: ReactNode }) => (
	<div className="screen">
		<main className="main-screen">{children}</main>
	</div>
);

export default SiteLayout;