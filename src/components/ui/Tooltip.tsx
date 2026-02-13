interface TooltipProps {
  text: string
  children: React.ReactNode
  offset?: "default" | "compact"
  containerClassName?: string
  groupClassName?: string
}

const offsetClassMap = {
  default: "bottom-9",
  compact: "bottom-6",
} as const

const Tooltip = ({
  text,
  children,
  offset = "default",
  containerClassName = "",
  groupClassName = "",
}: TooltipProps) => {
  return (
    <div className={`relative flex items-center select-none ${containerClassName}`.trim()}>
      <div className={`group relative flex ${groupClassName}`.trim()}>
        {children}
        <span
          className={`info-tip absolute ${offsetClassMap[offset]} left-1/2 mb-2 w-max -translate-x-1/2 scale-0 transform rounded-md px-1.5 py-1 text-sm font-medium transition-all duration-100 group-hover:scale-100`}
        >
          {text}
          <span className="info-tip-arrow absolute top-full left-1/2 -translate-x-1/2 transform border-8 border-transparent" />
        </span>
      </div>
    </div>
  )
}

export default Tooltip
