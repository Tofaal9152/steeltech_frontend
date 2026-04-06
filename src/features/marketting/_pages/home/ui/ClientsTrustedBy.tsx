import LogoLoop from "@/components/LogoLoop";

// Formatted for the LogoLoop component (using src and alt)
const clientLogos = [
  {
    src: "/images/hero/clients/kai.jpg",
    alt: "Kai Bangladesh Aluminium Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/altech.jpg",
    alt: "Altech Aluminium Industries Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/papertech.jpg",
    alt: "Papertech Industries Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/bilal.jpg",
    alt: "Bilal Trading Pte. Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/kai-trade.jpg",
    alt: "Kai Trade international Ltd.",
    href: "#",
  },
  {
    src: "/images/hero/clients/everbest.jpg",
    alt: "Everbest Ladders",
    href: "#",
  },
  {
    src: "/images/hero/clients/kyros.jpg",
    alt: "Kayros Footwear Industries Limited",
    href: "#",
  },
  {
    src: "/images/hero/clients/metal-tech.jpg",
    alt: "Metaltech Industries",
    href: "#",
  },
  {
    src: "/images/hero/clients/prince.jpg",
    alt: "Prince Electricals Ltd.",
    href: "#",
  },
];
const recognitions = [
  {
    img: "/images/hero/certificates/recognition/buet.jpg",
    title: "BUET",
    sub: "Bangladesh Univ. of Engineering & Technology",
  },
  {
    img: "/images/hero/certificates/recognition/bsti.jpg",
    title: "BSTI",
    sub: "Bangladesh Standards & Testing Institution",
  },
  {
    img: "/images/hero/certificates/recognition/gov-bd.jpg",
    title: "Government of Bangladesh",
    sub: "People's Republic of Bangladesh",
  },
  {
    img: "/images/hero/certificates/recognition/iso.jpg",
    title: "ISO Certified",
    sub: "International Quality Standard",
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
            Clients & Recognitions
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Organizations That Trust Us
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="mb-2 sm:mb-4 md:mb-6">
          <LogoLoop
            logos={clientLogos.map((item) => ({
              ...item,
              width: 140,
              height: 70,
            }))}
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

        {/* Divider */}
        <div className="flex items-center gap-2 sm:gap-3 my-6 sm:my-7">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[.18em] text-gray-400 whitespace-nowrap">
            Recognized & Tested By
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Recognition */}
        <div className="mb-8 sm:mb-10">
          <LogoLoop
            logos={recognitions.map((item) => ({
              src: item.img,
              alt: item.title,
              href: "#",
              width: 140,
              height: 70,
            }))}
            speed={100}
            direction="right"
            logoHeight={70}
            gap={100}
            hoverSpeed={20}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#ffffff"
            ariaLabel="Recognized & Tested By"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsTrustedBy;
