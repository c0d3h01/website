import type { ReactNode } from "react";

type BlogLayoutProps = {
	children: ReactNode;
};

const BlogLayout = ({ children }: BlogLayoutProps) => (
	<div className="blog-shell">{children}</div>
);

export default BlogLayout;
