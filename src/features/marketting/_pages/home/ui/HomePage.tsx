import Hero from "./Hero";
import ScrollImageSequence from "./CompanyProfile_ScrollImage/ScrollImageSequence";
import ProductCategories from "./ProductCategories";
import WhyChooseUs from "./WhyChooseUs";
import Stats from "./stats/Stats";
import ManufacturingHighlights from "./manufacturingHighlights/ManufacturingHighlights";
import CertificateAndRecognitaion from "./CertificateAndRecognitaion";
import ClientsTrustedBy from "./ClientsTrustedBy";
import GallerySection from "./GallerySection";
import CompanyIntro from "./CompanyProfile_ScrollImage/CompanyIntro";
import { Suspense } from "react";
import { Loader } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="hidden xl:block">
        <ScrollImageSequence />
      </div>
      <div className="xl:hidden block">
        <CompanyIntro />
      </div>
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
