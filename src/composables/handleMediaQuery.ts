import { Dispatch, SetStateAction } from "react"

export const handleMediaQuery = (fn: Dispatch<SetStateAction<boolean>>) => {
  const handleUpdate = (isPortrait: boolean) => {
    fn(isPortrait)
  }
  const mql = window.matchMedia("(orientation: portrait)")
  const listener = () => handleUpdate(mql.matches)
  mql.addEventListener("change", listener)

  fn(mql.matches)

  return () => {
    mql.removeEventListener("change", listener)
  }
}
