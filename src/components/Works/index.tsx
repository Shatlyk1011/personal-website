import { FC } from "react"

import { cn } from "@/shared/utils"
import { PROJECTS } from "@/shared/data"

//components
import ProjectCard from "./ProjectCard"
import SectionHeading from "../ui/SectionHeading"

interface Props {
  isPortrait: boolean
}

const Works: FC<Props> = ({ isPortrait }) => {
  return (
    <section
      id="works"
      className="relative bg-bg-black px-[7.4rem] z-[100] py-[12.4rem] text-gray-1 portrait:px-[2.4rem] portrait:pt-[8rem]"
    >
      <div
        className={cn(
          "absolute top-[8%] left-0 -z-1 h-[88%] w-full portrait:top-[1.5%] portrait:h-[96%]",
          isPortrait ? "hidden" : "aware_threshold",
        )}
      ></div>
      <SectionHeading title="Portfolio Spotlight" />
      {PROJECTS.map((item, i) => (
        <ProjectCard key={i} item={item} />
      ))}
    </section>
  )
}
export default Works
