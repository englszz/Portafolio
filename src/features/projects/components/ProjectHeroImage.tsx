import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

interface HeroImageProps {
  src: string;
  alt: string;
}

export default function ProjectHeroImage({ src, alt }: HeroImageProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className="mb-8 mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl group cursor-pointer relative"
        onClick={() => setLightboxOpen(true)}
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-95"
          />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
          <span className="text-white/90 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
            Click para ampliar
          </span>
        </div>
      </div>

      <ImageLightbox
        images={[{ src, alt }]}
        initialIndex={0}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </>
  );
}
