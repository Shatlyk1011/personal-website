import type { Metadata } from "next"

import "./globals.css"
import "../../public/fonts.css"

import { constructMetadata } from "@/shared/utils"

export const metadata: Metadata = constructMetadata({
  title: "Shatlyk Abdullayev — Freelance Web Designer & Developer",
  description: "Helping brands to turn ideas into high-impact, results-driven websites. Global expertise.",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
