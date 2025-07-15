import { FC } from "react"

import { cn } from "@/shared/utils"

import { type Services } from "@/shared/data"

interface Props {
  item: Services
}

const ServiceCard: FC<Props> = ({ item }) => {
  const { title, services, description, number, awareItemClass } = item

  const isPortrait = window?.matchMedia("(orientation: portrait)").matches

  return (
    <div className="sticky-content relative z-10 w-full border-t border-white/[12%] bg-bg-black py-[3.2rem] last:border-b portrait:py-[5.6rem]">
      <div className="flex justify-between">
        {awareItemClass && !isPortrait && (
          <div className={cn("absolute top-[-8%] -z-1 h-[108%] w-full portrait:h-full", awareItemClass)}></div>
        )}
        {/* left */}
        <div className="text-[3.4rem] leading-[3.6rem] tracking-[0.4px] text-gray-1 portrait:hidden">({number})</div>
        {/* right */}

        <div className="basis-[66.4rem]">
          <h4 className="mb-[3.2rem] text-[3.4rem] leading-[3.6rem] tracking-[0.4px] portrait:text-[3.6rem] portrait:leading-[3.8rem]">
            {title}
          </h4>

          <ul className="mb-[6.4rem] max-w-[38.5rem] text-[2.2rem] leading-[2.6rem] portrait:mb-[4.8rem] portrait:text-[2.4rem] portrait:leading-[4rem]">
            {services.map((s, i) => (
              <li key={s} className="border-b border-white/[12%] py-2 not-last:mb-[1.8rem]">
                <span className="mr-[1rem] text-gray-3 opacity-80">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ul>

          <p
            className="text-[2.2rem] leading-[2.6rem] text-gray-2 portrait:max-w-[90%] portrait:text-[2rem] portrait:leading-[2.6rem]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </div>
  )
}
export default ServiceCard
