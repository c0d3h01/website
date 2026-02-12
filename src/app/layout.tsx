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
              background: "#151515",
              color: "#d4d4d4",
              border: "1px solid #2f2f2f",
            },
            success: {
              iconTheme: {
                primary: "#f5f5f5",
                secondary: "#050505",
              },
            },
            error: {
              iconTheme: {
                primary: "#bdbdbd",
                secondary: "#050505",
              },
            },
          }}
        />
      </body>
    </html>
  )
}
