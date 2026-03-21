import Link from "next/link";

export default function ProjectNotFound() {
	return (
		<div className="flex flex-col gap-3 py-12">
			<h1 className="text-xl font-medium">Project not found</h1>
			<p className="text-muted-foreground text-sm">
				This project doesn&apos;t exist or may have been moved.
			</p>
			<Link href="/projects" className="text-sm underline underline-offset-4">
				View all projects
			</Link>
		</div>
	);
}
