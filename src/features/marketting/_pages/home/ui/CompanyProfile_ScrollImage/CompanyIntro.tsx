import { imagePathForLanding } from "@/constants/imagePath";
import Image from "next/image";
import { BadgeCheck, Globe2, Medal, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Premium Stainless Steel",
    description: "Manufactured with highest quality raw materials",
    icon: Medal,
  },
  {
    title: "Export Quality",
    description:
      "Every product meets international export standards with batch-level traceability and documented quality assurance.",
    icon: Globe2,
  },
  {
    title: "Rust-Resistant Durability",
    description:
      "Engineered for Bangladesh's high-humidity, salt-air coastal and tropical conditions. Corrosion-tested for long-term performance.",
    icon: ShieldCheck,
  },
  {
    title: "ISO 9001:2015 Certified",
    description: "Certified for quality management excellence",
    icon: BadgeCheck,
  },
];

export const projects = [
  {
    title: "Tejgaon-Bijoy\nSharani Bypass",
    image:
      "https://i.ytimg.com/vi/atBXVzteD0g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYv0l7cdnRPkhJKpLBLyIC-v-78w",
  },
  {
    title: "Hazrat Shahjalal Int. Airport",
    image:
      "/images/hero/company-profile/projects/hazrat-shahjalal-int-airport.jpeg",
  },
  {
    title: "Bangladesh Army Tent Project",
    image:
      "/images/hero/company-profile/projects/bangladesh-army-tent-project.jpg",
  },
  {
    title: "North South University",
    image: "/images/hero/company-profile/projects/north-south-university.jpg",
  },
];

const CompanyIntro = () => {
  return (
    <section className="relative overflow-hidden bg-[#d9d8da] px-4 py-8 shadow-xl sm:px-5 md:px-8 md:py-12 lg:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: `url(${imagePathForLanding.companyProfileBgImage})`,
        }}
      />
      <div className="absolute inset-0 bg-white/35" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/20" />

      <div className="relative z-10 mx-auto container space-y-8 md:space-y-10">
        {/* Top Intro */}
        <div className="grid gap-6 md:gap-8 items-center justify-center ">
          <div className="space-y-4 text-center ">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#ed8c2f] sm:text-sm">
              Company Profile
            </p>

            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Our Legacy of Excellence{" "}
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-3 text-sm leading-7 text-[#4a4a4a] sm:text-base md:text-lg md:leading-8 lg:mx-0 lg:text-xl lg:leading-9 text-center">
            <p>
              Since 2003, Steeltech Industries Ltd. has manufactured and
              exported world-class stainless steel pipes from Bangladesh. With
              foreign technical expertise, ISO 9001:2015 certification, and raw
              materials sourced from globally trusted mills, every pipe is built
              to perform in Bangladesh&apos;s demanding tropical climate.
            </p>
            <p>
              Our products are trusted in landmark infrastructure projects,
              residential construction, and industrial applications across all
              64 districts.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[170px] sm:max-w-[190px] md:max-w-[220px]">
            <Image
              src={imagePathForLanding.since2003}
              alt="Since 2003"
              width={400}
              height={400}
              className="h-auto w-full object-contain brightness-[0.92] contrast-[1.03] saturate-[1.02]"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[18px] border border-white/80 bg-white/80 p-4 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)] sm:rounded-[20px] sm:p-5"
              >
                <div className="mb-3 flex items-start gap-3 sm:mb-4 sm:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#fff4e7] via-[#ffe6c8] to-[#ffd39a] ring-1 ring-[#ed8c2f]/20 shadow-[0_10px_18px_rgba(237,140,47,0.18)] sm:h-14 sm:w-14 sm:rounded-[18px]">
                    <Icon
                      className="h-6 w-6 text-[#d97706] sm:h-7 sm:w-7"
                      strokeWidth={2.2}
                    />
                  </div>

                  <h3 className="text-lg font-bold leading-6 text-[#b86516] sm:text-xl md:text-[22px]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm leading-6 text-[#444] sm:text-base sm:leading-7 md:text-lg">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-center text-xl font-bold text-[#2d2d2d] sm:text-2xl md:text-3xl lg:text-4xl">
            Trusted by Landmark Projects Across Bangladesh
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:mt-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-[200px] overflow-hidden rounded-[14px] border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.28)] sm:h-[220px] sm:rounded-[16px] md:h-[240px] lg:h-[250px] xl:rounded-[18px]"
              >
                <Image
                  width={400}
                  height={250}
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 via-black/40 to-transparent md:h-24" />
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25),inset_0_-40px_80px_rgba(0,0,0,0.6)]" />

                <div className="absolute inset-x-0 bottom-0 px-3 pb-3 sm:px-4 sm:pb-4 md:pb-5">
                  <h4
                    className="text-center text-[16px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[18px] md:text-[20px] lg:text-[22px] lg:font-extrabold"
                    style={{
                      textShadow:
                        "0 2px 4px rgba(0,0,0,0.9), 0 6px 16px rgba(0,0,0,0.7)",
                    }}
                  >
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
