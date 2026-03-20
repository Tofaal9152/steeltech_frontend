"use client";

import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  start?: string;
};

export const useGsapReveal = (
  sectionRef: RefObject<HTMLElement | null>,
  options?: RevealOptions
) => {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef);
      const items = q("[data-reveal]");

      gsap.set(items, {
        opacity: 0,
        y: options?.y ?? 50,
        x: options?.x ?? 0,
        scale: options?.scale ?? 1,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: options?.duration ?? 0.9,
        stagger: options?.stagger ?? 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: options?.start ?? "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, options]);
};