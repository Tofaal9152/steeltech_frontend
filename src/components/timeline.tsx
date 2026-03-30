"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = data.map((_, index) =>
      index / Math.max(data.length - 1, 1),
    );

    const closestBreakpointIndex = breakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - breakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );

    setActiveIndex(closestBreakpointIndex);
  });

  return (
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-16">
        {data.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className="grid grid-cols-1 gap-8 pt-8 md:pt-14 lg:grid-cols-[120px_minmax(0,1fr)_420px] lg:gap-10"
            >
              <div className="relative hidden lg:block">
                <div className="sticky top-32 z-30 flex items-start justify-center">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    <div
                      className={cn(
                        "h-4 w-4 rounded-full border-2 transition-all duration-300",
                        isActive
                          ? "border-[#ed8c2f] bg-[#ed8c2f]"
                          : "border-neutral-300 bg-white",
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="relative pl-10 lg:pl-0">
                <div className="absolute left-0 top-3 lg:hidden">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    <div
                      className={cn(
                        "h-4 w-4 rounded-full border-2 transition-all duration-300",
                        isActive
                          ? "border-[#ed8c2f] bg-[#ed8c2f]"
                          : "border-neutral-300 bg-white",
                      )}
                    />
                  </div>
                </div>

                <div className="py-2 text-left">
                  <div
                    className={cn(
                      "mb-4 h-1 w-14 rounded-full transition-all duration-300",
                      isActive ? "bg-[#ed8c2f]" : "bg-neutral-200",
                    )}
                  />

                  <h3
                    className={cn(
                      "text-2xl font-bold tracking-tight transition-colors duration-300 md:text-3xl",
                      isActive ? "text-[#ed8c2f]" : "text-neutral-300",
                    )}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={cn(
                      "mt-4 max-w-2xl text-base leading-7 transition-colors duration-300 md:text-lg",
                      isActive ? "text-neutral-700" : "text-neutral-400",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="sticky top-28">
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.45,
                      scale: isActive ? 1 : 0.96,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-[32px] border border-[#ed8c2f]/15 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
                  >
                    <div className="relative h-[420px] w-full">
                      {item.content}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-5 top-0 hidden w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-[#ed8c2f]/15 to-transparent lg:block"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-[#ed8c2f] via-[#ed8c2f]/80 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};