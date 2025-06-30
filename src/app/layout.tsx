import type { Metadata } from "next";

import "./globals.css";
import '../../public/fonts.css'

export const metadata: Metadata = {
  title: "Shatlyk Abdullayev - Freelance developer",
  description: "Description required",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <svg className="pointer-events-none absolute cursor-none">
          <filter id="noise_body">
            <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
            <feColorMatrix type="saturate" values="0"></feColorMatrix>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
