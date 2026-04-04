import GalleryMasonry from "../GalleryMasonry";
import { videoGalleryData } from "../../data/gallery-data";

const VideoTabContent = () => {
  return <GalleryMasonry items={videoGalleryData as any} />;
};

export default VideoTabContent;