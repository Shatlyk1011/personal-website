import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title,
  description,

  ...props
}: {
  title: string;
  description: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Web Development",
      "Web Design",
      "Freelance",
      "Code Developer",
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
  };
}