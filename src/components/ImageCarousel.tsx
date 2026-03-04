import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ImageCarousel = ({ images, alt, className = "" }: { images: string[], alt: string, className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full overflow-hidden bg-slate-100 group/carousel ${className}`}>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100 z-10">
        <button
          onClick={prevImage}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextImage}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover/carousel:opacity-100 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => goToImage(e, idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
