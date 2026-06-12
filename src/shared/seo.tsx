import type { Metadata } from "next"

import { PROJECTS, SERVICES } from "@/shared/data"
import { siteConfig } from "@/siteConfig"

const SCHEMA_CONTEXT = "https://schema.org" as const

type MetadataArgs = {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  type?: "website" | "article"
  noIndex?: boolean
}

const stripHtml = (value: string) => value.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  if (!path || path === "/") {
    return siteConfig.url
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function constructMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
  keywords = [...siteConfig.keywords],
  type = "website",
  noIndex = false,
}: MetadataArgs): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: image,
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
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
  }
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

const websiteRef = { "@id": `${siteConfig.url}/#website` } as const
const personRef = { "@id": `${siteConfig.url}/#person` } as const
const serviceRef = { "@id": `${siteConfig.url}/#service` } as const
const offerCatalogRef = { "@id": `${siteConfig.url}/#services` } as const

const primaryContactPoint = {
  "@type": "ContactPoint",
  "@id": `${siteConfig.url}/#contact-point`,
  contactType: "sales",
  email: siteConfig.email,
  availableLanguage: ["en"],
  url: absoluteUrl("/contact"),
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteRef["@id"],
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
  }
}

function personSchema() {
  return {
    "@type": "Person",
    "@id": personRef["@id"],
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/images/main-1x.webp"),
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ashgabat",
      addressCountry: "TM",
    },
    sameAs: siteConfig.sameAs,
    knowsAbout: siteConfig.services,
    contactPoint: primaryContactPoint,
  }
}

function professionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": serviceRef["@id"],
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    provider: personRef,
    areaServed: ["Worldwide", "Turkmenistan"],
    serviceType: siteConfig.services,
    email: siteConfig.email,
    sameAs: siteConfig.sameAs,
    hasOfferCatalog: offerCatalogRef,
  }
}

function offerCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    "@id": offerCatalogRef["@id"],
    name: "Services",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: stripHtml(service.description),
        serviceType: service.services,
      },
    })),
  }
}

function portfolioSchema() {
  return {
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#selected-work`,
    name: "Selected Work",
    itemListElement: PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: stripHtml(project.description),
        url: project.links[0]?.href || siteConfig.url,
        keywords: project.tags.join(", "),
      },
    })),
  }
}

function webPageSchema({
  path,
  title,
  description,
  pageType = "WebPage",
}: {
  path: string
  title: string
  description: string
  pageType?: "WebPage" | "ContactPage"
}) {
  const url = absoluteUrl(path)

  return {
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: websiteRef,
    about: personRef,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
    },
  }
}

function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function homePageSchema() {
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      websiteSchema(),
      personSchema(),
      professionalServiceSchema(),
      webPageSchema({
        path: "/",
        title: siteConfig.title,
        description: siteConfig.description,
      }),
      offerCatalogSchema(),
      portfolioSchema(),
    ],
  }
}

export function contactPageSchema({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [
      websiteSchema(),
      personSchema(),
      professionalServiceSchema(),
      webPageSchema({
        path: "/contact",
        title,
        description,
        pageType: "ContactPage",
      }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
      primaryContactPoint,
    ],
  }
}
