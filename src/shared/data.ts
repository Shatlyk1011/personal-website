export enum NavLinkIdx {
  Home = "home",
  Services = "services",
  Works = "works",
  Contact = "contact",
}

export const NAV_LINKS = [
  {
    id: "home",
    linkIdx: NavLinkIdx.Home,
    isDarkBg: false,
    // start: "top",
    // end: "bottom+=1%",
  },
  {
    id: "services",
    linkIdx: NavLinkIdx.Services,
    isDarkBg: true,
    // start: "top",
    // end: "bottom-=1%",
  },
  {
    id: "works",
    linkIdx: NavLinkIdx.Works,
    isDarkBg: true,
    // start: "top",
    // end: "bottom-=1%",
  },
  {
    id: "contact",
    linkIdx: NavLinkIdx.Contact,
    isDarkBg: false,
    // start: "top",
    // end: "bottom+=1%",
  },
]

export const SERVICES = [
  {
    title: "Web Development",
    description:
      "Boost your brand with a website that captivates and converts. My Full Stack Development builds custom, high-performance web apps tailored to your identity.  CMS Integration provides user-friendly platforms like Strapi for easy content updates. ",
    services: ["Full Stack development", "CMS Integration", "Motion & Animations"],
    number: "01",
  },
  {
    title: "Web Design",
    description:
      "Crafting memorable brand identities with unique color schemes and typography reflecting brand essence. Delivering intuitive UI/UX Design, user-centric interfaces for seamless navigation and exceptional satisfaction.",
    services: ["UI/UX Design", "Visual Branding", "Responsive Design"],
    number: "02",
  },
  {
    title: "Growth & Optimization",
    description: `Boost your app with my expertise. SEO boosts search <br class="portrait:hidden"/> rankings, performance enhancements speed up your site, <br class="portrait:hidden"/> and app optimization ensures fast, intuitive, cross-platform performance. Maximize impact with my solutions.`,
    services: ["SEO Optimization", "Performance Enhancement", "App Optimization"],
    number: "03",
    awareItemClass: "aware_threshold",
  },
]

// get from mux dashboard

export const PROJECT_VIDEO_IDS = {
  copilot: "202VyPadtFmAFoLbSd01t8SxE3nUIVxNUXDnoudARM5go",
  growchief: "AF3iVO5R5UOFjFleXYWq3d1bpimjmDwDUKqvfUK1urM",
  agentHeroes: "01p5bcFrJxvK2TGGdeqBZ01O54Qe8sQKP01erVrbcG9flg",
}

export const PROJECTS = [
  {
    title: "CopilotKit",
    description:
      // "CopilotKit an AI Copilot which was re-engineered from Webflow to NextJs app to create a smarter, user-aware virtual colleague for seamless product interactions",
      "CopilotKit, an AI Copilot which was transformed from a Webflow to a powerful Next.js app. <br/>  It offers a smarter, user-aware virtual collegue <br/> for seamless product interactions",

    tags: ["Stack Migration", "SEO", "UI/UX", "NextJs", "Tailwind"] as Tags[],

    links: [
      {
        title: "View live site",
        href: "https://www.copilotkit.ai/pricing",
      },
    ],
    playbackId: PROJECT_VIDEO_IDS.copilot,

    bgSrc: "/images/copilot-bg.webp",
    placeholder:
      'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="10"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(%23b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoQAAwAAQAcJaQAAvkPE6wgoAD+/u+eBjLi0bgLMkF8UJJlHEEqZFVlqzWnP3yxDDRqFX5/Ul4Koweau3jLORCP1voAAA=="/></g></svg>',
  },

  {
    title: "GrowChief",
    description: `GrowChief is an AI-powered social engagement tool developed using Next.js and Tailwind CSS. <br class="portrait:hidden"/> It features a fully responsive webpage with seamless blog functionality.`,

    tags: ["Startup", "Blog", "SEO", "Nextjs", "Tailwind"] as Tags[],

    links: [
      {
        title: "View live site",
        href: "https://www.growchief.com/",
      },
    ],
    playbackId: PROJECT_VIDEO_IDS.growchief,

    bgSrc: "/images/growchief-bg.webp",
    placeholder:
      'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="10"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(%23b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAAAwAgCdASoQAAwAAQAcJYwCsAEUrmFFJbpwQAD+/yycAyCfSXAmKzz4rKU0NptalnmxaL/hDwbG/2gpnvYKVa5yQuZk7rzOrY5aWOWztLCwRu4P/f0s9//9oRW/iPRP60tLo8tz+ah7bK2+0d01sokJtAis5IrE5/I6aunOB06yvK+qY3pSAAAA"/></g></svg>',
  },

  {
    title: "Agent Heroes",
    description:
      "Multivendor food delivery application written using Payload CMS. Small and medium size brands to find themselfes. Previously worked as cook for",

    tags: ["GSAP", "Astro", "SCSS"] as Tags[],

    links: [
      {
        title: "View live site",
        href: "https://agentheroes.ai",
      },
      // {
      //   title: "Github",
      //   href: "#",
      // },
    ],
    playbackId: PROJECT_VIDEO_IDS.agentHeroes,

    bgSrc: "/images/heroes-bg.webp",
    placeholder:
      'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="10"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(%23b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAACwAgCdASoQAAwAAQAcJbACsDXAOklJTkNe17NqMCAA/v6p9XmQ/2nUX4DY4+PuyHd20b+oxvnyVvXwDCxN/frP/lL0g4KtLDZBP++sOFuom78Tn/KSLPuOiWT5Pkp8GTXna/uH2vdZVrZ6JB//RU75dvYh1U83gcDdu4zgzYvzOhs/8iv/60rNPHQqFf7/L/m74Uz8x/4qxWFMUVQXWfqdlbsjv54qkDb/pe7F/x/B+Go+GfMMH+jhyeAAAA=="/></g></svg>',
  },
]

export const FOOTER_SOCIALS = [
  {
    title: "Github",
    href: "https://www.github.com/Shatlyk1011",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/devbyshat/",
  },
  {
    title: "Telegram",
    href: "https://t.me/sh_1415926535",
  },
  // {
  //   title: "X",
  //   href: "#",
  // },
]

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

export type Services = (typeof SERVICES)[number]
export type Project = (typeof PROJECTS)[number]
