import { productsList } from "../data";
import { ProductsGrid } from "./products-grid";

const PIPE_GUIDE = [
  {
    name: "Round Pipe",
    uses: "Railings, handrails, structural framing, furniture legs.",
  },
  {
    name: "Square Box Pipe",
    uses: "Gates, window grilles, furniture frames, racking systems.",
  },
  {
    name: "Rectangular Box Pipe",
    uses: "Door frames, structural supports, commercial shelving.",
  },
  {
    name: "Spiral Pipe",
    uses: "Decorative railings, interior accent features, hotel and restaurant fitouts.",
  },
  {
    name: "Design Pipe",
    uses: "Architectural facades, premium interior work, high-end furniture.",
  },
  {
    name: "Half Round Pipe",
    uses: "Railing caps, edge trim, decorative cover profiles.",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Steeltech Industries Ltd. Products</h1>
        <p className="text-muted-foreground mt-2">
          Steeltech Industries Ltd. manufactures stainless steel pipes — from
          standard round and square profiles to decorative spiral and design
          pipes. Every product is available in Grade 201 stainless steel with
          multiple thickness and diameter options. Select a category below to
          view detailed specifications and availability.
        </p>
      </div>

      {/* <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Which Pipe Is Right for You?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PIPE_GUIDE.map((pipe) => (
            <div
              key={pipe.name}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {pipe.name}
              </h3>
              <p className="text-sm text-gray-600">{pipe.uses}</p>
            </div>
          ))}
        </div> */}
      {/* </div> */}

      <ProductsGrid products={productsList} />
    </div>
  );
}
