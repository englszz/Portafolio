import { useState, useCallback, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ImageLightbox({
  images,
  initialIndex = 0,
  open,
  onOpenChange,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync with initialIndex when it changes externally
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, goNext, goPrev]);

  if (images.length === 0) return null;

  const current = images[currentIndex];
  const hasMultiple = images.length > 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="!max-w-[92vw] !w-auto !max-h-[92vh] !p-0 !bg-black/95 !border-white/10 !rounded-2xl overflow-hidden !gap-0"
      >
        {/* Accessible but visually hidden title */}
        <DialogTitle className="sr-only">{current?.alt || 'Image preview'}</DialogTitle>
        <DialogDescription className="sr-only">
          {current?.caption || 'Full size image preview'}
        </DialogDescription>

        <div className="relative flex items-center justify-center min-h-[50vh] max-h-[85vh]">
          {/* Navigation arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Main image */}
          <img
            src={current?.src}
            alt={current?.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain select-none"
            draggable={false}
          />
        </div>

        {/* Caption & counter bar */}
        {(current?.caption || hasMultiple) && (
          <div className="px-6 py-3 bg-black/80 border-t border-white/10 flex items-center justify-between">
            <p className="text-white/70 text-sm truncate">
              {current?.caption || current?.alt}
            </p>
            {hasMultiple && (
              <span className="text-white/50 text-xs font-medium ml-4 shrink-0">
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
