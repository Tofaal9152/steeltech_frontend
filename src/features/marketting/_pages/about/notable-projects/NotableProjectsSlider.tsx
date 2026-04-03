import { AppleCarousel } from "@/components/apple-carousel";
import { Startupitems } from "./data";
import { Card } from "@/components/apple-card";

export function NotableProjectsSlider() {
  const cards = Startupitems.map((item, index) => (
    <Card
      key={item.id}
      index={index}
      card={{
        category: item.tag,
        title: item.title,
        src: item.img,
        content: <NotableProjectsDetails item={item} />,
      }}
    />
  ));

  return (
    <div className="py-4">
      <AppleCarousel items={cards} />
    </div>
  );
}

function NotableProjectsDetails({ item }: { item: any }) {
  return (
    <div className="bg-[#F5F7FA] dark:bg-neutral-900 p-6 sm:p-10 md:p-14 rounded-3xl">
      <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
        {item.desc}
      </p>
    </div>
  );
}
