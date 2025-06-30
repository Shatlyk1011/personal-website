import { FC } from "react";

interface Props {
  text: string;
}

const TextGlitch: FC<Props> = ({ text }) => {
  return (
    <div className="group relative inline-block overflow-hidden capitalize">
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0 text-inherit transition duration-300 ease-in-out group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full text-inherit transition duration-300 ease-in-out group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
};
export default TextGlitch;
