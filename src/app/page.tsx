'use client'
import { useEffect, useRef, useState } from "react";

import ReactLenis from "lenis/react";

import handleOnLoad from "@/composables/onLoad";

//components
import Preload from "@/components/Preload";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const path = useRef<SVGPathElement | null>(null);

  const close = () => {
    setIsLoading(false);
    document.body.style.overflowY = "auto";
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOnLoad({ path, close });
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <ReactLenis root options={{ lerp: 0.135, smoothWheel: !isLoading }}>
      <main className="relative" ref={mainRef}>
        <Header mainRef={mainRef} />
        {isLoading && <Preload path={path} />}
        <Hero />
        <Services />
        <Works />
        {/*<CallToAction /> */}
      </main>
    </ReactLenis>
  );
}
