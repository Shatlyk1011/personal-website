import { type RefObject } from "react"
import gsap from "gsap"

const preloadAnimation = (path: RefObject<SVGPathElement | null>, close: () => void) => {
  gsap
    .timeline({
      onComplete: () => {
        close()
        // document.body.style.overflowY = "auto"
      },
    })

    .set(path.current!, {
      attr: { d: PRELOAD_PATHS.filled },
    })

    .to(path.current!, {
      duration: 1,
      ease: "power4.in",
      attr: { d: PRELOAD_PATHS.inBetween.curve1 },
    })
    .to(path.current!, {
      duration: 0.8,
      ease: "power4",
      attr: { d: PRELOAD_PATHS.unfilled },
    })
}

export default preloadAnimation

export const PRELOAD_PATHS = {
  filled: "M 0 0 V 100 Q 50 100 100 100 V 0 z",
  inBetween: {
    curve1: "M 0 0 V 50 Q 50 25 100 50 V 0 z",
    curve2: "M 0 0 V 50 Q 50 75 100 50 V 0 z",
  },
  unfilled: "M 0 0 V 0 Q 50 0 100 0 V 0 z",
}
