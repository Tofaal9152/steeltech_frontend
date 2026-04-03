import { StickyScroll } from "@/components/sticky-scroll-reveal";
import Image from "next/image";
import { processItems } from "./process-data";

const stickyContent = processItems.map((item) => ({
  title: `${item.step} ${item.title}`,
  description: item.description,
  content: (
    <div className="group relative h-full w-full overflow-hidden rounded-[18px] sm:rounded-[20px] md:rounded-[24px] border border-white/50 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

      {/* bottom dark glow */}
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-28 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

      {/* subtle inner vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24),inset_0_-40px_80px_rgba(0,0,0,0.35)]" />

      {/* bottom caption */}
      <div className="absolute inset-x-0 bottom-0 px-3 pb-3 sm:px-4 sm:pb-4 md:pb-5">
        <div className="flex flex-col items-center text-center">
          <span className="mb-2 rounded-full border border-white/20 bg-white/12 px-2.5 py-1 text-[9px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/90 backdrop-blur-sm">
            {item.step} {item.phase}
          </span>

          <h4
            className="text-center text-[16px] sm:text-[18px] md:text-[22px] font-bold md:font-extrabold leading-tight tracking-[-0.02em] text-white"
            style={{
              textShadow:
                "0 2px 4px rgba(0,0,0,0.9), 0 6px 16px rgba(0,0,0,0.7)",
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
    <section
      id="manufacturing"
      className="relative rounded-[24px] sm:rounded-[30px] md:rounded-[40px]  px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-16 xl:px-10 xl:py-20"
    >
      <div className="mx-auto mb-8 sm:mb-10 md:mb-14 container text-center">
        <h4 className="mb-2 sm:mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[#ed8c2f]">
          Process Overview
        </h4>

        <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-950 leading-tight">
          Advanced Manufacturing Process Flow
        </h2>
      </div>

      <StickyScroll content={stickyContent} contentClassName="bg-white" />
    </section>
  );
};

export default ManufacturingHighlights;
