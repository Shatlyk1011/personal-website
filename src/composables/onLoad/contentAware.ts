import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ExtendedElement extends Element {
  currentTween?: gsap.core.Tween | null;
}

interface Effect {
  onEnter: (target: Element & { currentTween?: gsap.core.Tween | null }) => void;
  onLeave: (target: Element & { currentTween?: gsap.core.Tween | null }) => void;
}

// how it works:
// add "data-fixed" attribute to the element that should be awared
// add '.aware_threshold' class to the element in which the element with data-fixed attribute should be hidden

const contentAware = (blocks: NodeListOf<Element>, fixedElements: NodeListOf<Element>) => {
  gsap.registerPlugin(ScrollTrigger);

  function resetElement(target: Element) {
    gsap.set(target, {
      clearProps: "all", // Clear all GSAP-applied properties
      rotation: 0,
      xPercent: 0,
      yPercent: 0,
      x: 0,
      y: 0,
      scale: 1,
      autoAlpha: 1,
    });
  }

  const effects: Effect[] = [
    {
      onEnter: (target: ExtendedElement) => {
        if (target.currentTween) target.currentTween.kill();
        resetElement(target);
        target.currentTween = gsap.to(target, {
          opacity: 0,
          duration: 0.25,
          ease: "expo.out",
          onComplete: () => {
            target.currentTween = null;
          },
        });
      },
      onLeave: (target: ExtendedElement) => {
        if (target.currentTween) target.currentTween.kill();
        target.currentTween = gsap.to(target, {
          opacity: 1,
          duration: 0.25,
          ease: "expo.in",
          onComplete: () => {
            resetElement(target);
            target.currentTween = null;
          },
        });
      },
    },
    // this effect does not uses
    {
      onEnter: (target: ExtendedElement) => {
        if (target.currentTween) target.currentTween.kill();
        resetElement(target); // Reset element state before animation starts
        gsap.set(target, { transformOrigin: "2% 96%" });
        target.currentTween = gsap.to(target, {
          xPercent: 100,
          rotation: 0,
          y: 0,
          duration: 0.4,
          ease: "expo.inOut",
          onComplete: () => {
            target.currentTween = null;
          },
        });
      },
      onLeave: (target) => {
        if (target.currentTween) target.currentTween.kill();
        target.currentTween = gsap.to(target, {
          xPercent: 0,
          rotation: 0,
          y: 0,
          duration: 0.4,
          ease: "expo.inOut",
          onComplete: () => {
            resetElement(target); // Reset element state
            target.currentTween = null;
          },
        });
      },
    },
  ];

  function createScrollTriggers() {
    blocks.forEach((block) => {
      const effect = effects[0];
      fixedElements.forEach((fixedElement) => {
        ScrollTrigger.create({
          trigger: block,
          start: () => `top top`,
          end: () => `bottom top`,

          onEnter: () => effect.onEnter(fixedElement),
          onLeaveBack: () => effect.onLeave(fixedElement),
          onLeave: () => effect.onLeave(fixedElement),
          onEnterBack: () => effect.onEnter(fixedElement),
        });
      });
    });
  }

  // Update position dynamically on resize
  window?.addEventListener("resize", () => {
    console.log("resize");
    ScrollTrigger.refresh(); // Refresh ScrollTrigger to apply new start/end positions
  });

  return createScrollTriggers;
};

export default contentAware;
