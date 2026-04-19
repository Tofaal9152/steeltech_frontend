export type ProductListItem = {
  slug: string;
  name: string;
  shortDescription: string;
  material: string;
  grade: string[];
  finish: string[];
  type: string;
  image?: string;
  variantCount?: number;
  sizeSummary?: string;
  thicknessSummary?: string;
  applicationSummary?: string[];
  detailType:
    | "round"
    | "spiral"
    | "box-family"
    | "box-pipe"
    | "design"
    | "half-round"
    | "sheet"
    | "rod"
    | "angle"
    | "flat-bar"
    | "schedule-pipe"
    | "mixed-pipe";
};
