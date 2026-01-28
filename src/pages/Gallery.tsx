import { useState } from 'react';
import { X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import heroLab from '@/assets/hero-lab.jpg';
import labEquipment from '@/assets/lab-equipment.jpg';

const galleryImages = [
  {
    src: heroLab,
    alt: 'State-of-the-art pharmaceutical R&D laboratory',
    category: 'Laboratory',
  },
  {
    src: gallery1,
    alt: 'Precision formulation development',
    category: 'Research',
  },
  {
    src: gallery2,
    alt: 'Sterile cleanroom injectable manufacturing',
    category: 'Manufacturing',
  },
  {
    src: gallery3,
    alt: 'Collaborative research discussions',
    category: 'Team',
  },
  {
    src: gallery4,
    alt: 'Injectable pharmaceutical products',
    category: 'Products',
  },
  {
    src: gallery5,
    alt: 'Analytical laboratory equipment',
    category: 'Equipment',
  },
  {
    src: gallery6,
    alt: 'Scientist conducting microscopy analysis',
    category: 'Research',
  },
  {
    src: labEquipment,
    alt: 'Advanced pharmaceutical manufacturing equipment',
    category: 'Equipment',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-[#f2e7c3]">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-caption mb-4 block">Our Facilities</span>
            <h1 className="heading-display text-foreground mb-6">
              Gallery
            </h1>
            <div className="divider-gold mx-auto mb-8" />
            <p className="text-body text-lg">
              Explore our state-of-the-art facilities, cutting-edge equipment, 
              and the dedicated team behind AtreVes Healthcare's pharmaceutical innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className={`${
                  index === 0 || index === 3 
                    ? 'aspect-[4/3]' 
                    : index === 1 || index === 4 
                    ? 'aspect-square' 
                    : 'aspect-[3/4]'
                }`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium tracking-wider uppercase text-gold-light">
                    {image.category}
                  </span>
                  <p className="text-sm text-secondary-foreground mt-1">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-secondary-foreground hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;