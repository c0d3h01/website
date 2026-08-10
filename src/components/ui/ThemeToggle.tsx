"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button
				variant="unstyled"
				className="w-8 h-8 flex items-center justify-center p-0 rounded-md"
			>
				<div className="w-4 h-4" />
			</Button>
		);
	}

	return (
		<Button
			variant="unstyled"
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			className="size-8 flex items-center justify-center rounded-md hover:bg-(--bg-subtle) transition-colors p-0 relative text-(--fg-tertiary) hover:text-(--fg-primary)"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
