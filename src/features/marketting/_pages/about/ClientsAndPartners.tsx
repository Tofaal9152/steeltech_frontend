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

const ClientsAndPartners = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 py-10">
      

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Clients & Partners</h1>
        <p className="text-muted-foreground mt-2 text-sm max-w-6xl">
          Steeltech Industries Ltd. is a trusted stainless steel pipe supplier for leading developers, architects, and fabricators in Bangladesh. We support construction, manufacturing, and industrial clients with durable, high-quality products and reliable service.
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="mb-2 sm:mb-4 md:mb-6">
        <LogoLoop
          logos={clientLogos}
          speed={100}
          direction="left"
          logoHeight={100}
          gap={40}
          hoverSpeed={20}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#f3f4f6"
          ariaLabel="Our trusted clients"
        />
      </div>
    </section>
  );
};

export default ClientsAndPartners;
