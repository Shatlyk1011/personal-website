import React from "react";

import { FOOTER_SOCIALS } from "@/shared/data";

import { AuroraBackground } from "../ui/AuroraBg";
import TextGlitch from "../ui/TextGlitch";
import CalCom from "../ui/CalCom";

const CallToAction = () => {
  return (
    <AuroraBackground className="min-h-screen h-full">
      <section id="contact" className="w-full flex-1 h-full flex flex-col justify-center py-[12.4rem] portrait:py-[20rem] relative px-[7.4rem] portrait:px-[4rem] text-center z-10">
        <h5 className="mb-[2rem] text-text-1 text-[6.4rem] leading-[1.25] tracking-[-0.03em] font-bold portrait:leading-[1.2]">Book Your Free <br className="hidden portrait:inline-block" /> Session —  <br className="portrait:hidden" />Power Up Your Startup’s Future</h5>

        <p className="mb-[4.8rem] text-[2.2rem] text-text-2 leading-[2.8rem] portrait:max-w-[90%] mx-auto tracking-[0.04px]">I transform bold ideas into real impact — <br className="hidden portrait:block" /> through design driven by <br className="portrait:hidden" /> insight, crafted with precision, and built to make a difference.</p>

        <div className="flex justify-center items-center gap-[1.8rem]">
          <CalCom>Schedule a call</CalCom>
          {/* <button className='rounded-[1.8rem] outline duration-200 outline-current ease-linear hover:text-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.1)] transition-all py-[1.8rem] px-[2.4rem]' type="button"></button> */}
        </div>

      </section>

      <footer className="leading-[2.2rem] w-full">
          <div className="relative mx-[3.2rem] border-t border-black/20 ">
            <div className="relative flex justify-between py-[2rem]">
              <ul className="flex items-center gap-[2rem] basis-[20%] portrait:basis-[25%]">
              <li className="text-nowrap uppercase portrait:hidden">©2025 Shatlyk Abdullayev</li>
              <li className="text-nowrap uppercase hidden portrait:block">©2025 Shatlyk A.</li>
              </ul>

              <ul className="flex gap-[1.4rem] ">
                {FOOTER_SOCIALS.map(({ href, title }) => (
                  <li key={title}>
                    <a href={href} target="_blank" rel="noopener">
                      <TextGlitch text={title} classes="text-[1.4rem] leading-[2rem] uppercase"></TextGlitch>
                    </a>
                  </li>
                ))}
              </ul>

              <a href="#" className="basis-[20%] text-end">
                <TextGlitch text="More PROJECTS" classes="text-[1.4rem] leading-[2rem] uppercase" />
            </a>
          </div>
        </div>
      </footer>

    </AuroraBackground>
  )
};
  export default CallToAction

