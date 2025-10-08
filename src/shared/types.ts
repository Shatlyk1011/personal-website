type Tags =
  | "Startup"
  | "Blog"
  | "Nextjs"
  | "Tailwind"
  | "Stack Migration"
  | "SEO"
  | "NextJs"
  | "UI/UX"
  | "Astro"
  | "SCSS"
  | "GSAP"
  | "Redesign"

export interface IProject {
  title: string
  description: string;
  tags: Tags[]
  links: {
    title: string
    href: string
  }[]
  playbackId: string
  bgSrc:string;
  placeholder:string
}