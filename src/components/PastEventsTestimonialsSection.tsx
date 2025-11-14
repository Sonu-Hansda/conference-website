import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import pastEvent1 from "@/assets/past-event-1.jpg";
import pastEvent2 from "@/assets/past-event-2.jpg";
import pastEvent3 from "@/assets/past-event-3.jpg";
import pastEvent4 from "@/assets/past-event-4.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";

const PastEventsTestimonialsSection = () => {
  const pastEvents = [
    { image: pastEvent1, alt: "RISE Conference Past Event 2025", title: "RISE 2025" },
    { image: pastEvent2, alt: "RISE Conference Past Event 2024", title: "RISE 2024" },
    { image: pastEvent3, alt: "RISE Conference Past Event 2022", title: "RISE 2022" },
    { image: pastEvent4, alt: "RISE Conference Past Event 2023", title: "RISE 2023" }
  ];

  const testimonials = [
    {
      quote: [
        "1. Excellent venue, Easy to access.",
        "2. Very effective to response all the sections",
        "3. Still need to promote the well-organized conference, not many people know this event and worth to attend"
      ],
      author: "Shu-Yii WU",
      affiliation: "Feng Chia University, Taiwan"
    },
    {
      quote: "I Enjoyed greatly this conference -the organized was perfect and venue, Food & refreshments were first class.",
      author: "Stephen J Wilkinson",
      affiliation: "Avioxx Advanced Fuels Laboratory, United Kingdom",
      image: testimonial1
    },
    {
      quote: "Thanks for the amazing conference",
      author: "Mira Chitt",
      affiliation: "Global College of Engineering and Technology (GCET), Oman"
    },
    {
      quote: "The conference provided excellent networking opportunities and valuable insights into renewable energy technologies.",
      author: "Dr. Sarah Chen",
      affiliation: "Tokyo Institute of Technology, Japan"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2; // Show 2 testimonials at a time

  // Calculate total number of slides (pairs of testimonials)
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Our Past Events */}
          <div className="mb-16">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-dark mb-4">Our Past Events</h2>
              <div className="text-center mb-8">
                <p className="text-2xl font-semibold text-gray-700">RISE 2022</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {pastEvents.map((event, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={event.image} 
                    alt={event.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link to="/past-events-gallery">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded-md">
                  View all
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-dark mb-12">Testimonials</h2>
          <div className="relative max-w-6xl mx-auto">
            {/* Testimonials Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                  const start = slideIndex * itemsPerView;
                  const slideTestimonials = testimonials.slice(start, start + itemsPerView);
                  
                  return (
                    <div 
                      key={slideIndex} 
                      className="min-w-full flex gap-8 px-2"
                    >
                      {slideTestimonials.map((testimonial, index) => (
                        <Card 
                          key={start + index} 
                          className="flex-1 p-8 border-2 border-teal relative bg-white"
                        >
                          <Quote className="w-12 h-12 text-teal mb-4" />
                          <div className="space-y-2 mb-6 text-gray-dark">
                            {Array.isArray(testimonial.quote) ? (
                              <ol className="space-y-2">
                                {testimonial.quote.map((item, i) => (
                                  <li key={i} className="text-sm leading-relaxed">{item}</li>
                                ))}
                              </ol>
                            ) : (
                              <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-4 mt-6">
                            {testimonial.image && (
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.author}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                            )}
                            <div>
                              <p className="font-bold text-gray-dark">{testimonial.author}</p>
                              <p className="text-sm text-gray-600">{testimonial.affiliation}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                      {/* Fill empty space if odd number of testimonials */}
                      {slideTestimonials.length < itemsPerView && (
                        <div className="flex-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={goToPrevious}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-md bg-gray-100 hover:bg-gray-200 border-gray-300"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </Button>
              <Button
                onClick={goToNext}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-md bg-gray-100 hover:bg-gray-200 border-gray-300"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PastEventsTestimonialsSection;
