import { FOOTER_SOCIALS } from "@/shared/data";

//components
import CustomForm from "@/components/CustomForm";
import Header from "@/components/Header";
import { Toaster } from "sonner";

export default function Home() {

  return (
    <>
    <Header classes="absolute"/>
      <main className="bg-bg-black min-h-svh w-full text-gray-1 px-[12rem] pt-[8rem]">
        <section className="w-full flex h-full">
          {/* left */}
            <div className="flex-1 flex flex-col gap-[14rem] pt-[7.4rem] pb-[4rem] pr-[7.4rem]">
              <div>
                <h1 className="text-[6.4rem] leading-[110%] mb-[2.4rem] font-medium tracking-[-0.04em] text-nowrap">Let&apos;s start a <br /> project together</h1>

                <p className="text-[1.8rem] max-w-[90%] text-gray-2 leading-[130%]">I develop clear websites with code that empower startups and businesses capture new leads and accelerate their growth.</p>
              </div>

              <div className=" flex flex-col gap-[3.2rem] tracking-[-0.04em] text-[1.4rem] text-gray-1">
                <ul>
                  <li className="text-[1.2rem] uppercase leading-[120%] mb-[0.2rem] text-gray-3">CONTACT DETAILS</li>
                  <li className=""><a href="mailto:shatlykabdullayev1011@gmail.com">shatlykabdullayev1011@gmail.com</a></li>
                </ul>

                <ul className="flex flex-wrap gap-x-[1.2rem]">
                  <li className="text-[1.2rem] basis-[100%] uppercase leading-[120%] mb-[0.6rem] text-gray-3">SOCIALS</li>
                  {FOOTER_SOCIALS.slice(1).reverse().map(({href, title}) => (
                    <li key={href}>
                      <a href={href}>{title}</a>
                    </li>
                    ))}
                </ul>
                <ul>
                  <li className="text-[1.2rem] uppercase tracking-[-0.01em] leading-[120%] mb-[0.6rem] text-gray-3">CURRENT LOCATION</li>
                  <li>Home, Turkmenabat</li>
                </ul>
              </div>
            </div>
          {/* right */}

          <div className="flex-[1.1] pl-[7.4rem] py-[3.2rem] w-full">
            <CustomForm/>
          </div>
        </section>
        <Toaster theme="dark" position="top-center"/>

      </main>
    </>

  )
}