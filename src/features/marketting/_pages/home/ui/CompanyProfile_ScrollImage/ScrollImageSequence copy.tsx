// "use client";

// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import FloatingCompanyIntro from "./FloatingCompanyIntro";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const START_FRAME = 49;
// const END_FRAME = 139;
// const TOTAL_FRAMES = END_FRAME - START_FRAME + 1;
// const HIGH_PRIORITY_RADIUS = 6;

// export default function ScrollImageSequence() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   const introRef = useRef<HTMLDivElement | null>(null);

//   const loadedRef = useRef<(HTMLImageElement | null)[]>(
//     Array(TOTAL_FRAMES).fill(null),
//   );
//   const inFlightRef = useRef<Map<number, Promise<void>>>(new Map());
//   const renderedFrameRef = useRef(-1);
//   const currentFrameRef = useRef(0);

//   const [isReady, setIsReady] = useState(false);

//   const frames = useMemo(
//     () =>
//       Array.from(
//         { length: TOTAL_FRAMES },
//         (_, i) => `/scroll-image/${START_FRAME + i}.webp`,
//       ),
//     [],
//   );

//   const loadFrame = useCallback(
//     async (index: number, priority: "high" | "low" = "low") => {
//       if (index < 0 || index >= TOTAL_FRAMES) return;
//       if (loadedRef.current[index]) return;

//       const existing = inFlightRef.current.get(index);
//       if (existing) return existing;

//       const task = new Promise<void>((resolve) => {
//         const img = new Image();
//         img.decoding = "async";
//         img.fetchPriority = priority;
//         img.src = frames[index];

//         const done = async () => {
//           try {
//             await img.decode();
//           } catch {
//             // ignore decode errors and still try to use the image if loaded
//           }
//           loadedRef.current[index] = img;
//           resolve();
//         };

//         if (img.complete) {
//           void done();
//           return;
//         }

//         img.onload = () => void done();
//         img.onerror = () => resolve(); // keep last good frame on error
//       }).finally(() => {
//         inFlightRef.current.delete(index);
//       });

//       inFlightRef.current.set(index, task);
//       return task;
//     },
//     [frames],
//   );

//   const renderFrame = useCallback((index: number) => {
//     const target = imageRef.current;
//     const frame = loadedRef.current[index];

//     if (!target || !frame) return;
//     if (index === renderedFrameRef.current) return;

//     target.src = frame.src;
//     renderedFrameRef.current = index;
//   }, []);

//   const preloadAround = useCallback(
//     (center: number) => {
//       const order: number[] = [center];

//       for (let d = 1; d <= HIGH_PRIORITY_RADIUS; d++) {
//         if (center + d < TOTAL_FRAMES) order.push(center + d);
//         if (center - d >= 0) order.push(center - d);
//       }

//       order.forEach((i) => void loadFrame(i, "high"));
//     },
//     [loadFrame],
//   );

//   useEffect(() => {
//     let cancelled = false;

//     const isMobile =
//       typeof window !== "undefined" &&
//       window.matchMedia("(max-width: 768px)").matches;

//     const backgroundConcurrency = isMobile ? 2 : 4;

//     const loadBackground = async () => {
//       const rest = Array.from({ length: TOTAL_FRAMES - 3 }, (_, i) => i + 3);

//       let cursor = 0;

//       const worker = async () => {
//         while (!cancelled && cursor < rest.length) {
//           const index = rest[cursor];
//           cursor += 1;
//           await loadFrame(index, "low");
//         }
//       };

//       await Promise.all(Array.from({ length: backgroundConcurrency }, worker));
//     };

//     (async () => {
//       // only block on first few frames, not 24 frames
//       await Promise.all([
//         loadFrame(0, "high"),
//         loadFrame(1, "high"),
//         loadFrame(2, "high"),
//       ]);

//       if (cancelled) return;

//       renderFrame(0);
//       setIsReady(true);

//       preloadAround(0);
//       void loadBackground();
//     })();

//     return () => {
//       cancelled = true;
//     };
//   }, [loadFrame, preloadAround, renderFrame]);

//   useGSAP(
//     () => {
//       if (!isReady) return;

//       const section = sectionRef.current;
//       const intro = introRef.current;
//       if (!section || !intro) return;

//       const frameState = { frame: 0 };

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: "+=2500",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       tl.to(frameState, {
//         frame: TOTAL_FRAMES - 1,
//         duration: 4,
//         ease: "none",
//         snap: "frame",
//         onUpdate: () => {
//           const next = Math.round(frameState.frame);
//           renderFrame(next);
//         },
//       });

//       tl.fromTo(
//         intro,
//         { yPercent: 40, opacity: 0 },
//         {
//           yPercent: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power2.out",
//           immediateRender: false,
//         },
//         ">",
//       );

//       return () => {
//         tl.scrollTrigger?.kill();
//         tl.kill();
//       };
//     },
//     { dependencies: [isReady], scope: sectionRef },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white"
//     >
//       <img
//         ref={imageRef}
//         src={frames[0]}
//         alt="Scroll sequence"
//         fetchPriority="high"
//         loading="eager"
//         decoding="async"
//         className="absolute inset-0 h-full w-full select-none object-cover"
//         draggable={false}
//       />

//       <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black/70 to-transparent" />
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black/70 to-transparent" />

//       <div
//         ref={introRef}
//         className="absolute left-0 right-0 z-30 flex justify-center opacity-0 md:px-10 xl:bottom-4 2xl:bottom-10"
//       >
//         <FloatingCompanyIntro />
//       </div>
//     </section>
//   );
// }
