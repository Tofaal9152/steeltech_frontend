import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventTabContent from "./tabs/EventTabContent";
import FactoryTabContent from "./tabs/FactoryTabContent";
import ProductTabContent from "./tabs/ProductTabContent";
import VideoTabContent from "./tabs/VideoTabContent";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "factory", label: "Factory Images" },
  { id: "product", label: "Product Images" },
  { id: "event", label: "Event Images" },
  { id: "video", label: "Promotional Videos" },
] as const;

const Gallery = () => {
  return (
    <Tabs defaultValue="factory" className="w-full pt-4 md:px-6 px-4 bg-gray-100 overflow-hidden min-h-screen">
      <TabsList>
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className={cn(
              "px-6 py-5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 backdrop-blur-md border",
              "bg-gray-200 text-gray-700 border-gray-300",
              "hover:bg-gray-300 hover:text-gray-900",
              "data-[state=active]:bg-[#ed8c2f]",
              "data-[state=active]:text-white",
              "data-[state=active]:border-[#ed8c2f] mr-2",
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="factory" className="mt-4">
        <FactoryTabContent />
      </TabsContent>

      <TabsContent value="product" className="mt-4">
        <ProductTabContent />
      </TabsContent>

      <TabsContent value="event" className="mt-4">
        <EventTabContent />
      </TabsContent>

      <TabsContent value="video" className="mt-4">
        <VideoTabContent />
      </TabsContent>
    </Tabs>
  );
};

export default Gallery;
