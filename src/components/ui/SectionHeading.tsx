interface SectionHeadingProps {
  title: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
}

const SectionHeading = ({
  title,
  as: HeadingTag = "h2",
  className = "",
}: SectionHeadingProps) => {
  return (
    <HeadingTag
      className={`text-[1.22rem] leading-none font-semibold tracking-tight text-(--gb-fg0) md:text-[1.28rem] ${className}`.trim()}
    >
      {title}.
    </HeadingTag>
  )
}

export default SectionHeading
