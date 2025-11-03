import { FC } from "react"

import { cn } from "@/shared/utils"

interface Props {
  text: string
  classes?: string
  textClasses?: string
}

const TextGlitch: FC<Props> = ({ text, classes, textClasses }) => {
  return (
    <div className={cn("group relative inline-block overflow-hidden leading-[3.4rem]", classes)}>
      <span className={cn("invisible text-inherit capitalize", textClasses)}>{text}</span>
      <span className={cn("absolute top-0 left-0 text-inherit capitalize transition duration-300 ease-in-out group-hover:-translate-y-full", textClasses)}>
        {text}
      </span>
      <span className="absolute top-0 left-0 translate-y-full text-inherit capitalize transition duration-300 ease-in-out group-hover:translate-y-0">
        {text}
      </span>
    </div>
  )
}
export default TextGlitch
