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
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (!mainRef.current) return

    const sections = gsap.utils.toArray(".section_white") as HTMLLIElement[]
    const navLinks = gsap.utils.toArray(".header") as HTMLUListElement[]

    sections.forEach((section: HTMLElement, i) => {
      navLinks.forEach((item: HTMLElement) => {
        const isHomeSection = i === 0
        const isLast = i === sections.length - 1

        ScrollTrigger.create({
          trigger: section,
          start: () => `top ${isHomeSection ? "2%" : "6%"}`,
          end: () => `bottom ${isLast ? "0" : "4%"}`,
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.2, ease: "easeIn" }}
      className="header fixed top-0 left-0 z-[1000] w-full px-[7.4rem] py-[3.2rem] text-gray-1 portrait:px-[2.4rem] portrait:py-[2rem]"
      ref={headerRef}
    >
      <nav className="text-card-bg flex items-center justify-between gap-[3.2rem] text-[1.8rem] font-medium">
        <div className="logo_block invisible min-w-[14rem] opacity-0 transition select-none portrait:min-w-max">
          <Logo className="logo text-inherit" />
        </div>

        <ul className="flex flex-1 items-center justify-end gap-[2.4rem] [font-kerning:none]" data-fixed>
          {NAV_LINKS.map(({ id }) => (
            <li
              tabIndex={0}
              className="nav_link focus-within:-wi:outline-none focus-within:-wi:ring-[0.25rem] focus-within:-wi:ring-current inline-block cursor-pointer rounded-3xl px-[0.4rem] leading-0 capitalize ring-offset-[0.1rem]"
              key={id}
              onClick={() => smoothScroll(id)}
            >
              <TextGlitch text={id} classes="portrait:text-[2.2rem]" />
            </li>
          ))}
        </ul>
        {/* <button type="button" className="py-[0.7rem] px-[0.8rem] leading-[2.2rem] cursor-pointer rounded-[1.6rem] border border-current">
          <span className="text-[1.8rem]">Let&apos;s Connect</span>
        </button> */}
      </nav>
    </motion.header>
  )
}
export default Header
