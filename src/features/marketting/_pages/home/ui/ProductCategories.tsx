import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { productsList } from "../../products/data";
import { ProductsGrid } from "../../products/ui/products-grid";

export default function ProductCategories() {
  return (
    <section
      id="products"
      className="relative h-screen border-t border-gray-200 bg-gray-50 pt-4 sm:pt-8 2xl:pt-12"
    >
      <div className="mx-auto container h-full flex flex-col px-4 text-center">
        {/* Header */}
        <div>
          <h4 className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#ed8c2f]">
            Our Offerings
          </h4>

          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Product Categories
          </h2>
        </div>

        {/* Grid (takes remaining space) */}
        <div className="relative flex-1 overflow-hidden mt-4">
          <ProductsGrid products={productsList} />

          {/* Gradient */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-gray-50 to-transparent" />
        </div>

        {/* CTA */}
        <div className="pt-3 pb-4">
          <Link
            href="/products"
            className="inline-flex items-center rounded-lg bg-[#ed8c2f] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#cc7014]"
          >
            See More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
