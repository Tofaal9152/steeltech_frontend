import { imagePathForLanding } from "@/constants/imagePath";
import Image from "next/image";
import {
  BadgeCheck,
  ChevronRight,
  Globe2,
  Medal,
  ShieldCheck,
} from "lucide-react";
import { projects } from "./CompanyIntro";
import Link from "next/link";

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
    <section className="relative overflow-hidden rounded-[20px] border border-orange-300/20 px-4 py-6 shadow-lg md:px-8 md:py-12 scale-90 xl:scale-70 2xl:scale-100">
      <div
        style={{
          backgroundColor: "#e4e4e4d6",
        }}
        className="absolute inset-0 backdrop-blur-[2px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl space-y-4">
        {/* Top Intro */}
        <div className="grid gap-4 lg:grid-cols-[1fr_240px] lg:items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-[#2d2d2d] sm:text-3xl lg:text-4xl xl:text-5xl">
              Our Legacy of Excellence
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#4a4a4a] sm:text-base md:text-2xl md:leading-10">
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
            className="hidden h-full w-full object-cover p-2 lg:block"
          />
        </div>

        {/* Features - hidden logic same as yours */}
        <div className=" gap-4 md:grid-cols-2 xl:grid-cols-4 xl:grid hidden">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[16px] border border-white/30 bg-white/20 p-4 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/25 hover:shadow-[0_14px_34px_rgba(15,23,42,0.12)]"
              >
                <div className="mb-3 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/25">
                    <Icon className="h-5 w-5 text-[#ed8c2f]" />
                  </div>

                  <h3 className="text-lg font-bold leading-6 text-[#ed8c2f] md:text-xl">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm leading-6 text-[#444] md:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-center text-xl font-bold text-[#2d2d2d] sm:text-2xl md:text-left md:text-4xl">
            Trusted by Landmark Projects Across Bangladesh
          </h3>

          {/* Mobile: only 2 projects */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:hidden">
            {projects.slice(0, 2).map((project, index) => (
              <div
                key={index}
                className="group relative h-56 overflow-hidden rounded-[14px] border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
              >
                <Image
                  width={400}
                  height={250}
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 px-3 pb-4">
                  <h4
                    className="text-center text-lg font-extrabold leading-tight text-white"
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

          {/* Desktop/Tablet: same as before */}
          <div className="mt-4 hidden gap-4 grid-cols-2 xl:grid-cols-4 md:grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-62.5 overflow-hidden rounded-[16px] border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
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

        <div className="flex w-full justify-center">
          <Link
            href="/about"
            className="inline-flex items-center rounded-md bg-[#ed8c2f] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#cc7014]"
          >
            About Us
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FloatingCompanyIntro;
