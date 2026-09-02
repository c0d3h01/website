"use client";

import { ChevronsDown } from "lucide-react";
import Link from "next/link";

interface ViewAllLinkProps {
	href: string;
	label?: string;
}

// Reused by home sections to keep CTA behavior and styling consistent.
const ViewAllLink = ({ href, label = "View All" }: ViewAllLinkProps) => {
	return (
		<div>
			<Link
				href={href}
				className="showMore-btn select-none w-full px-2 py-1 rounded-md block"
			>
				<span className="flex items-center justify-center gap-0.5">
					<ChevronsDown />
					{label}
				</span>
			</Link>
		</div>
	);
};

export default ViewAllLink;
