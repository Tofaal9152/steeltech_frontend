import React from "react";
import {
  MapPinned,
  Truck,
  Users,
  Handshake,
  Headset,
  Factory,
  Package,
  BarChart3,
  Building2,
  Settings2,
  BadgeDollarSign,
} from "lucide-react";

const statsGroups = [
  {
    title: "Market Reach",
    items: [
      {
        icon: <MapPinned className="w-7 h-7" />,
        value: "64",
        suffix: "",
        label: "Districts Coverage",
      },
      {
        icon: <Truck className="w-7 h-7" />,
        value: "8 Lac",
        suffix: "",
        label: "Metric Ton Every Year",
      },
      {
        icon: <Users className="w-7 h-7" />,
        value: "2500+",
        suffix: "",
        label: "Employees",
      },
      {
        icon: <Handshake className="w-7 h-7" />,
        value: "500+",
        suffix: "",
        label: "Partners (Dealers)",
      },
      {
        icon: <Headset className="w-7 h-7" />,
        value: "24/7",
        suffix: "",
        label: "Support",
      },
    ],
  },
  {
    title: "Operations & Capacity",
    items: [
      {
        icon: <Factory className="w-7 h-7" />,
        value: "50,000",
        suffix: "m²",
        label: "Factory Area",
      },
      {
        icon: <Package className="w-7 h-7" />,
        value: "1,500",
        suffix: "Tons",
        label: "Available Products",
      },
      {
        icon: <BarChart3 className="w-7 h-7" />,
        value: "5,000",
        suffix: "Tons",
        label: "Sales Volume",
      },
      {
        icon: <Handshake className="w-7 h-7" />,
        value: "200+",
        suffix: "",
        label: "Partner",
      },
    ],
  },
  {
    title: "Company Strength",
    items: [
      {
        icon: <Building2 className="w-7 h-7" />,
        value: "2010",
        suffix: "",
        label: "Year of Established",
      },
      {
        icon: <Settings2 className="w-7 h-7" />,
        value: "7",
        suffix: "Sets",
        label: "Press Lines",
      },
      {
        icon: <Users className="w-7 h-7" />,
        value: "100+",
        suffix: "",
        label: "Employees",
      },
      {
        icon: <Factory className="w-7 h-7" />,
        value: "23,000",
        suffix: "sq.m",
        label: "Factory Size",
      },
      {
        icon: <BarChart3 className="w-7 h-7" />,
        value: "24,000",
        suffix: "tons",
        label: "Annual Capacity",
      },
      {
        icon: <BadgeDollarSign className="w-7 h-7" />,
        value: "80+",
        suffix: "Million USD",
        label: "Annual Sales",
      },
    ],
  },
];

const Stats = () => {
  return (
    <section className="relative py-8 border-t border-gray-200 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-3">
            Company Statistics
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Strength in Numbers
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            From nationwide coverage to production capacity, these numbers
            reflect our growth, capability, and commitment to excellence.
          </p>
        </div>

        <div className="space-y-10">
          {statsGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 md:p-8"
            >
              <div className="flex items-center justify-between gap-4 mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {group.title}
                </h3>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-orange-500/40 to-transparent rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {group.items.map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 p-5 md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                        {item.icon}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">
                          {item.value}
                          {item.suffix && (
                            <span className="ml-2 text-base md:text-lg font-semibold text-orange-500">
                              {item.suffix}
                            </span>
                          )}
                        </h4>
                        <p className="text-gray-600 mt-3 text-sm md:text-base font-medium leading-snug">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;