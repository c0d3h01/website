"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import { memo, type Ref, useMemo } from "react";
import { springTransition, tapScale } from "@/lib/utils";

type ButtonVariant = "default" | "unstyled";

interface ButtonProps extends HTMLMotionProps<"button"> {
	variant?: ButtonVariant;
	ref?: Ref<HTMLButtonElement>;
}

const variantClassName: Record<ButtonVariant, string> = {
	default:
		"btn cursor-pointer w-fit select-none flex flex-row gap-1.5 items-center px-2 py-1 rounded-md",
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
