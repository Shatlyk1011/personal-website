import { PROJECTS } from "@/shared/data";

//components
import ProjectCard from "./ProjectCard";
import SectionHeading from "../ui/SectionHeading";

const Works = () => {
  return (
    <section className="relative py-[12.4rem] bg-bg-black px-[7.4rem]  text-gray-1" id="works">
      <div className="aware_threshold  z-1 absolute top-[12%] h-[78%] w-full"></div>
      <SectionHeading title="Selected Works" />
      {PROJECTS.map((item, i) => (
        <ProjectCard key={i} item={item} />
      ))}
    </section>
  );
};
export default Works;
