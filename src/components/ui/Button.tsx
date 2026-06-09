import type { ButtonHTMLAttributes, Ref } from "react";

type ButtonVariant = "default" | "unstyled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
		<button ref={ref} type={type} className={resolvedClassName} {...props} />
	);
};

export default Button;
