"use client";

import ServiceCard from "./ServiceCard";
import SectionHeading from "../ui/SectionHeading";

import { SERVICES } from "@/shared/data";

// What can I do for you?
// How may I assist you?
// What’s on your mind?
// How can I support you?
// What do you need help with?
// Is there something I can help with?
// What can I help you with today?
// How can I be of service?
// What’s up? Need a hand?
// How can I make things easier for you?

const Services = () => {
  return (
    <section id="services" className="bg-bg-black pt-[12.4rem] px-[7.4rem] portrait:px-[2.4rem] portrait:pt-[8rem] text-gray-1" >
      <div className="max-w-[144rem] mx-auto">

        <div className="flex flex-col gap-[6.4rem] portrait:gap-[3.2rem] pb-[3.2rem] portrait:pb-[4rem]">
          <SectionHeading title={`What can I do <br class="hidden portrait:inline-block"/> for you`} />

          <p className=" relative max-w-[66.4rem] text-gray-2 self-end portrait:self-start text-[2.2rem] portrait:text-[2.4rem] portrait:leading-[2.9rem] leading-[2.6rem] ">I help ambitious people and brands turn complex ideas into clear, compelling designs that engage audiences, solve real problems, and drive measurable results. <span className="aware_threshold -z-1 absolute left-0 top-[-10rem] h-[calc(100%+8rem)] w-full"></span></p>
        </div>
        {SERVICES.slice(0, 3).map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>

    </section>
  );
};
export default Services;
