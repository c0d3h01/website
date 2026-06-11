"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { hoverScale, springTransition, tapScale } from "@/lib/motion";

interface ButtonLinkProps {
	href: string;
	children: ReactNode;
	ariaLabel?: string;
	target?: "_blank" | "_self";
	rel?: string;
	className?: string;
}

const ButtonLink = ({
	href,
	children,
	ariaLabel,
	target = "_blank",
	rel = "noopener noreferrer",
	className,
}: ButtonLinkProps) => {
	const resolvedClassName = ["btn", className].filter(Boolean).join(" ");

	return (
		<motion.div
			whileHover={hoverScale}
			whileTap={tapScale}
			transition={springTransition}
			className="inline-flex"
		>
			<Link
				href={href}
				aria-label={ariaLabel}
				target={target}
				rel={rel}
				className={resolvedClassName}
			>
				{children}
			</Link>
		</motion.div>
	);
};

export default ButtonLink;
