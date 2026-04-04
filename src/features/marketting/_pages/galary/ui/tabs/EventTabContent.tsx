import GalleryMasonry from "../GalleryMasonry";
import { eventGalleryData } from "../../data/gallery-data";

const EventTabContent = () => {
  return <GalleryMasonry items={eventGalleryData as any} />;
};

export default EventTabContent;