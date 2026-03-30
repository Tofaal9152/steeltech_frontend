import { imagePathForLanding } from "@/constants/imagePath";

export type GalleryItem =
  | {
      id: string;
      img: string;
      type: "image";
      height: number;
    }
  | {
      id: string;
      img: string;
      type: "video";
      videoUrl: string;
      height: number;
    };

export const factoryGalleryData: GalleryItem[] = [
  { id: "f1", img: "/images/gallery/factory/1.jpg", type: "image", height: 600 },
  { id: "f2", img: "/images/gallery/factory/2.jpg", type: "image", height: 250 },
  { id: "f3", img: "/images/gallery/factory/3.jpg", type: "image", height: 600 },
  { id: "f4", img: "/images/gallery/factory/4.jpg", type: "image", height: 400 },
  { id: "f5", img: "/images/gallery/factory/5.jpg", type: "image", height: 500 },
  { id: "f6", img: "/images/gallery/factory/1.jpg", type: "image", height: 350 },
  { id: "f7", img: "/images/gallery/factory/2.jpg", type: "image", height: 450 },
  { id: "f8", img: "/images/gallery/factory/3.jpg", type: "image", height: 300 },
  { id: "f9", img: "/images/gallery/factory/4.jpg", type: "image", height: 550 },
  { id: "f10", img: "/images/gallery/factory/5.jpg", type: "image", height: 420 },
  { id: "f11", img: "/images/gallery/factory/1.jpg", type: "image", height: 380 },
  { id: "f12", img: "/images/gallery/factory/2.jpg", type: "image", height: 520 },
  { id: "f13", img: "/images/gallery/factory/3.jpg", type: "image", height: 290 },
  { id: "f14", img: "/images/gallery/factory/4.jpg", type: "image", height: 610 },
  { id: "f15", img: "/images/gallery/factory/5.jpg", type: "image", height: 470 },
];

export const productGalleryData: GalleryItem[] = [
  { id: "p1", img: "/images/products/design/design1.jpg", type: "image", height: 500 },
  { id: "p2", img: "/images/products/design/design2.jpg", type: "image", height: 300 },
  { id: "p3", img: "/images/products/design/design3.jpg", type: "image", height: 550 },
  { id: "p4", img: "/images/products/design/design4.jpg", type: "image", height: 400 },
  { id: "p5", img: "/images/products/half-round/half-round1.jpg", type: "image", height: 450 },
  { id: "p6", img: "/images/products/half-round/half-round2.jpg", type: "image", height: 350 },
  { id: "p7", img: "/images/products/half-round/half-round3.jpg", type: "image", height: 500 },
  { id: "p8", img: "/images/products/half-round/half-round4.jpg", type: "image", height: 300 },
  { id: "p9", img: "/images/products/rectangular/rectangular1.jpg", type: "image", height: 550 },
  { id: "p10", img: "/images/products/rectangular/rectangular2.jpg", type: "image", height: 400 },
  { id: "p11", img: "/images/products/rectangular/rectangular3.jpg", type: "image", height: 350 },
  { id: "p12", img: "/images/products/round/round1.jpg", type: "image", height: 500 },
  { id: "p13", img: "/images/products/round/round2.jpg", type: "image", height: 300 },
  { id: "p14", img: "/images/products/round/round3.jpg", type: "image", height: 450 },
  { id: "p15", img: "/images/products/round/round4.jpg", type: "image", height: 550 },
  { id: "p16", img: "/images/products/spiral/spiral1.jpg", type: "image", height: 400 },
  { id: "p17", img: "/images/products/square/square1.jpg", type: "image", height: 500 },
  { id: "p18", img: "/images/products/square/square2.jpg", type: "image", height: 350 },
  { id: "p19", img: "/images/products/square/square3.jpg", type: "image", height: 450 },
];

