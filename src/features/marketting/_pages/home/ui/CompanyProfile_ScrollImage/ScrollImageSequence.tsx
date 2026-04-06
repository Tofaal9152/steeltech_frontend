"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FloatingCompanyIntro from "./FloatingCompanyIntro";

gsap.registerPlugin(ScrollTrigger);

const START_FRAME = 49;
const END_FRAME = 139;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1;

export default function TestIMageSequence() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const canvasWrap = canvasWrapRef.current;
    const intro = introRef.current;

    if (!canvas || !container || !canvasWrap || !intro) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const currentFrame = (index = 0) =>
      `/scroll-image/${START_FRAME + index}.webp`;

    const images: HTMLImageElement[] = [];
    const sequence = { frame: 0 };

    const resizeCanvas = () => {
      const rect = canvasWrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    };

    const drawContain = (image: HTMLImageElement) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (!width || !height) return;

      context.clearRect(0, 0, width, height);

      const imageAspect = image.naturalWidth / image.naturalHeight;
      const canvasAspect = width / height;

      let drawWidth = width;
      let drawHeight = height;

      if (imageAspect > canvasAspect) {
        drawHeight = width / imageAspect;
      } else {
        drawWidth = height * imageAspect;
      }

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      context.drawImage(image, x, y, drawWidth, drawHeight);
    };

    const drawCover = (image: HTMLImageElement) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (!width || !height) return;

      context.clearRect(0, 0, width, height);

      const imageAspect = image.naturalWidth / image.naturalHeight;
      const canvasAspect = width / height;

      let drawWidth = width;
      let drawHeight = height;

      if (imageAspect > canvasAspect) {
        drawHeight = height;
        drawWidth = height * imageAspect;
      } else {
        drawWidth = width;
        drawHeight = width / imageAspect;
      }

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      context.drawImage(image, x, y, drawWidth, drawHeight);
    };

    const render = () => {
      const image = images[Math.round(sequence.frame)];
      if (!image) return;

      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        drawContain(image);
      } else {
        drawCover(image);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i += 1) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = () => {
      resizeCanvas();
      render();
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    resizeObserver.observe(canvasWrap);
    window.addEventListener("resize", resizeCanvas);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 0.6,
          markers: false,
          anticipatePin: 1,
        },
      });

      tl.to(sequence, {
        frame: TOTAL_FRAMES - 1,
        ease: "none",
        duration: 4,
        onUpdate: render,
      }).fromTo(
        intro,
        {
          yPercent: 120,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          immediateRender: false,
        },
        ">-0.3",
      );
    }, container);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      <div className="absolute inset-0 flex items-center justify-center ">
        <div
          ref={canvasWrapRef}
          className="
            relative
            h-[38vh]
            w-full
            
            md:h-full
            md:max-w-none
          "
        >
          <canvas ref={canvasRef} className="block h-full w-full" />
        </div>
      </div>

      <div
        ref={introRef}
        className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center  opacity-0 will-change-transform will-change-opacity md:bottom-10"
      >
        <FloatingCompanyIntro />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
}
