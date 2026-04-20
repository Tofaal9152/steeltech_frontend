import { notFound } from "next/navigation";
import { productDetailsBySlug } from "../../data";
import AngleDetails from "./angle-details";
import { DesignPipeDetails } from "./design-pipe-details";
import FlatBarDetails from "./flatbar-details";
import { HalfRoundPipeDetails } from "./half-round-pipe-details";
import { ProductDetailsHero } from "./product-details-hero";
import { RectangularBoxPipeDetails } from "./rectangular-box-pipe-details";
import RodDetails from "./rod-details";
import { RoundPipeDetails } from "./round-pipe-details";
import SchedulePipeDetails from "./schedulepipe-details";
import SheetDetails from "./sheet-details";
import { SpiralPipeDetails } from "./spiral-pipe-details";
import { SquareBoxPipeDetails } from "./square-box-pipe-details";
// import MixedPipeDetails from "./MixedPipeDetails";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProductDetailsPage({ params }: PageProps) {
  const product =
    productDetailsBySlug[params.slug as keyof typeof productDetailsBySlug];

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto container px-4 py-10">
      <ProductDetailsHero product={product} url={params.slug} />

      <div className="mt-10">
        {product.detailType === "round" && (
          <RoundPipeDetails product={product} />
        )}

        {product.detailType === "square-box-pipe" && (
          <SquareBoxPipeDetails product={product} />
        )}
        {product.detailType === "rectangular-box-pipe" && (
          <RectangularBoxPipeDetails product={product} />
        )}
        {product.detailType === "half-round" && (
          <HalfRoundPipeDetails product={product} />
        )}
        {product.detailType === "spiral" && (
          <SpiralPipeDetails product={product} />
        )}

        {product.detailType === "design" && (
          <DesignPipeDetails product={product} />
        )}
        {product.detailType === "sheet" && <SheetDetails product={product} />}
        {product.detailType === "rod" && <RodDetails product={product} />}
        {product.detailType === "angle" && <AngleDetails product={product} />}
        {product.detailType === "flat-bar" && (
          <FlatBarDetails product={product} />
        )}
        {product.detailType === "schedule-pipe" && (
          <SchedulePipeDetails product={product} />
        )}
        {/* {product.detailType === "mixed-pipe" && (
          <MixedPipeDetails product={product} />
        )} */}
      </div>
    </div>
  );
}
