import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ProductListItem } from "../types/types";

type Props = {
  product: ProductListItem;
  className?: string;
};

export function ProductCard({ product, className = "" }: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative block h-full overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] bg-slate-200 shadow-sm ${className}`}
    >
      <div className="relative h-[260px] overflow-hidden sm:h-[300px] md:h-[320px] lg:h-full">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 px-4 text-center text-sm text-slate-500">
            No image available
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10 transition duration-300 group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/30" />

        <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
          <Badge variant="secondary" className="text-[10px] sm:text-xs">
            {product.type}
          </Badge>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 text-white sm:p-5 md:p-6">
          <div className="transition-all duration-300 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            <h3 className="text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
              {product.name}
            </h3>

            {product.shortDescription ? (
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/85 sm:text-sm sm:leading-6">
                {product.shortDescription}
              </p>
            ) : null}

            <div className="mt-3 space-y-1.5 text-sm sm:mt-4 sm:space-y-2 sm:text-[15px] md:mt-5 md:text-base">
              {product.sizeSummary ? (
                <div className="flex items-start gap-2">
                  <span className="shrink-0 text-white/80">Size:</span>
                  <span className="font-bold">{product.sizeSummary}</span>
                </div>
              ) : null}

              {product.thicknessSummary ? (
                <div className="flex items-start gap-2">
                  <span className="shrink-0 text-white/80">Thickness:</span>
                  <span className="font-bold">
                    {product.thicknessSummary}
                  </span>
                </div>
              ) : null}

              {product.variantCount ? (
                <div className="flex items-start gap-2">
                  <span className="shrink-0 text-white/80">Variants:</span>
                  <span className="font-bold">{product.variantCount}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}