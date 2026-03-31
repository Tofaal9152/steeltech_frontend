import {
  ArrowRight,
  BarChart3,
  Building2,
  Factory,
  Handshake,
  MapPinned,
  Users,
} from "lucide-react";
import BangladeshMap from "./BangladeshMap";
import Link from "next/link";

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

type StatsItem = {
  icon: React.ElementType;
  value: string;
  label: string;
};

const StatsCard = ({
  item,
  compact = false,
}: {
  item: StatsItem;
  compact?: boolean;
}) => {
  const Icon = item.icon;

  return (
    <div
      className={`group flex w-full items-center rounded-[16px] sm:rounded-[18px] xl:rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
      ${
        compact
          ? "min-h-[82px] gap-3 px-4 py-3 sm:min-h-[90px] sm:gap-4"
          : "min-h-[92px] w-[210px] gap-3 px-4 py-3 lg:w-[220px] xl:min-h-[102px] xl:w-[240px] xl:gap-4 xl:px-5 xl:py-4"
      }`}
    >
      <div
        className={`flex shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:bg-[#ffedd5]
        ${compact ? "h-12 w-12 sm:h-14 sm:w-14" : "h-12 w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16"}`}
      >
        <Icon
          size={compact ? 24 : 28}
          strokeWidth={2}
          color="#f59e0b"
          className="transition-all duration-300 group-hover:scale-110 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
        />
      </div>

      <div className="min-w-0">
        <h4
          className={`font-extrabold leading-none text-[#0d1b3d] ${
            compact
              ? "text-[18px] sm:text-[20px]"
              : "text-[20px] lg:text-[21px] xl:text-[24px]"
          }`}
        >
          {item.value}
        </h4>

        <p
          className={`mt-1 leading-snug text-[#52607a] ${
            compact ? "text-xs sm:text-sm" : "text-xs lg:text-sm"
          }`}
        >
          {item.label}
        </p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-[#f8f8f8] py-10 sm:py-12 md:py-14 lg:py-16">
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
            <div className="w-full max-w-3xl">
              <BangladeshMap />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allStats.map((item, index) => (
              <StatsCard key={`mobile-${index}`} item={item} compact />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/company-stats"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md sm:px-8 sm:py-3 sm:text-base md:px-10"
          >
            See More
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stats;