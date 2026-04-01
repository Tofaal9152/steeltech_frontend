import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Factory,
  Target,
  Telescope,
} from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  "Hatirjheel",
  "Hazrat Shahjalal International Airport",
  "Bangladesh Army Tent Project",
  "North South University",
  "Tejgaon-Bijoy Sharani Bypass",
];

const strengths = [
  "World-class stainless-steel pipes in premium and standard categories",
  "Strict adherence to quality, integrity, and trust",
  "Products suited for Bangladesh’s tropical weather",
  "Precise weight, thickness, and size control",
  "Rust-free, innovative designs with expert supervision",
];

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
const ProfileMissionVisson = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold"> About Steeltech</h1>
        <p className="text-muted-foreground mt-2">
          Steeltech Industries Ltd. is one of Bangladesh’s leading stainless
          steel manufacturers, focused on quality, reliability, and long-term
          customer trust.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr] lg:gap-8 xl:gap-10">
        <div className="rounded-[22px] border border-[#ed8c2f]/10 bg-white p-5 shadow-[0_18px_60px_rgba(17,24,39,0.06)] sm:rounded-[28px] sm:p-6 md:p-8">
          <div className="mb-5 flex items-start gap-3 sm:mb-6 sm:items-center">
            <div className="h-10 w-1.5 rounded-full bg-[#ed8c2f] sm:h-12" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ed8c2f] sm:text-xs sm:tracking-[0.22em]">
                Who We Are
              </p>
              <h2 className="mt-1 text-xl font-bold leading-snug text-[#111827] sm:text-2xl md:text-3xl">
                A pioneer in stainless-steel piping
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-left text-sm leading-7 text-gray-700 sm:space-y-5 sm:text-base sm:leading-8 md:text-justify">
            <p>
              Steeltech Industries Ltd. has been manufacturing and distributing
              world-class stainless-steel pipes in Bangladesh since 2003. With
              strong attention to quality, foreign expertise, high-grade raw
              materials, and a foundation of integrity and trust, the company
              has built a strong position in the stainless-steel piping
              industry.
            </p>

            <p>
              Every product is developed with close attention to detail so it
              performs well in Bangladesh’s tropical weather and remains
              suitable for a wide range of construction and industrial uses.
              Precise weight, thickness, and size control, along with rust-free
              quality and continuous innovation, help Steeltech maintain a
              dependable standard.
            </p>

            <p>
              This commitment to product quality, stakeholders, and the
              environment is reflected in the company’s ISO 9001:2015
              certification and its consistent reputation across major projects
              in the country.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#ed8c2f]/15 bg-[#fff8f2] p-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ed8c2f] text-white sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111827] sm:text-base">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-[20px] border border-gray-100 bg-[#fafafa] p-4 sm:mt-8 sm:rounded-[24px] sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-base font-bold text-[#111827] sm:text-lg">
                Why Steeltech
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ed8c2f]" />
                  <p className="text-sm leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          <div className="overflow-hidden rounded-[22px] bg-[#ed8c2f] p-5 text-white shadow-[0_18px_50px_rgba(237,140,47,0.28)] sm:rounded-[28px] sm:p-6 md:p-8">
            <div className="mb-4 flex items-start gap-3 sm:items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 sm:h-12 sm:w-12">
                <Target className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 sm:text-xs">
                  Mission
                </p>
                <h3 className="text-xl font-bold sm:text-2xl">
                  What drives us
                </h3>
              </div>
            </div>

            <p className="text-sm leading-7 text-white/95 sm:text-base sm:leading-8">
              To become the number one stainless steel manufacturing company of
              Bangladesh.
            </p>
          </div>

          <div className="rounded-[22px] border border-[#ed8c2f]/15 bg-white p-5 shadow-[0_18px_60px_rgba(17,24,39,0.06)] sm:rounded-[28px] sm:p-6 md:p-8">
            <div className="mb-4 flex items-start gap-3 sm:items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ed8c2f]/10 text-[#ed8c2f] sm:h-12 sm:w-12">
                <Telescope className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ed8c2f] sm:text-xs">
                  Vision
                </p>
                <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">
                  Where we are going
                </h3>
              </div>
            </div>

            <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
              To always provide the people of Bangladesh with world-class
              stainless steel pipes, tubes, flat bars, angles, and rods for all
              kinds of commercial and residential establishments.
            </p>
          </div>

          <div className="rounded-[22px] border border-[#ed8c2f]/15 bg-white p-5 sm:rounded-[28px] sm:p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <BadgeCheck className="h-6 w-6 text-[#ed8c2f]" />
              <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">
                Notable Projects
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {featuredProjects.map((project, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#ed8c2f]/15 bg-white px-3 py-2 text-xs font-medium text-gray-700 sm:px-4 sm:text-sm"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-[#ed8c2f]/15 bg-white p-5  sm:rounded-[28px] sm:p-6 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ed8c2f] sm:text-xs">
              Strategy
            </p>
            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
              Quality-led growth and market expansion
            </h3>
            <p className="mt-4 text-sm leading-7 ">
              Steeltech continues to focus on quality products, retailer and
              fabricator satisfaction, increased sales volume, and stronger
              market share in stainless-steel pipes and decorative products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMissionVisson;
