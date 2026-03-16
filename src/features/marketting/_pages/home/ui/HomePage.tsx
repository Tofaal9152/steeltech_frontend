import CertificateAndRecognitaion from "./CertificateAndRecognitaion";
import ClientsTrustedBy from "./ClientsTrustedBy";
import CompanyIntro from "./CompanyIntro";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import ManufacturingHighlights from "./ManufacturingHighlights";
import ProductCategories from "./ProductCategories";
import ScrollImageSequence from "./ScrollImageSequence";
import Stats from "./Stats";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ScrollImageSequence />
      <CompanyIntro />
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
