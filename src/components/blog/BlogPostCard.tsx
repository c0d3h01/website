import Link from "next/link"

interface BlogPostCardProps {
  title: string
  description: string
  href: string
  date: string
}

const BlogPostCard = ({
  title,
  description,
  href,
  date,
}: BlogPostCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Link
      href={href}
      className="blog-post flex items-center gap-3 md:flex-row flex-col"
    >
      <div className="flex flex-col gap-0.5 w-full">
        <h2 className="text-xl font-semibold md:text-lg">{title}</h2>
        <p className="text-sm opacity-70">{formattedDate}</p>
        <p className="opacity-80">{description}</p>
      </div>
    </Link>
  )
}

export default BlogPostCard
