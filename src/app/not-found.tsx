import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="text-2xl font-medium">404 — Page not found</h1>
			<p className="text-muted-foreground">This page doesn&apos;t exist.</p>
			<Link href="/" className="text-sm underline underline-offset-4">
				Go home
			</Link>
		</div>
	);
}
