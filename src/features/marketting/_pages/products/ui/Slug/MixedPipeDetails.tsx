type MixedPipeDetailsProps = {
  product: any;
};

export default function MixedPipeDetails({
  product,
}: MixedPipeDetailsProps) {
  return (
    <div className="space-y-8">
      {product.categories?.length ? (
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Included Pipe Types</h2>

          <div className="flex flex-wrap gap-2">
            {product.categories.map((item: string) => (
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

      {product.selling_info ? (
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Selling Information</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Selling Unit
              </p>
              <p className="mt-2 font-semibold">
                {product.selling_info.selling_unit}
              </p>
            </div>

            <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Selling Method
              </p>
              <p className="mt-2 font-semibold">
                {product.selling_info.selling_method}
              </p>
            </div>

            <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Stock Type
              </p>
              <p className="mt-2 font-semibold">
                {product.selling_info.stock_type}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {product.example_lot?.length ? (
        <section className="rounded-2xl border bg-white p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Example Lot</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Example of how mixed pipe quantity may be grouped.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b bg-orange-50">
                  <th className="border-r px-4 py-3 text-left font-semibold">
                    Pipe Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Quantity (pcs)
                  </th>
                </tr>
              </thead>

              <tbody>
                {product.example_lot.map((row: any) => (
                  <tr
                    key={row.type}
                    className="border-b last:border-0 hover:bg-orange-50/40"
                  >
                    <td className="border-r px-4 py-3 font-medium">
                      {row.type}
                    </td>
                    <td className="px-4 py-3">{row.pcs}</td>
                  </tr>
                ))}

                <tr className="bg-orange-50/60">
                  <td className="border-r px-4 py-3 font-semibold">
                    Total Pieces
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    {product.total_example_pcs}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Final sale is calculated by total weight in kilograms, not by total
            piece count.
          </p>
        </section>
      ) : null}

      {/* {product.notes?.length ? (
        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">Important Notes</h2>

          <div className="space-y-3">
            {product.notes.map((note: string) => (
              <div
                key={note}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                {note}
              </div>
            ))}
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
    </div>
  );
}