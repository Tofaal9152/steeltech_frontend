import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ProductListItem } from "../types/types";
import Image from "next/image";

type Props = {
  product: ProductListItem;
  className?: string;
};

export function ProductCard({ product, className = "" }: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative block h-full overflow-hidden rounded-[20px] bg-slate-200 shadow-sm sm:rounded-[24px] lg:rounded-[28px] ${className}`}
    >
      <div className="relative h-[260px] overflow-hidden sm:h-[300px] md:h-[320px] lg:h-full">
        {product.image ? (
          <Image
            width={400}
            height={300}
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            loading="lazy"
            unoptimized={true}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 px-4 text-center text-sm text-slate-500">
            No image available
          </div>
        )}

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/35 to-transparent lg:bg-none lg:opacity-0 lg:transition lg:duration-300 lg:group-hover:bg-linear-to-t lg:group-hover:from-black/75 lg:group-hover:via-black/35 lg:group-hover:to-transparent lg:group-hover:opacity-100" />

        <div className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
          <Badge variant="secondary" className="text-[10px] sm:text-xs">
            {product.type}
          </Badge>
        </div>

        <div className="absolute inset-0 z-30 flex flex-col justify-end p-3 text-white sm:p-5 md:p-6">
          <div className="translate-y-0 opacity-100 transition-all duration-300 lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            <h3 className="max-w-[85%] text-base font-bold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] lg:drop-shadow-none sm:text-xl md:text-2xl">
              {product.name}
            </h3>

            {product.shortDescription ? (
              <p className="mt-1 max-w-[92%] line-clamp-2 text-[11px] leading-4 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] lg:drop-shadow-none sm:mt-2 sm:text-sm sm:leading-6 sm:text-white/85">
                {product.shortDescription}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}