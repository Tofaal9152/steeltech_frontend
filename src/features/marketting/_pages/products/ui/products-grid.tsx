import { ProductListItem } from "../types/types";
import { ProductCard } from "./product-card";

type Props = {
  products: ProductListItem[];
};

const layoutClasses = [
  "lg:[grid-column:1] lg:[grid-row:1/span_6]",
  "lg:[grid-column:1] lg:[grid-row:7/span_6]",
  "lg:[grid-column:2] lg:[grid-row:5/span_8]",
  "lg:[grid-column:2] lg:[grid-row:1/span_4]",
];

function chunkProducts(products: ProductListItem[], size: number) {
  const chunks: ProductListItem[][] = [];

  for (let i = 0; i < products.length; i += size) {
    chunks.push(products.slice(i, i + size));
  }

  return chunks;
}

export function ProductsGrid({ products }: Props) {
  const groups = chunkProducts(products, 4);

  return (
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      {groups.map((group, groupIndex) => {
        const isCustomLayout = group.length === 4;

        return (
          <div
            key={groupIndex}
            className={
              isCustomLayout
                ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:auto-rows-[64px] xl:auto-rows-[72px]"
                : "grid grid-cols-1 gap-4 sm:grid-cols-2"
            }
          >
            {group.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                className={isCustomLayout ? layoutClasses[index] : ""}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}