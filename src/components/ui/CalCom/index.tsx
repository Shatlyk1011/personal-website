import { FC, useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"

interface Props {
  children: string
}

const CalCom: FC<Props> = ({ children }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", {
        theme: "dark",
      })
    })()
  }, [])

  return (
    <button
      data-cal-link="shatlyk-abdullayev"
      data-cal-config='{"theme":"dark"}'
      className="rounded-[1.8rem] bg-text-2 px-[2.4rem] py-[1.8rem] text-[1.8rem] font-medium tracking-[-0.04px] text-white transition-all duration-200 ease-linear hover:bg-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.15)] focus-visible:bg-primary focus-visible:ring-[0.25rem] focus-visible:ring-primary focus-visible:ring-offset-[0.1rem] focus-visible:outline-none portrait:px-[3.2rem] portrait:py-[2.2rem] portrait:text-[2.6rem]"
      type="button"
    >
      {children}
    </button>
  )
}
export default CalCom
