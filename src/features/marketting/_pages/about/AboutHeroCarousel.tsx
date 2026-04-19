"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Built on Strength, Driven by Quality",
    subtitle:
      "Steeltech delivers premium stainless-steel solutions with reliability, precision, and trust across Bangladesh.",
    image: "/images/about/carousel/abt1.png",
    primaryBtn: "Explore Products",
    primaryLink: "/products",
    secondaryBtn: "Learn More",
    secondaryLink: "#about",
  },
  {
    id: 2,
    title: "Engineering Durable Stainless-Steel Excellence",
    subtitle:
      "From manufacturing to distribution, we maintain world-class standards to serve residential and commercial projects.",
    image: "/images/about/carousel/abt2.png",
    primaryBtn: "Our Projects",
    primaryLink: "#projects",
    secondaryBtn: "Gallery",
    secondaryLink: "/gallery",
  },
  {
    id: 3,
    title: "Trusted Manufacturing Since 2003",
    subtitle:
      "A journey of innovation, product consistency, and long-term commitment to quality in every stage of production.",
    image: "/images/about/carousel/abt5.png",
    primaryBtn: "Our Leadership",
    primaryLink: "#leader",
    secondaryBtn: "Clients & Partners",
    secondaryLink: "#client",
  },
];

const AboutHeroCarousel = () => {
  const handleScroll = (target: string) => {
    const id = target.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const plugin = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full bg-black"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[70vh] min-h-[520px] w-full md:h-[78vh] lg:min-h-[620px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: "top",
                  }}
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,140,47,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_30%)]" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md">
                      Premium Stainless Steel Manufacturer
                    </div>

                    <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                      {slide.title}
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      {slide.primaryLink.startsWith("#") ? (
                        <Button
                          onClick={() => handleScroll(slide.primaryLink)}
                          className="h-12 w-full rounded-full bg-[#ed8c2f] px-6 text-white hover:bg-[#d9781d] sm:w-auto"
                        >
                          {slide.primaryBtn}
                          <ArrowRight />
                        </Button>
                      ) : (
                        <Link
                          href={slide.primaryLink}
                          className="w-full sm:w-auto"
                        >
                          <Button className="h-12 w-full rounded-full bg-[#ed8c2f] px-6 text-white hover:bg-[#d9781d] sm:w-auto">
                            {slide.primaryBtn}
                            <ArrowRight />
                          </Button>
                        </Link>
                      )}

                      {slide.secondaryLink.startsWith("#") ? (
                        <Button
                          onClick={() => handleScroll(slide.secondaryLink)}
                          variant="outline"
                          className="h-12 w-full rounded-full border-white/25 bg-white/10 px-6 text-white backdrop-blur-md hover:bg-white/20 hover:text-white sm:w-auto"
                        >
                          {slide.secondaryBtn}
                        </Button>
                      ) : (
                        <Link
                          href={slide.secondaryLink}
                          className="w-full sm:w-auto"
                        >
                          <Button
                            variant="outline"
                            className="h-12 w-full rounded-full border-white/25 bg-white/10 px-6 text-white backdrop-blur-md hover:bg-white/20 hover:text-white sm:w-auto"
                          >
                            {slide.secondaryBtn}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-6 right-0 z-20 flex -translate-x-1/2 items-center gap-3">
          <CarouselPrevious className="static translate-y-0 border-white/20 bg-black/30 text-white backdrop-blur-md" />
          <CarouselNext className="static translate-y-0 border-white/20 bg-black/30 text-white backdrop-blur-md" />
        </div>
      </Carousel>
    </section>
  );
};

export default AboutHeroCarousel;
