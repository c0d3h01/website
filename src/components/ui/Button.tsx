import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "default" | "unstyled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
}

const variantClassName: Record<ButtonVariant, string> = {
	default: "btn",
	unstyled: "",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ type = "button", variant = "default", className, ...props }, ref) => {
		const resolvedClassName = [variantClassName[variant], className]
			.filter(Boolean)
			.join(" ");

		return (
			<button ref={ref} type={type} className={resolvedClassName} {...props} />
		);
	},
);

Button.displayName = "Button";

export default Button;
