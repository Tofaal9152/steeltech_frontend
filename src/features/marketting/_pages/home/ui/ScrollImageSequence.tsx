"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TOTAL_FRAMES = 192; // Adjust this based on the actual number of frames you have
// http://localhost:5000/scroll-image2/pngs86459.jpg 
const ScrollImageSequence = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
// pngs00086400.jpg to pngs00086591.jpg
  const frames = useMemo(() => {
    return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const frameNumber = String(i + 1).padStart(3, "0");
      // Adjust the base number (86400) and pad to 5 digits if needed
      const baseNumber = 86400;
      const imageNumber = String(baseNumber + i);
      console.log(imageNumber)
      return `/scroll-image/pngs000${imageNumber}.jpg`;
    });
    // example:
    // /public/images/scroll-frames/frame-0001.jpg
    // /public/images/scroll-frames/frame-0002.jpg
  }, []);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const frameState = { frame: 0 };

    const tween = gsap.to(frameState, {
      frame: TOTAL_FRAMES - 1,
      ease: "none",
      snap: "frame",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      onUpdate: () => {
        setCurrentFrame(Math.round(frameState.frame));
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="flex h-full w-full items-center justify-center bg-black">
      <img
        src={frames[currentFrame]}
        alt={`Frame ${currentFrame + 1}`}
        className="h-full w-full object-cover"
        draggable={false}
      />
      {/* Top gradient overlay */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent" />
      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
    </section>
  );
};

export default ScrollImageSequence;
