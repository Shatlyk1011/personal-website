import { FC } from "react";
import { cn } from "@/shared/utils";

import { Project } from "@/shared/data";

import CustomLink from "./CustomLink";

interface Props {
  item: Project;
}

const ProjectCard: FC<Props> = ({ item: { title, description, tags, links } }) => {
  return (
    <div className="flex gap-[3.2rem] pt-[6.4rem] pb-[4.2rem] border-b border-white/[12%]">
      {/* left */}
      <div className="flex flex-[6] flex-col justify-center">
        <div className="max-w-[90%]">
          <div className="mb-[1.4rem] flex items-center gap-[1.6rem]  text-gray-2 text-nowrap text-[1.6rem] font-medium leading-[1.9rem] tracking-[-0.24px]">
            {tags.map((tag) => (
              <span key={tag} className="bg-white/5 rounded-[1.6rem] p-[0.8rem]">
                {tag}
              </span>
            ))}
          </div>
          <h4 className="text-[3.4rem] mb-[1.4rem] leading-[3.6rem] tracking-[0.04px] font-bold">{title}</h4>

          <p className="mb-[2.4rem] text-gray-2 leading-[2.6rem]  text-[2.2rem]">{description}</p>

          <div className="flex items-center gap-[1.8rem]">
            {links.map(({ href, title }) => (
              <CustomLink key={title} title={title} url={href} />
            ))}
          </div>
        </div>

      </div>

      {/* right */}

      {/* FIX SIZES */}
      <figure className="h-[39.5rem] w-full flex-[7] rounded-[0.6vw] bg-neutral-900">
        <img src="" alt="" />
      </figure>
    </div>
  );
};
export default ProjectCard;
