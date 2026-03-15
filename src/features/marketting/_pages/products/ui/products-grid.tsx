
import { ProductListItem } from "../types/types";
import { ProductCard } from "./product-card";

type Props = {
  products: ProductListItem[];
};

export function ProductsGrid({ products }: Props) {
  return (
     <div className="columns-2 md:columns-3 gap-4">
      {products.map((product) => (
        <div key={product.slug} className="mb-4 break-inside-avoid">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}