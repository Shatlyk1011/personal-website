import type { Metadata } from "next"

import "./globals.css"
import "../../public/fonts.css"

import { constructMetadata } from "@/shared/utils"
import Script from "next/script"

export const metadata: Metadata = constructMetadata({
  title: "Shatlyk Abdullayev — Web Designer & Developer",
  description: "Helping brands to turn ideas into high-impact, results-driven websites. Global expertise.",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3NXFSSK6XG"></Script>
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3NXFSSK6XG');
        `,
        }}
      ></Script>
      <body className="antialiased">{children}</body>
    </html>
  )
}
