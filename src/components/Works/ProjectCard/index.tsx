import { FC } from "react"

import { Project } from "@/shared/data"

// import CustomLink from "./CustomLink";
import MuxVideo from "@/components/ui/MuxVideo"
import CustomLink from "./CustomLink"

interface Props {
  item: Project
}

const ProjectCard: FC<Props> = ({ item: { title, description, bgSrc, playbackId, placeholder, tags, links } }) => {
  return (
    <div className="flex gap-[3.2rem] border-b border-white/[12%] pt-[6.4rem] pb-[4.2rem] portrait:flex-col portrait:py-[6.4rem]">
      {/* left */}
      <div className="flex flex-[6] flex-col justify-center">
        <div className="max-w-[90%]">
          <div className="mb-[2.4rem] flex items-center gap-[1.6rem] text-[1.6rem] leading-[1.9rem] font-medium tracking-[-0.24px] text-nowrap text-gray-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-[1.6rem] bg-white/5 p-[0.8rem]">
                {tag}
              </span>
            ))}
          </div>
          <h4 className="mb-[2.4rem] text-[3.4rem] portrait:text-[3.6rem] portrait:leading-[3.8rem] leading-[3.6rem] font-bold tracking-[0.04px]">{title}</h4>

          <p
            className="mb-[2.4rem] text-[2.2rem] leading-[2.6rem] text-gray-2 portrait:text-[2rem]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

          <div className="flex items-center gap-[1.8rem]">
            {links?.map(({ href, title }) => (
              <CustomLink key={title} title={title} url={href} />
            ))}
          </div>
        </div>
      </div>

      {/* right */}
      <div className="aspect-custom-square relative flex h-full w-full flex-[7] items-center justify-center overflow-hidden rounded-[1.6rem] bg-neutral-900">
        <figure className="z-10 flex w-[90%] justify-center overflow-hidden rounded-[1.2rem]">
          <MuxVideo playbackId={playbackId} placheolder={placeholder} classes="w-full object-cover z-[2] h-full" />
        </figure>
        <img
          src={bgSrc}
          fetchPriority="low"
          className="absolute top-0 left-0 z-[1] h-full w-full object-cover"
          alt="growchief image"
        />
      </div>
    </div>
  )
}
export default ProjectCard
