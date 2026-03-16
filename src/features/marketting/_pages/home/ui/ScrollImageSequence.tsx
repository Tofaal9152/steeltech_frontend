// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TOTAL_FRAMES = 192;
// const BLOCKING_FRAMES = 24; // loader hide করার আগে minimum কত frame লাগবে
// const BASE_NUMBER = 86400;

// // versioned path use করো for caching
// const getFrameSrc = (index: number) =>
//   `/scroll-image/pngs000${BASE_NUMBER + index}.jpg`;

// const ScrollImageSequence = () => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   const imagesRef = useRef<(HTMLImageElement | null)[]>(
//     Array(TOTAL_FRAMES).fill(null)
//   );
//   const loadedSetRef = useRef<Set<number>>(new Set());

//   const [blockingLoadedCount, setBlockingLoadedCount] = useState(0);
//   const [isReady, setIsReady] = useState(false);

//   const frameSources = useMemo(
//     () => Array.from({ length: TOTAL_FRAMES }, (_, i) => getFrameSrc(i)),
//     []
//   );

//   const drawFrame = (frameIndex: number) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const img =
//       imagesRef.current[frameIndex] ||
//       findNearestLoadedImage(frameIndex, imagesRef.current);

//     if (!img) return;

//     const { width: canvasWidth, height: canvasHeight } = canvas;

//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//     // cover behavior
//     const imageAspect = img.width / img.height;
//     const canvasAspect = canvasWidth / canvasHeight;

//     let drawWidth = canvasWidth;
//     let drawHeight = canvasHeight;
//     let offsetX = 0;
//     let offsetY = 0;

//     if (imageAspect > canvasAspect) {
//       drawHeight = canvasHeight;
//       drawWidth = img.width * (canvasHeight / img.height);
//       offsetX = (canvasWidth - drawWidth) / 2;
//     } else {
//       drawWidth = canvasWidth;
//       drawHeight = img.height * (canvasWidth / img.width);
//       offsetY = (canvasHeight - drawHeight) / 2;
//     }

//     ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
//   };

//   const resizeCanvas = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const parent = canvas.parentElement;
//     if (!parent) return;

//     const dpr = Math.min(window.devicePixelRatio || 1, 2);
//     const rect = parent.getBoundingClientRect();

//     canvas.width = Math.round(rect.width * dpr);
//     canvas.height = Math.round(rect.height * dpr);
//     canvas.style.width = `${rect.width}px`;
//     canvas.style.height = `${rect.height}px`;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.scale(dpr, dpr);

//     canvas.width = Math.round(rect.width * dpr);
//     canvas.height = Math.round(rect.height * dpr);
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//     drawFrame(0);
//   };

//   useEffect(() => {
//     let cancelled = false;

//     const loadImage = (index: number) =>
//       new Promise<void>((resolve) => {
//         if (imagesRef.current[index]) {
//           resolve();
//           return;
//         }

//         const img = new Image();
//         img.decoding = "async";
//         img.src = frameSources[index];

//         img.onload = () => {
//           if (cancelled) {
//             resolve();
//             return;
//           }

//           imagesRef.current[index] = img;

//           if (!loadedSetRef.current.has(index)) {
//             loadedSetRef.current.add(index);

//             if (index < BLOCKING_FRAMES) {
//               setBlockingLoadedCount((prev) => prev + 1);
//             }
//           }

//           resolve();
//         };

//         img.onerror = () => resolve();
//       });

//     const runQueue = async (indexes: number[], concurrency: number) => {
//       let cursor = 0;

//       const workers = Array.from({ length: concurrency }, async () => {
//         while (cursor < indexes.length && !cancelled) {
//           const currentIndex = indexes[cursor];
//           cursor += 1;
//           await loadImage(currentIndex);
//         }
//       });

//       await Promise.all(workers);
//     };

//     const startPreloading = async () => {
//       const blockingIndexes = Array.from(
//         { length: BLOCKING_FRAMES },
//         (_, i) => i
//       );

//       const remainingIndexes = Array.from(
//         { length: TOTAL_FRAMES - BLOCKING_FRAMES },
//         (_, i) => i + BLOCKING_FRAMES
//       );

//       await runQueue(blockingIndexes, 8);

//       if (cancelled) return;

//       setIsReady(true);
//       drawFrame(0);

//       // background preload
//       runQueue(remainingIndexes, 4);
//     };

//     startPreloading();

//     return () => {
//       cancelled = true;
//     };
//   }, [frameSources]);

//   useEffect(() => {
//     resizeCanvas();

//     const handleResize = () => {
//       resizeCanvas();
//       ScrollTrigger.refresh();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (!isReady) return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const playhead = { frame: 0 };

//     const tween = gsap.to(playhead, {
//       frame: TOTAL_FRAMES - 1,
//       ease: "none",
//       snap: "frame",
//       onUpdate: () => {
//         drawFrame(Math.round(playhead.frame));
//       },
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=2200",
//         scrub: 0.25,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     return () => {
//       tween.scrollTrigger?.kill();
//       tween.kill();
//     };
//   }, [isReady]);

