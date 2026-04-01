import ProductDetailsPage from "@/features/marketting/_pages/products/ui/Slug/ProductDetails";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  return (
       <div className="bg-gray-100 pt-16">
      <ProductDetailsPage params={{ slug }} />
    </div>
  );
};

export default page;
