type DesignPipeDetailsProps = {
  product: any;
};

export function DesignPipeDetails({ product }: DesignPipeDetailsProps) {
  return (
    <div className="space-y-8">
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

      {product.variants?.length ? (
        <section className="rounded-2xl border bg-white p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Design Pipe Specifications</h2>
          </div>

          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b bg-orange-50">
                  <th className="border-r px-4 py-3 text-left font-semibold">
                    Design Pipe
                  </th>
                  <th className="border-r px-4 py-3 text-left font-semibold">
                    Model Start
                  </th>
                  <th className="border-r px-4 py-3 text-left font-semibold">
                    DIA
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Thickness
                  </th>
                </tr>
              </thead>

              <tbody>
                {product.variants.map((variant: any, index: number) => (
                  <tr
                    key={`${variant.code || variant.name}-${index}`}
                    className="border-b last:border-0 hover:bg-orange-50/40"
                  >
                    <td className="border-r px-4 py-3 font-medium">
                      {variant.name}
                    </td>
                    <td className="border-r px-4 py-3">
                      {variant.model_start}
                    </td>
                    <td className="border-r px-4 py-3">{variant.dia}</td>
                    <td className="px-4 py-3">{variant.thickness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </div>
  );
}