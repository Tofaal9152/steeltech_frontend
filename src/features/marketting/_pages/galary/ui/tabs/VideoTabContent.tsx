import GalleryMasonry from "../GalleryMasonry";
import { videoGalleryData } from "../../data/gallery-data";

const VideoTabContent = () => {
  return <GalleryMasonry items={videoGalleryData} />;
};

export default VideoTabContent;