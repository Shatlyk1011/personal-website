const fallbackSiteUrl = "https://shatlykabdullayev.com"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/+$/, "")

export const siteConfig = {
  name: "Shatlyk Abdullayev",
  role: "Web Designer & Developer",
  title: "Shatlyk Abdullayev | Web Designer & Developer",
  description:
    "Freelance web designer and developer building high-performance, SEO-ready websites for startups and ambitious brands.",
  url: siteUrl,
  ogImage: `${siteUrl}/images/og-image.png`,
  locale: "en_US",
  email: "shatlykabdullayev1011@gmail.com",
  location: "Ashgabat, Turkmenistan",
  services: ["Web Development", "Web Design", "SEO Optimization", "Performance Optimization", "Motion Design"],
  keywords: [
    "Shatlyk Abdullayev",
    "web designer",
    "web developer",
    "freelance web designer",
    "freelance web developer",
    "next.js developer",
    "portfolio website developer",
    "startup website designer",
    "SEO consultant",
    "website performance optimization",
    "Turkmenistan web developer",
    "Ashgabat web designer",
  ],
  sameAs: [
    "https://blog.shatlykabdullayev.com",
    "https://www.github.com/Shatlyk1011",
    "https://www.youtube.com/@devbyshat",
    "https://www.linkedin.com/in/shatlyk1011/",
    "https://www.instagram.com/devbyshat",
  ],
  calendlyLikeUrl: "https://cal.com/shatlyk-abdullayev",
} as const
