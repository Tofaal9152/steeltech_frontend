"use client";

import { gsap } from "gsap";
import { Maximize2 } from "lucide-react";
import Image from "next/image";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number,
): number => {
  const get = () => {
    if (typeof window === "undefined") return defaultValue;

    const index = queries.findIndex((q) => window.matchMedia(q).matches);
    return values[index] ?? defaultValue;
  };

  const [value, setValue] = useState<number>(defaultValue);

  useEffect(() => {
    const handler = () => setValue(get());

    handler();

    const mediaQueries = queries.map((q) => window.matchMedia(q));
    mediaQueries.forEach((mq) => mq.addEventListener("change", handler));

    return () => {
      mediaQueries.forEach((mq) => mq.removeEventListener("change", handler));
    };
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

interface Item {
  id: string;
  type?: "image" | "video";
  img: string;
  url?: string;
  localVideoUrl?: string;
  youtubeUrl?: string;
  height: number;
  title?: string;
  caption?: string;
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.97,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const hasVideo = items.some((item) => (item.type ?? "image") === "video");

  const columns = hasVideo
    ? useMedia(["(min-width:1024px)", "(min-width:640px)"], [2, 2], 1)
    : useMedia(
        ["(min-width:1280px)", "(min-width:768px)", "(min-width:480px)"],
        [3, 3, 2],
        1,
      );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[
        Math.floor(Math.random() * dirs.length)
      ] as typeof animateFrom;
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const { grid, totalHeight } = useMemo(() => {
    if (!width) return { grid: [], totalHeight: 0 };

    const colHeights = new Array(columns).fill(0);
    const gap = 20;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const grid = items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height =
        (child.type ?? "image") === "video"
          ? child.height
          : child.height / 1.35;
      const y = colHeights[col];

      colHeights[col] += height + gap;

      return { ...child, x, y, w: columnWidth, h: height };
    });

    return {
      grid,
      totalHeight: Math.max(...colHeights, 0),
    };
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          },
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  useEffect(() => {
    if (!selectedItem || !overlayRef.current || !modalRef.current) return;

    document.body.style.overflow = "hidden";

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" },
    );

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.88, y: 40, rotateX: 8 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        duration: 0.45,
        ease: "power3.out",
      },
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const closeModal = () => {
    if (!overlayRef.current || !modalRef.current) {
      setSelectedItem(null);
      return;
    }

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 30,
      duration: 0.25,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => setSelectedItem(null),
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (selectedItem) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  const handleMouseEnter = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay") as HTMLElement;
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${totalHeight}px` }}
      >
        {grid.map((item) => {
          const isVideo = (item.type ?? "image") === "video";

          return (
            <div
              key={item.id}
              data-key={item.id}
              className="absolute box-content cursor-pointer"
              style={{ willChange: "transform, width, height, opacity" }}
              onClick={() => setSelectedItem(item)}
              onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-[20px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]">
                <div className="absolute right-3 top-3 z-10 opacity-0 transition group-hover:opacity-100">
                  <div className="rounded-full bg-white/90 p-2 shadow-md backdrop-blur-md transition hover:scale-110">
                    <Maximize2 className="h-4 w-4 text-black" />
                  </div>
                </div>

                {isVideo ? (
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                ) : (
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                )}

                {/* Video play indicator */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/30 shadow-lg backdrop-blur-md">
                      <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
                    </div>
                  </div>
                )}

                {/* Gradient overlay + caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {item.caption && (
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                    <p className="text-sm font-medium leading-6 text-white sm:text-[15px]">
                      {item.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedItem && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[9999] flex h-full w-full items-center justify-center bg-black/75 p-4 backdrop-blur-md md:p-8"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-5xl rounded-[24px] border border-white/10 bg-[#0b0b0b] p-3 shadow-2xl md:p-4"
            onClick={(e) => e.stopPropagation()}
            style={{ perspective: "1200px" }}
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-[18px] bg-black">
              {(selectedItem.type ?? "image") === "video" ? (
                selectedItem.youtubeUrl ? (
                  <div className="aspect-video w-full max-h-[70vh] bg-black">
                    <iframe
                      src={getEmbedUrl(selectedItem.youtubeUrl)}
                      title={selectedItem.title || "video"}
                      className="h-full w-full rounded-[18px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    poster={selectedItem.img}
                    className="h-auto max-h-[70vh] w-full rounded-[18px] bg-black object-contain"
                  >
                    <source src={selectedItem.localVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <Image
                  src={selectedItem.img}
                  width={1200}
                  height={800}
                  alt={
                    selectedItem.title || selectedItem.caption || "gallery item"
                  }
                  className="h-auto max-h-[70vh] w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Masonry;
const getEmbedUrl = (url: string) => {
  if (!url) return "";
  if (url.includes("youtube.com/watch")) {
    const videoId = new URL(url).searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  return url;
};
