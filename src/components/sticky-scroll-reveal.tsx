"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end 70%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, index) =>
      index / Math.max(content.length - 1, 1),
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

    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className="relative mx-auto grid max-w-7xl gap-10  lg:grid-cols-[minmax(0,1fr)_460px]"
    >
      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#ed8c2f]/30 via-[#ed8c2f]/15 to-transparent" />

        <div className="space-y-4 md:space-y-5">
          {content.map((item, index) => {
            const isActive = activeCard === index;
            const step = item.title.split(" ")[0];

            return (
              <div
                key={item.title + index}
                className="relative flex min-h-[16vh] items-center justify-start md:min-h-[18vh]"
              >
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.72,
                    x: isActive ? 8 : 0,
                    scale: isActive ? 1 : 0.985,
                  }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    "relative w-full max-w-[620px] rounded-2xl px-5 py-5 text-left transition-all duration-300",
                    isActive
                      ? "bg-[#fff7ef] shadow-[0_8px_30px_rgba(237,140,47,0.10)] border border-[#ed8c2f]/20"
                      : "bg-transparent border border-transparent",
                  )}
                >
                  <div
                    className={cn(
                      "absolute -left-[35px] top-7 h-4 w-4 rounded-full border-4 bg-white transition-all duration-300",
                      isActive
                        ? "border-[#ed8c2f] shadow-[0_0_0_6px_rgba(237,140,47,0.12)]"
                        : "border-neutral-300",
                    )}
                  />

                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={cn(
                        "rounded-xl px-3 py-1 text-xs font-bold tracking-wide transition-all duration-300",
                        isActive
                          ? "bg-[#ed8c2f] text-white"
                          : "bg-neutral-100 text-neutral-500",
                      )}
                    >
                      {step}
                    </span>

                    <div
                      className={cn(
                        "h-1 w-12 rounded-full transition-all duration-300",
                        isActive ? "bg-[#ed8c2f]" : "bg-neutral-200",
                      )}
                    />
                  </div>

                  <h3
                    className={cn(
                      "text-left text-2xl font-bold tracking-tight transition-colors duration-300 md:text-3xl",
                      isActive ? "text-[#ed8c2f]" : "text-neutral-500",
                    )}
                  >
                    {item.title.replace(`${step} `, "")}
                  </h3>

                  <p
                    className={cn(
                      "mt-3 text-left text-base leading-7 transition-colors duration-300 md:text-lg",
                      isActive ? "text-neutral-700" : "text-neutral-500",
                    )}
                  >
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative hidden lg:block">
        <div
          className={cn(
            "sticky top-28 overflow-hidden rounded-[32px] border border-[#ed8c2f]/15 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)]",
            contentClassName,
          )}
        >
          <div className="relative h-[500px] w-full">
            {content[activeCard]?.content ?? null}
          </div>
        </div>
      </div>
    </div>
  );
};