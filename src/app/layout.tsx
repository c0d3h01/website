import "../styles/globals.css"
import { Toaster } from "react-hot-toast"
import { seoMetadata } from "@/data"

export const metadata = seoMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster
          toastOptions={{
            style: {
              background: "#221208",
              color: "#ffe2cf",
              border: "1px solid #8a4d22",
            },
            success: {
              iconTheme: {
                primary: "#ff9a4f",
                secondary: "#1a0d06",
              },
            },
            error: {
              iconTheme: {
                primary: "#ff7a4e",
                secondary: "#1a0d06",
              },
            },
          }}
        />
      </body>
    </html>
  )
}
