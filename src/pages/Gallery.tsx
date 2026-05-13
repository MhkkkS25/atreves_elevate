import { useMemo, useState } from 'react';
import { X } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const imageModules = import.meta.glob(
  '../assets/Gallery/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
  }
);

const imageList = Object.entries(imageModules).map(
  ([path, module]: any, index) => ({
    src: module.default,
    fileName: path.split('/').pop(),
    id: index + 1,
  })
);

const galleryData = [
  {
    album: 'Achievements',
    images: [
      { imageNo: 4 },
      { imageNo: 22 },
      { imageNo: 25 },
    ],
  },

  {
    album: 'Events',
    images: [
      { imageNo: 1 },
      { imageNo: 2 },
      { imageNo: 3 },
      { imageNo: 5 },
      { imageNo: 6 },
      { imageNo: 8 },
      { imageNo: 14 },
      { imageNo: 20 },
      { imageNo: 21 },
      { imageNo: 23 },
      { imageNo: 24 },
      { imageNo: 26 },
      { imageNo: 27 },
    ],
  },

  {
    album: 'Infrastructure & Capabilities',
    images: [
      { imageNo: 7 },
      { imageNo: 9 },
      { imageNo: 10 },
      { imageNo: 11 },
      { imageNo: 15 },
      { imageNo: 16 },
      { imageNo: 18 },
    ],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [activeAlbum, setActiveAlbum] =
    useState('Achievements');

  const albums = galleryData.map((item) => item.album);

  const currentImages = useMemo(() => {
    const selectedAlbum = galleryData.find(
      (item) => item.album === activeAlbum
    );

    if (!selectedAlbum) return [];

    return selectedAlbum.images
      .map((img) => {
        const matchedImage = imageList.find((image) => {
          return (
            image.fileName?.startsWith(`${img.imageNo}.`) ||
            image.fileName?.startsWith(`${img.imageNo}_`) ||
            image.fileName?.startsWith(`${img.imageNo}-`)
          );
        });

        if (!matchedImage) return null;

        return {
          src: matchedImage.src,
          category: selectedAlbum.album,
        };
      })
      .filter(Boolean);
  }, [activeAlbum]);

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
              Explore our facilities, equipment,
              and the dedicated team behind
              AtreVes Healthcare.
            </p>

          </div>

        </div>

      </section>

      {/* Album Buttons */}
      <section className="pt-12 pb-4">

        <div className="container-luxury">

          <div className="flex flex-wrap justify-center gap-4">

            {albums.map((album) => (
              <button
                key={album}
                onClick={() => setActiveAlbum(album)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm font-medium
                  ${
                    activeAlbum === album
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-300 hover:border-black'
                  }
                `}
              >
                {album}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* Gallery Grid */}
      <section className="section-padding pt-8">

        <div className="container-luxury">

          {currentImages.length === 0 ? (

            <div className="text-center text-muted-foreground text-lg">
              No images found.
            </div>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {currentImages.map((image: any, index) => (

                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md"
                  onClick={() => setSelectedImage(image.src)}
                >

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted">

                    <img
                      src={image.src}
                      alt="Gallery"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

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