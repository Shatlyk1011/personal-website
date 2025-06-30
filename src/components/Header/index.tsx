"use client";
import { FC, MutableRefObject, useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { NAV_LINKS } from "@/shared/data";

import TextGlitch from "../ui/TextGlitch";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  mainRef: MutableRefObject<HTMLDivElement | null>;
}

const Header: FC<Props> = ({ mainRef }) => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      ".nav",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: 0.2,
        ease: "expo.inOut",
      },
    );
  }, []);

  useEffect(() => {
    if (!mainRef?.current) return;

    const navItems = mainRef?.current?.querySelectorAll(".nav_link");

    // Create ScrollTrigger for each section
    NAV_LINKS.forEach(({ id, linkIdx, isDarkBg, start, end }) => {
      ScrollTrigger.create({
        trigger: "#" + id,
        start: start || "top top",
        end: end || "bottom top",
        onEnter: () => setActiveLink(linkIdx, isDarkBg),
        onEnterBack: () => setActiveLink(linkIdx, isDarkBg),
        // onLeave: () => setActiveLink(linkIdx, isDarkBg)
      });
    });

    // Function to update active link style
    const setActiveLink = (linkIdx: number, isDark: boolean) => {
      navItems.forEach((item, i) => {
        if (navRef.current && linkIdx === 1) {
          navRef.current.style.position = "fixed";
        } else if (navRef.current && linkIdx === 0) {
          navRef.current.style.position = "absolute";
          gsap.to(item, {
            color: "#000",
            fontWeight: 400,
            duration: 0.15,
          });

          return;
        }

        if (i === linkIdx) {
          gsap.to(item, {
            color: isDark ? "#fff" : "#000", // Active color
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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mainRef]);

  return (
    <nav
      ref={navRef}
      className="nav bg-blue-200 absolute top-0 z-[1000] flex w-full items-center px-[7.4rem] py-[3.2rem] text-[1.25vw] text-card-bg"
    >
      <div className="min-w-[15vw] text-[2vw] font-semibold">gj_wp</div>

      <ul className="flex flex-1 items-center justify-end gap-[1.3vw] [font-kerning:none]" data-fixed>
        {NAV_LINKS.map(({ id }) => (
          <li
            className="nav_link inline-block cursor-pointer"
            aria-label="link-button"
            role="button"
            key={id}
          >
            <a href={"#" + id} className="capitalize">
              <TextGlitch text={id} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Header;
