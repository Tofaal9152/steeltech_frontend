import { ProductListItem } from "../types/types";
import { ProductCard } from "./product-card";

type Props = {
  products: ProductListItem[];
};

export function ProductsGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}