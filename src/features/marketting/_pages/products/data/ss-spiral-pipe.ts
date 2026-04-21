export const ssSpiralPipe = {
  product_name: "SS Spiral Pipe",
  slug: "ss-spiral-pipe",
  material: "Stainless Steel",
  detailType: "spiral",
  subcategories: ["spiral pipe"],
  grade: ["201", "KSP 201", "304"],
  finish: ["polished"],
  description:
    "Stainless steel spiral pipes of international standard quality, widely used for interior and exterior decoration and for manufacturing stainless steel furniture.",
  features: [
    "Decorative spiral design",
    "International standard manufacturing quality",
    "Strong stainless steel construction",
    "Suitable for decorative architectural use",
    "Ideal for furniture fabrication",
  ],
  specifications: {
    diameter_range: {
      mm: "15.9 mm to 50.8 mm",
      inch: "5/8 inch to 2 inch",
    },
    thickness_range: "0.6 mm to 1.5 mm",
    length: "3 meters (custom sizes available)",
  },
  applications: [
    "Interior decoration",
    "Exterior decoration",
    "Stainless steel furniture",
    "Architectural decorative structures",
  ],
  variants: [
    {
      name: "Standard Grade 201",
      code: "standard-g201",
      source_file: "Grade 201 Items Details for Website.docx",
      diameter_availability: [
        {
          diameter_inch: "3/4",
          diameter_mm: 19.05,
          thickness_mm: [1.0, 1.2, 1.5],
        },
        {
          diameter_inch: "5/8",
          diameter_mm: 15.9,
          thickness_mm: [0.8],
        },
        {
          diameter_inch: "1",
          diameter_mm: 25.4,
          thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
        },
        {
          diameter_inch: "1 1/4",
          diameter_mm: 32.0,
          thickness_mm: [1.0, 1.2],
        },
        {
          diameter_inch: "1 1/2",
          diameter_mm: 38.0,
          thickness_mm: [1.0, 1.2],
        },
        {
          diameter_inch: "2",
          diameter_mm: 50.8,
          thickness_mm: [0.8, 1.0, 1.2],
        },
      ],
    },
    {
      name: "Economy KSP Grade 201",
      code: "economy-ksp-g201",
      source_file: "Spiral Economy Grade201.xlsx",
      diameter_availability: [
        {
          diameter_inch: "3/4",
          diameter_mm: 19.05,
          thickness_mm: [0.4, 0.5, 0.6, 0.7, 1.0, 1.2],
        },
        {
          diameter_inch: "5/8",
          diameter_mm: 15.9,
          thickness_mm: [0.4, 0.5, 0.6],
        },
        {
          diameter_inch: "1",
          diameter_mm: 25.4,
          thickness_mm: [0.4, 0.5, 0.6, 0.8, 1.0],
        },
        {
          diameter_inch: "2",
          diameter_mm: 50.8,
          thickness_mm: [0.8, 1.0],
        },
      ],
    },
    {
      name: "USA Grade 304",
      code: "usa-g304",
      source_file: "Grade 304 Items Details for Website.docx",
      diameter_availability: [
        {
          diameter_inch: "1",
          diameter_mm: 25.4,
          thickness_mm: [1.2],
        },
        {
          diameter_inch: "1 1/2",
          diameter_mm: 38.0,
          thickness_mm: [1.2],
        },
      ],
    },
  ],
  images: [
    "/images/products/spiral/spiral1.jpg",
    "/images/products/spiral/spiral2.jpg",
    "/images/products/spiral/spiral3.jpg",
    "/images/products/spiral/spiral4.jpg",
  ],
  source_files: {
    docx: [
      "Grade 201 Items Details for Website.docx",
      "Grade 304 Items Details for Website.docx",
    ],
    excel: [],
  },
};
