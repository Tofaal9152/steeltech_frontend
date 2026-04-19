export default function MixedPipeDetails({ product }: any) {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">All Category Mixed</h2>

        <div className="flex flex-wrap gap-2">
          {product.categories?.map((item: string) => (
            <span
              key={item}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}