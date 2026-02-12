import { GoDotFill } from "react-icons/go"

interface AvailabilityBadgeProps {
  text: string
}

const AvailabilityBadge = ({ text }: AvailabilityBadgeProps) => {
  return (
    <div className="flex w-fit select-none items-center gap-0.5 rounded-md border border-[var(--gb-green)] px-1.5 py-0.5 text-xs font-medium text-[var(--gb-green)]">
      <span className="animate-pulse">
        <GoDotFill />
      </span>
      {text}
    </div>
  )
}

export default AvailabilityBadge
