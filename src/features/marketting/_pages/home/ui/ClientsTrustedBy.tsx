"use client";

import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";

// Formatted for the LogoLoop component (using src and alt)
const clientLogos = [
  {
    src: "/images/hero/clients/kai.png",
    alt: "Kai Bangladesh Aluminium Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/altech.png",
    alt: "Altech Aluminium Industries Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/papertech.png",
    alt: "Papertech Industries Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/bilal.png",
    alt: "Bilal Trading Pte. Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/kai-trade.png",
    alt: "Kai Trade international Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/everbest.png",
    alt: "Everbest Ladders",
    href: "#",
  },
  {
    src: "/images/hero/clients/kyros.png",
    alt: "Kayros Footwear Industries Limited",
    href: "#",
  },
  {
    src: "/images/hero/clients/metal-tech.png",
    alt: "Metaltech Industries",
    href: "#",
  },
  {
    src: "/images/hero/clients/prince.png",
    alt: "Prince Electricals Ltd.",
    href: "#",
  },
];

const ClientsTrustedBy = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-full max-w-6xl -translate-x-1/2 rounded-full blur-3xl sm:h-[280px] md:h-[360px]" />

      <div className="relative z-10 mx-auto container px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12 lg:mb-16">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ed8c2f] sm:mb-3 sm:text-sm">
            Clients & Partners
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Organizations That Trust Us
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="mb-2 sm:mb-4 md:mb-6">
          <LogoLoop
            logos={clientLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={40}
            hoverSpeed={20}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Our trusted clients"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsTrustedBy;