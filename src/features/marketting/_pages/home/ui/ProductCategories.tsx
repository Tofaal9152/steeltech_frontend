import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { productsList } from "../../products/data";
import { ProductsGrid } from "../../products/ui/products-grid";

export default function ProductCategories() {
  return (
    <section
      id="products"
      className="relative border-t border-gray-200 bg-gray-50 py-10 sm:py-12 md:py-12 min-h-screen"
    >
      <div className="mx-auto container px-4 text-center sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h4 className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-wider text-[#ed8c2f]">
          Our Offerings
        </h4>

        <h2 className="mb-8 text-2xl font-extrabold text-gray-900 sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl">
          Product Categories
        </h2>

        {/* Products Wrapper */}
        <div className="relative max-h-[620px] overflow-hidden sm:max-h-[760px] md:max-h-[820px] lg:max-h-[700px]">
          <ProductsGrid products={productsList} />

          {/* Gradient Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-gray-50 to-transparent sm:h-28 md:h-32" />
        </div>

        {/* See More Button */}
        <div className="mt-8 sm:mt-10 md:mt-8">
          <Link
            href="/products"
            className="inline-flex items-center rounded-lg bg-[#ed8c2f] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#cc7014] hover:shadow-lg sm:px-7 sm:py-3 sm:text-base md:px-8"
          >
            See More
            <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