export const eventGalleryData: GalleryItem[] = [
  { id: "e11", img: "/images/gallery/tour/1.jpg", type: "image", height: 380 },
  { id: "e12", img: "/images/gallery/tour/2.jpg", type: "image", height: 540 },
  { id: "e13", img: "/images/gallery/tour/3.jpg", type: "image", height: 310 },
  { id: "e14", img: "/images/gallery/tour/4.jpg", type: "image", height: 480 },
  { id: "e15", img: "/images/gallery/tour/5.jpg", type: "image", height: 620 },
  { id: "e16", img: "/images/gallery/tour/1.jpg", type: "image", height: 360 },
  { id: "e17", img: "/images/gallery/tour/2.jpg", type: "image", height: 500 },
  { id: "e18", img: "/images/gallery/tour/3.jpg", type: "image", height: 260 },
  { id: "e19", img: "/images/gallery/tour/4.jpg", type: "image", height: 570 },
  { id: "e20", img: "/images/gallery/tour/5.jpg", type: "image", height: 430 },
  { id: "e21", img: "/images/gallery/tour/1.jpg", type: "image", height: 350 },
  { id: "e22", img: "/images/gallery/tour/2.jpg", type: "image", height: 520 },
  { id: "e23", img: "/images/gallery/tour/3.jpg", type: "image", height: 300 },
  { id: "e24", img: "/images/gallery/tour/4.jpg", type: "image", height: 610 },
  { id: "e25", img: "/images/gallery/tour/5.jpg", type: "image", height: 450 },
  { id: "e26", img: "/images/gallery/tour/1.jpg", type: "image", height: 320 },
  { id: "e27", img: "/images/gallery/tour/2.jpg", type: "image", height: 580 },
  { id: "e28", img: "/images/gallery/tour/3.jpg", type: "image", height: 270 },
  { id: "e29", img: "/images/gallery/tour/4.jpg", type: "image", height: 500 },
  { id: "e30", img: "/images/gallery/tour/5.jpg", type: "image", height: 420 },
  { id: "e31", img: "/images/gallery/tour/1.jpg", type: "image", height: 370 },
  { id: "e32", img: "/images/gallery/tour/2.jpg", type: "image", height: 540 },
  { id: "e33", img: "/images/gallery/tour/3.jpg", type: "image", height: 310 },
  { id: "e34", img: "/images/gallery/tour/4.jpg", type: "image", height: 480 },
  { id: "e35", img: "/images/gallery/tour/5.jpg", type: "image", height: 620 },
  { id: "e36", img: "/images/gallery/tour/1.jpg", type: "image", height: 360 },
  { id: "e37", img: "/images/gallery/tour/2.jpg", type: "image", height: 520 },
  { id: "e38", img: "/images/gallery/tour/3.jpg", type: "image", height: 280 },
  { id: "e39", img: "/images/gallery/tour/4.jpg", type: "image", height: 590 },
  { id: "e40", img: "/images/gallery/tour/5.jpg", type: "image", height: 430 },
  { id: "e41", img: "/images/gallery/tour/1.jpg", type: "image", height: 370 },
  { id: "e42", img: "/images/gallery/tour/2.jpg", type: "image", height: 540 },
  { id: "e43", img: "/images/gallery/tour/3.jpg", type: "image", height: 300 },
  { id: "e44", img: "/images/gallery/tour/4.jpg", type: "image", height: 610 },
  { id: "e45", img: "/images/gallery/tour/5.jpg", type: "image", height: 450 },
];

export const videoGalleryData: GalleryItem[] = [
  {
    id: "v1",
    type: "video",
    img: "/images/gallery/factory/1.jpg",
    videoUrl: imagePathForLanding.heroVideo,
    height: 400,
  },
  {
    id: "v2",
    type: "video",
    img: "/images/gallery/factory/2.jpg",
    videoUrl: imagePathForLanding.heroVideo,
    height: 300,
  },
  {
    id: "v3",
    type: "video",
    img: "/images/gallery/factory/3.jpg",
    videoUrl: imagePathForLanding.heroVideo,
    height: 550,
  },
];