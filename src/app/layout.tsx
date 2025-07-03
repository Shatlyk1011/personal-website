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
        {children}
      </body>
    </html>
  );
}
