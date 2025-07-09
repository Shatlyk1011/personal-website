import { FC, ReactNode } from "react";

import { Project } from "@/shared/data";

// import CustomLink from "./CustomLink";
import MuxVideo from "@/components/ui/MuxVideo";

interface Props {
  item: Project;
}

const ProjectCard: FC<Props> = ({ item: { title, description, bgSrc, playbackId, placeholder, tags, } }) => {
  return (
    <div className="flex portrait:flex-col gap-[3.2rem] pt-[6.4rem] pb-[4.2rem] border-b border-white/[12%]">
      {/* left */}
      <div className="flex flex-[6] flex-col justify-center">
        <div className="max-w-[90%]">
          <div className="mb-[2.4rem] flex items-center gap-[1.6rem]  text-gray-2 text-nowrap text-[1.6rem] font-medium leading-[1.9rem] tracking-[-0.24px]">
            {tags.map((tag) => (
              <span key={tag} className="bg-white/5 rounded-[1.6rem] p-[0.8rem]">
                {tag}
              </span>
            ))}
          </div>
          <h4 className="text-[3.4rem] mb-[2.4rem] leading-[3.6rem] tracking-[0.04px] font-bold">{title}</h4>

          <p className="mb-[2.4rem] text-gray-2 leading-[2.6rem] portrait:text-[2rem]  text-[2.2rem]" dangerouslySetInnerHTML={{ __html: description }}></p>

          {/* <div className="flex items-center gap-[1.8rem]">
            {links?.map(({ href, title }) => (
              <button key={title} className='rounded-[1.8rem] outline duration-200 outline-current ease-linear hover:text-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.1)] transition-all py-[1rem] px-[2.4rem]' type="button">{title}</button>

            // <CustomLink key={title} title={title} url={href} />
            ))}
          </div> */}
        </div>

      </div>

      {/* right */}
      <ImageHoverEffect classes="aspect-square flex-[7]">

        <div className=" relative w-full h-full flex justify-center items-center bg-neutral-900 overflow-hidden rounded-[1.6rem]">
        <figure className="flex justify-center z-10 w-[90%] rounded-[1.2rem] overflow-hidden">
          <MuxVideo playbackId={playbackId} placheolder={placeholder} classes="w-full object-cover z-[2] h-full" />
          {/* <video src="/videos/web-done.mp4"></video> */}
        </figure>
        <img src={bgSrc} className="absolute top-0 left-0 w-full h-full z-[1] object-cover" alt="growchief image" />
      </div>
      </ImageHoverEffect>
    </div>
  );
};
export default ProjectCard;


import React, { useState, useRef } from 'react';
import { cn } from "@/shared/utils";

interface ImageHoverEffectProps {
  children: ReactNode
  classes?: string;
}

const ImageHoverEffect: React.FC<ImageHoverEffectProps> = ({ children, classes }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block", classes)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <div
          className="absolute portrait:!hidden flex items-center justify-center w-24 h-24 bg-black/80 text-white rounded-full z-[100] text-sm font-semibold pointer-events-none transition-opacity duration-200"
          style={{
            left: `${mousePosition.x - 0}px`,
            top: `${mousePosition.y - 0}px`,
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden="true"
        >
          Watch Live
        </div>
      )}
      {children}
    </div>
  );
};
