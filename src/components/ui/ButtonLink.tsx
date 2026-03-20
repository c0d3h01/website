import Link from "next/link";
import type { ReactNode } from "react";

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
		<Link
			href={href}
			aria-label={ariaLabel}
			target={target}
			rel={rel}
			className={resolvedClassName}
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
