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

export default StatsCard;
