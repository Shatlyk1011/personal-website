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
  | "CMS"

export interface IProject {
  title: string
  description: string
  tags: Tags[]
  links: {
    title: string
    href: string
  }[]
  playbackId: string
  bgSrc: string
  placeholder: string
}

export interface IContactForm {
  name: string
  email: string
  organization: string
  currentWebsite: string | number
  description: string
}
