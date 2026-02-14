"use client"

import { useEffect, useRef, useState } from "react"
import { ActivityCalendar } from "react-activity-calendar"
import type { Activity } from "react-activity-calendar"
import "react-activity-calendar/tooltips.css"
import SectionHeading from "@/components/ui/SectionHeading"
import { profile } from "@/data"

const API_URL = `https://github-contributions-api.jogruber.de/v4/${profile.githubUsername}?y=last`

const THEME = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
}

const TOOLTIPS = {
    activity: {
        text: (activity: Activity) =>
            `${activity.count} contributions on ${activity.date}`,
    },
}

const LABELS = {
    totalCount: "{{count}} contributions in the last year",
}

const GitHubContributions = () => {
    const [data, setData] = useState<Activity[]>([])
    const [loading, setLoading] = useState(true)
    const [blockSize, setBlockSize] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((json) => setData(json.contributions))
            .catch(() => setData([]))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        const calc = () => {
            if (!ref.current) return
            setBlockSize(Math.max(Math.floor(ref.current.clientWidth / 53) - 3, 6))
        }
        calc()

        let timer: ReturnType<typeof setTimeout>
        const onResize = () => {
            clearTimeout(timer)
            timer = setTimeout(calc, 150)
        }

        window.addEventListener("resize", onResize)
        return () => {
            clearTimeout(timer)
            window.removeEventListener("resize", onResize)
        }
    }, [])

    return (
        <section className="flex flex-col gap-2.5">
            <SectionHeading title="Contributions" />
            <div ref={ref} style={{ overflow: "hidden" }}>
                {loading || blockSize === 0 ? (
                    <div className="flex h-[140px] items-center justify-center text-sm text-(--gb-fg2)">
                        Loading contributions…
                    </div>
                ) : data.length > 0 ? (
                    <ActivityCalendar
                        data={data}
                        showWeekdayLabels
                        weekStart={1}
                        colorScheme="dark"
                        theme={THEME}
                        blockSize={blockSize}
                        blockRadius={2}
                        blockMargin={3}
                        tooltips={TOOLTIPS}
                        labels={LABELS}
                    />
                ) : (
                    <p className="text-sm text-(--gb-fg2)">
                        Unable to load contributions.
                    </p>
                )}
            </div>
        </section>
    )
}

export default GitHubContributions
