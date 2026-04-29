import { useState } from 'react';

const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'Professional massage treatment' },
  { src: '/images/gallery-2.png', alt: 'Spa equipment and essential oils' },
  { src: '/images/gallery-3.png', alt: 'Aromatherapy candles and ambiance' },
  { src: '/images/gallery-4.png', alt: 'Hot stone therapy setup' },
  { src: '/images/about.png', alt: 'Treatment room interior' },
  { src: '/images/hero-bg.png', alt: 'Spa atmosphere' },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24" id="galeri">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="fade-up inline-block text-xs font-semibold tracking-[3px] uppercase text-sage-500 mb-3">
            Galeri
          </span>
          <h2 className="fade-up font-heading text-2xl md:text-[2.5rem] font-semibold leading-tight text-gray-900 mb-4">
            Suasana & Perlengkapan Kami
          </h2>
          <p className="fade-up text-gray-500 max-w-[600px] mx-auto">
            Kami menggunakan peralatan berkualitas tinggi dan menjaga standar kebersihan tertinggi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="fade-up relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl
                aspect-square"
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out
                  group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30
                transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  🔍
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIdx(null)}
        >
          <img
            src={galleryImages[lightboxIdx].src}
            alt={galleryImages[lightboxIdx].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
          />
          <button
            className="absolute top-6 right-6 w-11 h-11 bg-white/15 hover:bg-white/30
              rounded-full flex items-center justify-center text-white text-xl
              transition-colors duration-300 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
          >
            ✕
          </button>
          {/* Nav arrows */}
          {lightboxIdx > 0 && (
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11
                bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center
                text-white text-xl transition-colors duration-300 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx - 1); }}
            >
              ‹
            </button>
          )}
          {lightboxIdx < galleryImages.length - 1 && (
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11
                bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center
                text-white text-xl transition-colors duration-300 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx + 1); }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}
