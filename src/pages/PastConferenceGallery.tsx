import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const PastConferenceGallery = () => {
  const galleryImages = [
    { image: gallery1, alt: "Past Conference Gallery 1", title: "Conference Gallery Image 1" },
    { image: gallery2, alt: "Past Conference Gallery 2", title: "Conference Gallery Image 2" },
    { image: gallery3, alt: "Past Conference Gallery 3", title: "Conference Gallery Image 3" },
    { image: gallery4, alt: "Past Conference Gallery 4", title: "Conference Gallery Image 4" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-dark mb-4">Past Conference Gallery</h2>
            <p className="text-center text-gray-600 mb-12">Explore our collection of past conference moments</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((item, index) => (
                <div 
                  key={index} 
                  className="group aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PastConferenceGallery;

