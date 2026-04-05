import {
  BarChart3,
  Building2,
  Factory,
  Handshake,
  MapPinned,
  Users,
} from "lucide-react";
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

const Stats = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-[#f8f8f8] py-10 sm:py-12 md:py-14 lg:py-6 sm:min-h-screen">
      <div className="mx-auto container rounded-[22px] px-4 sm:px-6 md:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <h4 className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-wider text-[#ed8c2f]">
            Our Strength in Numbers
          </h4>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Key Company Statistics & Growth Metrics
          </h2>
        </div>

        {/* Unified Map & Stats View (Scales proportionally down to mobile) */}
        <div className="relative mx-auto flex w-full max-w-5xl justify-center min-h-[420px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[540px] xl:min-h-[620px]">
          
          {/* Centered Map */}
          <div className="absolute inset-0 flex justify-center pt-6 lg:pt-0 pointer-events-none ">
            <div className="w-[85%] max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-4xl xl:max-w-5xl pointer-events-auto">
              <BangladeshMap />
            </div>
          </div>

          {/* --- Left Side Stats --- */}
          <div className="absolute left-[-10px] sm:left-0 top-[5%] md:top-[10%] lg:top-8 xl:top-10 z-10 origin-top-left scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transition-transform">
            <StatsCard item={leftStats[0]} />
          </div>
          <div className="absolute left-[0px] sm:left-[10px] top-[40%] md:top-[45%] lg:top-[190px] xl:left-[30px] xl:top-[235px] z-10 origin-top-left scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transition-transform">
            <StatsCard item={leftStats[1]} />
          </div>
          <div className="absolute left-[10px] sm:left-[25px] top-[75%] md:top-[80%] lg:top-[360px] xl:left-[60px] xl:top-[430px] z-10 origin-top-left scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transition-transform">
            <StatsCard item={leftStats[2]} />
          </div>

          {/* --- Right Side Stats --- */}
          <div className="absolute right-[-10px] sm:right-0 top-[5%] md:top-[10%] lg:top-8 xl:top-10 z-10 origin-top-right scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transition-transform">
            <StatsCard item={rightStats[0]} />
          </div>
          <div className="absolute right-[0px] sm:right-[10px] top-[40%] md:top-[45%] lg:top-[190px] xl:right-[30px] xl:top-[230px] z-10 origin-top-right scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transition-transform">
            <StatsCard item={rightStats[1]} />
          </div>
          <div className="absolute right-[10px] sm:right-[25px] top-[75%] md:top-[80%] lg:top-[360px] xl:right-[60px] xl:top-[420px] z-10 origin-top-right scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transition-transform">
            <StatsCard item={rightStats[2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;