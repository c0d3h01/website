import Link from "next/link"
import type { ReactNode } from "react"
import BackRail from "@/components/ui/BackRail"
import SectionHeading from "@/components/ui/SectionHeading"
import MainScreen from "@/layout/MainScreen"
import Screen from "@/layout/Screen"

interface PageShellProps {
  title: string
  children: ReactNode
  backHref?: string
  backLabel?: string
  backRailHref?: string
  backRailLabel?: string
  backRailVariant?: "fixed" | "attached"
}

// Shared shell for list pages keeps structure and navigation consistent.
const PageShell = ({
  title,
  children,
  backHref = "/",
  backLabel = "Back Home",
  backRailHref,
  backRailLabel,
  backRailVariant = "fixed",
}: PageShellProps) => {
  return (
    <MainScreen>
      <Screen>
        <div className="relative">
          {backRailHref && (
            <BackRail
              href={backRailHref}
              label={backRailLabel ?? backLabel}
              variant={backRailVariant}
            />
          )}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <SectionHeading title={title} as="h1" />
              {!backRailHref && (
                <Link className="btn text-sm" href={backHref}>
                  {backLabel}
                </Link>
              )}
            </div>
            {children}
          </section>
        </div>
      </Screen>
    </MainScreen>
  )
}

export default PageShell
