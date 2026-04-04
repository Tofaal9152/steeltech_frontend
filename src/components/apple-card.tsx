"use client";

import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useOutsideClick } from "@/hooks/use-outside-click";
import { Plus } from "lucide-react";
import { BlurImage } from "./blurImage";
import { Button } from "./ui/button";

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  // portal target (avoid SSR crash)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      // eslint-disable-next-line react-hooks/immutability
      if (event.key === "Escape") handleClose();
    }

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modal = useMemo(() => {
    if (!open) return null;

    return (
      <AnimatePresence >
        <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.45, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.35, ease: "easeIn" },
            }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg"
          />

          {/* Modal */}
          <motion.div
            ref={containerRef}
            layoutId={layout ? `card-${card.title}` : undefined}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              opacity: 0,
              y: 18,
              scale: 0.98,
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
            className="relative z-[10000] w-full max-w-5xl rounded-3xl bg-white p-4 font-sans shadow-2xl md:p-10 dark:bg-neutral-900"
          >
            <button
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/90 dark:bg-white"
              onClick={handleClose}
              aria-label="Close"
            >
              <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>

            <motion.p
              layoutId={layout ? `category-${card.title}` : undefined}
              className="text-base font-medium text-black dark:text-white"
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.08, duration: 0.4 },
              }}
              exit={{ opacity: 0, y: 6, transition: { duration: 0.25 } }}
            >
              {card.category}
            </motion.p>

            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.12, duration: 0.45 },
              }}
              exit={{ opacity: 0, y: 8, transition: { duration: 0.25 } }}
            >
              {card.title}
            </motion.p>

            <motion.div
              className="pt-8 md:pt-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.16, duration: 0.45 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {card.content}
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }, [open, card, layout]);

  return (
    <>
      {/* ✅ Render modal in BODY via Portal to escape carousel transform */}
      {mounted && modal ? createPortal(modal, document.body) : null}

      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        className="relative z-10 flex h-80 w-56  flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-linear-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold text-balance text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />

        <Button
          variant={"outline"}
          className="absolute bottom-4 right-4 z-10 h-8 w-8 rounded-full"
          onClick={handleOpen}
        >
          <Plus />
        </Button>
      </motion.div>
    </>
  );
};
