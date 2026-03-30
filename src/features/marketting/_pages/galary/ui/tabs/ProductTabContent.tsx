import GalleryMasonry from "../GalleryMasonry";
import { productGalleryData } from "../../data/gallery-data";

const ProductTabContent = () => {
  return <GalleryMasonry items={productGalleryData} />;
};

export default ProductTabContent;