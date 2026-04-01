"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ScrollArea } from "./scroll-area";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 10000); // 
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // eslint-disable-next-line react-hooks/purity
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto w-full px-4 py-8 font-sans antialiased sm:px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[380px_minmax(0,1fr)] lg:grid-cols-[420px_minmax(0,1fr)]">
        <div className="w-full">
          <div className="relative h-[280px] w-full sm:h-[340px] md:h-[420px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.65,
                    scale: isActive(index) ? 1 : 0.96,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -18, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.94,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-between rounded-3xl bg-white/80 p-1 md:p-2">
          <motion.div
            key={active}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-bold text-black sm:text-2xl">
              {testimonials[active].name}
            </h3>

            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#ed8c2f] sm:text-sm">
              {testimonials[active].designation}
            </p>

            <motion.div
              className="mt-4 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <ScrollArea className="max-h-70 overflow-y-auto pr-2 text-sm leading-7 text-gray-600 sm:mt-5 sm:max-h-80 sm:text-[15px] md:text-base">
                {testimonials[active].quote}
              </ScrollArea>
            </motion.div>
          </motion.div>

          <div className="mt-5 flex gap-3">
            <button
              onClick={handlePrev}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition hover:bg-[#ed8c2f]/10"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12" />
            </button>

            <button
              onClick={handleNext}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition hover:bg-[#ed8c2f]/10"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
