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
    start: "top top",
    end: "bottom top",
  },
  {
    id: "services",
    linkIdx: NavLinkIdx.Services,
    isDarkBg: true,
    start: "top-=1% top",
    end: "bottom-=2% top",
  },
  {
    id: "works",
    linkIdx: NavLinkIdx.Works,
    isDarkBg: true,
    start: "top-=3% top",
    end: "bottom+=2% top",
  },
  {
    id: "contact",
    linkIdx: NavLinkIdx.Contact,
    isDarkBg: false,
    start: "top 90%",
    end: "bottom top",
  },
];

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
      "My Visual Branding creates a memorable identity that reflects your brand’s essence through color schemes, and typography. UI/UX Design delivers intuitive, user-centric interfaces that engage and delight, ensuring seamless navigation and satisfaction",
    services: ["UI/UX Design", "Visual Branding", "Responsive Design"],
    number: "02",
  },
  {
    title: "Growth & Optimization",
    description:
      "Boost your web app with my optimization expertise. SEO Optimization enhances search rankings via keywords. Performance Enhancement speeds up your site. App Optimization ensures fast, intuitive, cross-platform apps. Maximize impact with my solutions.",
    services: ["SEO Optimization", "Performance Enhancement", "App Optimization"],
    number: "03",
    awareItemClass: "aware_threshold",
  },
];

export const PROJECTS = [
  {
    title: "GrowChief",
    description: `GrowChief is an AI-powered social engagement tool developed using Next.js and Tailwind CSS. <br class="portrait:hidden"/> It features a fully responsive webpage with seamless blog functionality.`,

    tags: ["Startup", "Blog", "Nextjs", "Tailwind"],

    links: [
      {
        title: "View live site",
        href: "https://www.growchief.com/",
      },
    ],
    // get from mux dashboard
    playbackId: "3vkPrLCdWA00Tnkpgo6wWZcxWKDdCF9Xr9zaZQjBCP01w",

    bgSrc: "/images/growchief-bg.webp",
    placeholder:
      'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(%23b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="data:image/webp;base64,UklGRpQAAABXRUJQVlA4IIgAAAAwAgCdASoQAAwAAQAcJYwCsAEUrmFFJbpwQAD+/yycAyCfSXAmKzz4rKU0NptalnmxaL/hDwbG/2gpnvYKVa5yQuZk7rzOrY5aWOWztLCwRu4P/f0s9//9oRW/iPRP60tLo8tz+ah7bK2+0d01sokJtAis5IrE5/I6aunOB06yvK+qY3pSAAAA"/></g></svg>',
  },

  {
    title: "Copilot",
    description:
      "Multivendor food delivery application written using Payload CMS. Small and medium size brands to find themselfes. Previously worked as cook for",

    tags: ["Open Source", "UI/UX"],

    links: [
      {
        title: "View live site",
        href: "#",
      },
    ],
    playbackId: "1xhk4BRkE72Eo01HxhrB00p1fm8XYN1Em9eXDIr5BeVVQ",

    bgSrc: "/images/heroes-bg.webp",
    placeholder:
      'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(%23b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoQAAwAAQAcJaQAAvkPE6wgoAD+/u+eBjLi0bgLMkF8UJJlHEEqZFVlqzWnP3yxDDRqFX5/Ul4Koweau3jLORCP1voAAA=="/></g></svg>',
  },

  {
    title: "Agent Heroes",
    description:
      "Multivendor food delivery application written using Payload CMS. Small and medium size brands to find themselfes. Previously worked as cook for",

    tags: ["Open-source", "UI/UX"],

    links: [
      {
        title: "View live site",
        href: "#",
      },
      // {
      //   title: "Github",
      //   href: "#",
      // },
    ],
    playbackId: "01p5bcFrJxvK2TGGdeqBZ01O54Qe8sQKP01erVrbcG9flg",

    bgSrc: "/images/copilot-bg.webp",
    placeholder:
      'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(%23b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAACwAgCdASoQAAwAAQAcJbACsDXAOklJTkNe17NqMCAA/v6p9XmQ/2nUX4DY4+PuyHd20b+oxvnyVvXwDCxN/frP/lL0g4KtLDZBP++sOFuom78Tn/KSLPuOiWT5Pkp8GTXna/uH2vdZVrZ6JB//RU75dvYh1U83gcDdu4zgzYvzOhs/8iv/60rNPHQqFf7/L/m74Uz8x/4qxWFMUVQXWfqdlbsjv54qkDb/pe7F/x/B+Go+GfMMH+jhyeAAAA=="/></g></svg>',
  },
];

export const FOOTER_SOCIALS = [
  {
    title: "Github",
    href: "https://www.github.com/Shatlyk1011",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/shatlykabdullayew/",
  },
  {
    title: "Youtube",
    href: "#",
  },
  // {
  //   title: "X",
  //   href: "#",
  // },
];


export type Services = (typeof SERVICES)[number];
export type Project = (typeof PROJECTS)[number];
