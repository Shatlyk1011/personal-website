import { FC } from "react"

import { cn } from "@/shared/utils"

interface Props {
  text: string
  classes?: string
}

const TextGlitch: FC<Props> = ({ text, classes }) => {
  return (
    <div className={cn("group relative inline-block overflow-hidden leading-[3.4rem]", classes)}>
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0 text-inherit capitalize transition duration-300 ease-in-out group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute top-0 left-0 translate-y-full capitalize text-inherit transition duration-300 ease-in-out group-hover:translate-y-0">
        {text}
      </span>
    </div>
  )
}
export default TextGlitch
