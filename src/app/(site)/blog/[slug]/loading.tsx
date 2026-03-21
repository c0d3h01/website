export default function BlogPostLoading() {
    return (
        <div className="flex flex-col gap-4 py-8 animate-pulse">
            <div className="h-8 w-2/3 rounded-lg bg-muted" />
            <div className="h-4 w-1/3 rounded bg-muted" />
            <div className="mt-6 space-y-3">
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-5/6 rounded bg-muted" />
                <div className="h-4 w-4/6 rounded bg-muted" />
            </div>
        </div>
    );
}
