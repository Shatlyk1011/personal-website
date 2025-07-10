"use client";
import { FC, RefObject, useEffect, useRef } from "react";
import { motion } from 'motion/react'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { NAV_LINKS, NavLinkIdx } from "@/shared/data";

import TextGlitch from "../ui/TextGlitch";
import { Logo } from "../icons/Logo";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  mainRef: RefObject<HTMLDivElement | null>;
}

const Header: FC<Props> = ({ mainRef }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mainRef?.current) return;

    const navItems = mainRef?.current?.querySelectorAll(".nav_link");
    const logo = mainRef?.current?.querySelector(".logo");

    const setActiveLink = (linkIdx: NavLinkIdx, isDark: boolean) => {
      navItems.forEach((item,) => {
        // set fixed position on "services" section
        if (headerRef.current && linkIdx === NavLinkIdx.Services) {
          headerRef.current.style.position = "fixed";
        } else if (headerRef.current && linkIdx === NavLinkIdx.Home) {
          headerRef.current.style.position = "absolute";
          gsap.to(item, {
            color: "#0C0C0C",
            fontWeight: 400,
            duration: 0.15,
          });
          gsap.to(logo, {
            opacity: isDark ? '0' : '1'
          })
          return;
        }

        gsap.to(logo, {
          opacity: isDark ? '0' : '1'
        })

        if (item.getAttribute('data-name') == linkIdx) {
          gsap.to(item, {
            color: isDark ? "#DCDCDC" : "#0C0C0C", // Active color
            fontWeight: 500,
            duration: 0.15,
          });
        } else {
          gsap.to(item, {
            color: isDark ? "#fff5" : "#0007", // Default color
            fontWeight: 400,
            duration: 0.15,
          });
        }
      });


    };

    // Create ScrollTrigger for each section with id
    NAV_LINKS.forEach(({ id, linkIdx, isDarkBg, start, end }) => {
      ScrollTrigger.create({
        trigger: "#" + id,
        start,
        end,
        onEnter: () => setActiveLink(linkIdx, isDarkBg),
        onEnterBack: () => setActiveLink(linkIdx, isDarkBg),
        // onLeave: () => setActiveLink(linkIdx, isDarkBg)
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mainRef]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0  z-[1000] w-full px-[7.4rem] portrait:px-[4rem] py-[3.2rem]">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: 'easeInOut' }}

        className="flex gap-[3.2rem] justify-between items-center text-[1.8rem] font-medium text-card-bg"
      >
        <div className="min-w-[14rem]">
          <Logo className="logo text-text-1" />
        </div>

        <ul className="flex flex-1 items-center justify-end gap-[3.2rem] [font-kerning:none]" data-fixed>
          {NAV_LINKS.map(({ id }) => (
            <li
              className="nav_link inline-block cursor-pointer"
              data-name={id}
              key={id}
            >
              <a href={"#" + id} className="capitalize">
                <TextGlitch text={id} classes="portrait:text-[2.2rem]" />
              </a>
            </li>
          ))}
        </ul>
        {/* <button type="button" className="py-[0.7rem] px-[0.8rem] leading-[2.2rem] cursor-pointer rounded-[1.6rem] border border-current">
          <span className="text-[1.8rem]">Let&apos;s Connect</span>
        </button> */}
      </motion.nav>
    </header>

  );
};
export default Header;
