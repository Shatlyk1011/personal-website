import { FC } from "react";

import { Project } from "@/shared/data";

import CustomLink from "./CustomLink";
import MuxVideo from "@/components/ui/MuxVideo";

interface Props {
  item: Project;
}

const ProjectCard: FC<Props> = ({ item: { title, description, bgSrc, playbackId, tags, links } }) => {
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

      <div className="aspect-square relative w-full h-full flex justify-center items-center flex-[7] bg-neutral-900 overflow-hidden rounded-[1.6rem]">
        <figure className="flex justify-center z-10 w-[90%] rounded-[1.2rem] overflow-hidden">
          <MuxVideo playbackId={playbackId} classes="w-full object-cover z-[2] h-full" />
          {/* <video src="/videos/web-done.mp4"></video> */}
        </figure>
        <img src={bgSrc} className="absolute top-0 left-0 w-full h-full z-[1] object-cover" alt="growchief image" />
      </div>
    </div>
  );
};
export default ProjectCard;
