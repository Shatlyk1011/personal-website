import HomePage from "@/components/HomePage"
import { JsonLd, constructMetadata, homePageSchema } from "@/shared/seo"
import { siteConfig } from "@/siteConfig"

export const metadata = constructMetadata({
  title: siteConfig.role,
  description: siteConfig.description,
  path: "/",
})

export default function Home() {
  return (
    <>
      <JsonLd data={homePageSchema()} />
      <HomePage />
    </>
  )
}
