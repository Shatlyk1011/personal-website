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
import CallToAction from "@/components/CallToAction";

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
        <CallToAction />
        {/* <p className="h-[50vh]">he</p> */}
      </main>
    </ReactLenis>
  );
}

// get placeholders using ===> import { createBlurUp } from '@mux/blurup';

// const [placeholders, setPlaceholders] = useState<[string, number][] | undefined>([])

//   const getPlaceholder = async (id: string) => {
//   const { blurDataURL, aspectRatio } = await createBlurUp(id, { blur: 10, time: 0 });

//   return [blurDataURL, aspectRatio]
// };
// useEffect(() => {
//   (async () => {
//     const data = PROJECT_VIDEO_IDS.map(async (id) => {
//       return await getPlaceholder(id)
//     })

//     const results = await Promise.all(data)

//     console.log('results', results);
//     if (results.length) {
//       setPlaceholders(results)
//     }
//   })()
// }, [])