import React from "react"

import { AuroraBackground } from "../ui/AuroraBg"
import CalCom from "../ui/CalCom"
import Footer from "../Footer"
import Link from "next/link"

console.info(
  "%cIf you manually switching to mobile version, reload your browser for full features",
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
          I bring big ideas to life with clear, sharp, meaningful design <br className="portrait:hidden" /> and craft
          them with expert, purposeful development.
        </p>

        <div className="flex items-center justify-center gap-[1.8rem]">
          <Link
            href="/contact"
            className="rounded-[1.8rem] bg-text-2 px-[2.5rem] py-[1.9rem] text-[1.8rem] text-white transition-colors duration-200 ease-linear hover:bg-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.1)]"
            type="button"
          >
            Start a project
          </Link>
          <CalCom classes="bg-initial outline outline-current hover:text-primary text-text-2 hover:bg-initial ">
            Schedule a call
          </CalCom>
        </div>
      </section>

      <Footer />
    </AuroraBackground>
  )
}
export default CallToAction
