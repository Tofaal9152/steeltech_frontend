"use client";
import dynamic from "next/dynamic";
import Hero from "./Hero";

const ScrollImageSequence = dynamic(() => import("./ScrollImageSequence"), {
  ssr: false,
});
const CompanyIntro = dynamic(() => import("./CompanyIntro"), {
  ssr: false,
});
const ProductCategories = dynamic(() => import("./ProductCategories"));
const WhyChooseUs = dynamic(() => import("./WhyChooseUs"), {
  ssr: false,
});
const Stats = dynamic(() => import("./stats/Stats"), {
  ssr: false,
});
const ManufacturingHighlights = dynamic(
  () => import("./ManufacturingHighlights"),
  {
    ssr: false,
  },
);
const CertificateAndRecognitaion = dynamic(
  () => import("./CertificateAndRecognitaion"),
  {
    ssr: false,
  },
);
const ClientsTrustedBy = dynamic(() => import("./ClientsTrustedBy"), {
  ssr: false,
});
const GallerySection = dynamic(() => import("./GallerySection"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div >
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
