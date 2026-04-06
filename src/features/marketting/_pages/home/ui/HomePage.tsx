import dynamic from "next/dynamic";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";

const ScrollImageSequence = dynamic(
  () => import("./CompanyProfile_ScrollImage/ScrollImageSequence"),
  {
    loading: () => <div className="h-[400px]" />,
  },
);

const WhyChooseUs = dynamic(() => import("./WhyChooseUs"), {
  loading: () => <div className="h-[300px]" />,
});

const Stats = dynamic(() => import("./stats/Stats"), {
  loading: () => <div className="h-[200px]" />,
});

const ManufacturingHighlights = dynamic(
  () => import("./manufacturingHighlights/ManufacturingHighlights"),
  {
    loading: () => <div className="h-[300px]" />,
  },
);

const ClientsTrustedBy = dynamic(() => import("./ClientsTrustedBy"), {
  loading: () => <div className="h-[200px]" />,
});

const GallerySection = dynamic(() => import("./GallerySection"), {
  loading: () => <div className="h-[300px]" />,
});

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ScrollImageSequence />
      <ProductCategories />
      <WhyChooseUs />
      <Stats />
      <ManufacturingHighlights />
      <ClientsTrustedBy />
      <GallerySection />
    </div>
  );
};

export default HomePage;
