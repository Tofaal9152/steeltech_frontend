import React from "react";
import {
  ArrowDown,
  Package,
  Scissors,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Search,
} from "lucide-react";
import { imagePathForLanding } from "@/constants/imagePath";

type ManufacturingStep = {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const manufacturingSteps: ManufacturingStep[] = [
  {
    step: "01",
    title: "Coil Slitting",
    description:
      "Steel coils are slit into precise widths for accurate downstream pipe production.",
    icon: Scissors,
  },
  {
    step: "02",
    title: "Pipe Forming",
    description:
      "Slit coils are shaped into strong, uniform pipes through precision rolling.",
    icon: Wrench,
  },
  {
    step: "03",
    title: "Automated QC",
    description:
      "Automated inspection checks dimensional accuracy, consistency, and finish quality.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Polish",
    description:
      "Pipes are polished for a refined surface finish and premium visual appearance.",
    icon: Sparkles,
  },
  {
    step: "05",
    title: "Manual QC",
    description:
      "Experienced inspectors perform final checks before the products move forward.",
    icon: Search,
  },
  {
    step: "06",
    title: "Packing",
    description:
      "Finished pipes are securely packed to ensure safe storage and transportation.",
    icon: Package,
  },
  {
    step: "07",
    title: "Delivery",
    description:
      "Products are dispatched through a reliable delivery network with timely handling.",
    icon: Truck,
  },
];

const FlowConnector = ({
  orientation = "horizontal",
}: {
  orientation?: "horizontal" | "vertical";
}) => {
  if (orientation === "vertical") {
    return (
      <div className="relative flex h-14 items-center justify-center">
        <div className="relative h-full w-[2px] overflow-hidden rounded-full bg-white/10">
          <div className="beam-vertical absolute inset-0 bg-gradient-to-b from-transparent via-[#ed8c2f] to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative hidden h-[2px] w-16 shrink-0 overflow-hidden rounded-full bg-white/10 lg:block">
      <div className="beam-horizontal absolute inset-0 bg-gradient-to-r from-transparent via-[#ed8c2f] to-transparent" />
    </div>
  );
};

const StepCard = ({
  icon: Icon,
  step,
  title,
  description,
  index,
}: ManufacturingStep & { index: number }) => {
  return (
    <div
      className="fade-up group relative w-full overflow-hidden rounded-[28px] border border-white/10  p-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#ed8c2f]/40 hover:bg-white/[0.09] hover:shadow-[0_20px_60px_rgba(237,140,47,0.18)] lg:w-[250px]"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="shine absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#ed8c2f]/30 bg-gradient-to-br from-[#ed8c2f] to-[#f5b067] text-white shadow-[0_10px_30px_rgba(237,140,47,0.35)] transition duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-6 w-6" />
          <div className="glow-pulse absolute inset-0 rounded-2xl border border-white/20" />
        </div>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-white/70">
          STEP {step}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm leading-7 text-white/70">{description}</p>
    </div>
  );
};

const ImageCard = ({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      <img
        src={src}
        alt={alt}
        className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071019]/90 via-[#071019]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0b276]">
          Manufacturing
        </p>
        <h4 className="mt-1 text-lg font-bold text-white">{title}</h4>
      </div>
    </div>
  );
};

const ManufacturingHighlights = () => {
  const topRow = manufacturingSteps.slice(0, 4);
  const bottomRow = manufacturingSteps.slice(4).reverse();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#071019] py-20 text-white">
      {/* Background Decor */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#ed8c2f]/12 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#ed8c2f]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ed8c2f]/25 bg-[#ed8c2f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f3b77b]">
            Manufacturing Highlights
          </div>

          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Advanced Manufacturing
            <span className="block bg-gradient-to-r from-white to-[#f2bb85] bg-clip-text text-transparent">
              Process Flow
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            From coil slitting to final delivery, every stage is engineered for
            precision, consistency, finish quality, and dependable output.
          </p>
        </div>

        {/* Main Process Box */}
        <div className="relative overflow-hidden rounded-[36px] ">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

          {/* Mobile Layout */}
          <div className="relative z-10 flex flex-col gap-0 lg:hidden">
            {manufacturingSteps.map((item, index) => (
              <React.Fragment key={item.title}>
                <StepCard {...item} index={index} />
                {index !== manufacturingSteps.length - 1 && (
                  <FlowConnector orientation="vertical" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Desktop Snake Layout */}
          <div className="relative z-10 hidden lg:block">
            {/* Top Row */}
            <div className="flex items-stretch justify-center">
              {topRow.map((item, index) => (
                <React.Fragment key={item.title}>
                  <StepCard {...item} index={index} />
                  {index !== topRow.length - 1 && <FlowConnector />}
                </React.Fragment>
              ))}
            </div>

            {/* Down Flow */}
            <div className="my-8 flex justify-end pr-12">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#ed8c2f]/30 bg-[#ed8c2f]/10 text-[#ed8c2f] shadow-[0_0_30px_rgba(237,140,47,0.18)]">
                <div className="glow-pulse absolute inset-0 rounded-full border border-[#ed8c2f]/20" />
                <ArrowDown className="h-7 w-7" />
              </div>
            </div>

            {/* Bottom Row Reverse */}
            <div className="flex items-stretch justify-center">
              {bottomRow.map((item, index) => (
                <React.Fragment key={item.title}>
                  <StepCard {...item} index={index + 4} />
                  {index !== bottomRow.length - 1 && <FlowConnector />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Caption */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm leading-7 text-white/60 md:text-base">
            Every stage is monitored to maintain dimensional accuracy, surface
            finish, and reliable delivery performance.
          </p>
        </div>

        {/* Images */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ImageCard
            src={imagePathForLanding.manufacturing}
            alt="Manufacturing"
            title="Production Floor Operations"
          />
          <ImageCard
            src={imagePathForLanding.steelguard}
            alt="Steelguard QC Device"
            title="Automated Quality Inspection"
          />
          <ImageCard
            src={imagePathForLanding.loadcell}
            alt="Load Cell Device"
            title="Load & Handling Precision"
          />
        </div>
      </div>

      <style>{`
        @keyframes beamHorizontal {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(220%);
            opacity: 0;
          }
        }

        @keyframes beamVertical {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(220%);
            opacity: 0;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.06);
          }
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-180%) rotate(12deg);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateX(420%) rotate(12deg);
            opacity: 0;
          }
        }

        .beam-horizontal {
          animation: beamHorizontal 2.8s linear infinite;
        }

        .beam-vertical {
          animation: beamVertical 2.2s linear infinite;
        }

        .fade-up {
          animation: fadeUp 0.8s ease both;
        }

        .glow-pulse {
          animation: glowPulse 2.4s ease-in-out infinite;
        }

        .group:hover .shine {
          animation: shine 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default ManufacturingHighlights;
