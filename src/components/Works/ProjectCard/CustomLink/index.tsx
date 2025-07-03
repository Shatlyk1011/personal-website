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
        "bg-bg-white px-[2.4rem] py-[1.1rem] hover:bg-primary hover:text-white text-text-1 transition_1 rounded-[1.6rem]",
        classes,
      )}
    >
      <span className="text-[1.8rem]  leading-[2.2rem] font-medium tracking-[-0.43px]">{title}</span>
    </a>
  );
};
export default CustomLink;
