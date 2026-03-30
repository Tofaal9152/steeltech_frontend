import GalleryMasonry from "../GalleryMasonry";
import { eventGalleryData } from "../../data/gallery-data";

const EventTabContent = () => {
  return <GalleryMasonry items={eventGalleryData} />;
};

export default EventTabContent;