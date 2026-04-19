import { productsList } from "../data";
import { ProductsGrid } from "./products-grid";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Steeltech Industries Ltd. Products
        </h1>
        <p className="text-muted-foreground mt-2">
          Steeltech Industries Ltd. manufactures stainless steel pipes — from
          standard round and square profiles to decorative spiral and design
          pipes. Every product is available in Grade 201 stainless steel with
          multiple thickness and diameter options. Select a category below to
          view detailed specifications and availability.
        </p>
      </div>

      <ProductsGrid products={productsList} />
    </div>
  );
}
