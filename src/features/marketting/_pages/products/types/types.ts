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
    | "half-round";
};

export type ProductDetailsBase = {
  product_name: string;
  slug: string;
  material?: string;
  grade?: string[];
  finish?: string[];
  description?: string;
  features?: string[];
  applications?: string[];
  images?: string[];
  detailType:
    | "round"
    | "spiral"
    | "box-family"
    | "design"
    | "half-round"
    | "box-pipe";
  source_files?: {
    docx?: string[];
    excel?: string[];
    images?: string[];
  };
};
