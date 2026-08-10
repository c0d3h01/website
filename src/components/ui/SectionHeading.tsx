interface SectionHeadingProps {
	title: string;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionHeading = ({
	title,
	as: HeadingTag = "h2",
}: SectionHeadingProps) => {
	return (
		<div className="flex items-center gap-2 pb-3">
			<span
				className="text-(--accent) text-base select-none leading-none shrink-0"
				aria-hidden="true"
			>
				·
			</span>
			<HeadingTag className="text-[1.05rem] font-semibold tracking-tight text-(--fg-primary) leading-none">
				{title}
			</HeadingTag>
		</div>
	);
};

export default SectionHeading;
