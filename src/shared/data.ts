export enum NavLinkIdx {
  Home = "home",
  Services = "services",
  Works = "works",
  Contact = "contact",
}

export const NAV_LINKS = [
  { id: "home", linkIdx: NavLinkIdx.Home, isDarkBg: false, start: "", end: "" },
  { id: "services", linkIdx: NavLinkIdx.Services, isDarkBg: true, start: "", end: "" },
  { id: "works", linkIdx: NavLinkIdx.Works, isDarkBg: true, start: "", end: "" },
  { id: "contact", linkIdx: NavLinkIdx.Contact, isDarkBg: false, start: "", end: "" },
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
    description:
      "Multivendor food delivery application written using Payload CMS. Small and medium size brands to find themselfes. Previously worked as cook for",

    tags: ["Open Source", "Fullstack", "Design", "UI/UX", "CMS"],

    links: [
      {
        title: "Live",
        href: "https://www.growchief.com/",
      },
      {
        title: "Github",
        href: "#",
      },
    ],

    videoUrl: "#",
  },

  {
    title: "Edil Ozi - Component Library",
    description:
      "Multivendor food delivery application written using Payload CMS. Small and medium size brands to find themselfes. Previously worked as cook for",

    tags: ["Open Source", "UI/UX"],

    links: [
      {
        title: "Live",
        href: "#",
      },
      {
        title: "Github",
        href: "#",
      },
    ],

    videoUrl: "#",
  },

  {
    title: "33Ashpez - Food delivery app",
    description:
      "Multivendor food delivery application written using Payload CMS. Small and medium size brands to find themselfes. Previously worked as cook for",

    tags: ["Open-source", "UI/UX"],

    links: [
      {
        title: "Live",
        href: "#",
      },
      {
        title: "Github",
        href: "#",
      },
    ],

    videoUrl: "#",
  },
];

export type Services = (typeof SERVICES)[number];
export type Project = (typeof PROJECTS)[number];
