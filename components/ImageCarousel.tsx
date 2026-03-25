'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, images.length, interval, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-50 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20, position: 'absolute' }}
            transition={{ duration: 0.3 }}
            className="absolute inset-4 flex items-center justify-center"
          >
            <Image
              src={images[currentIndex]}
              alt={`Mockup slide ${currentIndex + 1}`}
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow text-stone-700 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity hover:bg-white z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow text-stone-700 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity hover:bg-white z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full border border-stone-200 shadow-sm ${
                  idx === currentIndex 
                    ? 'bg-stone-800 w-6 h-2' 
                    : 'bg-white w-2 h-2 hover:bg-stone-100'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
