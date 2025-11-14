import Header from "@/components/Header";
import Footer from "@/components/Footer";
import pastEvent1 from "@/assets/past-event-1.jpg";
import pastEvent2 from "@/assets/past-event-2.jpg";
import pastEvent3 from "@/assets/past-event-3.jpg";
import pastEvent4 from "@/assets/past-event-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const PastEventsGallery = () => {
  // Combine all past event images and gallery images
  const allPastEvents = [
    { image: pastEvent1, alt: "RISE 2025", title: "RISE 2025" },
    { image: pastEvent2, alt: "RISE 2024", title: "RISE 2024" },
    { image: pastEvent3, alt: "RISE 2022", title: "RISE 2022" },
    { image: pastEvent4, alt: "RISE 2023", title: "RISE 2023" },
    { image: gallery1, alt: "Past Conference Gallery 1", title: "Conference Gallery" },
    { image: gallery2, alt: "Past Conference Gallery 2", title: "Conference Gallery" },
    { image: gallery3, alt: "Past Conference Gallery 3", title: "Conference Gallery" },
    { image: gallery4, alt: "Past Conference Gallery 4", title: "Conference Gallery" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-dark mb-4">Our Past Events</h2>
            <p className="text-center text-gray-600 mb-12">Explore our gallery of past conferences on Recent Innovation in Sustainable Energy</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allPastEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="group aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <h3 className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {event.title}
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

export default PastEventsGallery;

