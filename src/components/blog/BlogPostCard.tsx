import Image from "next/image"
import Link from "next/link"

interface BlogPostCardProps {
  image?: string
  title: string
  description: string
  href: string
  date: string
}

const BlogPostCard = ({
  image,
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
      {image && (
        <Image
          className="h-[100px] w-full rounded-md object-cover md:w-[20%]"
          src={image}
          alt={title}
          width={200}
          height={200}
        />
      )}
      <div className="flex flex-col gap-0.5 md:w-[80%]">
        <h2 className="text-xl font-semibold md:text-lg">{title}</h2>
        <p className="text-sm opacity-70">{formattedDate}</p>
        <p className="opacity-80">{description}</p>
      </div>
    </Link>
  )
}

export default BlogPostCard
