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
			className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors p-0 relative"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-neutral-800 dark:text-neutral-200" />
			<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neutral-800 dark:text-neutral-200" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
