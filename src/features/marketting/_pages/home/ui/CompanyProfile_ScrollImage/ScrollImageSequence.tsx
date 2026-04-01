"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FloatingCompanyIntro from "./FloatingCompanyIntro";

gsap.registerPlugin(ScrollTrigger, useGSAP);
// 49-139
const TOTAL_FRAMES = 139 - 49 + 1;

const BLOCKING_FRAMES = 24;

const INITIAL_CONCURRENCY = 8;
const BACKGROUND_CONCURRENCY = 4;

const ScrollImageSequence = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);

  const loadedImagesRef = useRef<(HTMLImageElement | null)[]>(
    Array(TOTAL_FRAMES).fill(null),
  );

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const frames = useMemo(() => {
    const baseNumber = 49;

    return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      return `/scroll-image/${baseNumber + i}.webp`;
    });
  }, []);

  const renderFrame = (frameIndex: number) => {
    const target = imageRef.current;
    if (!target) return;

    let safeIndex = frameIndex;

    if (!loadedImagesRef.current[safeIndex]) {
      for (let i = safeIndex; i >= 0; i--) {
        if (loadedImagesRef.current[i]) {
          safeIndex = i;
          break;
        }
      }
    }

    const frame = loadedImagesRef.current[safeIndex];
    if (!frame) return;

    if (target.src !== frame.src) {
      target.src = frame.src;
    }
  };

  useEffect(() => {
    let cancelled = false;

    const loadOne = (index: number) =>
      new Promise<void>((resolve) => {
        if (loadedImagesRef.current[index]) {
          resolve();
          return;
        }

        const img = new window.Image();
        img.decoding = "async";
        img.src = frames[index];

        img.onload = () => {
          if (cancelled) {
            resolve();
            return;
          }

          loadedImagesRef.current[index] = img;
          setLoadedCount((prev) => prev + 1);
          resolve();
        };

        img.onerror = () => {
          resolve();
        };
      });

    const runQueue = async (indexes: number[], concurrency: number) => {
      let cursor = 0;

      const workers = Array.from({ length: concurrency }, async () => {
        while (cursor < indexes.length && !cancelled) {
          const currentIndex = indexes[cursor];
          cursor += 1;
          await loadOne(currentIndex);
        }
      });

      await Promise.all(workers);
    };

    const start = async () => {
      const blockingIndexes = Array.from(
        { length: BLOCKING_FRAMES },
        (_, i) => i,
      );

      const remainingIndexes = Array.from(
        { length: TOTAL_FRAMES - BLOCKING_FRAMES },
        (_, i) => i + BLOCKING_FRAMES,
      );

      await runQueue(blockingIndexes, INITIAL_CONCURRENCY);

      if (cancelled) return;

      renderFrame(0);
      setIsReady(true);

      if (remainingIndexes.length) {
        runQueue(remainingIndexes, BACKGROUND_CONCURRENCY);
      }
    };

    start();

    return () => {
      cancelled = true;
    };
  }, [frames]);

  useGSAP(
    () => {
      if (!isReady) return;

      const section = sectionRef.current;
      const intro = introRef.current;
      if (!section || !intro) return;

      const frameState = { frame: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(frameState, {
        frame: TOTAL_FRAMES - 1,
        ease: "none",
        snap: "frame",
        duration: 4,
        onUpdate: () => {
          renderFrame(Math.round(frameState.frame));
        },
      });

      tl.fromTo(
        intro,
        { yPercent: 40, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { dependencies: [isReady], scope: sectionRef },
  );

  const blockingProgress = Math.min(
    100,
    Math.round(
      (Math.min(loadedCount, BLOCKING_FRAMES) / BLOCKING_FRAMES) * 100,
    ),
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <img
        ref={imageRef}
        alt="Scroll sequence"
        className="absolute inset-0 h-full w-full select-none object-cover"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      {!isReady && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black text-white">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
          <p className="mt-4 text-sm font-medium">
            Loading sequence... {blockingProgress}%
          </p>
        </div>
      )}

      <div
        ref={introRef}
        className="absolute bottom-10 left-0 right-0 z-30 flex justify-center px-4 opacity-0 md:px-10"
      >
        <FloatingCompanyIntro />
      </div>
    </section>
  );
};

export default ScrollImageSequence;
