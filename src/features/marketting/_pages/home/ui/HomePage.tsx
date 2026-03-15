import CompanyIntro from "./CompanyIntro";
import CompanyTrust from "./CompanyTrust";
import Footer from "./Footer";
import Hero from "./Hero";
import ManufacturingHighlights from "./ManufacturingHighlights";
import MediaSection from "./MediaSection";
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
      <CompanyTrust />
      <MediaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
