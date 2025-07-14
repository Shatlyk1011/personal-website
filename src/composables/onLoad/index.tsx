import { RefObject } from "react"

//composables
import preloadAnimation from "./preload"
import contentAware from "./contentAware"

interface Props {
  path: RefObject<SVGPathElement | null>
  close: () => void
}

const onLoad = ({ close, path }: Props) => {
  document.getElementById('home')?.scrollIntoView({ behavior: 'instant' })

  const fixedElements = document.querySelectorAll("[data-fixed]")
  const blocks = document.querySelectorAll(".aware_threshold")
  const handleContentAware = contentAware(blocks, fixedElements)

  // close preload animation
  preloadAnimation(path, close)

  // run contentaware feat
  handleContentAware()

  // turn off mouse 3 click
  // document.body.onmousedown = function (e) {
  //   if (e.button == 1) {
  //     e.preventDefault();
  //     return false;
  //   }
  // };
}

export default onLoad
