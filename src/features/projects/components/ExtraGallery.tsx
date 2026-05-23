import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

interface ExtraImage {
  src: string;
  alt: string;
}

interface ExtraGalleryProps {
  images: ExtraImage[];
  title?: string;
  description?: string;
}

export default function ExtraGallery({ images, title, description }: ExtraGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="mt-12 pt-8 border-t border-border/30">
      {title && (
        <h2 className="text-3xl font-bold mb-6 text-primary">{title}</h2>
      )}
      {description && (
        <p className="text-muted-foreground mb-8">{description}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl aspect-[16/10] group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
            />
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-none group-hover:backdrop-blur-sm flex items-center justify-center transition-all duration-300 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageLightbox
        images={images}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </section>
  );
}
