import { expect, test } from "@playwright/test"

const smokeRoutes = [
  { path: "/", heading: "Harshal Sawant" },
  { path: "/blog", heading: "Blog" },
  { path: "/projects", heading: "Projects" },
  { path: "/experience", heading: "Experience" },
] as const

for (const route of smokeRoutes) {
  test(`smoke route: ${route.path}`, async ({ page }) => {
    await page.goto(route.path)
    await expect(
      page.getByRole("heading", { name: new RegExp(route.heading, "i") }),
    ).toBeVisible()
  })
}
