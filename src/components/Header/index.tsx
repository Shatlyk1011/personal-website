"use client"
import { FC, RefObject, useEffect, useRef } from "react"
import { motion } from "motion/react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { NAV_LINKS } from "@/shared/data"

import TextGlitch from "../ui/TextGlitch"
import { Logo } from "../icons/Logo"

gsap.registerPlugin(ScrollTrigger)

interface Props {
  mainRef: RefObject<HTMLDivElement | null>
}

const Header: FC<Props> = ({ mainRef }) => {
  const headerRef = useRef<HTMLDivElement | null>(null)

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!mainRef.current) return

    const navLinks = gsap.utils.toArray(".navbar_nav") as HTMLUListElement[]
    const sections = gsap.utils.toArray(".section_white") as HTMLLIElement[]

    sections.forEach((section: HTMLElement, i) => {
      navLinks.forEach((item: HTMLElement) => {
        const isHomeSection = i === 0

        ScrollTrigger.create({
          trigger: section,
          start: () => `top ${isHomeSection ? "2%" : "6%"}`,
          end: () => "bottom",
          scrub: 1,
          toggleClass: {
            targets: item,
            className: isHomeSection ? "text-class-two" : "text-class-one",
          },
        })
      })
    })
  }, [mainRef])

  return (
    <header
      ref={headerRef}
      className="navbar_nav fixed top-0 left-0 z-[1000] w-full px-[7.4rem] py-[3.2rem] text-gray-1 portrait:px-[2.4rem]"
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
        className="text-card-bg flex items-center justify-between gap-[3.2rem] text-[1.8rem] font-medium"
      >
        <div className="min-w-[14rem] portrait:min-w-max" data-fixed>
          <Logo className="logo text-text-1" />
        </div>

        <ul className="flex flex-1 items-center justify-end gap-[3.2rem] [font-kerning:none]" data-fixed>
          {NAV_LINKS.map(({ id }) => (
            <li className="nav_link inline-block capitalize cursor-pointer" data-name={id} key={id} onClick={() => smoothScroll(id)}>
              <TextGlitch text={id} classes="portrait:text-[2.2rem]" />
            </li>
          ))}
        </ul>
        {/* <button type="button" className="py-[0.7rem] px-[0.8rem] leading-[2.2rem] cursor-pointer rounded-[1.6rem] border border-current">
          <span className="text-[1.8rem]">Let&apos;s Connect</span>
        </button> */}
      </motion.nav>
    </header>
  )
}
export default Header
