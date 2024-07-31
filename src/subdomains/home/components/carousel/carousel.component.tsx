"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function HomeCarouselComponent(): JSX.Element {
  const [index, setIndex] = useState<number>(0);

  const videos = [
    "https://www.valeo.com/wp-content/uploads/2023/04/clip_kanda.mp4",
    "https://www.valeo.com/wp-content/uploads/2023/01/valeo_prague_teaser_1080p.mp4",
    "https://www.valeo.com/wp-content/uploads/2022/11/cairo-clip-hp.mp4",
  ];

  const nextVideo = (): void => {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = (): void => {
    setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.video
          key={index}
          src={videos[index]}
          autoPlay
          loop
          muted
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      <button
        onClick={prevVideo}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
      >
        Previous
      </button>
      <button
        onClick={nextVideo}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
      >
        Next
      </button>
    </div>
  );
}
