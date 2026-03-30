import { productsList } from "../data";
import { ProductsGrid } from "./products-grid";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Steeltech Products</h1>
        <p className="text-muted-foreground mt-2">
          Explore our range of stainless steel pipes, including round, spiral,
          box/square/rectangular, decorative, and half-round profiles. Each
          product is crafted with precision and quality to meet your
          architectural and fabrication needs.
        </p>
      </div>

      <ProductsGrid products={productsList} />
    </div>
  );
}
