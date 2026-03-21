/** Shared page shell for list pages — provides heading, back-navigation, and content layout. */
import Link from "next/link";
import type { ReactNode } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import AppShell from "@/layout/AppShell";
import Screen from "@/layout/Screen";

interface PageShellProps {
	title: string;
	children: ReactNode;
	backHref?: string;
	backLabel?: string;
}

// Shared shell for list pages keeps structure and navigation consistent.
const PageShell = ({
	title,
	children,
	backHref = "/",
	backLabel = "Back Home",
}: PageShellProps) => {
	return (
		<AppShell>
			<Screen>
				<div className="relative">
					<section className="flex flex-col gap-4">
						<div className="flex items-center justify-between gap-2">
							<SectionHeading title={title} as="h1" />
							<Link className="btn text-sm w-fit" href={backHref}>
								{backLabel}
							</Link>
						</div>
						{children}
					</section>
				</div>
			</Screen>
		</AppShell>
	);
};

export default PageShell;
