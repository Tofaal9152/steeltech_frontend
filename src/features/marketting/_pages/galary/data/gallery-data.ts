import { imagePathForLanding } from "@/constants/imagePath";

export type GalleryItem =
  | {
      id: string;
      img: string;
      type: "image";
      height: number;
      caption: string;
      title?: string;
    }
  | {
      id: string;
      img: string;
      type: "video";
      videoUrl: string;
      height: number;
      caption: string;
      title?: string;
    };

export const factoryGalleryData: GalleryItem[] = [
  {
    id: "f1",
    img: "/images/gallery/factory/1.jpg",
    type: "image",
    height: 700,
    caption: "Steeltech factory floor operations",
  },
  {
    id: "f2",
    img: "/images/gallery/factory/2.jpg",
    type: "image",
    height: 520,
    caption: "Precision stainless steel production line",
  },
  {
    id: "f3",
    img: "/images/gallery/factory/3.jpg",
    type: "image",
    height: 700,
    caption: "Automated manufacturing workflow",
  },
  {
    id: "f4",
    img: "/images/gallery/factory/4.jpg",
    type: "image",
    height: 560,
    caption: "Pipe finishing and inspection section",
  },
  {
    id: "f5",
    img: "/images/gallery/factory/5.jpg",
    type: "image",
    height: 620,
    caption: "Industrial stainless steel processing unit",
  },
  {
    id: "f6",
    img: "/images/gallery/factory/1.jpg",
    type: "image",
    height: 540,
    caption: "Production team at work",
  },
  {
    id: "f7",
    img: "/images/gallery/factory/2.jpg",
    type: "image",
    height: 620,
    caption: "High-capacity fabrication facility",
  },
  {
    id: "f8",
    img: "/images/gallery/factory/3.jpg",
    type: "image",
    height: 500,
    caption: "Machine-assisted pipe forming",
  },
  {
    id: "f9",
    img: "/images/gallery/factory/4.jpg",
    type: "image",
    height: 680,
    caption: "Quality-controlled factory output",
  },
];

export const productGalleryData: GalleryItem[] = [
  {
    id: "p1",
    img: "/images/products/design/design1.jpg",
    type: "image",
    height: 620,
    caption: "Architectural stainless steel design pipe",
  },
  {
    id: "p2",
    img: "/images/products/design/design2.jpg",
    type: "image",
    height: 480,
    caption: "Premium decorative steel profile",
  },
  {
    id: "p3",
    img: "/images/products/design/design3.jpg",
    type: "image",
    height: 660,
    caption: "Contemporary polished pipe design",
  },
  {
    id: "p4",
    img: "/images/products/design/design4.jpg",
    type: "image",
    height: 520,
    caption: "Modern steel application sample",
  },
  {
    id: "p5",
    img: "/images/products/half-round/half-round1.jpg",
    type: "image",
    height: 560,
    caption: "Half-round stainless steel section",
  },
  {
    id: "p6",
    img: "/images/products/half-round/half-round2.jpg",
    type: "image",
    height: 500,
    caption: "Half-round profile with polished finish",
  },
  {
    id: "p7",
    img: "/images/products/half-round/half-round3.jpg",
    type: "image",
    height: 620,
    caption: "Durable half-round pipe solution",
  },
  {
    id: "p8",
    img: "/images/products/half-round/half-round4.jpg",
    type: "image",
    height: 470,
    caption: "Engineered half-round steel design",
  },
  {
    id: "p9",
    img: "/images/products/rectangular/rectangular1.jpg",
    type: "image",
    height: 680,
    caption: "Rectangular stainless steel pipe",
  },
  {
    id: "p10",
    img: "/images/products/rectangular/rectangular2.jpg",
    type: "image",
    height: 520,
    caption: "Industrial rectangular section",
  },
  {
    id: "p11",
    img: "/images/products/rectangular/rectangular3.jpg",
    type: "image",
    height: 500,
    caption: "Heavy-duty rectangular pipe",
  },
  {
    id: "p12",
    img: "/images/products/round/round1.jpg",
    type: "image",
    height: 620,
    caption: "Round stainless steel pipe",
  },
  {
    id: "p13",
    img: "/images/products/round/round2.jpg",
    type: "image",
    height: 470,
    caption: "Refined round steel product",
  },
  {
    id: "p14",
    img: "/images/products/round/round3.jpg",
    type: "image",
    height: 560,
    caption: "Versatile round pipe application",
  },
  {
    id: "p15",
    img: "/images/products/round/round4.jpg",
    type: "image",
    height: 660,
    caption: "High-grade round stainless section",
  },
];

export const eventGalleryData: GalleryItem[] = [
  {
    id: "e11",
    img: "/images/gallery/tour/1.jpg",
    type: "image",
    height: 520,
    caption: "Factory tour and visitor engagement",
  },
  {
    id: "e12",
    img: "/images/gallery/tour/2.jpg",
    type: "image",
    height: 680,
    caption: "Industry visit at Steeltech facility",
  },
  {
    id: "e13",
    img: "/images/gallery/tour/3.jpg",
    type: "image",
    height: 500,
    caption: "Team interaction during factory event",
  },
  {
    id: "e14",
    img: "/images/gallery/tour/4.jpg",
    type: "image",
    height: 600,
    caption: "Corporate event moments",
  },
  {
    id: "e15",
    img: "/images/gallery/tour/5.jpg",
    type: "image",
    height: 720,
    caption: "Visitors exploring production systems",
  },
  {
    id: "e16",
    img: "/images/gallery/tour/1.jpg",
    type: "image",
    height: 500,
    caption: "Guided plant walkthrough",
  },
  {
    id: "e17",
    img: "/images/gallery/tour/2.jpg",
    type: "image",
    height: 640,
    caption: "Stakeholder visit to factory premises",
  },
  {
    id: "e18",
    img: "/images/gallery/tour/3.jpg",
    type: "image",
    height: 460,
    caption: "Team networking during visit",
  },
  {
    id: "e19",
    img: "/images/gallery/tour/4.jpg",
    type: "image",
    height: 690,
    caption: "Inside look at Steeltech operations",
  },
];

export const videoGalleryData: GalleryItem[] = [
  {
    id: "v1",
    type: "video",
    img: "/images/gallery/factory/1.jpg",
    videoUrl: imagePathForLanding.heroVideo,
    height: 420,
    caption: "Corporate promotional video",
  },
  {
    id: "v2",
    type: "video",
    img: "/images/gallery/factory/2.jpg",
    videoUrl: imagePathForLanding.heroVideo,
    height: 420,
    caption: "Inside Steeltech manufacturing",
  },
  {
    id: "v3",
    type: "video",
    img: "/images/gallery/factory/3.jpg",
    videoUrl: imagePathForLanding.heroVideo,
    height: 420,
    caption: "Quality and production highlights",
  },
];