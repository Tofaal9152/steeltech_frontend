"use client";

import type { ReactNode } from "react";
import { CheckCircle2, SatelliteIcon, Target, Telescope } from "lucide-react";
import CardSwap, { Card } from "@/components/CardSwap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const strengths = [
  "World-class stainless-steel pipes in premium and standard categories",
  "Strict adherence to quality, integrity, and trust",
  "Products suited for Bangladesh’s tropical weather",
  "Precise weight, thickness, and size control",
  "Rust-free, innovative designs with expert supervision",
];

const baseCard =
  "flex h-full min-h-[250px] rounded-[22px] sm:rounded-[26px] border p-5 sm:p-6 lg:p-7 backdrop-blur-md shadow-[0_18px_40px_rgba(17,24,39,0.12)]";

const whiteCard = `${baseCard} border-white/15 bg-white/1 text-white`;
const warmCard = `${baseCard} border-[#ed8c2f]/20 bg-[#ed8c2f]/10 text-white`;

const iconBase =
  "flex h-10 w-10 items-center justify-center rounded-full border";
// const orangeIcon = `${iconBase} border-[#ed8c2f]/20 bg-[#ed8c2f]/15 text-[#ffb15c]`;

const cardData = [
  {
    title: "Why Steeltech",
    variant: "white",
    content: (
      <div className="space-y-3.5">
        {strengths.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ffb15c]" />
            <p className="text-sm leading-7 text-white/85">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Mission",
    icon: <Target className="h-5 w-5" />,
    variant: "white",
    content: (
      <p className="text-sm leading-7 text-white/85">
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
      <p className="text-sm leading-7 text-white/85">
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
    variant: "white",
    content: (
      <p className="text-sm leading-7 text-white/85">
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
          {/* {icon && <div className={orangeIcon}>{icon}</div>} */}
          <h3 className="text-base font-bold text-white sm:text-lg xl:text-xl">
            {title}
          </h3>
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
      <div className="xl:hidden">
        {/* Mobile only carousel */}
        <div className="sm:hidden">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {cardData.map((item, index) => (
                <CarouselItem key={index} className="basis-full">
                  <InfoCard
                    title={item.title}
                    icon={item.icon}
                    variant={item.variant as "white" | "warm"}
                    content={item.content}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-5 flex items-center justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 border-white/15 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
              <CarouselNext className="static translate-y-0 border-white/15 bg-white/10 text-white hover:bg-white/20 hover:text-white" />
            </div>
          </Carousel>
        </div>

        {/* Tablet and small laptop grid */}
        <div className="hidden grid-cols-2 gap-4 sm:grid xl:hidden">
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