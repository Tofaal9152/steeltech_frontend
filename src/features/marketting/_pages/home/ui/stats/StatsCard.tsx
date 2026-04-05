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
  className={`group flex items-center rounded-[16px] sm:rounded-[18px] xl:rounded-[20px]
  bg-white/70  border border-white/40
  shadow-[0_8px_20px_rgba(0,0,0,0.06)]
  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]

  ${
    compact
      ? "min-h-[78px] w-[145px] gap-2.5 px-3 py-3 sm:min-h-[88px] sm:w-[170px] sm:gap-3 sm:px-4 md:min-h-[96px] md:w-[190px]"
      : "min-h-[92px] w-[210px] gap-3 px-4 py-3 lg:w-[220px] xl:min-h-[102px] xl:w-[240px] xl:gap-4 xl:px-5 xl:py-4"
  }`}
>
      <div
        className={`flex shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:bg-[#ffedd5]
        ${compact ? "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" : "h-12 w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16"}`}
      >
        <Icon
          size={compact ? 20 : 28}
          strokeWidth={2}
          color="#f59e0b"
          className="transition-all duration-300 group-hover:scale-110"
        />
      </div>

      <div className="min-w-0">
        <h4
          className={`font-extrabold leading-none text-[#0d1b3d] ${
            compact
              ? "text-[16px] sm:text-[18px] md:text-[20px]"
              : "text-[20px] lg:text-[21px] xl:text-[24px]"
          }`}
        >
          {item.value}
        </h4>

        <p
          className={`mt-1 leading-snug text-[#52607a] ${
            compact ? "text-[10px] sm:text-xs md:text-sm" : "text-xs lg:text-sm"
          }`}
        >
          {item.label}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;