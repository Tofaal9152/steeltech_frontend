"use client";

import { Lens } from "@/components/ui/lens";
import { useState } from "react";

type ProductDetailsHeroProps = {
  product: any;
};

export function ProductDetailsHero({ product }: ProductDetailsHeroProps) {
  const [hovering, setHovering] = useState(false);
  const images = product.images || [];
  const [selectedImage, setSelectedImage] = useState(images[0] || null);

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-2xl border bg-white relative z-10">
          {selectedImage ? (
            <Lens hovering={hovering} setHovering={setHovering}>
              <img
                src={selectedImage}
                alt={product.product_name}
                className="h-full max-h-[420px] w-full object-cover cursor-pointer"
              />
            </Lens>
          ) : (
            <div className="flex h-[320px] items-center justify-center bg-orange-50 text-sm text-muted-foreground">
              No image available
            </div>
          )}
        </div>

        {images.length > 1 ? (
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
            {images.map((image: string, index: number) => {
              const isActive = selectedImage === image;

              return (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-xl border bg-white transition ${
                    isActive
                      ? "border-orange-500 ring-2 ring-orange-200"
                      : "border-slate-200 hover:border-orange-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.product_name}-${index + 1}`}
                    className="h-20 w-full object-cover cursor-pointer"
                  />
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-orange-600">
            Stainless Steel Product
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            {product.product_name}
          </h1>

          {product.description ? (
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {product.description}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {product.grade?.map((item: string) => (
            <span
              key={item}
              className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700"
            >
              Grade {item}
            </span>
          ))}

          {product.finish?.map((item: string) => (
            <span
              key={item}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
            >
              {item}
            </span>
          ))}

          {product.shape ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {product.shape}
            </span>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-4">
            <p className="text-xs text-muted-foreground">Material</p>
            <p className="mt-1 font-semibold">{product.material || "N/A"}</p>
          </div>

          <div className="rounded-xl border bg-white p-4">
            <p className="text-xs text-muted-foreground">Variants</p>
            <p className="mt-1 font-semibold">
              {product.variants?.length || 0}
            </p>
          </div>
        </div>

        {product.features?.length ? (
          <div className="rounded-2xl border bg-orange-50 p-5">
            <h2 className="mb-3 text-sm font-semibold text-orange-700">
              Key Features
            </h2>

            <ul className="space-y-2 text-sm text-slate-700">
              {product.features.slice(0, 5).map((feature: string) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
