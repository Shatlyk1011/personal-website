import { FOOTER_SOCIALS } from "@/shared/data"

import { config } from "@/siteConfig"

//components
import CustomForm from "@/components/CustomForm"
import Header from "@/components/Header"
import { Toaster } from "sonner"
import TextGlitch from "@/components/ui/TextGlitch"

export default function Home() {
  return (
    <>
      <Header classes="absolute" />
      <main className="min-h-svh w-full bg-bg-black px-[12rem] pt-[8rem] text-gray-1 portrait:px-[2rem]">
        <section className="flex h-full w-full portrait:flex-col">
          {/* left */}
          <div className="flex flex-1 flex-col gap-[14rem] pt-[7.4rem] pr-[7.4rem] pb-[4rem] portrait:gap-[6rem] portrait:pt-[4rem]">
            <div>
              <h1 className="mb-[2.4rem] text-[6.4rem] leading-[110%] font-medium tracking-[-0.04em] text-nowrap">
                Let&apos;s start a <br /> project together
              </h1>

              <p className="max-w-[90%] text-[1.8rem] leading-[130%] text-gray-2">
                I develop clear websites with code that empower startups and businesses capture new leads and accelerate
                their growth.
              </p>
            </div>

            <div className="flex flex-col gap-[3.2rem] text-[1.4rem] tracking-[-0.04em] text-gray-1 portrait:hidden">
              <ul>
                <li className="mb-[0.2rem] text-[1.2rem] leading-[120%] text-gray-3 uppercase">CONTACT DETAILS</li>
                <li className="">
                  <a href="mailto:shatlykabdullayev@mail.ru" target="_blank"
                    rel="noopener">
                    <TextGlitch text="shatlykabdullayev@mail.ru" classes="leading-[120%] " textClasses="lowercase" />
                  </a>
                </li>
              </ul>

              <ul className="flex flex-wrap gap-x-[1.2rem]">
                <li className="mb-[0.6rem] basis-[100%] text-[1.2rem] leading-[120%] text-gray-3 uppercase">SOCIALS</li>
                {FOOTER_SOCIALS.slice(1)
                  .reverse()
                  .map(({ href, title }) => (
                    <li key={href}>
                      <a href={href} target="_blank"
                        rel="noopener">
                        <TextGlitch text={title} classes="leading-[120%] " />
                      </a>
                    </li>
                  ))}
              </ul>
              <ul>
                <li className="mb-[0.6rem] text-[1.2rem] leading-[120%] tracking-[-0.01em] text-gray-3 uppercase">
                  CURRENT LOCATION
                </li>
                <li>{config.currentLocation}</li>
              </ul>
            </div>
          </div>
          {/* right */}

          <div className="w-full flex-[1.1] py-[3.2rem] pl-[7.4rem] portrait:pt-0 portrait:pb-[4rem] portrait:pl-0">
            <CustomForm />
          </div>

          <div className="hidden flex-wrap justify-between gap-[3.2rem] gap-x-[6.4rem] pb-[6rem] text-[1.4rem] tracking-[-0.04em] text-gray-1 portrait:flex">
            <ul className="flex flex-wrap gap-x-[1.2rem]">
              <li className="mb-[0.6rem] basis-[100%] text-[1.2rem] leading-[120%] text-gray-3 uppercase">SOCIALS</li>
              {FOOTER_SOCIALS.slice(1)
                .reverse()
                .map(({ href, title }) => (
                  <li key={href}>
                    <a href={href}>{title}</a>
                  </li>
                ))}
            </ul>

            <ul>
              <li className="mb-[0.2rem] text-[1.2rem] leading-[120%] text-gray-3 uppercase">CONTACT DETAILS</li>
              <li className="">
                <a href="mailto:shatlykabdullayev@mail.ru">shatlykabdullayev@mail.ru</a>
              </li>
            </ul>

            <ul>
              <li className="mb-[0.6rem] text-[1.2rem] leading-[120%] tracking-[-0.01em] text-gray-3 uppercase">
                CURRENT LOCATION
              </li>
              <li>{config.currentLocation}</li>
            </ul>
          </div>
        </section>
        <Toaster theme="dark" position="top-center" />
      </main>
    </>
  )
}
