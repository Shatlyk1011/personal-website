import { FC } from "react";

import { cn } from "@/shared/utils";

interface Props {
  title: string;
  url: string;
  classes?: string;
}

const CustomLink: FC<Props> = ({ title, url, classes }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "py-[0.7rem] px-[0.8rem] leading-[2.2rem] cursor-pointer rounded-[1.6rem] border border-current transition_1 hover:text-white focus:text-white",
        classes,
      )}
    >
      <span className="text-[1.8rem]  leading-[2.2rem] font-medium tracking-[-0.43px]">{title}</span>
    </a>
  );
};
export default CustomLink;
