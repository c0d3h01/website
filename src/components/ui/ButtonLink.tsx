"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { memo, type ReactNode, useMemo } from "react";
import { springTransition, tapScale } from "@/lib/utils";

type ButtonLinkVariant = "default" | "primary";

interface ButtonLinkProps {
	href: string;
	children: ReactNode;
	variant?: ButtonLinkVariant;
	ariaLabel?: string;
	target?: "_blank" | "_self";
	rel?: string;
	className?: string;
}

const variantClass: Record<ButtonLinkVariant, string> = {
	default: "btn",
	primary: "btn-primary",
};

const ButtonLink = memo(function ButtonLink({
	href,
	children,
	variant = "default",
	ariaLabel,
	target = "_blank",
	rel = "noopener noreferrer",
	className,
}: ButtonLinkProps) {
	const resolvedClassName = useMemo(
		() => [variantClass[variant], className].filter(Boolean).join(" "),
		[variant, className],
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
