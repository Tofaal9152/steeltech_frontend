const sspipies = {
  product_family: "SS Box Pipes",
  category: "pipe",
  material: "Stainless Steel",
  grade: ["201"],
  finish: ["mirror polish", "shiny finish"],
  products: [
    {
      product_name: "SS Rectangular Box Pipe",
      slug: "ss-rectangular-box-pipe",
      shape: "rectangular",
      description:
        "Superior quality rectangular stainless steel pipes which are bendable enough to be curved into any required shape for multipurpose industrial and decorative uses.",
      size_range: {
        min: "12.7 x 19.05 mm (1/2 x 3/4 inch)",
        max: "50.8 x 101.6 mm (2 x 4 inch)",
      },
      sizes: [
        { inch: "1/2 x 3/4", mm: "12.7 x 19.05" },
        { inch: "1/2 x 1", mm: "12.7 x 25.4" },
        { inch: "1/2 x 1 1/2", mm: "12.7 x 38" },
        { inch: "1/2 x 2", mm: "12.7 x 50.8" },
        { inch: "1/2 x 2 1/2", mm: "12.7 x 63.5" },
        { inch: "5/8 x 2 1/2", mm: "15.9 x 36.5" },
        { inch: "1 x 1 1/2", mm: "25.4 x 38" },
        { inch: "1 x 2", mm: "25.4 x 50.8" },
        { inch: "1 x 3", mm: "25.4 x 76.2" },
        { inch: "1 1/2 x 2", mm: "38 x 50.8" },
        { inch: "2 x 3", mm: "50.8 x 76.2" },
        { inch: "2 x 4", mm: "50.8 x 101.6" },
      ],
      applications: [
        "Main gates",
        "Industrial trolleys",
        "Medical equipment",
        "Moving stairs",
        "Office decoration",
      ],
    },
    {
      product_name: "SS Square Box Pipe",
      slug: "ss-square-box-pipe",
      shape: "square",
      description:
        "Mirror polished stainless steel square pipes with accurate measurement used for balconies, stairs, furniture manufacturing and interior or exterior decoration.",
      sizes: [
        { inch: "3/8 x 3/8", mm: "9.5 x 9.5" },
        { inch: "1/2 x 1/2", mm: "12.7 x 12.7" },
        { inch: "5/8 x 5/8", mm: "15.9 x 15.9" },
        { inch: "3/4 x 3/4", mm: "19.05 x 19.05" },
        { inch: "1 x 1", mm: "25.4 x 25.4" },
        { inch: "1 1/4 x 1 1/4", mm: "32 x 32" },
        { inch: "1 1/2 x 1 1/2", mm: "38 x 38" },
        { inch: "2 x 2", mm: "50.8 x 50.8" },
        { inch: "2 1/2 x 2 1/2", mm: "63.5 x 63.5" },
        { inch: "3 x 3", mm: "76.2 x 76.2" },
        { inch: "4 x 4", mm: "101.6 x 101.6" },
      ],
      applications: [
        "Balcony railings",
        "Stair railings",
        "Furniture manufacturing",
        "Interior decoration",
        "Exterior decoration",
      ],
    },
  ],
  variants: [
    {
      name: "Standard Grade 201",
      source_file: "box & rectangular pipe.xlsx",
    },
    {
      name: "Rectangular Economy KSP Grade 201",
      source_file: "RectangularPipe_Economy_KSP_Grade_201.xlsx",
    },
    {
      name: "Square & Box KSP Grade 201",
      source_file: "Square & box pipe ksp.xlsx",
    },
  ],
  source_files: {
    docx: ["SS Rectangular Box Pipe.docx", "SS Square Box Pipe.docx"],
    excel: [
      "box & rectangular pipe.xlsx",
      "rectangular pipe.xlsx",
      "RectangularPipe_Economy_KSP_Grade_201.xlsx",
      "Square & box pipe ksp.xlsx",
    ],
  },
};
