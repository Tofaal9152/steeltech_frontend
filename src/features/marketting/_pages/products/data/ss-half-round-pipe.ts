export const ssHalfRoundPipe = {
  product_name: "SS Half Round Pipe",
  slug: "ss-half-round-pipe",
  material: "Stainless Steel",
  detailType: "half-round",
  grade: ["201", "304"],
  shape: "half round",
  finish: ["polished"],
  description:
    "Stainless steel half round pipes used mainly for decorative and architectural applications such as railings, furniture, and design fabrication.",
  variants: [
    {
      name: "Standard Grade 201",
      code: "standard-g201",
      source_file: "Grade 201 Items Details for Website.docx",
      diameter_availability: [
        {
          diameter_inch: "2 1/2",
          diameter_mm: 63.5,
          thickness_mm: [0.8, 1.0, 1.2, 1.5],
        },
      ],
    },
    {
      name: "USA Grade 304",
      code: "usa-g304",
      source_file: "Grade 304 Items Details for Website.docx",
      diameter_availability: [
        {
          diameter_inch: "2 1/2",
          diameter_mm: 63.5,
          thickness_mm: [0.8, 1.0, 1.2, 1.5],
        },
      ],
    },
  ],
  applications: [
    "Decorative railings",
    "Furniture design",
    "Architectural fabrication",
    "Interior decoration",
  ],
  images: [
    "/images/products/half-round/half-round1.jpg",
    "/images/products/half-round/half-round2.jpg",
    "/images/products/half-round/half-round3.jpg",
    "/images/products/half-round/half-round4.jpg",
  ],
  source_files: {
    docx: [
      "Grade 201 Items Details for Website.docx",
      "Grade 304 Items Details for Website.docx",
    ],
    excel: [],
  },
};