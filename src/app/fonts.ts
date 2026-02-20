import localFont from "next/font/local"

const bodyFont = localFont({
  src: [
    {
      path: "../../public/fonts/inter/inter-latin-wght-normal.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-inter-local",
})

const displayFont = localFont({
  src: [
    {
      path: "../../public/fonts/plus-jakarta-sans/plus-jakarta-sans-latin-wght-normal.woff2",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../../public/fonts/plus-jakarta-sans/plus-jakarta-sans-latin-wght-italic.woff2",
      style: "italic",
      weight: "100 900",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--font-plus-jakarta-sans-local",
})

const monoFont = localFont({
  src: [
    {
      path: "../../public/fonts/jetbrains-mono/jetbrains-mono-latin-wght-normal.woff2",
      style: "normal",
      weight: "100 800",
    },
    {
      path: "../../public/fonts/jetbrains-mono/jetbrains-mono-latin-wght-italic.woff2",
      style: "italic",
      weight: "100 800",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--font-jetbrains-mono-local",
})

export const siteFontVariables = `${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`
