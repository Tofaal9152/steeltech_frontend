export default function SchedulePipeDetails({ product }: any) {
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
                    DIA
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Schedule
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b last:border-0 hover:bg-orange-50/40">
                  <td className="border-r px-4 py-3 font-medium">
                    {index + 1}
                  </td>
                  <td className="border-r px-4 py-3 font-medium">
                    {variant.dia}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {variant.schedule?.map((item: string, i: number) => (
                        <span
                          key={`${item}-${i}`}
                          className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}