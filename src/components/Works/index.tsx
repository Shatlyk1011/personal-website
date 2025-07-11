import { PROJECTS } from "@/shared/data"

//components
import ProjectCard from "./ProjectCard"
import SectionHeading from "../ui/SectionHeading"

const Works = () => {
  return (
    <section
      className="relative bg-bg-black px-[7.4rem] py-[12.4rem] text-gray-1 portrait:px-[2.4rem] portrait:pt-[8rem]"
      id="works"
    >
      <div className="aware_threshold absolute top-[8%] left-0 -z-1 h-[88%] w-full portrait:top-[1.5%] portrait:h-[96%]"></div>
      <SectionHeading title="Portfolio  Spotlight" />
      {PROJECTS.map((item, i) => (
        <ProjectCard key={i} item={item} />
      ))}
    </section>
  )
}
export default Works
