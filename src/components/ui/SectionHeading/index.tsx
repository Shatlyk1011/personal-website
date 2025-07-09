import { FC } from 'react';

import { cn } from '@/shared/utils';

interface Props {
  title: string
  classes?:string
};

const SectionHeading:FC<Props> = ({title, classes}) => {
  return (
    <h3 className={cn("text-[6.4rem] portrait:text-[5.6rem] font-medium tracking-[-0.04em] leading-[1.2] uppercase", classes)}>{title}</h3>
  )
};
export default SectionHeading