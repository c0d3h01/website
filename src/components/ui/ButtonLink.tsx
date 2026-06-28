"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { memo, type ReactNode, useMemo } from "react";
import { springTransition, tapScale } from "@/lib/utils";

interface ButtonLinkProps {
	href: string;
	children: ReactNode;
	ariaLabel?: string;
	target?: "_blank" | "_self";
	rel?: string;
	className?: string;
}

const ButtonLink = memo(function ButtonLink({
	href,
	children,
	ariaLabel,
	target = "_blank",
	rel = "noopener noreferrer",
	className,
}: ButtonLinkProps) {
	const resolvedClassName = useMemo(
		() =>
			[
				"btn cursor-pointer w-fit select-none flex flex-row gap-1.5 items-center px-2 py-1 rounded-md",
				className,
			]
				.filter(Boolean)
				.join(" "),
		[className],
	);

	return (
		<motion.div
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
});

export default ButtonLink;
