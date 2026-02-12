interface SectionHeadingProps {
  title: string
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h1 className="text-[1.22rem] md:text-[1.28rem] leading-none font-semibold tracking-tight text-[var(--gb-fg0)]">
      {title}.
    </h1>
  )
}

export default SectionHeading
