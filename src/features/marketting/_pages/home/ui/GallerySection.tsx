import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { imagePathForLanding } from "@/constants/imagePath";

const galleryItems = [
  {
    title: "Factory Images",
    type: "image",
    image: imagePathForLanding.galary1,
  },
  {
    title: "Product Images",
    type: "image",
    image: imagePathForLanding.galary2,
  },
  {
    title: "Event Images",
    type: "image",
    image: imagePathForLanding.galary3,
  },
  {
    title: "Promotional Videos",
    type: "video",
    image: imagePathForLanding.galary4,
  },
];

const GallerySection = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-200 py-16 ">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#ed8c2f]">
            Gallery Preview
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Explore Our Visual Showcase
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            Discover our factory, products, events, and promotional highlights
            through a premium visual experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-[320px] [perspective:24em]"
            >
              {/* Image Back Plate (Replaced Gradient) */}
              <div
                className="absolute inset-0 rounded-[2rem] bg-cover bg-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] rotate-[7deg] origin-[100%_100%] group-hover:rotate-[12deg] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:translate-z-4"
                style={{
                  backgroundImage: `url(${item.image})`,
                  boxShadow: "0.8em -0.8em 1.4em rgba(0,0,0,0.15)",
                }}
              >
                {/* Subtle dark/blur overlay so the front image stays the main focus */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
              </div>

              {/* Glass Front Card */}
              <div
                className="relative h-full rounded-[2rem] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] [transform-style:preserve-3d] group-hover:[transform:translate3d(0,0,2em)]"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.12) inset, 0 20px 50px rgba(0,0,0,0.25)",
                }}
              >
                {/* Front Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/45" />

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.05))]" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-start">
                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md">
                      {item.type}
                    </span>

                    {item.type === "video" && (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md">
                        <PlayCircle className="h-6 w-6 " />
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold leading-tight drop-shadow-md ">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/90  translate-y-2 transition-all duration-500 ">
                      Premium curated visuals from our brand journey.
                    </p>
                    {/* <p className="mt-2  text-white/90 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0  text-2xl font-bold leading-tight drop-shadow-md">
                       {item.title}
                    </p> */}
                    {/* <p className="mt-2 text-sm text-white/90 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 drop-shadow-sm">
                      Premium curated visuals from our brand journey.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/gallery"
            className="group relative inline-flex items-center gap-2 rounded-full bg-[#ed8c2f] px-8 py-3.5 text-white font-semibold shadow-lg shadow-[#ed8c2f]/30 hover:shadow-[#ed8c2f]/50 hover:bg-[#cc7014] transition-all duration-300 hover:-translate-y-1"
          >
            View More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
