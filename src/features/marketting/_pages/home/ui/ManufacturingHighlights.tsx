"use client";

import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type ProcessItem = {
  title: string;
  description: string;
  image: string;
  step: string;
  phase: string;
};

const processItems: ProcessItem[] = [
  {
    step: "01",
    phase: "INPUT",
    title: "Coil Slitting",
    description:
      "Steel coils are slit into precise widths for accurate downstream pipe production.",
    image: "/images/hero/manufacture/1.jpg",
  },
  {
    step: "02",
    phase: "ACTIVE",
    title: "Pipe Forming",
    description:
      "Slit coils are shaped into strong, uniform pipes using advanced forming and precision netting technology.",
    image: "/images/hero/manufacture/2.jpg",
  },
  {
    step: "03",
    phase: "ANALYSIS",
    title: "Automated QC",
    description:
      "Automated inspection checks for defects, dimension accuracy, and consistency.",
    image: "/images/hero/manufacture/3.jpg",
  },
  {
    step: "04",
    phase: "TRACKING",
    title: "Weight and Count Tracking",
    description:
      "Each pipe is automatically tracked for weight and quantity to ensure production accuracy, inventory visibility, and process control.",
    image: "/images/hero/manufacture/7.jpg", // replace with dedicated image if available
  },
  {
    step: "05",
    phase: "FINISH",
    title: "Polish",
    description:
      "Pipes are polished for a refined surface finish and premium visual appearance standard.",
    image: "/images/hero/manufacture/4.jpg",
  },
  {
    step: "06",
    phase: "AUDIT",
    title: "Manual QC",
    description:
      "Experienced inspectors perform final checks before the products move to logistics.",
    image: "/images/hero/manufacture/5.jpg",
  },
  {
    step: "07",
    phase: "LOGISTICS",
    title: "Packing",
    description:
      "Finished pipes are securely packed to ensure safe storage and long-distance transport.",
    image: "/images/hero/manufacture/6.jpg",
  },
  {
    step: "08",
    phase: "COMPLETION",
    title: "Delivery",
    description:
      "Products are dispatched through a reliable delivery network with timely handling and real-time tracking.",
    image: "/images/hero/manufacture/7.jpg",
  },
];

const stickyContent = processItems.map((item) => ({
  title: `${item.step} ${item.title}`,
  description: item.description,
  content: (
    <div className="group relative h-full w-full overflow-hidden rounded-[24px] border border-white/50 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
      <div className="relative h-full w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          priority={item.step === "01"}
        />
      </div>

      {/* overall dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      {/* warm orange glow at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#ed8c2f]/55 via-[#b95f1d]/20 to-transparent" />

      {/* subtle inner vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28),inset_0_-40px_80px_rgba(0,0,0,0.35)]" />

      {/* bottom caption */}
      <div className="absolute inset-x-0 bottom-0 px-4 pb-5">
        <div className="flex flex-col items-center text-center">
          <span className="mb-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f6dfb0] backdrop-blur-sm">
            {item.step} {item.phase}
          </span>

          <h4
            className="text-center text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#f6dfb0]"
            style={{
              textShadow:
                "0 2px 0 rgba(86,45,10,0.95), 0 4px 10px rgba(0,0,0,0.55)",
            }}
          >
            {item.title}
          </h4>
        </div>
      </div>
    </div>
  ),
}));

const ManufacturingHighlights = () => {
  return (
    <section className="relative rounded-[40px] bg-gradient-to-b from-white via-[#fffaf5] to-[#fff7ef] px-4 py-14 md:px-8 md:py-20 xl:px-10">
      <div className="mx-auto mb-14 max-w-4xl text-center">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#ed8c2f]">
          Process Overview
        </h4>

        <h2 className="text-4xl font-extrabold tracking-tight text-neutral-950 md:text-6xl">
          Advanced Manufacturing Process Flow
        </h2>
      </div>

      <StickyScroll content={stickyContent} contentClassName="bg-white" />
    </section>
  );
};

export default ManufacturingHighlights;
