export const ssSheet = {
  product_name: "SS Sheet",
  slug: "ss-sheet",
  material: "Stainless Steel",
  detailType: "sheet",

  // Sheet → 201 Grade, 304 Grade, KSP 201 Grade

  grade: ["201 Grade", "304 Grade", "KSP 201 Grade"],
  variants: [
    {
      name: "Sheet 201",
      sizes: [
        { category: "MP Sheet", thickness: "0.4 - 3.0" },
        { category: "MAT Sheet", thickness: "0.4 - 5.5" },
        { category: "Kite MP Sheet", thickness: "0.4 - 6.0" },
        { category: "Perforated Sheet", thickness: "0.5 - 2.0" },
      ],
    },
    {
      name: "Sheet 304",
      sizes: [
        { category: "MP Sheet", thickness: "1.0 - 2.0" },
        { category: "MAT Sheet", thickness: "1.0 - 5.5" },
        { category: "Kite MP Sheet", thickness: "1.0 - 1.5" },
        { category: "Perforated Sheet", thickness: "1.0 - 3.0" },
        { category: "Kite MP Both Sheet", thickness: "0.8 - 1.5" },
      ],
    },
  ],
  images: [
    "/images/products/sheet/sheet1.jpg",
    "/images/products/sheet/sheet2.jpg",
    "/images/products/sheet/sheet3.jpg",
    "/images/products/sheet/sheet4.jpg",
  ],
};
