import Link from "next/link"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"
import Tooltip from "@/components/ui/Tooltip"

interface ViewAllLinkProps {
  href: string
  label?: string
}

// Reused by home sections to keep CTA behavior and styling consistent.
const ViewAllLink = ({ href, label = "View All" }: ViewAllLinkProps) => {
  return (
    <Tooltip text={label}>
      <Link href={href} className="showMore-btn block">
        <span className="flex items-center justify-center gap-0.5">
          <MdKeyboardDoubleArrowDown />
          {label}
        </span>
      </Link>
    </Tooltip>
  )
}

export default ViewAllLink
