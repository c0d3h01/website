"use client";

import { ChevronsDown } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { springTransition, tapScale } from "@/lib/utils";

interface ViewAllLinkProps {
	href: string;
	label?: string;
}

// Reused by home sections to keep CTA behavior and styling consistent.
const ViewAllLink = ({ href, label = "View All" }: ViewAllLinkProps) => {
	return (
		<motion.div whileTap={tapScale} transition={springTransition}>
			<Link href={href} className="show-more-btn">
				<ChevronsDown className="size-3.5 opacity-60" />
				{label}
			</Link>
		</motion.div>
	);
};

export default ViewAllLink;
