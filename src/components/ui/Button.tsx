"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import { memo, type Ref, useMemo } from "react";
import { springTransition, tapScale } from "@/lib/utils";

type ButtonVariant = "default" | "primary" | "unstyled";

interface ButtonProps extends HTMLMotionProps<"button"> {
	variant?: ButtonVariant;
	ref?: Ref<HTMLButtonElement>;
}

const variantClassName: Record<ButtonVariant, string> = {
	default: "btn",
	primary: "btn-primary",
	unstyled: "",
};

const Button = memo(
	({
		type = "button",
		variant = "default",
		className,
		ref,
		...props
	}: ButtonProps) => {
		const resolvedClassName = useMemo(
			() => [variantClassName[variant], className].filter(Boolean).join(" "),
			[variant, className],
		);

		return (
			<motion.button
				ref={ref}
				type={type}
				className={resolvedClassName}
				whileTap={tapScale}
				transition={springTransition}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";

export default Button;
