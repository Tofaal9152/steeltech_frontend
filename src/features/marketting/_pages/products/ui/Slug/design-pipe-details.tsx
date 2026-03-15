type DesignPipeDetailsProps = {
  product: any;
};

export function DesignPipeDetails({ product }: DesignPipeDetailsProps) {
  return (
    <div className="space-y-8">
      {product.applications?.length ? (
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Applications</h2>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((item: string) => (
              <span
                key={item}
                className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {product.variants?.length ? (
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Design Availability</h2>

          <div className="space-y-4">
            {product.variants.map((variant: any, index: number) => (
              <div
                key={`${variant.type || "variant"}-${index}`}
                className="rounded-xl border bg-orange-50 p-4"
              >
                <p className="font-semibold text-orange-700">
                  {variant.type || "Pattern"}
                </p>
                {variant.note ? (
                  <p className="mt-2 text-sm text-slate-700">{variant.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {product.images?.length ? (
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Gallery</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {product.images.map((image: string) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl border bg-white"
              >
                <img
                  src={image}
                  alt={product.product_name}
                  className="h-64 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}