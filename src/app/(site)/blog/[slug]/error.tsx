"use client";

export default function BlogPostError({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className="flex flex-col gap-3 py-12">
			<h1 className="text-xl font-medium">Something went wrong</h1>
			<p className="text-muted-foreground text-sm">{error.message}</p>
			<button
				type="button"
				onClick={reset}
				className="text-sm underline underline-offset-4 text-left"
			>
				Try again
			</button>
		</div>
	);
}
