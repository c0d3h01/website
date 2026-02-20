import { describe, expect, it } from "vitest"
import { formatLongDate, formatShortDate } from "@/lib/date"

describe("date formatters", () => {
  it("formats short dates in UTC", () => {
    expect(formatShortDate("2026-02-20")).toBe("Feb 20, 2026")
  })

  it("formats long dates in UTC", () => {
    expect(formatLongDate("2026-02-20")).toBe("February 20, 2026")
  })
})
