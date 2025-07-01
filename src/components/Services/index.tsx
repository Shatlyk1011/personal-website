"use client";

// import SectionHeader from "../ui/SectionHeading";
import ServiceCard from "./ServiceCard";

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
    <section id="services" className="bg-black py-[12.4rem] px-[7.4rem] text-gray-1" >
      <div className="max-w-[1440px] mx-auto">

        <div className="flex flex-col gap-[6.4rem] pb-[3.2rem]">
          <h3 className="text-[6.4rem] font-medium tracking-[0.04px] leading-[1.2]">What Can I Create Together?</h3>

          <p className="max-w-[66.4rem] text-gray-2 self-end text-[2.2rem] leading-[2.6rem] ">I help ambitious people and brands turn complex ideas into clear, compelling designs that engage audiences, solve real problems, and drive measurable results.</p>
        </div>
        {SERVICES.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>

    </section>
  );
};
export default Services;
