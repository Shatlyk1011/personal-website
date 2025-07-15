"use client"
import { FC } from "react"
import { cn } from "@/shared/utils"

import ServiceCard from "./ServiceCard"
import SectionHeading from "../ui/SectionHeading"

import { SERVICES } from "@/shared/data"

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

interface Props {
  isPortrait: boolean
}

const Services: FC<Props> = ({ isPortrait }) => {

  return (
    <section
      id="services"
      className="mt-[0.4rem] bg-bg-black px-[7.4rem] pt-[12rem] text-gray-1 portrait:px-[2.4rem] portrait:pt-[8rem]"
    >
      <div className="mx-auto max-w-[144rem]">
        <div className="flex flex-col gap-[6.4rem] pb-[3.2rem] portrait:gap-[3.2rem] portrait:pb-[4rem]">
          <SectionHeading title={`What can I do <br class="hidden portrait:inline-block"/> for you`} />

          <p className="relative max-w-[66.4rem] self-end text-[2.2rem] leading-[2.6rem] text-gray-2 portrait:hidden portrait:self-start portrait:text-[2.4rem] portrait:leading-[2.9rem]">
            I help ambitious people and brands turn complex ideas into clear, compelling designs that engage audiences,
            solve real problems, and drive measurable results.{" "}
            <span
              className={cn(
                `absolute top-[-10rem] left-0 z-1 h-[calc(100%+8rem)] w-full`,
                isPortrait ? "hidden" : "aware_threshold",
              )}
            ></span>
          </p>
        </div>
        {SERVICES.slice(0, 3).map((item) => (
          <ServiceCard key={item.title} item={item} isPortrait={isPortrait} />
        ))}
      </div>
    </section>
  )
}
export default Services
