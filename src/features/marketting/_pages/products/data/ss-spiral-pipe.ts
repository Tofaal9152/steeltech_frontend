export const ssSpiralPipe = {
  product_name: "SS Spiral Pipe",
  slug: "ss-spiral-pipe",
  material: "Stainless Steel",
  detailType: "spiral",
  subcategories: ["spiral pipe"],
  grade: ["201"],
  finish: ["polished"],
  description:
    "Stainless Steel Spiral Pipes of international standard quality generally used for interior and exterior decoration. These pipes are also widely used for manufacturing stainless steel furniture.",
  features: [
    "Decorative spiral design",
    "International standard manufacturing quality",
    "Strong stainless steel construction",
    "Suitable for decorative architectural use",
    "Ideal for furniture fabrication",
  ],
  specifications: {
    diameter_range: {
      mm: "16 mm to 76 mm",
      inch: "5/8 inch to 3 inch",
    },
    thickness_range: "0.8 mm to 1.5 mm",
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
      source_file: "spiral g 201.xlsx",
      diameter_availability: [
        {
          diameter_inch: "5/8",
          diameter_mm: 16,
          thickness_mm: [0.8, 1.0, 1.2],
        },
        {
          diameter_inch: "3/4",
          diameter_mm: 19,
          thickness_mm: [0.8, 1.0, 1.2],
        },
        {
          diameter_inch: "1",
          diameter_mm: 25,
          thickness_mm: [0.8, 1.0, 1.2, 1.5],
        },
        {
          diameter_inch: "1 1/4",
          diameter_mm: 32,
          thickness_mm: [0.8, 1.0, 1.2, 1.5],
        },
        {
          diameter_inch: "1 1/2",
          diameter_mm: 38,
          thickness_mm: [0.8, 1.0, 1.2, 1.5],
        },
        {
          diameter_inch: "2",
          diameter_mm: 50,
          thickness_mm: [0.8, 1.0, 1.2, 1.5],
        },
        {
          diameter_inch: "2 1/2",
          diameter_mm: 63,
          thickness_mm: [0.8, 1.0, 1.2, 1.5],
        },
        {
          diameter_inch: "3",
          diameter_mm: 76,
          thickness_mm: [0.8, 1.0, 1.2, 1.5],
        },
      ],
    },
    {
      name: "Economy Grade 201",
      code: "economy-g201",
      source_file: "Spiral Economy Grade201.xlsx",
      diameter_availability: [
        { diameter_inch: "5/8", diameter_mm: 16, thickness_mm: [0.8, 1.0] },
        { diameter_inch: "3/4", diameter_mm: 19, thickness_mm: [0.8, 1.0] },
        {
          diameter_inch: "1",
          diameter_mm: 25,
          thickness_mm: [0.8, 1.0, 1.2],
        },
        {
          diameter_inch: "1 1/4",
          diameter_mm: 32,
          thickness_mm: [0.8, 1.0, 1.2],
        },
        {
          diameter_inch: "1 1/2",
          diameter_mm: 38,
          thickness_mm: [0.8, 1.0, 1.2],
        },
        {
          diameter_inch: "2",
          diameter_mm: 50,
          thickness_mm: [0.8, 1.0, 1.2],
        },
        {
          diameter_inch: "2 1/2",
          diameter_mm: 63,
          thickness_mm: [0.8, 1.0, 1.2],
        },
        {
          diameter_inch: "3",
          diameter_mm: 76,
          thickness_mm: [0.8, 1.0, 1.2],
        },
      ],
    },
  ],
  images: ["/images/products/spiral/spiral1.jpg"],
  source_files: {
    docx: ["SS Spiral Pipe.docx"],
    excel: ["spiral g 201.xlsx", "Spiral Economy Grade201.xlsx"],
  },
};
