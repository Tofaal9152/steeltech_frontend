import GalleryMasonry from "../GalleryMasonry";
import { factoryGalleryData } from "../../data/gallery-data";

const FactoryTabContent = () => {
  return <GalleryMasonry items={factoryGalleryData} />;
};

export default FactoryTabContent;