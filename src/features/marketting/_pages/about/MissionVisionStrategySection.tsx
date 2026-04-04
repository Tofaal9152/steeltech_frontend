import type { ReactNode } from "react";
import {
  CheckCircle2,
  SatelliteIcon,
  Target,
  Telescope,
} from "lucide-react";
import CardSwap, { Card } from "@/components/CardSwap";

const strengths = [
  "World-class stainless-steel pipes in premium and standard categories",
  "Strict adherence to quality, integrity, and trust",
  "Products suited for Bangladesh’s tropical weather",
  "Precise weight, thickness, and size control",
  "Rust-free, innovative designs with expert supervision",
];

const baseCard =
  "flex h-full min-h-[250px] rounded-[22px] sm:rounded-[26px] border p-5 sm:p-6 lg:p-7 shadow-[0_18px_40px_rgba(17,24,39,0.08)]";
const whiteCard = `${baseCard} border-[#ed8c2f]/12 bg-white text-[#111827]`;
const warmCard = `${baseCard} border-[#ed8c2f]/12 bg-[#fffaf5] text-[#111827]`;

const iconBase = "flex h-10 w-10 items-center justify-center rounded-full";
const orangeIcon = `${iconBase} bg-[#fff1e5] text-[#ed8c2f]`;

const cardData = [
  {
    title: "Why Steeltech",
    variant: "white",
    content: (
      <div className="space-y-3.5">
        {strengths.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ed8c2f]" />
            <p className="text-sm leading-7 text-[#4b5563]">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Mission",
    icon: <Target className="h-5 w-5" />,
    variant: "warm",
    content: (
      <p className="text-sm leading-7 text-[#4b5563]">
        To set the national benchmark for stainless steel manufacturing through
        consistently superior product quality, reliable supply, and innovation
        in production technology. We are committed to meeting the expectations
        of distributors, builders, and end users by maintaining consistency in
        every stage of production and delivery.
      </p>
    ),
  },
  {
    title: "Vision",
    icon: <Telescope className="h-5 w-5" />,
    variant: "white",
    content: (
      <p className="text-sm leading-7 text-[#4b5563]">
        To make world-class stainless steel products accessible to every
        commercial and residential project in Bangladesh, while strengthening
        local manufacturing capability. Our long-term vision is to build a
        trusted national brand that represents durability, innovation, and
        excellence in the steel sector.
      </p>
    ),
  },
  {
    title: "Strategy",
    icon: <SatelliteIcon className="h-5 w-5" />,
    variant: "warm",
    content: (
      <p className="text-sm leading-7 text-[#4b5563]">
        Steeltech&apos;s growth strategy focuses on maintaining product
        standards, expanding market reach, strengthening retailer relationships,
        and improving manufacturing efficiency. At the same time, the company
        continues to invest in modern processes and customer-focused service to
        ensure sustainable growth across Bangladesh.
      </p>
    ),
  },
];

function InfoCard({
  title,
  icon,
  variant = "white",
  content,
}: {
  title: string;
  icon?: ReactNode;
  variant?: "white" | "warm";
  content: ReactNode;
}) {
  return (
    <div className={variant === "warm" ? warmCard : whiteCard}>
      <div className="w-full">
        <div className="mb-4 flex items-center gap-3">
          {icon && <div className={orangeIcon}>{icon}</div>}
          <h3 className="text-base font-bold sm:text-lg xl:text-xl">{title}</h3>
        </div>
        {content}
      </div>
    </div>
  );
}

const MissionVisionStrategySection = () => {
  return (
    <div className="w-full">
      {/* Mobile / tablet / small laptop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:hidden">
        {cardData.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            icon={item.icon}
            variant={item.variant as "white" | "warm"}
            content={item.content}
          />
        ))}
      </div>

      {/* Large desktop only */}
      <div className="hidden xl:flex xl:w-full xl:justify-end xl:pt-28">
        <div className="relative h-[480px] w-full max-w-[430px] 2xl:max-w-[460px]">
          <CardSwap
            cardDistance={28}
            verticalDistance={32}
            delay={3000}
            pauseOnHover={true}
          >
            {cardData.map((item, index) => (
              <Card key={index}>
                <InfoCard
                  title={item.title}
                  icon={item.icon}
                  variant={item.variant as "white" | "warm"}
                  content={item.content}
                />
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionStrategySection;