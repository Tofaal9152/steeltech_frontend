import { imagePathForLanding } from "@/constants/imagePath";
import {
  Building2,
  CheckCircle,
  Factory,
  Hotel,
  Landmark,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const FloatingCompanyIntro = () => {
  return (
    <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl ">
      <div
        style={{
          backgroundColor: "#e4e4e4d6",
        }}
        className="relative z-10 w-full rounded-2xl  p-6 md:p-10 border border-orange-300/20  shadow-lg"
      >
        {/* <div className="relative z-10 w-full rounded-2xl border border-white/20 bg-black/18 p-6 shadow-[0_0_30px_rgba(0,0,0,0.22)] backdrop-blur-[3px] md:p-10 "> */}
        <div className="mb-6 flex flex-col items-start gap-8 md:flex-row">
          <p className="flex-1 text-justify text-sm leading-relaxed text-gray-900 md:text-base">
            <span className="font-bold text-[#ed8c2f]">
              Steeltech Industries Ltd.
            </span>{" "}
            has been manufacturing and distributing world-class stainless steel
            pipes in Bangladesh since{" "}
            <span className="font-semibold text-[#ed8c2f]">2003</span>. With
            strict adherence to quality, foreign expertise and high-grade raw
            materials, the company has become a pioneer in the{" "}
            <span className="font-semibold text-[#ed8c2f]">
              stainless-steel piping industry
            </span>{" "}
            of the country.
          </p>

          <div className="group relative flex h-[85px] w-32 shrink-0 flex-col justify-center overflow-hidden rounded-xl border border-[#ed8c2f]/35 bg-gradient-to-br from-[#2a1d17]/90 to-[#111721]/90 p-3.5 shadow-[0_8px_16px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#ed8c2f]/15 blur-2xl" />

            <div className="relative z-10 mb-0.5 flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-300">
                Since
              </span>

              <div className="flex h-2.5 w-6 overflow-hidden rounded-sm border border-black/50 shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
                <div className="h-full w-1.5 border-r border-black/40 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-500" />
                <div className="h-full flex-1 bg-gradient-to-b from-[#ed8c2f] via-[#ed8c2f] to-[#ed8c2f]" />
              </div>
            </div>

            <div className="relative z-10">
              <span
                style={{ fontFamily: "var(--font-michroma)" }}
                className="text-[26px] font-bold tracking-wide text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
              >
                2003
              </span>
            </div>
          </div>
        </div>

        <p className="mb-8 text-justify text-sm leading-relaxed text-gray-900 md:text-base">
          Our products are designed considering the{" "}
          <span className="font-semibold text-[#ed8c2f]">
            tropical weather of Bangladesh
          </span>
          , ensuring durability and suitability for construction works.
          Precision in weight, thickness and size,{" "}
          <span className="font-semibold text-[#ed8c2f]">
            rust-free quality
          </span>{" "}
          and innovative designs are maintained through strict supervision and
          quality control at every stage of manufacturing.
        </p>

        <div className="mb-8 flex w-full flex-col gap-5 lg:flex-row">
          <div
            style={{
              borderColor: "#c2c2c2",
            }}
            className="flex flex-1 items-center justify-between rounded-xl border  bg-white/50 p-5 shadow-sm"
          >
            <div className="flex-1 pr-4">
              <h4 className="mb-4 text-sm font-medium text-gray-900 md:text-base">
                Pioneer in Bangladesh
              </h4>

              <div className="relative mb-3 w-full">
                <div className="relative mb-2 h-12 w-full">
                  <svg
                    viewBox="0 0 200 40"
                    className="absolute bottom-0 h-full w-full text-gray-900"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      d="M0,30 Q20,25 40,30 T80,15 T120,20 T160,25 T200,10"
                    />
                    <circle cx="200" cy="10" r="2.5" fill="#9ca3af" />
                  </svg>
                </div>

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-600/30">
                  <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-[#ea580c] to-[#fdba74]" />
                </div>
              </div>

              <div className="flex justify-between text-[9px] font-medium tracking-wide text-gray-900 md:text-[10px]">
                <span>100% Stainless Steel</span>
                <span>Export Quality</span>
                <span>Tropical Durability</span>
              </div>
            </div>

            <div className="shrink-0 border-l border-gray-600/20 pl-4">
              <Image
                src={imagePathForLanding.companyprofileIsoImage}
                alt="ISO Certified"
                width={85}
                height={85}
                className="h-16 w-16 rounded-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] md:h-[85px] md:w-[85px]"
              />
            </div>
          </div>

          <div
            style={{
              borderColor: "#c2c2c2",
            }}
            className="flex shrink-0 items-center justify-center gap-6 rounded-xl border  bg-white/50 p-5 md:gap-8 lg:w-[25%]"
          >
            <ShieldCheck className="h-6 w-6 stroke-[1.5] text-gray-900 md:h-12 md:w-12" />
            <Ruler className="h-6 w-6 stroke-[1.5] text-gray-900 md:h-12 md:w-12" />
            <Factory className="h-6 w-6 stroke-[1.5] text-gray-900 md:h-12 md:w-12" />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <ul className="space-y-3">
            {[
              "Manufacturing Stainless Steel Products Since 2003",
              "ISO 9001:2015 Certified Quality",
              "Trusted in Major Projects Across Bangladesh",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center text-sm font-medium text-gray-900"
              >
                <CheckCircle className="mr-3 h-5 w-5 shrink-0 text-[#ed8c2f]" />
                {item}
              </li>
            ))}
          </ul>

          <div
            style={{
              borderColor: "#c2c2c2",
            }}
            className="w-full rounded-xl border  bg-white/45 p-4 lg:w-auto"
          >
            <h4 className="mb-3 text-xs uppercase tracking-wider text-gray-900">
              Trusted Projects
            </h4>
            <div className="flex gap-5 text-gray-900">
              <Building2 className="h-5 w-5 stroke-[1.5]" />
              <Hotel className="h-5 w-5 stroke-[1.5]" />
              <Landmark className="h-5 w-5 stroke-[1.5]" />
              <Factory className="h-5 w-5 stroke-[1.5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCompanyIntro;
