import Masonry from "@/components/Masonry";
import { GalleryItem } from "../data/gallery-data";

type GalleryMasonryProps = {
  items: GalleryItem[];
};

const GalleryMasonry = ({ items }: GalleryMasonryProps) => {
  return (
    <div className="w-full h-full ">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="random"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default GalleryMasonry;