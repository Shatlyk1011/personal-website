import { FC } from "react";

import { cn } from "@/shared/utils";

import { type Services } from "@/shared/data";

interface Props {
  item: Services;
}
      {/* {awareItemClass && <div className={cn("absolute top-[-5%] z-[-1] h-[80%] w-full", awareItemClass)}></div>} */}
const ServiceCard: FC<Props> = ({ item }) => {
  const { title, services, description, number, awareItemClass } = item;

  return (
    <div className="sticky-content relative z-10 w-full bg-bg-black pt-[3.2rem] nth-[2]:pt-[6.4rem] pb-[3.2rem] border-t border-white/[12%] last:border-b">
      <div className="flex justify-between">

        {/* left */}
        <div className="text-[3.4rem] leading-[3.6rem] tracking-[0.4px] text-gray-1">
          ({number})
        </div>
        {/* right */}

        <div className="basis-[66.4rem]">
          <h4 className="text-[3.4rem] leading-[3.6rem] tracking-[0.4px] mb-[3.2rem]">{title}</h4>

          <ul className="mb-[6.4rem] text-[2.2rem] ledaing-[2.6rem] max-w-[38.5rem]">
            {services.map((s, i) => (
              <li key={s} className="not-last:mb-[1.8rem] border-b border-white/[12%]">
                <span className="opacity-80 text-gray-3 mr-[1rem]">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ul>

          <p className="text-gray-2">{description}</p>
        </div>
      </div>

    </div>
  );
};
export default ServiceCard;
