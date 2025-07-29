import React from "react"

import { FOOTER_SOCIALS } from "@/shared/data"

import { AuroraBackground } from "../ui/AuroraBg"
import TextGlitch from "../ui/TextGlitch"
import CalCom from "../ui/CalCom"

console.info(
  "%cIf you manually switching mobile version, or vise-versa, reload your browser for full features",
  "color: #ffffff; background-color: #0057d4; padding: 10px 20px; border-radius: 6px; font-size: 16px; font-weight: medium;",
)

const CallToAction = () => {
  return (
    <AuroraBackground className="section_white h-full min-h-svh" id="contact">
      <section className="relative z-10 flex h-full w-full flex-1 flex-col justify-center px-[7.4rem] py-[12.4rem] text-center portrait:px-[4rem] portrait:py-[20rem]">
        <h5 className="mb-[1rem] text-[6.4rem] leading-[1.25] font-bold tracking-[-0.03em] text-text-1 portrait:text-[5.6rem] portrait:leading-[1.15]">
          Book Your Free <br className="hidden portrait:inline-block" /> Session — <br className="portrait:hidden" />
          Power Up Your Project’s Future
        </h5>

        <p className="mx-auto mb-[2.4rem] text-[2.2rem] leading-[2.8rem] tracking-[0.04px] text-text-2 portrait:max-w-[90%]">
          I bring big ideas to life with clear, sharp, meaningful design <br className="portrait:hidden" /> and craft them with expert, purposeful development.
        </p>

        <div className="flex items-center justify-center gap-[1.8rem]">
          <CalCom>Schedule a call</CalCom>
          {/* <button className='rounded-[1.8rem] outline duration-200 outline-current ease-linear hover:text-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.1)] transition-all py-[1.8rem] px-[2.4rem]' type="button"></button> */}
        </div>
      </section>

      <footer className="w-full leading-[2.2rem]">
        <div className="relative mx-[3.2rem] border-t border-black/20">
          <div className="relative flex justify-between py-[1.6rem] portrait:flex-wrap portrait:py-[3.2rem]">
            <ul className="flex basis-[25%] flex-col items-start leading-[150%] font-semibold text-nowrap opacity-90 portrait:order-2 portrait:mt-6 portrait:basis-[100%] portrait:leading-[160%]">
              <li>Shatlyk Abdullayev</li>
              <li className="">©2025 All Rights Reserved.</li>
              {/* <li className="hidden text-nowrap uppercase portrait:block">©2025 All Rights Reserved.</li> */}
            </ul>

            <ul className="flex items-center gap-[1.2rem] portrait:gap-[0.4rem]">
              {FOOTER_SOCIALS.map(({ href, title }) => (
                <li key={title}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="rounded-3xl px-[0.6rem] py-[0.3rem] tracking-wide ring-offset-[0.1rem] focus-within:ring-[0.15rem] focus-within:ring-current focus-within:outline-none focus:outline-none"
                  >
                    <TextGlitch
                      text={title}
                      classes="text-[1.4rem] portrait:text-[1.8rem]  leading-[110%] "
                    ></TextGlitch>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex basis-[25%] items-center justify-end align-bottom">
              <a
                href="https://www.instagram.com/devbyshat"
                className="rounded-3xl px-[0.6rem] py-[0.3rem] ring-offset-1 focus-within:ring-[0.15rem] focus-within:ring-current focus-within:outline-none focus:outline-none"
                target="_blank"
                rel="noopener"
              >
                <TextGlitch
                  text="More Projects"
                  classes="text-[1.4rem] text-nowrap tracking-wide portrait:text-[1.8rem] leading-[110%]"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </AuroraBackground>
  )
}
export default CallToAction
