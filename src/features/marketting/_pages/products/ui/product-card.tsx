import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductListItem } from "../types/types";

type Props = {
  product: ProductListItem;
};

export function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-orange-50">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image available
          </div>
        )}

        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm backdrop-blur">
            {product.type}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-slate-900">
            {product.name}
          </h3>

          <p className="line-clamp-2 text-sm leading-6 text-slate-600">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.grade?.map((g) => (
            <span
              key={g}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
            >
              Grade {g}
            </span>
          ))}

          {product.finish?.slice(0, 2).map((f) => (
            <span
              key={f}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <div className="space-y-2 text-sm">
            {product.sizeSummary ? (
              <div className="flex items-start justify-between gap-3">
                <span className="font-medium text-slate-500">Size</span>
                <span className="text-right font-semibold text-slate-800">
                  {product.sizeSummary}
                </span>
              </div>
            ) : null}

            {product.thicknessSummary ? (
              <div className="flex items-start justify-between gap-3">
                <span className="font-medium text-slate-500">Thickness</span>
                <span className="text-right font-semibold text-slate-800">
                  {product.thicknessSummary}
                </span>
              </div>
            ) : null}

            {product.variantCount ? (
              <div className="flex items-start justify-between gap-3">
                <span className="font-medium text-slate-500">Variants</span>
                <span className="text-right font-semibold text-slate-800">
                  {product.variantCount}
                </span>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-1">
          <div className="text-sm text-slate-500">Explore specifications</div>

          <div className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-orange-700">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}