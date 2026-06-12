"use client"

import { useEffect, useRef, useState } from "react"

import ReactLenis from "lenis/react"

import CallToAction from "@/components/CallToAction"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Preload from "@/components/Preload"
import Services from "@/components/Services"
import Works from "@/components/Works"
import { handleMediaQuery } from "@/composables/handleMediaQuery"
import handleOnLoad from "@/composables/onLoad"

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement | null>(null)

  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setPortrait] = useState(false)

  const path = useRef<SVGPathElement | null>(null)

  const close = () => {
    setIsLoading(false)
    document.body.style.overflowY = "auto"
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOnLoad({ path, close })
    }, 0)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => handleMediaQuery(setPortrait), [])

  return (
    <ReactLenis root options={{ lerp: 0.135, smoothWheel: !isLoading }}>
      <main className="relative" ref={mainRef}>
        <Header mainRef={mainRef} />
        {isLoading && <Preload path={path} />}
        <Hero />
        <Services isPortrait={isPortrait} />
        <Works isPortrait={isPortrait} />
        <CallToAction />
      </main>
    </ReactLenis>
  )
}
