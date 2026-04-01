import {
  ArrowRight,
  BarChart3,
  Building2,
  Factory,
  Handshake,
  MapPinned,
  Users,
} from "lucide-react";
import Link from "next/link";
import BangladeshMap from "./BangladeshMap";
import StatsCard from "./StatsCard";

const leftStats = [
  {
    icon: MapPinned,
    value: "64",
    label: "Districts Coverage",
  },
  {
    icon: Handshake,
    value: "500+",
    label: "Partners (Dealers)",
  },
  {
    icon: Users,
    value: "2500+",
    label: "Employees",
  },
];

const rightStats = [
  {
    icon: Factory,
    value: "8 Lac",
    label: "Metric Ton Every Year",
  },
  {
    icon: Building2,
    value: "50,000 m²",
    label: "Factory Area",
  },
  {
    icon: BarChart3,
    value: "24,000 tons",
    label: "Annual Capacity",
  },
];

const allStats = [...leftStats, ...rightStats];

const Stats = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-[#f8f8f8] py-10 sm:py-12 md:py-14 lg:py-6 min-h-screen">
      <div className="mx-auto container rounded-[22px] px-4 sm:px-6 md:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <h4 className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-wider text-[#ed8c2f]">
            Our Strength in Numbers
          </h4>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Key Company Statistics & Growth Metrics
          </h2>
        </div>

        {/* Desktop / Large Screen */}
        <div className="relative hidden min-h-[540px] xl:min-h-[620px] lg:block">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl xl:max-w-5xl">
              <BangladeshMap />
            </div>
          </div>

          <div className="absolute left-0 top-8 xl:top-10">
            <StatsCard item={leftStats[0]} />
          </div>
          <div className="absolute left-[10px] top-[190px] xl:left-[30px] xl:top-[235px]">
            <StatsCard item={leftStats[1]} />
          </div>
          <div className="absolute left-[25px] top-[360px] xl:left-[60px] xl:top-[430px]">
            <StatsCard item={leftStats[2]} />
          </div>

          <div className="absolute right-0 top-8 xl:top-10">
            <StatsCard item={rightStats[0]} />
          </div>
          <div className="absolute right-[10px] top-[190px] xl:right-[30px] xl:top-[230px]">
            <StatsCard item={rightStats[1]} />
          </div>
          <div className="absolute right-[25px] top-[360px] xl:right-[60px] xl:top-[420px]">
            <StatsCard item={rightStats[2]} />
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden">
          <div className="flex justify-center">
            <div className="w-full max-w-3xl ">
              <BangladeshMap />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allStats.map((item, index) => (
              <StatsCard key={`mobile-${index}`} item={item} compact />
            ))}
          </div>
        </div>

        {/* <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/company-stats"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md sm:px-8 sm:py-3 sm:text-base md:px-10"
          >
            See More
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Stats;
