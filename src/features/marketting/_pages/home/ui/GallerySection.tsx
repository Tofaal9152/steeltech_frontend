import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

const galleryItems = [
  {
    title: "Factory Images",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Product Images",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Event Images",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Promotional Videos",
    type: "video",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
  },
];

const GallerySection = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-bold uppercase tracking-[0.2em] mb-3">
            Gallery Preview
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Explore Our Visual Showcase
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h3 className="text-xl font-bold">{item.title}</h3>

                {item.type === "video" && (
                  <PlayCircle className="w-10 h-10 mt-3 text-orange-400" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-white font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            View More
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;