"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/tailwind-utils";
interface HeroAnimatedProps {
  images: string[];
  className?: string;
  overlay?: boolean;
}

export default function HeroAnimated({ images, className, overlay = false }:HeroAnimatedProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div
        className={cn("relative w-full h-screen overflow-hidden    transition-transform duration-1000 ease-in-out", className)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 1.2 }}
           transition={{ duration: 3 }}
          />
        </AnimatePresence>

        {/* Optional: Overlay content */}
        {/* <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/30">
          Welcome to Our Website
        </div> */}
        {/* 🔳 Black Overlay */}
        {overlay && <div className="absolute inset-0 bg-black/60 z-10" />}
      </div>
    </div>
  );
}

