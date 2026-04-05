import { Timeline } from "@/components/ui/timeline";
import { processItems } from "./process-data";

export function ManufacturingHighlightsMobileView() {
  const data = processItems.map((item,index) => ({
    title: `${item.step} • ${item.phase}`,
    content: (
      <div key={index}>
        <p className="mb-2 text-sm md:text-sm text-neutral-800 dark:text-neutral-200 font-semibold">
          {item.title}
        </p>
        <p className="mb-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
          {item.description}
        </p>

        <div className="grid grid-cols-1">
          <img
            src={item.image}
            alt={item.title}
            className=" w-full rounded-lg object-cover shadow-md md:h-100"
          />
        </div>
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip ">
      <Timeline data={data} />
    </div>
  );
}
