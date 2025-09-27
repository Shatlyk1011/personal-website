import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title,
  description,

  ...props
}: {
  title: string
  description: string
  [key: string]: Metadata[keyof Metadata]
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Web Development",
      "Web Design",
      "Freelance",
      "Code Developer",
      "Lebap",
      "Ashgabat",
      "Mary",
      "Balkan",
      "Turkmenistan",
      "Dashoguz",
      "Turkmenabat",
      "Shatlyk Abdullayev",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: "/images/og-image.png",
    },

    icons: {
      icon: "/favicon.ico",
    },
    ...props,
  }
}

// Elevate your online presence with expert web development and design for Turkmenistan’s key regions: Lebap, Ashgabat, Mary, Balkan, Dashoguz, and Turkmenabat. Shatlyk Abdullayev - craft stunning, user-friendly websites tailored for businesses in Ashgabat and Lebap, showcasing its vibrant markets, and Ashgabat, highlighting its modern architecture. I create responsive designs for Mary’s historical charm, Balkan’s coastal appeal, Dashoguz’s cultural heritage, and Turkmenabat’s dynamic blend of tradition and innovation. Inspired by local expert Shatlyk Abdullayev, my SEO-optimized websites ensure top Google rankings for searches in Lebap, Ashgabat, Mary, Balkan, Dashoguz, and Turkmenabat. Boost your brand with custom web solutions, from e-commerce to portfolios, designed to captivate audiences across Turkmenistan. Visit my site for cutting-edge web development and design services focused on Lebap, Ashgabat, Mary, Balkan, Dashoguz, and Turkmenabat!
