type HalfRoundPipeDetailsProps = {
  product: any;
};

function getAllThicknesses(sizes: any[]) {
  const allThicknesses = sizes.flatMap((item) => item.thickness_mm || []);
  return [...new Set(allThicknesses)].sort((a, b) => a - b);
}

export function HalfRoundPipeDetails({
  product,
}: HalfRoundPipeDetailsProps) {
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

      {product.variants?.map((variant: any, index: number) => {
        const rows = variant.sizes || [];
        const thicknessHeaders = getAllThicknesses(rows);

        return (
          <section
            key={`${variant.name || "variant"}-${index}`}
            className="rounded-2xl border bg-white p-6"
          >
            <div className="mb-5">
              <h2 className="text-xl font-semibold">
                {variant.name || "Variant"}
              </h2>
              {variant.source_file ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  Source: {variant.source_file}
                </p>
              ) : null}
            </div>

            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full min-w-[820px] border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-orange-50">
                    <th
                      rowSpan={2}
                      className="border-r px-4 py-3 text-left font-semibold"
                    >
                      WIDTH (mm)
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
                      key={`${variant.name}-${row.width_mm}`}
                      className="border-b last:border-0"
                    >
                      <td className="border-r px-4 py-3 font-medium">
                        {row.width_mm}
                      </td>

                      {thicknessHeaders.map((thickness: number) => {
                        const available = row.thickness_mm?.includes(thickness);

                        return (
                          <td
                            key={`${row.width_mm}-${thickness}`}
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