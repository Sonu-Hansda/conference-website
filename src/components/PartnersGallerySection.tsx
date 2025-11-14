import { useState } from "react";
import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { partners } from "@/data/partners";
import { Button } from "./ui/button";

const PartnersGallerySection = () => {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4];
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  return (
    <>
      {/* Media Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-dark mb-12">Media Partners/Collaboration</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => {
                const imageFailed = failedImages.has(index);
                const content = imageFailed ? (
                  <div className="text-xs font-medium text-gray-700 text-center px-2">
                    {partner.name}
                  </div>
                ) : (
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="max-w-full max-h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={() => handleImageError(index)}
                  />
                );

                return (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow min-h-[120px]"
                  >
                    {partner.url ? (
                      <a 
                        href={partner.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Past Conference Gallery Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-dark mb-12">Past Conference Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Conference Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/past-conference-gallery">
              <Button className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-md font-semibold text-base">
                View all
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersGallerySection;
