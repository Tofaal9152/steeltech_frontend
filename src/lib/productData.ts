export const steeltechPipeCatalog = {
  catalog_name: "Steeltech SS Pipes",
  version: "1.0",
  category: "pipe",
  material: "Stainless Steel",
  products: [
    {
      product_name: "SS Round Pipe",
      slug: "ss-round-pipe",
      subcategories: ["round pipe"],
      grade: ["201"],
      finish: ["mirror polish", "shiny finish"],
      description:
        "SS Round Pipes made by world famous coil and latest advanced technology with mirror polish finish, ensured thickness and size, affordable price, just-in-time delivery, and laser print branding.",
      features: [
        "Made by world famous coil and latest advanced technology",
        "Perfect mirror polish with shiny finish and longevity",
        "Ensured rock-solid thickness and size",
        "Best quality and affordable price",
        "Just in time delivery",
        "Laser print",
      ],
      sizes_master: [
        { diameter_inch: "3/8", diameter_mm: 9.5 },
        { diameter_inch: "1/2", diameter_mm: 12.7 },
        { diameter_inch: "5/8", diameter_mm: 15.9 },
        { diameter_inch: "3/4", diameter_mm: 19.05 },
        { diameter_inch: "7/8", diameter_mm: 22.23 },
        { diameter_inch: "1", diameter_mm: 25.4 },
        { diameter_inch: "1 1/4", diameter_mm: 32.0 },
        { diameter_inch: "1 1/2", diameter_mm: 38.0 },
        { diameter_inch: "2", diameter_mm: 50.8 },
        { diameter_inch: "2 1/4", diameter_mm: 57.15 },
        { diameter_inch: "2 1/2", diameter_mm: 63.5 },
        { diameter_inch: "3", diameter_mm: 76.2 },
        { diameter_inch: "4", diameter_mm: 101.6 },
      ],
      variants: [
        {
          name: "Standard Grade 201",
          code: "standard-g201",
          source_file: "Round pipe thickneess g-201.xlsx",
          diameter_availability: [
            {
              diameter_inch: "3/8",
              diameter_mm: 9.5,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
            },
            {
              diameter_inch: "1/2",
              diameter_mm: 12.7,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "5/8",
              diameter_mm: 15.9,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
            },
            {
              diameter_inch: "3/4",
              diameter_mm: 19.05,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "7/8",
              diameter_mm: 22.23,
              thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "1",
              diameter_mm: 25.4,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5],
            },
            {
              diameter_inch: "1 1/4",
              diameter_mm: 32.0,
              thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0],
            },
            {
              diameter_inch: "1 1/2",
              diameter_mm: 38.0,
              thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0],
            },
            {
              diameter_inch: "2",
              diameter_mm: 50.8,
              thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0],
            },
            { diameter_inch: "2 1/4", diameter_mm: 57.15, thickness_mm: [1.2] },
            {
              diameter_inch: "2 1/2",
              diameter_mm: 63.5,
              thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0],
            },
            {
              diameter_inch: "3",
              diameter_mm: 76.2,
              thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0],
            },
            {
              diameter_inch: "4",
              diameter_mm: 101.6,
              thickness_mm: [1.0, 1.2, 1.5, 2.0, 2.5, 3.0],
            },
          ],
        },
        {
          name: "Economy KSP Grade 201",
          code: "economy-ksp-g201",
          source_file: "Round Pipe  Economoy KSP Grade201.xlsx",
          diameter_availability: [
            {
              diameter_inch: "3/8",
              diameter_mm: 9.5,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2],
            },
            {
              diameter_inch: "1/2",
              diameter_mm: 12.7,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
            },
            {
              diameter_inch: "5/8",
              diameter_mm: 15.9,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
            },
            {
              diameter_inch: "3/4",
              diameter_mm: 19.05,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "1",
              diameter_mm: 25.4,
              thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "1 1/4",
              diameter_mm: 32.0,
              thickness_mm: [0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "1 1/2",
              diameter_mm: 38.0,
              thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "2",
              diameter_mm: 50.8,
              thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "2 1/2",
              diameter_mm: 63.5,
              thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "3",
              diameter_mm: 76.2,
              thickness_mm: [0.8, 1.0, 1.2, 1.5, 2.0],
            },
            {
              diameter_inch: "4",
              diameter_mm: 101.6,
              thickness_mm: [1.0, 1.2, 1.5, 2.0],
            },
          ],
        },
      ],
      applications: [],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Polyethylene_Pipe_lengths.jpg/500px-Polyethylene_Pipe_lengths.jpg",
        "https://img.freepik.com/free-vector/set-realistic-cylindrical-steel-pipe-background-construction-plumbing_1017-58545.jpg?semt=ais_hybrid&w=740&q=80",
      ],
      source_files: {
        docx: ["SS Round Pipes.docx"],
        excel: [
          "Round pipe thickneess g-201.xlsx",
          "Round Pipe  Economoy KSP Grade201.xlsx",
        ],
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Polyethylene_Pipe_lengths.jpg/500px-Polyethylene_Pipe_lengths.jpg",
          "https://img.freepik.com/free-vector/set-realistic-cylindrical-steel-pipe-background-construction-plumbing_1017-58545.jpg?semt=ais_hybrid&w=740&q=80",
        ],
      },
    },
    {
      product_name: "SS Spiral Pipe",
      slug: "ss-spiral-pipe",
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
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Polyethylene_Pipe_lengths.jpg/500px-Polyethylene_Pipe_lengths.jpg",
        "https://img.freepik.com/free-vector/set-realistic-cylindrical-steel-pipe-background-construction-plumbing_1017-58545.jpg?semt=ais_hybrid&w=740&q=80",
      ],
      source_files: {
        docx: ["SS Spiral Pipe.docx"],
        excel: ["spiral g 201.xlsx", "Spiral Economy Grade201.xlsx"],
      },
    },
    {
      product_name: "SS Box / Square / Rectangular Pipes",
      slug: "ss-box-square-rectangular-pipes",
      grade: ["201"],
      finish: ["mirror polish", "shiny finish"],
      description:
        "Stainless steel box, square and rectangular pipe family with standard and economy KSP options.",
      variants: [
        {
          variant: "Standard",
          products: {
            square_box: [
              { size: "3/8x3/8", thickness_mm: [0.7, 0.8, 1.0, 1.2] },
              {
                size: "1/2x1/2",
                thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
              },
              { size: "5/8x5/8", thickness_mm: [0.8, 1.0, 1.2, 1.5] },
              {
                size: "3/4x3/4",
                thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
              },
              {
                size: "1x1",
                thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
              },
              {
                size: "1.25x1.25",
                thickness_mm: [0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
              },
              {
                size: "1.5x1.5",
                thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
              },
              {
                size: "2x2",
                thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2, 1.5, 2.0],
              },
              { size: "2.5x2.5", thickness_mm: [0.8, 1.0, 1.2, 1.5] },
              { size: "3x3", thickness_mm: [0.8, 1.0, 1.2, 1.5] },
            ],
            rectangular: [
              { size: "1/2x3/4", thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1/2x1", thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1/2x1.5", thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1/2x2", thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1/2x2.5", thickness_mm: [0.8, 1.0, 1.2, 1.5] },
              { size: "5/8x2.5", thickness_mm: [1.0, 1.2] },
              { size: "3/4x1.5", thickness_mm: [1.0, 1.2, 1.5] },
              { size: "1x1.5", thickness_mm: [0.8, 1.0, 1.2, 1.5, 2.0] },
              {
                size: "1x2",
                thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
              },
              { size: "1x2.5", thickness_mm: [1.2, 1.5] },
              { size: "1.5x2", thickness_mm: [1.0, 1.2, 1.5, 2.0] },
              { size: "1.5x2.5", thickness_mm: [1.2, 1.5, 2.0] },
              { size: "1x3", thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1.25x3", thickness_mm: [1.2, 1.5] },
              { size: "2x3", thickness_mm: [1.2, 1.5, 2.0] },
              { size: "2x4", thickness_mm: [1.2, 1.5, 2.0] },
            ],
          },
        },
        {
          variant: "Economy KSP",
          products: {
            square_box: [
              { size: "3/8x3/8", thickness_mm: [0.6, 0.7, 0.8, 1.0] },
              {
                size: "1/2x1/2",
                thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2],
              },
              { size: "5/8x5/8", thickness_mm: [0.8, 1.0, 1.2, 1.5] },
              {
                size: "3/4x3/4",
                thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
              },
              {
                size: "1x1",
                thickness_mm: [0.4, 0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
              },
              { size: "1.25x1.25", thickness_mm: [0.7, 0.8, 1.0, 1.2, 1.5] },
              { size: "1.5x1.5", thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2, 1.5] },
              { size: "2x2", thickness_mm: [0.6, 0.7, 0.8, 1.0, 1.2, 1.5] },
              { size: "2.5x2.5", thickness_mm: [1.0, 1.2, 1.5] },
              { size: "3x3", thickness_mm: [1.0, 1.2, 1.5] },
            ],
            rectangular: [
              { size: "1/2x3/4", thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1/2x1", thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1/2x1.5", thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1/2x2", thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2] },
              { size: "1/2x2.5", thickness_mm: [0.8, 1.0] },
              { size: "3/4x1.5", thickness_mm: [1.0, 1.2, 1.5] },
              { size: "1x1.5", thickness_mm: [0.8, 1.0, 1.2, 1.5, 2.0] },
              {
                size: "1x2",
                thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0, 1.2, 1.5],
              },
              { size: "1x2.5", thickness_mm: [1.2, 1.5] },
              { size: "1.5x2", thickness_mm: [1.0, 1.2, 1.5, 2.0] },
              { size: "1.5x2.5", thickness_mm: [2.0] },
              { size: "1x3", thickness_mm: [0.7, 0.8, 1.0, 2.0] },
              { size: "1.25x3", thickness_mm: [2.0] },
              { size: "2x3", thickness_mm: [1.2, 1.5, 2.0] },
              { size: "2x4", thickness_mm: [1.2, 1.5, 2.0] },
            ],
          },
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
    },
    {
      product_name: "SS Design Pipe",
      slug: "ss-design-pipe",
      grade: ["201"],
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
          type: "Design Patterns",
          note: "Multiple design patterns available (based on image catalog in design pipe folder)",
        },
      ],
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Polyethylene_Pipe_lengths.jpg/500px-Polyethylene_Pipe_lengths.jpg",
        "https://img.freepik.com/free-vector/set-realistic-cylindrical-steel-pipe-background-construction-plumbing_1017-58545.jpg?semt=ais_hybrid&w=740&q=80",
      ],
      source_files: {
        docx: ["SS Design Pipe.docx"],
      },
    },
    {
      product_name: "SS Half Round Pipe",
      slug: "ss-half-round-pipe",
      grade: ["201"],
      shape: "half round",
      finish: ["polished"],
      description:
        "Stainless steel half round pipes used mainly for decorative and architectural applications such as railings, furniture and design fabrication.",
      variants: [
        {
          name: "Standard Grade 201",
          source_file: "half round g201.xlsx",
          sizes: [
            { width_mm: 12.7, thickness_mm: [0.5, 0.6, 0.7, 0.8, 1.0] },
            { width_mm: 19.05, thickness_mm: [0.6, 0.7, 0.8, 1.0] },
            { width_mm: 25.4, thickness_mm: [0.7, 0.8, 1.0] },
            { width_mm: 31.8, thickness_mm: [0.8, 1.0] },
            { width_mm: 38.1, thickness_mm: [0.8, 1.0] },
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Polyethylene_Pipe_lengths.jpg/500px-Polyethylene_Pipe_lengths.jpg",
        "https://img.freepik.com/free-vector/set-realistic-cylindrical-steel-pipe-background-construction-plumbing_1017-58545.jpg?semt=ais_hybrid&w=740&q=80",
      ],
      source_files: {
        excel: ["half round g201.xlsx"],
      },
    },
  ],
};
