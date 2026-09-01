"use client";

import {
	BookOpen,
	BriefcaseBusiness,
	Code2,
	FolderKanban,
	HandHeart,
	House,
	UserRound,
	Wrench,
} from "lucide-react";
import Link from "next/link";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const items = [
	{ label: "Home", href: "/#home", icon: House },
	{ label: "About", href: "/#about", icon: UserRound },
	{ label: "Experience", href: "/#experience", icon: BriefcaseBusiness },
	{ label: "Skills", href: "/#skills", icon: Wrench },
	{ label: "Projects", href: "/#projects", icon: FolderKanban },
	{ label: "Blog", href: "/#blog", icon: BookOpen },
	{ label: "Hire Me", href: "/#hire", icon: Code2 },
	{ label: "Support Me", href: "/#support", icon: HandHeart },
];

export function SectionDock() {
	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-2 z-40 flex justify-center sm:bottom-4">
			<div className="pointer-events-auto max-w-full">
				<Dock>
					{items.map(({ label, href, icon: Icon }) => (
						<DockItem key={label}>
							<DockLabel>{label}</DockLabel>
							<DockIcon>
								<Link
									href={href}
									aria-label={label}
									className="flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
								>
									<Icon aria-hidden="true" className="size-4" />
								</Link>
							</DockIcon>
						</DockItem>
					))}
					<DockItem>
						<DockLabel>Theme</DockLabel>
						<DockIcon>
							<span className="flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
								<ThemeToggle />
							</span>
						</DockIcon>
					</DockItem>
				</Dock>
			</div>
		</div>
	);
}
