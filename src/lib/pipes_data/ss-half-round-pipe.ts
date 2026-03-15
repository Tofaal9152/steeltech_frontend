const SS_Half_Round_Pipe = {
  product_name: "SS Half Round Pipe",
  slug: "ss-half-round-pipe",
  category: "pipe",
  shape: "half round",
  material: "Stainless Steel",
  grade: ["201"],
  finish: ["polished"],
  description:
    "Stainless steel half round pipes used mainly for decorative and architectural applications such as railings, furniture and design fabrication.",
  variants: [
    {
      name: "Standard Grade 201",
      source_file: "half round g201.xlsx",
      sizes: [
        {
          width_mm: 12.7,
          thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0],
        },
        {
          width_mm: 19.05,
          thickness_mm: [0.6, 0.7, 0.8, 1.0],
        },
        {
          width_mm: 25.4,
          thickness_mm: [0.7, 0.8, 1.0],
        },
        {
          width_mm: 31.8,
          thickness_mm: [0.8, 1.0],
        },
        {
          width_mm: 38.1,
          thickness_mm: [0.8, 1.0],
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
  source_files: {
    excel: ["half round g201.xlsx"],
  },
  images: [],
  notes: [
    "Half round pipes are mainly used for decorative and railing purposes.",
    "Thickness availability depends on width size.",
  ],
};
