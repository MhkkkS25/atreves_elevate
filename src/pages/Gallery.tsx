import { useState } from 'react';
import { X } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const imageModules = import.meta.glob(
  '../assets/Gallery/*.{jpg,jpeg,JPEG,png,PNG,webp,WEBP}',
  {
    eager: true,
  }
);

const galleryImages = Object.values(imageModules).map(
  (module: any, index) => ({
    src: module.default,
    alt: `Gallery Image ${index + 1}`,
    category: 'Gallery',
  })
);


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>

      {/* Hero Section */}
      <section className="section-padding bg-[#f2e7c3]">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">

            <span className="text-caption mb-4 block">
              Our Facilities
            </span>

            <h1 className="heading-display text-foreground mb-6">
              Gallery
            </h1>

            <div className="divider-gold mx-auto mb-8" />

            <p className="text-body text-lg">
              Explore our state-of-the-art facilities, cutting-edge equipment,
              and the dedicated team behind AtreVes Healthcare's
              pharmaceutical innovations.
            </p>

          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-luxury">

          {galleryImages.length === 0 ? (
            <div className="text-center text-muted-foreground text-lg">
              No gallery images found.
            </div>
          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md"
                  onClick={() => setSelectedImage(image.src)}
                >

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted">

                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">

                    <span className="text-xs tracking-widest uppercase text-yellow-300">
                      {image.category}
                    </span>

                    <p className="text-white text-sm mt-1">
                      {image.alt}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          )}

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-yellow-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          {/* Full Image */}
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </Layout>
  );
};

export default Gallery;