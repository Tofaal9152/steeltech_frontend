export const ssDesignPipe = {
  product_name: "SS Design Pipe",
  slug: "ss-design-pipe",
  material: "Stainless Steel",
  detailType: "design",

  // Design Pipe → 201 Design Pipe, KSP 201 Design Pipe, USA 304 Design Pipe

  grade: ["201 Grade", "KSP 201 Grade", "USA 304 Grade"],
  shape: "decorative / design pipe",
  finish: ["mirror polish", "shiny finish"],
  description:
    "Decorative stainless steel pipes manufactured with advanced technology and high quality coils, designed for architectural and furniture applications.",
  features: [
    "Made by world famous coil and latest advanced technology",
    "Perfect mirror polish with shiny finish and long durability",
    "Ensured rock-solid thickness and size accuracy",
    "Best quality with affordable price",
    "Just-in-time delivery",
    "Laser printed branding",
  ],
  applications: [
    "Architectural decoration",
    "Furniture manufacturing",
    "Interior design",
    "Exterior decoration",
    "Decorative metal fabrication",
  ],
  variants: [
    {
      name: "201 Design Pipe",
      code: "design-201",
      model_start: "FCP -",
      dia: "1/2 - 4",
      thickness: "0.6 - 1.5",
    },
    {
      name: "KSP 201 Design Pipe",
      code: "design-ksp-201",
      model_start: "KSP -",
      dia: "1/2 - 4",
      thickness: "0.6 - 1.5",
    },
    {
      name: "USA 304 Design Pipe",
      code: "design-304",
      model_start: "FCP -",
      dia: "1/2 - 3",
      thickness: "1.0 - 1.5",
    },
  ],
  images: [
    "/images/products/design/design1.jpg",
    "/images/products/design/design2.jpg",
    "/images/products/design/design3.jpg",
    "/images/products/design/design4.jpg",
  ],
  source_files: {
    docx: ["SS Design Pipe.docx"],
  },
};
