import { FC } from "react"

import { cn } from "@/shared/utils"

interface Props {
  title: string
  classes?: string
}

const SectionHeading: FC<Props> = ({ title, classes }) => {
  return (
    <h2
      className={cn(
        "text-[6.4rem] leading-[1.2] font-medium tracking-[-0.04em] uppercase portrait:text-[5.6rem]",
        classes,
      )}
      dangerouslySetInnerHTML={{ __html: title }}
    ></h2>
  )
}
export default SectionHeading
