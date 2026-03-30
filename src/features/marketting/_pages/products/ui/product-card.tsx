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
      className={`group relative block h-full overflow-hidden rounded-[28px] bg-slate-200 shadow-sm ${className}`}
    >
      <div className="relative h-[320px] overflow-hidden md:h-full">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-500">
            No image available
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10 transition duration-300 group-hover:from-black/75 group-hover:via-black/35 group-hover:to-black/40" />

        <div className="absolute right-4 top-4 z-10">
          <Badge variant={"secondary"}>
            {product.type}
          </Badge>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 text-white">
          <div className="transition-all duration-300 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <h3 className="text-2xl font-bold tracking-tight">
              {product.name}
            </h3>

            {product.shortDescription ? (
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/85">
                {product.shortDescription}
              </p>
            ) : null}

            <div className="mt-5 space-y-2 text-base">
              {product.sizeSummary ? (
                <div className="flex items-center gap-2">
                  <span className="text-white/80">Size:</span>
                  <span className="font-bold">{product.sizeSummary}</span>
                </div>
              ) : null}

              {product.thicknessSummary ? (
                <div className="flex items-center gap-2">
                  <span className="text-white/80">Thickness:</span>
                  <span className="font-bold">{product.thicknessSummary}</span>
                </div>
              ) : null}

              {product.variantCount ? (
                <div className="flex items-center gap-2">
                  <span className="text-white/80">Variants:</span>
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