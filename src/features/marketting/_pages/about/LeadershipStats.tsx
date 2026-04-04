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
    <div className="container mx-auto px-4 md:px-0 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Leadership Stats</h1>
        <p className="text-muted-foreground mt-2 max-w-6xl">
          Steeltech Industries Ltd. has a rich history of growth and success in
          the stainless steel pipe industry. With over 15 years of experience,
          we have produced over 25,000 tons of high-quality products, supported
          by a dedicated team of 500+ employees and a strong network of 120+
          suppliers across Bangladesh.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="rounded-2xl border border-[#ed8c2f]/10 bg-white px-4 py-6 text-center shadow-sm"
          >
            <h3 className="text-2xl font-extrabold text-[#ed8c2f] sm:text-3xl md:text-4xl">
              {item.value}
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-700 sm:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipStats;
