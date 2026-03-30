"use client";
import { useState, useCallback } from "react";
import GallaryContent from "./GallaryContent";


// Better structured tab config
const TABS = [
  { id: "factory", label: "Factory Images" },
  { id: "product", label: "Product Images" },
  { id: "event", label: "Event Images" },
  { id: "video", label: "Promotional Videos" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col px-4 py-16 sm:px-6 md:px-8">
      
      {/* Tabs */}
      <div className="absolute top-2 right-4 z-20 flex flex-wrap justify-end gap-3 md:gap-4 max-w-full px-4">
        {TABS.map(({ id, label }) => {
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              onClick={() => handleTabChange(id)}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 backdrop-blur-md ${
                isActive
                  ? "bg-[#ed8c2f] text-white border border-[#ed8c2f] shadow-[0_0_20px_rgba(237,140,47,0.3)] scale-105"
                  : "bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300 hover:text-gray-900 hover:border-gray-400 dark:bg-white/5 dark:text-gray-400 dark:border-white/10 dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white/20"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="w-full">
        <GallaryContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Gallery;