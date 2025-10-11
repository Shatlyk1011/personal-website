import { useRef, type DetailedHTMLProps, type FC, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react"

import { cn } from "@/shared/utils"

import { IContactForm } from "@/shared/types"

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type TextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

interface BaseProps {
  name: keyof IContactForm
  classes?: string
  as?: "input" | "textarea"
  errorMsg?: string
}

type Props = (BaseProps & InputProps) | (BaseProps & TextareaProps)

const CustomInput: FC<Props> = ({ classes, as = "input", errorMsg, ...rest }) => {
  const commonProps = {
    className: cn(
      "outline-none font-regular text-[1.6rem] text-bg-white h-[4.8rem] transition border-b-[0.2rem] border-gray-3/30 focus:border-gray-3 py-[1.8rem] bg-none w-full leading-[130%] placeholder:font-[inherit] placeholder:tracking-[-0.02em] placeholder:text-[1.6rem] caret-current placeholder:text-gray-3/85 placeholder:leading-[inherit] resize-none min-h-max min-h-full overflow-hidden",
      as === "textarea" && "min-h-[11.2rem]",
      errorMsg && "border-danger hover:border-danger focus:border-danger",
      classes,
    ),
    ...rest,
  }
  if (as === "textarea") {
    return <TextArea {...(commonProps as TextareaProps)} />
  }
  return (
    <div>
      <input autoComplete="off" aria-autocomplete="none" type="text" {...(commonProps as InputProps)} />
      {errorMsg && <span className="text-[1.4rem] leading-[130%] font-normal text-danger">{errorMsg}</span>}
    </div>
  )
}

export default CustomInput

const TextArea = ({ ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return <textarea autoComplete="on" {...props} ref={textareaRef} onChange={props.onChange} />
}
