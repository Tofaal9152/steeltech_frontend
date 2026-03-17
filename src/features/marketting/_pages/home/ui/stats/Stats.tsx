import {
  ArrowRight,
  BarChart3,
  Factory,
  Handshake,
  MapPinned,
  Truck,
  Users,
} from "lucide-react";
import BangladeshMap from "./BangladeshMap";
import Link from "next/link";
import { imagePathForLanding } from "@/constants/imagePath";

const leftStats = [
  {
    img: imagePathForLanding.stats1,
    value: "64",
    label: "Districts Coverage",
  },
  {
    img: imagePathForLanding.stats2,
    value: "500+",
    label: "Partners (Dealers)",
  },
  {
    img: imagePathForLanding.stats3,
    value: "2500+",
    label: "Employees",
  },
];

const rightStats = [
  {
    img: imagePathForLanding.stats4,
    value: "8 Lac",
    label: "Metric Ton Every Year",
  },
  {
    img: imagePathForLanding.stats5,
    value: "50,000 m²",
    label: "Factory Area",
  },
  {
    img: imagePathForLanding.stats6,
    value: "24,000 tons",
    label: "Annual Capacity",
  },
];

const allStats = [...leftStats, ...rightStats];

const StatsCard = ({
  item,
  compact = false,
}: {
  item: any;
  compact?: boolean;
}) => (
  <div
    className={`group flex items-center rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]
    ${
      compact
        ? "min-h-[88px] w-full gap-3 px-4 py-3 sm:min-h-[92px]"
        : "min-h-[102px] w-[220px] gap-4 px-5 py-4 xl:w-[240px]"
    }`}
  >
    <img
      src={item.img}
      alt={item.label}
      className={`shrink-0 h-20 w-20 object-cover`}
    />

    <div className="min-w-0">
      <h4
        className={`font-extrabold leading-none text-[#0d1b3d] ${
          compact ? "text-[20px] sm:text-[22px]" : "text-[22px] xl:text-[24px]"
        }`}
      >
        {item.value}
      </h4>
      <p
        className={`mt-1 leading-snug text-[#52607a] ${
          compact ? "text-xs sm:text-sm" : "text-sm"
        }`}
      >
        {item.label}
      </p>
    </div>
  </div>
);

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-4 border-t border-gray-200">
      <div className="container mx-auto max-w-[1400px] rounded-[28px] px-6">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Our Strength in Numbers
          </h2>
          <p className="mt-4 text-base text-gray-500 md:text-lg">
            These key figures reflect our growth, production capability, and
            strong presence across Bangladesh.
          </p>
        </div>

        {/* Desktop exact side layout */}
        <div className="relative hidden min-h-[620px] lg:block">
          {/* Center map */}
          <div className="flex justify-center">
            <div className="w-full max-w-[430px] xl:max-w-[480px]">
              <BangladeshMap />
            </div>
          </div>

          {/* Left cards */}
          <div className="absolute left-0 top-10">
            <StatsCard item={leftStats[0]} />
          </div>
          <div className="absolute left-[30px] top-[235px]">
            <StatsCard item={leftStats[1]} />
          </div>
          <div className="absolute left-[60px] top-[430px]">
            <StatsCard item={leftStats[2]} />
          </div>

          {/* Right cards */}
          <div className="absolute right-0 top-10">
            <StatsCard item={rightStats[0]} />
          </div>
          <div className="absolute right-[30px] top-[230px]">
            <StatsCard item={rightStats[1]} />
          </div>
          <div className="absolute right-[60px] top-[420px]">
            <StatsCard item={rightStats[2]} />
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden">
          <div className="flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[380px]">
              <BangladeshMap />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allStats.map((item, index) => (
              <StatsCard key={`mobile-${index}`} item={item} compact />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/company-stats"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-10 py-3 text-base font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            See More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stats;
