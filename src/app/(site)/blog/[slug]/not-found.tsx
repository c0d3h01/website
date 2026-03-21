import Link from "next/link";

export default function BlogPostNotFound() {
	return (
		<div className="flex flex-col gap-3 py-12">
			<h1 className="text-xl font-medium">Post not found</h1>
			<p className="text-muted-foreground text-sm">
				This post doesn&apos;t exist or may have been moved.
			</p>
			<Link href="/blog" className="text-sm underline underline-offset-4">
				View all posts
			</Link>
		</div>
	);
}
