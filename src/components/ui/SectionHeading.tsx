interface SectionHeadingProps {
  title: string
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h1 className="text-lg font-semibold tracking-wide text-[var(--gb-blue)]">
      {title}.
    </h1>
  )
}

export default SectionHeading
