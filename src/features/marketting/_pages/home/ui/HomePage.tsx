import ClientsTrustedBy from "./ClientsTrustedBy";
import ScrollImageSequence from "./CompanyProfile_ScrollImage/ScrollImageSequence";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";
import WhyChooseUs from "./WhyChooseUs";
import ManufacturingHighlights from "./manufacturingHighlights/ManufacturingHighlights";
import Stats from "./stats/Stats";

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
