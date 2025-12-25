import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import { baseMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${inter.className} ${jetBrainsMono.className}`}>
          <main className="bg-stone-950 font-jetbrains-mono min-h-screen text-stone-50 py-10 px-4 selection:bg-stone-500 selection:text-stone-950 selection:rounded-md">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
