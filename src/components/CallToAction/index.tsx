import React from "react";

import { AuroraBackground } from "../ui/AuroraBg";

const CallToAction = () => {
  return (
    <AuroraBackground>
      <section id="contact" className="py-[12.4rem] relative px-[7.4rem] text-center z-10">
        <h5 className='mb-[2rem] text-text-1 text-[6.4rem] leading-[1.25] tracking-[-0.03em] font-bold'>Book Your Free Session —  <br />Power Up Your Startup’s Future</h5>

        <p className='mb-[4.8rem] text-[2.2rem] text-text-2 leading-[2.8rem] tracking-[0.04px]'>I transform bold ideas into real impact — through design driven by <br /> insight, crafted with precision, and built to make a difference.</p>

        <div className='flex justify-center items-center gap-[1.8rem]'>
          <button className='transition-all duration-200 rounded-[1.8rem] ease-linear hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.15)] text-white text-[1.8rem] font-medium tracking-[-0.04px] py-[1.8rem] px-[2.4rem] bg-primary' type="button">Start a project</button>
          <button className='rounded-[1.8rem] outline duration-200 outline-current ease-linear hover:text-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.1)] transition-all py-[1.8rem] px-[2.4rem]' type="button">Schedule a call</button>
        </div>
      </section>
    </AuroraBackground>
  )
};
  export default CallToAction
