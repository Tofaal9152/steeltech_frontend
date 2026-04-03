"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
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

  // eslint-disable-next-line react-hooks/purity
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto w-full px-4 py-8 font-sans antialiased sm:px-6 md:px-8 lg:px-10">
      {/* CHANGED: Replaced "items-start" with "items-stretch" so both columns are always equal height */}
      <div className="grid grid-cols-1 items-stretch gap-16 md:grid-cols-[380px_minmax(0,1fr)] lg:grid-cols-[420px_minmax(0,1fr)]">
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

        {/* h-full and flex-col work together to fill the stretched grid height */}
        <div className="flex h-full min-w-0 flex-col rounded-3xl bg-white/80 p-1 md:p-2">
          {/* flex-1 takes up all top space, leaving the buttons perfectly pinned to the bottom */}
          <div className="flex flex-1 flex-col">
            <motion.div
              key={active}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex h-full flex-col"
            >
              <h3 className="text-xl font-bold text-black sm:text-2xl">
                {testimonials[active].name}
              </h3>

              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#ed8c2f] sm:text-sm">
                {testimonials[active].designation}
              </p>

              <motion.div
                className="mt-4 flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <ScrollArea className="h-full h-[200px] overflow-y-auto pr-2 text-sm leading-7 text-gray-600 sm:mt-5 sm:h-[260px] sm:text-[15px] md:h-[300px] md:text-base">
                  {testimonials[active].quote}
                </ScrollArea>
              </motion.div>
            </motion.div>
          </div>

          {/* mt-auto pins this to the bottom edge of the container */}
          <motion.div
            className="mt-auto flex flex-col pt-4 justify-end items-end"
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.15, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          >
            <div className="flex gap-3 ">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#ed8c2f]/20 bg-[#ed8c2f] text-white shadow-[0_8px_24px_rgba(237,140,47,0.28)] transition duration-300 hover:scale-105 hover:bg-[#d9781b] focus:outline-none focus:ring-2 focus:ring-[#ed8c2f]/40"
              >
                <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#ed8c2f]/20 bg-[#ed8c2f] text-white shadow-[0_8px_24px_rgba(237,140,47,0.28)] transition duration-300 hover:scale-105 hover:bg-[#d9781b] focus:outline-none focus:ring-2 focus:ring-[#ed8c2f]/40"
              >
                <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
            {autoplay && (
              <div className="mt-2 h-1 w-[84px] overflow-hidden rounded-full bg-gray-200">
                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 10, ease: "linear" }}
                  onAnimationComplete={handleNext}
                  className="h-full bg-[#ed8c2f]"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
