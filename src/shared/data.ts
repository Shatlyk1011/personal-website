export const NAV_LINKS = [
  { id: "home", linkIdx: 0, isDarkBg: false, start: "", end: "" },
  { id: "services", linkIdx: 1, isDarkBg: true, start: "", end: "" },
  { id: "works", linkIdx: 2, isDarkBg: true, start: "", end: "" },
  { id: "contact", linkIdx: 3, isDarkBg: false, start: "", end: "" },
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
      "Boost your web app with my optimization expertise. <br/> SEO Optimization enhances search rankings via keywords. Performance Enhancement speeds up your site. App Optimization ensures fast, intuitive, cross-platform apps. Maximize impact with my solutions.",
    services: ["SEO Optimization", "Performance Enhancement", "App Optimization"],
    number: "03",
    awareItemClass: "aware_threshold",
  },
];

export type Services = (typeof SERVICES)[number];