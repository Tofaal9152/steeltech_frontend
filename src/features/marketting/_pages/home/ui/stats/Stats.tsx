import {
  ArrowRight,
  BarChart3,
  Building2,
  Factory,
  Handshake,
  MapPinned,
  Truck,
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
      className={`group container mx-auto flex items-center rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
      ${
        compact
          ? "min-h-[88px] w-full gap-3 px-4 py-3 sm:min-h-[92px]"
          : "min-h-[102px] w-[220px] gap-4 px-5 py-4 xl:w-[240px]"
      }`}
    >
      <div
        className={`flex shrink-0 items-center justify-center rounded-2xl 
        transition-all duration-300 group-hover:bg-[#ffedd5]
        ${compact ? "h-14 w-14" : "h-16 w-16"}`}
      >
        <Icon
          size={compact ? 28 : 32}
          strokeWidth={2}
          color="#f59e0b"
          className="transition-all duration-300 group-hover:scale-110"
        />
      </div>

      <div className="min-w-0">
        <h4
          className={`font-extrabold leading-none text-[#0d1b3d] ${
            compact
              ? "text-[20px] sm:text-[22px]"
              : "text-[22px] xl:text-[24px]"
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
};

const Stats = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-[#f8f8f8] py-4">
      <div className="container mx-auto container rounded-[28px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h4 className="mb-2 font-bold uppercase tracking-wider text-[#ed8c2f]">
            Our Strength in Numbers
          </h4>

          <h2 className="mb-12 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Key Company Statistics & Growth Metrics
          </h2>
        </div>

        <div className="relative hidden min-h-[620px] lg:block">
          <div className="flex justify-center">
            <div className="w-full">
              <BangladeshMap />
            </div>
          </div>

          <div className="absolute left-0 top-10">
            <StatsCard item={leftStats[0]} />
          </div>
          <div className="absolute left-[30px] top-[235px]">
            <StatsCard item={leftStats[1]} />
          </div>
          <div className="absolute left-[60px] top-[430px]">
            <StatsCard item={leftStats[2]} />
          </div>

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

        <div className="lg:hidden">
          <div className="flex justify-center">
            <div className="w-full container">
              <BangladeshMap />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allStats.map((item, index) => (
              <StatsCard key={`mobile-${index}`} item={item} compact />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/company-stats"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-10 py-3 text-base font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
          >
            See More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stats;
