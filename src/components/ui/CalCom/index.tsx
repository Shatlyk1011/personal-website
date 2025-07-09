import { FC, useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

interface Props {
  children: string
};

const CalCom:FC<Props> = ({children}) => {

   useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#f00" },
        },
      });
    })();
  }, []);

  return (
    <button data-cal-link="shatlyk-abdullayev" data-cal-config='{"theme":"dark"}' className='transition-all duration-200 rounded-[1.8rem] ease-linear hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.15)] text-white text-[1.8rem] portrait:text-[2.6rem] font-medium tracking-[-0.04px] py-[1.8rem] px-[2.4rem] portrait:px-[3.2rem] portrait:py-[2.2rem] bg-text-2 hover:bg-primary' type="button">
      {children}
    </button>
  )
};
export default CalCom