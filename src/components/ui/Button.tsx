"use client";

import { type ButtonHTMLAttributes, memo, type Ref, useMemo } from "react";

type ButtonVariant = "default" | "unstyled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
			<button ref={ref} type={type} className={resolvedClassName} {...props} />
		);
	},
);

Button.displayName = "Button";

export default Button;
