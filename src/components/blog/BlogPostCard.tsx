import Link from "next/link"
import { formatShortDate } from "@/lib/date"

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
  return (
    <Link
      href={href}
      className="blog-post flex items-center gap-3 md:flex-row flex-col"
    >
      <div className="flex flex-col gap-0.5 w-full">
        <h2 className="text-xl font-semibold md:text-lg">{title}</h2>
        <p className="text-sm opacity-70">{formatShortDate(date)}</p>
        <p className="opacity-80">{description}</p>
      </div>
    </Link>
  )
}

export default BlogPostCard
