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
        "bg-bg-white px-[2.4rem] py-[1.2rem] rounded-[1.6rem]",
        classes,
      )}
    >
      <span className="text-[1.8rem] text-text-1 leading-[2.2rem] font-medium tracking-[-0.43px]">{title}</span>
    </a>
  );
};
export default CustomLink;
