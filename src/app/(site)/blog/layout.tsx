import type { ReactNode } from "react"

type BlogLayoutProps = {
  children: ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => (
  <div className="blog-font">{children}</div>
)

export default BlogLayout
