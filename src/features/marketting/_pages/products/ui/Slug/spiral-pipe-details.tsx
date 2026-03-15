type SpiralPipeDetailsProps = {
  product: any;
};

function getAllThicknesses(diameterAvailability: any[]) {
  const allThicknesses = diameterAvailability.flatMap(
    (item) => item.thickness_mm || []
  );

  return [...new Set(allThicknesses)].sort((a, b) => a - b);
}

export function SpiralPipeDetails({ product }: SpiralPipeDetailsProps) {
  return (
    <div className="space-y-8">
      {product.specifications ? (
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Specifications</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-orange-50 p-4">
              <p className="text-xs text-muted-foreground">Diameter Range</p>
              <p className="mt-1 font-semibold">
                {product.specifications.diameter_range?.inch}
              </p>
              <p className="text-sm text-muted-foreground">
                {product.specifications.diameter_range?.mm}
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-4">
              <p className="text-xs text-muted-foreground">Thickness Range</p>
              <p className="mt-1 font-semibold">
                {product.specifications.thickness_range}
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-4">
              <p className="text-xs text-muted-foreground">Length</p>
              <p className="mt-1 font-semibold">
                {product.specifications.length}
              </p>
            </div>
          </div>
        </section>
      ) : null}

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

      {product.variants?.map((variant: any) => {
        const rows = variant.diameter_availability || [];
        const thicknessHeaders = getAllThicknesses(rows);

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
              <table className="w-full min-w-[900px] border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-orange-50">
                    <th
                      rowSpan={2}
                      className="border-r px-4 py-3 text-left font-semibold"
                    >
                      DIA (inch)
                    </th>
                    <th
                      rowSpan={2}
                      className="border-r px-4 py-3 text-left font-semibold"
                    >
                      DIA (mm)
                    </th>
                    <th
                      colSpan={thicknessHeaders.length}
                      className="px-4 py-3 text-center font-semibold"
                    >
                      THICKNESS
                    </th>
                  </tr>
                  <tr className="border-b bg-orange-50">
                    {thicknessHeaders.map((thickness: number) => (
                      <th
                        key={thickness}
                        className="px-4 py-3 text-center font-medium whitespace-nowrap"
                      >
                        {thickness.toFixed(1)} mm
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row: any) => (
                    <tr
                      key={`${variant.code}-${row.diameter_inch}-${row.diameter_mm}`}
                      className="border-b last:border-0"
                    >
                      <td className="border-r px-4 py-3 font-medium">
                        {row.diameter_inch}
                      </td>
                      <td className="border-r px-4 py-3">
                        {row.diameter_mm}
                      </td>

                      {thicknessHeaders.map((thickness: number) => {
                        const available = row.thickness_mm?.includes(thickness);

                        return (
                          <td
                            key={`${row.diameter_inch}-${thickness}`}
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