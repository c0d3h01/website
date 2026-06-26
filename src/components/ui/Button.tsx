"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import type { Ref } from "react";
import { hoverScale, springTransition, tapScale } from "@/lib/utils";

type ButtonVariant = "default" | "unstyled";

interface ButtonProps extends HTMLMotionProps<"button"> {
	variant?: ButtonVariant;
	ref?: Ref<HTMLButtonElement>;
}

const variantClassName: Record<ButtonVariant, string> = {
	default: "btn",
	unstyled: "",
};

const Button = ({
	type = "button",
	variant = "default",
	className,
	ref,
	...props
}: ButtonProps) => {
	const resolvedClassName = [variantClassName[variant], className]
		.filter(Boolean)
		.join(" ");

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
};

export default Button;
