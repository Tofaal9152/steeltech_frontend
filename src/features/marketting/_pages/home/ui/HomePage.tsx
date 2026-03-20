import Hero from "./Hero";
import ScrollImageSequence from "./CompanyProfile_ScrollImage/ScrollImageSequence";
import ProductCategories from "./ProductCategories";
import WhyChooseUs from "./WhyChooseUs";
import Stats from "./stats/Stats";
import ManufacturingHighlights from "./ManufacturingHighlights";
import CertificateAndRecognitaion from "./CertificateAndRecognitaion";
import ClientsTrustedBy from "./ClientsTrustedBy";
import GallerySection from "./GallerySection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ScrollImageSequence />
      {/* <CompanyIntro /> */}
      <ProductCategories />
      <WhyChooseUs />
      <Stats />
      <ManufacturingHighlights />
      <CertificateAndRecognitaion />
      <ClientsTrustedBy />
      <GallerySection />
    </div>
  );
};

export default HomePage;
