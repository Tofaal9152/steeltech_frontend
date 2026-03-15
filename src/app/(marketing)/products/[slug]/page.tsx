import ProductDetailsPage from "@/features/marketting/_pages/products/ui/Slug/ProductDetails";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  return (
    <div>
      <ProductDetailsPage params={{ slug }} />
    </div>
  );
};

export default page;
