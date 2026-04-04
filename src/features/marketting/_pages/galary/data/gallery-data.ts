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
      type: "video";
      img: string;
      localVideoUrl?: string;
      youtubeUrl?: string;
      height: number;
      caption: string;
    };
const generateGallery = (prefix: string, folder: string, count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${prefix}${i + 1}`,
    img: `/images/gallery/${folder}/${i + 1}.jpg`,
    type: "image",
    height: 500 + Math.floor(Math.random() * 300),
    caption: `${folder} image ${i + 1}`,
  }));

export const factoryGalleryData = generateGallery("f", "factory-images", 15);
export const productGalleryData = generateGallery("p", "product-images", 15);
export const eventGalleryData = generateGallery("e", "event-images", 17);

export const videoGalleryData = [
  {
    id: "v10",
    type: "video",
    img: `/images/gallery/videos/1.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=uAeiwga0ARg&t=112s",
    height: 420,
    caption:
      "20 years journey of Steeltech Industries limited | Stainless Steel || Its All About Stainless Style",
  },
  {
    id: "v1",
    type: "video",
    img: `https://img.youtube.com/vi/sVjHYX3KEFw/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=sVjHYX3KEFw",
    height: 420,
    caption: "Steeltech B. Baria, Narsingdi visit with Siam Ahmed",
  },
  {
    id: "v2",
    type: "video",
    img: `https://img.youtube.com/vi/G4LQXn9zFf8/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=G4LQXn9zFf8",
    height: 420,
    caption:
      "Siam Ahmed visits fabricator point in the northern region of Bangladesh.",
  },
  {
    id: "v3",
    type: "video",
    img: `https://img.youtube.com/vi/sECFEypfegk/maxresdefault.jpg`,
    youtubeUrl:
      "https://www.youtube.com/watch?v=sECFEypfegk&pp=0gcJCdkKAYcqIYzv",
    height: 420,
    caption:
      "একমাত্র স্টিলটেকই দিচ্ছে গুনগত মানের নিশ্চয়তা / Steeltech/ Siam Ahmed",
  },
  {
    id: "v4",
    type: "video",
    img: `https://img.youtube.com/vi/JERUUXDq4_s/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=JERUUXDq4_s",
    height: 420,
    caption:
      "Steeltech Brand Ambassador Siam Ahmed made surprise visits to Cumilla, Feni, and Noakhali",
  },
  {
    id: "v5",
    type: "video",
    img: `https://img.youtube.com/vi/shFrlFfIJXU/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=shFrlFfIJXU",
    height: 420,
    caption: "surprise visits with Steeltech Brand Ambassador Siam Ahmed",
  },
  {
    id: "v6",
    type: "video",
    img: `https://img.youtube.com/vi/ojzvxszvRqQ/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=ojzvxszvRqQ",
    height: 420,
    caption:
      "Steeltech Industries Ltd. Hosts Successful Annual Sales Conference 2023-2024 in Dubai",
  },
  {
    id: "v7",
    type: "video",
    img: `https://img.youtube.com/vi/GoITI2JNX3Q/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=GoITI2JNX3Q",
    height: 420,
    caption: "Experience excellence with Steeltech Industries Ltd.",
  },
  {
    id: "v8",
    type: "video",
    img: `https://img.youtube.com/vi/rNpdQSmCWjs/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=rNpdQSmCWjs",
    height: 420,
    caption:
      "Steeltech Dealer Conference Shorts 2022-2023 | Jordan & Dubai | Stainless Steel",
  },
  {
    id: "v9",
    type: "video",
    img: `https://img.youtube.com/vi/S78w3BDLqIs/maxresdefault.jpg`,
    youtubeUrl:
      "https://www.youtube.com/watch?v=S78w3BDLqIs&pp=0gcJCdkKAYcqIYzv",
    height: 420,
    caption:
      "Steeltech Dealer Conference 2022-2023  | Jordan & Dubai | Stainless Steel",
  },

  {
    id: "v11",
    type: "video",
    img: `https://img.youtube.com/vi/hVPbuZbWIoc/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=hVPbuZbWIoc",
    height: 420,
    caption:
      "Steeltech TVC | Stainless Steel || Its All About Stainless Style.",
  },
  {
    id: "v12",
    type: "video",
    img: `https://img.youtube.com/vi/vF0fLr9it_A/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=vF0fLr9it_A",
    height: 420,
    caption:
      "#steeltech  Ovc | Stainless Steel || Its All About Stainless Style.",
  },
  {
    id: "v13",
    type: "video",
    img: `https://img.youtube.com/vi/HM7CfMqZVa0/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=HM7CfMqZVa0",
    height: 420,
    caption:
      "#Steeltech Factory Manufacturing Process | Stainless Steel || Its All About Stainless Style.",
  },
  {
    id: "v14",
    type: "video",
    img: `https://img.youtube.com/vi/jSUc3l8YjfE/maxresdefault.jpg`,
    youtubeUrl: "https://www.youtube.com/watch?v=jSUc3l8YjfE",
    height: 420,
    caption: "Motion Intro - Steeltech Industries limited",
  },
];
