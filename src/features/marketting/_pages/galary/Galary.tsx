"use client";
import React, { useState } from "react";
import InfiniteMenu from "@/components/InfiniteMenu";
import { imagePathForLanding } from "@/constants/imagePath";

const items = [
  {
    image: imagePathForLanding.manufacturing,
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: imagePathForLanding.logo,
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: imagePathForLanding.steelguard,
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: imagePathForLanding.loadcell,
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

const tabNames = [
  "Factory Images",
  "Product Images",
  "Event Images",
  "Promotional Videos",
];

const Galary = () => {
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Top Right Tabs */}
      <div className="absolute top-2 right-4  z-20 flex flex-wrap justify-end gap-3 md:gap-4 max-w-full px-4">
        {tabNames.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 backdrop-blur-md ${
              activeTab === tab
                ? "bg-[#ed8c2f] text-white border border-[#ed8c2f] shadow-[0_0_20px_rgba(237,140,47,0.3)] scale-105"
                : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Content */}
      <div className="w-full flex-1 flex items-center justify-center mt-24 md:mt-0">
        <InfiniteMenu items={items} scale={1} />
      </div>
    </div>
  );
};

export default Galary;
