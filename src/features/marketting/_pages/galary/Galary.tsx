"use client";
import { useState } from "react";
import GallaryContent from "./GallaryContent";

const tabNames = [
  "Factory Images",
  "Product Images",
  "Event Images",
  "Promotional Videos",
];

const Galary = () => {
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-black px-4 py-16">
      <div className="absolute top-2 right-4 z-20 flex flex-wrap justify-end gap-3 md:gap-4 max-w-full px-4">
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

      <div className="mt-16 w-full">
        <GallaryContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Galary;