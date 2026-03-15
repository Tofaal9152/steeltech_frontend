type BoxFamilyDetailsProps = {
  product: any;
};

export function BoxFamilyDetails({ product }: BoxFamilyDetailsProps) {
  return (
    <div className="space-y-8">
      {product.variants?.map((variant: any) => (
        <section
          key={variant.variant}
          className="rounded-2xl border bg-white p-6"
        >
          <h2 className="mb-6 text-xl font-semibold">{variant.variant}</h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border">
              <div className="border-b bg-orange-50 px-4 py-3">
                <h3 className="font-semibold text-orange-700">Square Box</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="px-4 py-3 font-semibold">Size</th>
                      <th className="px-4 py-3 font-semibold">Thickness (mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variant.products?.square_box?.map((row: any) => (
                      <tr
                        key={`square-${variant.variant}-${row.size}`}
                        className="border-b last:border-0"
                      >
                        <td className="px-4 py-3">{row.size}</td>
                        <td className="px-4 py-3">
                          {row.thickness_mm?.join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border">
              <div className="border-b bg-orange-50 px-4 py-3">
                <h3 className="font-semibold text-orange-700">Rectangular</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="px-4 py-3 font-semibold">Size</th>
                      <th className="px-4 py-3 font-semibold">Thickness (mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variant.products?.rectangular?.map((row: any) => (
                      <tr
                        key={`rect-${variant.variant}-${row.size}`}
                        className="border-b last:border-0"
                      >
                        <td className="px-4 py-3">{row.size}</td>
                        <td className="px-4 py-3">
                          {row.thickness_mm?.join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}