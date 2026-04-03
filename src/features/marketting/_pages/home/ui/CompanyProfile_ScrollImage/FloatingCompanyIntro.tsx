import { imagePathForLanding } from "@/constants/imagePath";
import Image from "next/image";
import { BadgeCheck, Globe2, Medal, ShieldCheck } from "lucide-react";
import { projects } from "./CompanyIntro";

const features = [
  {
    title: "Premium Stainless Steel",
    description: "Manufactured with highest quality raw materials",
    icon: Medal,
  },
  {
    title: "Export Quality Assurance",
    description: "Strict adherence to international standards",
    icon: Globe2,
  },
  {
    title: "Rust-Resistant Durability",
    description: "Engineered for the tropical climate of Bangladesh",
    icon: ShieldCheck,
  },
  {
    title: "ISO 9001:2015 Certified",
    description: "Certified for quality management excellence",
    icon: BadgeCheck,
  },
];


const FloatingCompanyIntro = () => {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-orange-300/20 px-4 py-8 shadow-lg md:px-8 md:py-12 xl:scale-70 2xl:scale-100">
    {/* <section className="relative overflow-hidden rounded-[28px] border border-orange-300/20 px-4 py-8 shadow-lg md:px-8 md:py-12 xl:scale-70 2xl:scale-100"> */}
      {/* 🔥 NEW BACKGROUND STYLE (copied from your 2nd code) */}
      <div
        style={{
          backgroundColor: "#e4e4e4d6",
        }}
        className="absolute inset-0 backdrop-blur-[2px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl space-y-4">
        {/* Top Intro */}
        <div className="grid lg:grid-cols-[1fr_240px] lg:items-start ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#2d2d2d] lg:text-4xl xl:text-5xl">
              Our Legacy of Excellence{" "}
            </h2>

            <p className="mt-4  text-base leading-8 text-[#4a4a4a] md:text-2xl md:leading-10">
              Since 2003, Steeltech Industries Ltd. has manufactured and
              exported high-quality stainless steel pipes in Bangladesh, using
              global expertise and certified materials, trusted nationwide for
              durability across infrastructure, residential, and industrial
              applications and sectors.
            </p>
          </div>

          <Image
            src={imagePathForLanding.since2003}
            alt="Since 2003"
            width={400}
            height={400}
            className="h-full w-full object-cover p-2 "
          />
        </div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[22px] border border-white/30 bg-white/20 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/25 hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)]"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/25">
                    <Icon className="h-6 w-6 text-[#ed8c2f]" />
                  </div>

                  <h3 className="text-xl font-bold leading-7 text-[#ed8c2f] md:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <p className="text-base leading-7 text-[#444] md:text-lg">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-bold text-[#2d2d2d] md:text-4xl">
            Trusted by Landmark Projects Across Bangladesh
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-62.5 overflow-hidden rounded-[18px] border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
              >
                <Image
                  width={400}
                  height={250}
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 px-4 pb-5">
                  <h4
                    className="text-center text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white"
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

export default FloatingCompanyIntro;
