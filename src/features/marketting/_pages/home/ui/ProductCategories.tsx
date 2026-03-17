import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { productsList } from "../../products/data";
import { ProductListItem } from "../../products/types/types";
import { ProductCard } from "../../products/ui/product-card";
import { ProductsGrid } from "../../products/ui/products-grid";

export default function ProductCategories() {
  return (
    <section id="products" className="relative border-t border-gray-200 bg-gray-50 py-8">
      <div className="mx-auto max-w-[1400px] px-6 text-center md:px-16 lg:px-24">
        <h4 className="mb-2 font-bold uppercase tracking-wider text-[#ed8c2f]">
          Our Offerings
        </h4>

        <h2 className="mb-12 text-3xl font-extrabold text-gray-900 md:text-5xl">
          Product Categories
        </h2>

        {/* Products Wrapper */}
        <div className="relative overflow-hidden max-h-[520px]">
          
          {/* Products Grid */}
          <ProductsGrid products={productsList} />

          {/* Gradient Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-gray-50 to-transparent"></div>

        </div>

        {/* See More Button */}
        <div className="mt-12">
          <Link
            href="/products"
            className="inline-flex items-center rounded-lg bg-[#ed8c2f] px-8 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-[#cc7014] hover:shadow-lg"
          >
            See More
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}