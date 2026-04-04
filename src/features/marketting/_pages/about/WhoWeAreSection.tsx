import { Award, Building2, Factory } from "lucide-react";
import MissionVisionStrategySection from "./MissionVisionStrategySection";

const stats = [
  {
    icon: Factory,
    value: "Since 2003",
    label: "Manufacturing & distribution journey",
  },
  {
    icon: Award,
    value: "ISO 9001:2015",
    label: "Quality certification",
  },
  {
    icon: Building2,
    value: "Bangladesh",
    label: "Trusted across major sectors",
  },
];

const WhoWeAreSection = () => {
  return (
    <section className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] xl:rounded-[30px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/bg-image.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/55" />

      <div className="relative z-10 px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8 xl:px-10 xl:py-10">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-start xl:gap-12">
          {/* Left side */}
          <div className="min-w-0">
            <div className="mb-5 flex items-start gap-3 sm:mb-6 sm:items-center">
              <div className="h-10 w-1.5 shrink-0 rounded-full bg-[#ed8c2f] sm:h-12" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ed8c2f] sm:text-xs sm:tracking-[0.22em]">
                  Who We Are
                </p>

                <h2 className="mt-1 text-xl font-bold leading-snug text-white sm:text-3xl md:text-[38px] md:leading-[1.15] xl:text-[42px]">
                  A pioneer in stainless-steel piping
                </h2>
              </div>
            </div>

            <div className="max-w-3xl space-y-4 text-sm leading-7 text-white/90 sm:space-y-5 sm:text-base sm:leading-8 md:text-justify">
              <p>
                Steeltech Industries Ltd. has been manufacturing and
                distributing world-class stainless-steel pipes in Bangladesh
                since 2003. With strong attention to quality, foreign expertise,
                high-grade raw materials, and a foundation of integrity and
                trust, the company has built a strong position in the
                stainless-steel piping industry.
              </p>

              <p>
                Every product is developed with close attention to detail so it
                performs well in Bangladesh&apos;s tropical weather and remains
                suitable for a wide range of construction and industrial uses.
                Precise weight, thickness, and size control, along with
                rust-free quality and continuous innovation, help Steeltech
                Industries Ltd. maintain a dependable standard.
              </p>

              <p>
                This commitment to product quality, stakeholders, and the
                environment is reflected in the company&apos;s ISO 9001:2015
                certification and its consistent reputation across major
                projects in the country.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ed8c2f] text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white sm:text-lg">
                        {item.value}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-white/75">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side */}
          <div className="min-w-0 xl:pl-2">
            <MissionVisionStrategySection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;