//   const progress = Math.round((blockingLoadedCount / BLOCKING_FRAMES) * 100);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen w-full overflow-hidden bg-black"
//     >
//       <canvas ref={canvasRef} className="block h-full w-full" />

//       <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

//       {!isReady && (
//         <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black text-white">
//           <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
//           <p className="mt-4 text-sm font-medium">Loading sequence... {progress}%</p>
//         </div>
//       )}
//     </section>
//   );
// };

// function findNearestLoadedImage(
//   index: number,
//   images: (HTMLImageElement | null)[]
// ) {
//   if (images[index]) return images[index];

//   for (let i = index; i >= 0; i--) {
//     if (images[i]) return images[i];
//   }

//   for (let i = index + 1; i < images.length; i++) {
//     if (images[i]) return images[i];
//   }

//   return null;
// }

// export default ScrollImageSequence;
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TOTAL_FRAMES = 192;
const BLOCKING_FRAMES = 24; 
// সব 192 frame load না হওয়া পর্যন্ত loader রাখতে চাইলে:
// const BLOCKING_FRAMES = TOTAL_FRAMES;

const INITIAL_CONCURRENCY = 8;
const BACKGROUND_CONCURRENCY = 4;

const ScrollImageSequence = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const loadedImagesRef = useRef<(HTMLImageElement | null)[]>(
    Array(TOTAL_FRAMES).fill(null)
  );

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const frames = useMemo(() => {
    const baseNumber = 86400;

    return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      return `/scroll-image/pngs000${baseNumber + i}.jpg`;
    });
  }, []);

  const renderFrame = (frameIndex: number) => {
    const target = imageRef.current;
    if (!target) return;

    let safeIndex = frameIndex;

    // target frame এখনও load না হলে nearest previous loaded frame use করো
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
        (_, i) => i
      );

      const remainingIndexes = Array.from(
        { length: TOTAL_FRAMES - BLOCKING_FRAMES },
        (_, i) => i + BLOCKING_FRAMES
      );

      // প্রথম chunk preload
      await runQueue(blockingIndexes, INITIAL_CONCURRENCY);

      if (cancelled) return;

      renderFrame(0);
      setIsReady(true);

      // বাকি image background-e load
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
      if (!section) return;

      const frameState = { frame: 0 };

      const tween = gsap.to(frameState, {
        frame: TOTAL_FRAMES - 1,
        ease: "none",
        snap: "frame",
        onUpdate: () => {
          renderFrame(Math.round(frameState.frame));
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { dependencies: [isReady], scope: sectionRef }
  );

  const blockingProgress = Math.min(
    100,
    Math.round((Math.min(loadedCount, BLOCKING_FRAMES) / BLOCKING_FRAMES) * 100)
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <img
        ref={imageRef}
        alt="Scroll sequence"
        className="h-full w-full object-cover select-none"
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

      {!isReady && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black text-white">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
          <p className="mt-4 text-sm font-medium">
            Loading sequence... {blockingProgress}%
          </p>
        </div>
      )}
    </section>
  );
};

export default ScrollImageSequence;
// "use client";

// import { useMemo, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const TOTAL_FRAMES = 192; // Adjust this based on the actual number of frames you have
// // http://localhost:5000/scroll-image2/pngs86459.jpg 
// const ScrollImageSequence = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const [currentFrame, setCurrentFrame] = useState(0);
// // pngs00086400.jpg to pngs00086591.jpg
//   const frames = useMemo(() => {
//     return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
//       const frameNumber = String(i + 1).padStart(3, "0");
//       // Adjust the base number (86400) and pad to 5 digits if needed
//       const baseNumber = 86400;
//       const imageNumber = String(baseNumber + i);
//       console.log(imageNumber)
//       return `/scroll-image/pngs000${imageNumber}.jpg`;
//     });
//     // example:
//     // /public/images/scroll-frames/frame-0001.jpg
//     // /public/images/scroll-frames/frame-0002.jpg
//   }, []);

//   useGSAP(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const frameState = { frame: 0 };

//     const tween = gsap.to(frameState, {
//       frame: TOTAL_FRAMES - 1,
//       ease: "none",
//       snap: "frame",
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=2000",
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//       },
//       onUpdate: () => {
//         setCurrentFrame(Math.round(frameState.frame));
//       },
//     });

//     return () => {
//       tween.kill();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen w-full overflow-hidden"
//     >
//       <div className="flex h-full w-full items-center justify-center bg-black">
//       <img
//         src={frames[currentFrame]}
//         alt={`Frame ${currentFrame + 1}`}
//         className="h-full w-full object-cover"
//         draggable={false}
//       />
//       {/* Top gradient overlay */}
//       <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent" />
//       {/* Bottom gradient overlay */}
//       <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default ScrollImageSequence;
