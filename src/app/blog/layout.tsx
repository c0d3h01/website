import React from "react"

type BlogLayoutProps = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <div className="scihub-blog-font">{children}</div>
}

export default BlogLayout
