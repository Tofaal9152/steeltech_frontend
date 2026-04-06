import { imagePathForLanding } from "@/constants/imagePath";
import { Award, Settings, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:gap-4 sm:p-5">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 p-2 sm:h-11 sm:w-11">
      {icon}
    </div>

    <div>
      <h3 className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
        {title}
      </h3>
      <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
        {description}
      </p>
    </div>
  </div>
);

const ImageBlock = () => (
  <div className="relative">
    <Image
      width={800}
      height={800}
      src={imagePathForLanding.whyus}
      alt="Stainless Steel Manufacturing"
      className="h-[320px] w-full rounded-2xl border-2 border-[#ed8c2f] object-cover shadow-xl sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px]"
    />

    <div
      style={{ fontFamily: "var(--font-michroma)" }}
      className="absolute bottom-3 right-3 rounded-xl bg-[#ed8c2f]/90 px-4 py-3 text-white shadow-lg backdrop-blur-sm sm:bottom-4 sm:right-4 sm:px-5 sm:py-4 md:bottom-5 md:right-5 lg:-bottom-6 lg:-right-6 lg:px-6 lg:py-5"
    >
      <h3 className="text-lg font-bold sm:text-xl md:text-2xl">20+ Years</h3>
      <p className="text-[11px] sm:text-xs md:text-sm">
        Experience in Bangladesh
      </p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="h-5 w-5 text-[#ed8c2f] sm:h-6 sm:w-6" />,
      title: "Quality Certified Products",
      description:
        "We have built a strong reputation by manufacturing quality certified stainless steel products that meet comprehensive customer requirements.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#ed8c2f] sm:h-6 sm:w-6" />,
      title: "Comprehensive Quality Management",
      description:
        "We are continuously strengthening our quality management system in a comprehensive way to ensure dependable product standards.",
    },
    {
      icon: <Settings className="h-5 w-5 text-[#ed8c2f] sm:h-6 sm:w-6" />,
      title: "Top-of-the-Line Equipment",
      description:
        "To meet customer demand and maintain high standards, we always operate with top-of-the-line equipment and a trusted manufacturing process.",
    },
    {
      icon: <Wrench className="h-5 w-5 text-[#ed8c2f] sm:h-6 sm:w-6" />,
      title: "Advanced Technology & Service",
      description:
        "We continue to produce excellent products through advanced technology, organized operations, and comprehensive service.",
    },
  ];

  return (
    <section className="min-h-screen border-t border-gray-200 bg-gray-50 pt-10 pb-12 sm:pt-12 sm:pb-14 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ed8c2f] sm:mb-3 sm:text-sm sm:tracking-wider">
            Why Choose Us
          </h4>

          <h2 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Trusted SS Pipe Manufacturer
          </h2>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="space-y-4 lg:hidden">
          {features.slice(0, 2).map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

          <ImageBlock />

          {features.slice(2, 4).map((item, i) => (
            <FeatureCard
              key={i + 2}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <ImageBlock />

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {features.map((item, i) => (
              <FeatureCard
                key={i}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
