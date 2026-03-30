"use client";
import { steeltechPipeCatalog } from "@/lib/productData";

const DEMO_IMAGE =
  "https://thumbs.dreamstime.com/b/stack-shiny-chrome-metal-pipes-industrial-background-texture-steel-tubes-seamless-silver-metallic-image-design-glossy-object-356005446.jpg";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const product:any = steeltechPipeCatalog.products.find(
    (p) => p.slug === params.slug,
  );

  if (!product) return <div>Product Not Found!</div>;

  // ইমেজ থাকলে সেগুলো ইউজ করবে, না থাকলে ডেমো ইমেজকে ৩ বার গ্রিড দেখানোর জন্য রাখা হয়েছে
  const displayImages =
    product.images.length > 0
      ? product.images
      : [DEMO_IMAGE, DEMO_IMAGE, DEMO_IMAGE];

  return (
    <div className="container mx-auto p-6 bg-white">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Images */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-md mb-4">
            <img
              src={DEMO_IMAGE}
              alt={product.product_name}
              className="w-full h-auto"
            />
          </div>

          {/* Image Grid for Multiple Images */}
          {displayImages.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {displayImages.map((img: string, idx: number) => (
                <div
                  key={idx}
                  className="border rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition"
                >
                  <img
                    src={img}
                    alt={`view-${idx}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-black mb-2">
            {product.product_name}
          </h1>
          <div className="flex gap-2 mb-4">
            {product.grade.map((g: string) => (
              <span
                key={g}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold"
              >
                Grade: {g}
              </span>
            ))}
            <span className="bg-[#C8B27A]/20 text-[#8B733B] px-3 py-1 rounded-full text-sm font-semibold uppercase">
              {product.finish[0]}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          <h3 className="text-xl font-bold mb-3 border-b-2 border-[#C8B27A] inline-block">
            Key Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
            {product.features?.map((f: string, i: number) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
