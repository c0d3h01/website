/** Semantic main content wrapper — provides the `<main>` landmark element. */
import type { ReactNode } from "react";

interface AppShellProps {
	children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => (
	<main className="main-screen">{children}</main>
);

export default AppShell;
