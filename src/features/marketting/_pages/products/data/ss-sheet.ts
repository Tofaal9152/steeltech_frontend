export const ssSheet = {
  product_name: "SS Sheet",
  slug: "ss-sheet",
  material: "Stainless Steel",
  detailType: "sheet",
  grade: ["201 Grade", "304 Grade", "KSP 201 Grade"],
  finish: ["mp", "mat", "kite", "perforated"],
  description:
    "Stainless steel sheets are available in multiple grades and finishes including MP, MAT, Kite, and Perforated options with different thickness ranges.",
  variants: [
    {
      name: "Sheet 201 Grade",
      code: "sheet-201",
      sizes: [
        { category: "MP Sheet", thickness: "0.4 – 3.0" },
        { category: "MAT Sheet", thickness: "0.4 – 5.5" },
        { category: "Kite Sheet", thickness: "0.8 – 6.0" },
        { category: "MP Kite Sheet", thickness: "0.4 – 6.0" },
        { category: "Kite MP Both Sheet", thickness: "0.8 – 1.5" },
        { category: "Perforated Sheet", thickness: "0.5 – 2.0" },
      ],
    },
    {
      name: "Sheet KSP 201 Grade",
      code: "sheet-ksp-201",
      sizes: [
        { category: "KSP MP Sheet", thickness: "0.4 – 3.0" },
        { category: "KSP MAT Sheet", thickness: "0.4 – 1.5" },
      ],
    },
    {
      name: "Sheet 304 Grade",
      code: "sheet-304",
      sizes: [
        { category: "MP Sheet", thickness: "1.0 – 2.0" },
        { category: "MAT Sheet", thickness: "1.0 – 5.5" },
        { category: "Kite MP Sheet", thickness: "1.0 – 1.5" },
        { category: "Kite MP Both Sheet", thickness: "0.8 – 1.5" },
        { category: "Perforated Sheet", thickness: "1.0 – 3.0" },
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
