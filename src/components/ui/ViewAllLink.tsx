"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { hoverScale, springTransition, tapScale } from "@/lib/motion";

interface ViewAllLinkProps {
	href: string;
	label?: string;
}

// Reused by home sections to keep CTA behavior and styling consistent.
const ViewAllLink = ({ href, label = "View All" }: ViewAllLinkProps) => {
	return (
		<motion.div
			whileHover={hoverScale}
			whileTap={tapScale}
			transition={springTransition}
		>
			<Link href={href} className="showMore-btn block">
				<span className="flex items-center justify-center gap-0.5">
					<MdKeyboardDoubleArrowDown />
					{label}
				</span>
			</Link>
		</motion.div>
	);
};

export default ViewAllLink;
