import React from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Factory,
  Package,
  Settings,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
} from "lucide-react";
import { imagePathForLanding } from "@/constants/imagePath";

const primarySteps = [
  {
    step: "Step 1",
    title: "Casting",
    description: "Ingot is melted in furnace to create billet.",
    icon: Factory,
  },
  {
    step: "Step 2",
    title: "Extrusion",
    description: "Billet is shaped into profiles.",
    icon: Settings,
  },
  {
    step: "Step 3",
    title: "Aging / Tempering",
    description: "Material strength and durability are improved.",
    icon: Activity,
  },
];

const finalSteps = [
  {
    step: "Step 5",
    title: "Quality Check",
    description: "Automated QC with Steelguard devices.",
    icon: ShieldCheck,
  },
  {
    step: "Step 6",
    title: "Packaging",
    description: "Products are packed securely for transport.",
    icon: Package,
  },
  {
    step: "Step 7",
    title: "Warehousing",
    description: "Finished goods stored before distribution.",
    icon: Warehouse,
  },
  {
    step: "Step 8",
    title: "Delivery to Market",
    description: "Products delivered through nationwide network.",
    icon: Truck,
  },
];

const finishes = ["Anodizing", "Powder Coating", "Wood Finish"];

const FlowConnector = () => {
  return (
    <div className="flex items-center justify-center text-orange-500 shrink-0">
      <ArrowRight className="hidden lg:block w-8 h-8" />
      <ArrowDown className="lg:hidden w-6 h-6" />
    </div>
  );
};

const StepCard = ({ icon: Icon, step, title, description }: any) => {
  return (
    <div className="w-full lg:w-[230px] rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
        <Icon className="h-6 w-6" />
      </div>

      <span className="mb-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
        {step}
      </span>

      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
};

const SurfaceTreatmentCard = () => {
  return (
    <div className="w-full lg:w-[320px] rounded-[28px] border border-orange-200 bg-gradient-to-b from-white to-orange-50 p-6 text-center shadow-md">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
        <Sparkles className="h-6 w-6" />
      </div>

      <span className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
        Step 4
      </span>

      <h3 className="mb-2 text-xl font-bold text-gray-900">
        Surface Treatment
      </h3>
      <p className="mb-5 text-sm leading-6 text-gray-600">
        Choose the finishing process before quality check.
      </p>

      <div className="rounded-2xl border-2 border-dashed border-orange-200 bg-white p-4">
        <div className="grid gap-3">
          <div className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 font-semibold text-sky-700">
            {finishes[0]}
          </div>

          <div className="rounded-xl border border-orange-200 bg-orange-100 px-4 py-3 font-semibold text-orange-700">
            {finishes[1]}
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-semibold text-amber-700">
            {finishes[2]}
          </div>
        </div>
      </div>
    </div>
  );
};

const ManufacturingHighlights = () => {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-bold uppercase tracking-wider text-orange-500">
            Manufacturing Highlights
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
            Advanced Manufacturing Process
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Clear step-by-step process flow with arrows to show exactly which
            stage comes next.
          </p>
        </div>

        {/* Flow Layout */}
        <div className="rounded-[32px]  ">
          {/* Top Row */}
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            {primarySteps.map((item, index) => (
              <React.Fragment key={item.title}>
                <StepCard {...item} />
                {index !== primarySteps.length - 1 && <FlowConnector />}
              </React.Fragment>
            ))}

            <FlowConnector />
            <SurfaceTreatmentCard />
          </div>

          {/* Down Arrow */}
          <div className="my-8 flex justify-center text-orange-500">
            <ArrowDown className="h-8 w-8" />
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            {finalSteps.map((item, index) => (
              <React.Fragment key={item.title}>
                <StepCard {...item} />
                {index !== finalSteps.length - 1 && <FlowConnector />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <img
            src={imagePathForLanding.manufacturing}
            alt="Manufacturing"
            className="h-[250px] w-full rounded-xl object-cover shadow-md"
          />

          <img
            src={imagePathForLanding.steelguard}
            alt="Steelguard QC Device"
            className="h-[250px] w-full rounded-xl object-cover shadow-md"
          />

          <img
            src={imagePathForLanding.loadcell}
            alt="Load Cell Device"
            className="h-[250px] w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ManufacturingHighlights;
