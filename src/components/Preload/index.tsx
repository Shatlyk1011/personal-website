import { MutableRefObject, type FC } from "react"

interface Props {
  path: MutableRefObject<SVGPathElement | null>
}

const Preload: FC<Props> = ({ path }) => {
  return (
    <div className="fixed top-0 left-0 z-[1001] h-screen w-screen">
      <svg className="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref={path} vectorEffect="non-scaling-stroke" d="M 0 0 V 100 Q 50 100 100 100 V 0 z" />
      </svg>
    </div>
  )
}
export default Preload
