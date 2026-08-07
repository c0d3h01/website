interface SectionHeadingProps {
	title: string;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionHeading = ({
	title,
	as: HeadingTag = "h2",
}: SectionHeadingProps) => {
	return (
		<HeadingTag className="text-[1.22rem] leading-none font-semibold tracking-tight text-(--gb-fg0) md:text-[1.28rem] pb-2 border-b border-(--gb-border)">
			{title}
		</HeadingTag>
	);
};

export default SectionHeading;
