import { notFound } from "next/navigation";
import { productDetailsBySlug } from "../../data";
import { BoxFamilyDetails } from "./box-family-details";
import { DesignPipeDetails } from "./design-pipe-details";
import { HalfRoundPipeDetails } from "./half-round-pipe-details";
import { ProductDetailsHero } from "./product-details-hero";
import { RoundPipeDetails } from "./round-pipe-details";
import { SpiralPipeDetails } from "./spiral-pipe-details";
import { BoxPipeDetails } from "./box-pipe-details";
import SchedulePipeDetails from "./schedulepipe-details";
import SheetDetails from "./sheet-details";
import RodDetails from "./rod-details";
import AngleDetails from "./angle-details";
import FlatBarDetails from "./flarbar-details";

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
      <ProductDetailsHero product={product} />

      <div className="mt-10">
        {product.detailType === "round" && (
          <RoundPipeDetails product={product} />
        )}

        {product.detailType === "spiral" && (
          <SpiralPipeDetails product={product} />
        )}

        {product.detailType === "box-family" && (
          <BoxFamilyDetails product={product} />
        )}

        {product.detailType === "design" && (
          <DesignPipeDetails product={product} />
        )}
        {product.detailType === "box-pipe" && (
          <BoxPipeDetails product={product} />
        )}

        {product.detailType === "half-round" && (
          <HalfRoundPipeDetails product={product} />
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
      </div>
    </div>
  );
}
