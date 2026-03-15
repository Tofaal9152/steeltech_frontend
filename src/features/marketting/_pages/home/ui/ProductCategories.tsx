import { ChevronRight } from "lucide-react";

import Link from "next/link";
import { productsList } from "../../products/data";
import { ProductListItem } from "../../products/types/types";
import { ProductCard } from "../../products/ui/product-card";

type Props = {
  products: ProductListItem[];
};

export default function ProductCategories() {
  return (
    <section id="products" className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto text-center">
        <h4 className="text-orange-500 font-bold tracking-wider uppercase mb-2">
          Our Offerings
        </h4>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-gray-900">
          Product Categories
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12">
          <Link
            href="/products"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            See More
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
