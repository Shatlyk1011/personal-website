"use client"
import { FC, RefObject, useEffect, useRef } from "react"
import { motion } from "motion/react"
import Link from "next/link"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { NAV_LINKS } from "@/shared/data"

import TextGlitch from "../ui/TextGlitch"
import { Logo } from "../icons/Logo"
import { cn } from "@/shared/utils"

gsap.registerPlugin(ScrollTrigger)

interface Props {
  mainRef?: RefObject<HTMLDivElement | null>
  classes?: string
}

const Header: FC<Props> = ({ mainRef, classes }) => {
  const headerRef = useRef<HTMLDivElement | null>(null)

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (!mainRef) return

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
      initial={mainRef ? { y: -100, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.2, ease: "easeIn" }}
      className={cn(
        "header fixed top-0 left-0 z-[1000] w-full px-[7.4rem] py-[3.2rem] text-gray-1 portrait:px-[2.4rem] portrait:py-[2rem]",
        classes,
      )}
      ref={headerRef}
    >
      <nav className="flex items-center justify-between gap-[3.2rem] text-[1.8rem] font-medium" data-fixed>
        <Link href="/" className="logo_block text-current transition select-none portrait:min-w-max">
          <Logo className="logo text-inherit" />
        </Link>

        <ul className="flex flex-1 items-center justify-end gap-[2.4rem] [font-kerning:none]">
          {NAV_LINKS.map(({ title, linkIdx, href }) =>
            href ? (
              <Link key={linkIdx} href={href} className="leading-0">
                <TextGlitch text={title} classes="portrait:text-[2.2rem] capitalize" />
              </Link>
            ) : (
              <a
                href={"/#" + linkIdx}
                className="nav_link inline-block cursor-pointer rounded-3xl px-[0.4rem] leading-0 capitalize ring-offset-[0.1rem] focus-visible:ring-[0.25rem] focus-visible:ring-current focus-visible:outline-none"
                key={linkIdx}
                onClick={() => smoothScroll(linkIdx)}
              >
                <TextGlitch text={title} classes="portrait:text-[2.2rem] capitalize" />
              </a>
            ),
          )}
        </ul>
        {/* <button type="button" className="py-[0.7rem] px-[0.8rem] leading-[2.2rem] cursor-pointer rounded-[1.6rem] border border-current">
          <span className="text-[1.8rem]">Let&apos;s Connect</span>
        </button> */}
      </nav>
    </motion.header>
  )
}
export default Header
