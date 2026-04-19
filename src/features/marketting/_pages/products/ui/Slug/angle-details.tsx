export default function AngleDetails({ product }: any) {
  return (
    <div className="space-y-8">
      {product.variants?.map((variant: any, index: number) => (
        <section
          key={`${variant.name}-${index}`}
          className="rounded-2xl border bg-white p-6"
        >
          <div className="mb-5">
            <h2 className="text-xl font-semibold">{variant.name}</h2>
          </div>

          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b bg-orange-50">
                  <th className="border-r px-4 py-3 text-left font-semibold">
                    SL
                  </th>
                  <th className="border-r px-4 py-3 text-left font-semibold">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Thickness
                  </th>
                </tr>
              </thead>

              <tbody>
                {variant.sizes?.map((row: any, rowIndex: number) => (
                  <tr
                    key={`${variant.name}-${row.category}-${rowIndex}`}
                    className="border-b last:border-0 hover:bg-orange-50/40"
                  >
                    <td className="border-r px-4 py-3 font-medium">
                      {rowIndex + 1}
                    </td>
                    <td className="border-r px-4 py-3 font-medium">
                      {row.category}
                    </td>
                    <td className="px-4 py-3">{row.thickness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}