import React from "react"

import { FOOTER_SOCIALS } from "@/shared/data"

import { AuroraBackground } from "../ui/AuroraBg"
import TextGlitch from "../ui/TextGlitch"
import CalCom from "../ui/CalCom"

console.info(
  "%cIf you manually switching to mobile version, or vise-versa, reload your browser for full features",
  "color: #ffffff; background-color: #0057d4; padding: 10px 20px; border-radius: 6px; font-size: 16px; font-weight: medium;",
)

const CallToAction = () => {
  return (
    <AuroraBackground className="section_white h-full min-h-svh" id="contact">
      <section className="relative z-10 flex h-full w-full flex-1 flex-col justify-center px-[7.4rem] py-[12.4rem] text-center portrait:px-[4rem] portrait:py-[20rem]">
        <h5 className="mb-[2rem] text-[6.4rem] leading-[1.25] font-bold tracking-[-0.03em] text-text-1 portrait:text-[5.6rem] portrait:leading-[1.15]">
          Book Your Free <br className="hidden portrait:inline-block" /> Session — <br className="portrait:hidden" />
          Power Up Your Startup’s Future
        </h5>

        <p className="mx-auto mb-[4.8rem] text-[2.2rem] leading-[2.8rem] tracking-[0.04px] text-text-2 portrait:max-w-[90%]">
          I transform bold ideas into real impact — <br className="hidden portrait:block" /> through design driven by{" "}
          <br className="portrait:hidden" /> insight, crafted with precision, and built to make a difference.
        </p>

        <div className="flex items-center justify-center gap-[1.8rem]">
          <CalCom>Schedule a call</CalCom>
          {/* <button className='rounded-[1.8rem] outline duration-200 outline-current ease-linear hover:text-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.1)] transition-all py-[1.8rem] px-[2.4rem]' type="button"></button> */}
        </div>
      </section>

      <footer className="w-full leading-[2.2rem]">
        <div className="relative mx-[3.2rem] border-t border-black/20">
          <div className="relative flex justify-between py-[2rem]">
            <ul className="flex basis-[25%] items-center gap-[2rem] portrait:basis-[25%]">
              <li className="text-nowrap uppercase portrait:hidden">©2025 Shatlyk Abdullayev</li>
              <li className="hidden text-nowrap uppercase portrait:block">©2025 Shatlyk A.</li>
            </ul>

            <ul className="flex gap-[1.4rem]">
              {FOOTER_SOCIALS.map(({ href, title }) => (
                <li key={title}>
                  <a href={href} target="_blank" rel="noopener">
                    <TextGlitch text={title} classes="text-[1.4rem] leading-[2rem] uppercase"></TextGlitch>
                  </a>
                </li>
              ))}
            </ul>

            <a href="https://www.instagram.com/devbyshat" className="basis-[25%] text-end" target="_blank" rel="noopener">
              <TextGlitch text="More PROJECTS" classes="text-[1.4rem] leading-[2rem] uppercase" />
            </a>
          </div>
        </div>
      </footer>
    </AuroraBackground>
  )
}
export default CallToAction
