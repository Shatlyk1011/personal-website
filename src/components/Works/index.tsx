import { PROJECTS } from "@/shared/data";

//components
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <section className="relative pb-[12.4rem] bg-bg-black px-[7.4rem]  text-gray-1" id="works">
      {/* <div className="aware_threshold -z-1 absolute top-[12%] h-[73%] w-full"></div> */}
      <h3 className="text-[6.4rem] font-medium tracking-[0.4px] leading-[1.1] mb-[2.4rem]">My pieces</h3>
      {PROJECTS.map((item, i) => (
        <ProjectCard key={i} item={item} />
      ))}
    </section>
  );
};
export default Works;
