"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventTabContent from "./tabs/EventTabContent";
import FactoryTabContent from "./tabs/FactoryTabContent";
import ProductTabContent from "./tabs/ProductTabContent";
import VideoTabContent from "./tabs/VideoTabContent";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const TABS = [
  { id: "factory", label: "Factory Images" },
  { id: "product", label: "Product Images" },
  { id: "event", label: "Event Images" },
  { id: "video", label: "Promotional Videos" },
] as const;

const Gallery = () => {
  const searchParams = useSearchParams();
  const tabFromQuery = searchParams.get("tab");

  return (
    <Tabs
      defaultValue={tabFromQuery || "factory"}
      className="w-full pt-4 md:px-6 px-4 bg-gray-100 overflow-hidden min-h-screen md:space-y-4 space-y-12"
    >
      <TabsList className="flex flex-wrap gap-2 md:gap-3 bg-transparent p-0">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className={cn(
              "px-3 md:px-6 py-2 md:py-5 rounded-full text-xs md:text-base font-semibold transition-all duration-300 backdrop-blur-md border whitespace-nowrap",
              "bg-gray-200 text-gray-700 border-gray-300",
              "hover:bg-gray-300 hover:text-gray-900",
              "data-[state=active]:bg-[#ed8c2f]",
              "data-[state=active]:text-white",
              "data-[state=active]:border-[#ed8c2f]",
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="factory">
        <FactoryTabContent />
      </TabsContent>

      <TabsContent value="product">
        <ProductTabContent />
      </TabsContent>

      <TabsContent value="event">
        <EventTabContent />
      </TabsContent>

      <TabsContent value="video">
        <VideoTabContent />
      </TabsContent>
    </Tabs>
  );
};

export default Gallery;
