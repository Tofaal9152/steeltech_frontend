const stats = [
  {
    value: "25,000+",
    label: "Tons Product Produced",
  },
  {
    value: "500+",
    label: "Employees",
  },
  {
    value: "120+",
    label: "Suppliers",
  },
  {
    value: "15+",
    label: "Years of Experience",
  },
];

const LeadershipStats = () => {
  return (
    <div id="leaderstats" className="container mx-auto px-4 md:px-0 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Leadership Stats</h1>
        <p className="text-muted-foreground mt-2 max-w-6xl">
          Steeltech Industries Ltd. has a rich history of growth and success in
          the stainless steel pipe industry.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-[24px] border border-[#ed8c2f]/10 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(237,140,47,0.12)]"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#ed8c2f] via-[#f3a24d] to-[#ed8c2f]" />

            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-[#ed8c2f] sm:text-3xl md:text-4xl">
                {item.value}
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-gray-700 sm:text-base">
                {item.label}
              </p>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ed8c2f]/0 via-[#ed8c2f]/0 to-[#ed8c2f]/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipStats;
