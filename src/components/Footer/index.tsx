import { FOOTER_SOCIALS } from '@/shared/data';
import TextGlitch from '../ui/TextGlitch';

const Footer = () => {
  return (
    <footer className="w-full leading-[2.2rem]">
      <div className="relative mx-[3.2rem] border-t border-black/20">
        <div className="relative flex justify-between py-[1.6rem] portrait:flex-wrap portrait:py-[3.2rem]">
          <ul className="flex basis-[25%] flex-col items-start leading-[150%] font-semibold text-nowrap opacity-90 portrait:order-2 portrait:mt-6 portrait:basis-[100%] portrait:leading-[160%]">
            <li>Shatlyk Abdullayev</li>
            <li className="">©2025 All Rights Reserved.</li>
            {/* <li className="hidden text-nowrap uppercase portrait:block">©2025 All Rights Reserved.</li> */}
          </ul>

          <ul className="flex items-center gap-[1.2rem] portrait:gap-[0.4rem]">
            {FOOTER_SOCIALS.map(({ href, title }) => (
              <li key={title}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="rounded-3xl px-[0.6rem] py-[0.3rem] tracking-wide ring-offset-[0.1rem] focus:outline-none focus-visible:ring-[0.15rem] focus-visible:ring-current focus-visible:outline-none"
                >
                  <TextGlitch
                    text={title}
                    classes="text-[1.4rem] portrait:text-[1.8rem]  leading-[110%] "
                  ></TextGlitch>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex basis-[25%] items-center justify-end align-bottom portrait:mt-3">
            <a
              href="https://www.instagram.com/devbyshat"
              className="rounded-3xl px-[0.6rem] py-[0.3rem] ring-offset-1 focus:outline-none focus-visible:ring-[0.15rem] focus-visible:ring-current focus-visible:outline-none"
              target="_blank"
              rel="noopener"
            >
              <TextGlitch
                text="More Projects"
                classes="text-[1.4rem] text-nowrap tracking-wide portrait:text-[1.8rem] leading-[110%]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};
export default Footer