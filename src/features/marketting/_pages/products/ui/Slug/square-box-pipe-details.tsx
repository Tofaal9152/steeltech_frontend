type BoxPipeDetailsProps = {
  product: any;
};

function getAllThicknesses(sizeAvailability: any[]) {
  const allThicknesses = sizeAvailability.flatMap(
    (item) => item.thickness_mm || []
  );

  return [...new Set(allThicknesses)].sort((a, b) => a - b);
}

export function SquareBoxPipeDetails({ product }: BoxPipeDetailsProps) {
  return (
    <div className="space-y-8">
      {/* {product.size_range ? (
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Size Range</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Minimum
              </p>
              <p className="mt-2 font-semibold">{product.size_range.min}</p>
            </div>

            <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Maximum
              </p>
              <p className="mt-2 font-semibold">{product.size_range.max}</p>
            </div>
          </div>
        </section>
      ) : null} */}

      {/* {product.applications?.length ? (
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
      ) : null} */}

      {/* {product.sizes?.length ? (
        <section className="rounded-2xl border bg-white p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Available Sizes</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Standard available dimensions for this product.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b bg-orange-50">
                  <th className="border-r px-4 py-3 text-left font-semibold">
                    SL
                  </th>
                  <th className="border-r px-4 py-3 text-left font-semibold">
                    Size (inch)
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Size (mm)
                  </th>
                </tr>
              </thead>

              <tbody>
                {product.sizes.map((row: any, index: number) => (
                  <tr
                    key={`${row.inch}-${row.mm}`}
                    className="border-b last:border-0 hover:bg-orange-50/40"
                  >
                    <td className="border-r px-4 py-3 font-medium">
                      {index + 1}
                    </td>
                    <td className="border-r px-4 py-3 font-medium">
                      {row.inch}
                    </td>
                    <td className="px-4 py-3">{row.mm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null} */}

      {product.variants?.map((variant: any) => {
        const rows = variant.size_availability || [];
        const thicknessHeaders = getAllThicknesses(rows);

        if (!rows.length) return null;

        return (
          <section
            key={variant.code || variant.name}
            className="rounded-2xl border bg-white p-6"
          >
            <div className="mb-5">
              <h2 className="text-xl font-semibold">{variant.name}</h2>
              {variant.source_file ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  Source: {variant.source_file}
                </p>
              ) : null}
            </div>

            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[800px] border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-orange-50">
                    <th
                      rowSpan={2}
                      className="border-r px-4 py-3 text-left font-semibold"
                    >
                      Size (inch)
                    </th>
                    <th
                      colSpan={thicknessHeaders.length}
                      className="px-4 py-3 text-center font-semibold"
                    >
                      Thickness
                    </th>
                  </tr>
                  <tr className="border-b bg-orange-50">
                    {thicknessHeaders.map((thickness: number) => (
                      <th
                        key={thickness}
                        className="whitespace-nowrap px-4 py-3 text-center font-medium"
                      >
                        {thickness.toFixed(1)}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row: any) => (
                    <tr
                      key={`${variant.code}-${row.size_inch}`}
                      className="border-b last:border-0"
                    >
                      <td className="border-r px-4 py-3 font-medium">
                        {row.size_inch}
                      </td>

                      {thicknessHeaders.map((thickness: number) => {
                        const available = row.thickness_mm?.includes(thickness);

                        return (
                          <td
                            key={`${row.size_inch}-${thickness}`}
                            className="px-4 py-3 text-center"
                          >
                            {available ? (
                              <span className="font-semibold text-orange-600">
                                ✓
                              </span>
                            ) : (
                              <span className="text-slate-300">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}