import { Card } from "./ui/card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { committeeMembers } from "@/data/committeeMembers";
import brochureImage from "@/assets/brochure.jpg";
import committee2 from "@/assets/committee-2.jpg";
import committee3 from "@/assets/committee-3.jpg";

const WelcomeCommitteeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Show only first 4 members on the main page
  const committee = committeeMembers.slice(0, 4);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const slides = [
    // Slide 1: Publishing Partner
    {
      type: "publishing",
      title: "Publishing Partner",
      journalTitle: "Clean Technologies & Recycling",
      description: "Clean Technologies & Recycling is an international Open Access journal devoted to publishing peer-reviewed, high quality, original papers in the field of sustainable development, to provide a platform for researchers and engineers to disseminate their knowledge and technologies and educate the public to understand more about how to minimize the use of materials, how to recover materials from used parts and devices, and how to safely process waste and leave minimum waste disposal.",
      link: "https://www.aimspress.com/journal/ctr",
      image: brochureImage
    },
    // Slide 2: Welcome Message - Dr. Stephen J. Wilkinson
    {
      type: "welcome",
      title: "Welcome Message",
      speaker: {
        name: "Dr. Stephen J. Wilkinson",
        title: "Chief Technology Officer, Avioxx Limited (Transforming waste into sustainable aviation fuel)",
        image: committee2
      },
      greeting: "Dear Sir/Madam,",
      message: `It is my greatest pleasure to warmly welcome you to the International Conference on Recent Innovation in Sustainable Energy 2026 to be held in Tokyo, Japan 26-27 March 2026. This event has global reach and provides the perfect opportunity for researchers, innovators, and professionals in sustainable energy to showcase their latest innovations, share cutting-edge ideas, and grow international collaborations. We welcome all levels of experience: from postgraduate researchers to established experts and industry leaders - and everything in-between!`,
      closing: "Yours sincerely,",
      conferenceDetails: {
        name: "International Conference on Recent Innovation in Sustainable Energy 2026",
        theme: "Exploring Cutting-Edge Innovations for a Sustainable Energy Future",
        date: "26-27 March 2026",
        location: "Hotel Mystays Ochanomizu Conference Center, Tokyo, Japan"
      }
    },
    // Slide 3: Yasar University Welcome
    {
      type: "yasar",
      title: "Yasar University",
      greeting: "Dear Friends and Colleagues,",
      message: `On behalf of the Organizing Committee, it is my great pleasure to cordially welcome you to the International Conference on Recent Innovation in Sustainable Energy 2026 (RISE 2026), that will be held between March 26-27, 2026 in Tokyo, Japan, focusing on the theme entitled "Exploring Cutting-Edge Innovations for a Sustainable Energy Future".

This multi-disciplinary event aims to bring together researchers, scientists, academicians, and professionals working in the field of recent innovations in sustainable energy, including advanced renewable energy technologies, next-generation energy storage systems, smart grid innovations, energy efficiency breakthroughs, sustainable energy policies, and the transformative potential of artificial intelligence (AI), machine learning (ML), and other emerging technologies in sustainable energy systems.

Through our exciting program at this conference, participants will have the opportunity to showcase their latest innovations, renew friendships, extend their networks, and jointly explore current and future directions in sustainable energy innovation.

We hope that you will have a productive and fun-filled time at RISE 2026`,
      speaker: {
        name: "Arif Hepbasli, Ph.D.",
        title: "Professor of Energy Systems Engineering",
        affiliation: "Yasar University",
        image: committee3
      }
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Slideshow Container */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Slide Content */}
            <div className="min-h-[800px] relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  {slide.type === "publishing" && (
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-teal-dark mb-8 font-serif">
                        {slide.title}
                      </h3>
                      <div className="flex justify-center mb-6">
                        <img
                          src={slide.image}
                          alt={slide.journalTitle}
                          className="w-64 rounded-lg shadow-lg"
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-teal-dark mb-4 font-serif">
                        {slide.journalTitle}
                      </h4>
                      <div className="text-gray-dark text-sm leading-relaxed max-w-3xl mx-auto text-left space-y-4">
                        <p>{slide.description}</p>
                        <p>
                          For more details:{" "}
                          <a
                            href={slide.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            {slide.link}
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {slide.type === "welcome" && (
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-teal-dark mb-8 font-serif">
                        {slide.title}
                      </h3>
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <img
                            src={slide.speaker.image}
                            alt={slide.speaker.name}
                            className="w-48 h-48 rounded-lg object-cover border-4 border-blue-200 shadow-lg"
                          />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-dark mb-2 font-serif">
                        {slide.speaker.name}
                      </h4>
                      <p className="text-gray-dark mb-6 text-sm font-serif max-w-2xl mx-auto">
                        {slide.speaker.title}
                      </p>
                      <div className="bg-blue-50 rounded-lg p-4 mb-6 max-w-3xl mx-auto space-y-2">
                        <p className="font-semibold text-gray-dark">{slide.conferenceDetails.name}</p>
                        <p className="font-semibold text-gray-700">Theme: {slide.conferenceDetails.theme}</p>
                        <p className="font-semibold text-gray-700">{slide.conferenceDetails.date}</p>
                        <p className="font-semibold text-gray-700">{slide.conferenceDetails.location}</p>
                      </div>
                      <div className="text-gray-dark text-sm leading-relaxed max-w-3xl mx-auto text-left space-y-4 font-serif">
                        <p className="font-semibold">{slide.greeting}</p>
                        <p>{slide.message}</p>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <p className="font-semibold mb-2">{slide.closing}</p>
                          <p className="text-lg font-bold text-teal mb-1">{slide.speaker.name}</p>
                          <p className="text-sm text-gray-600 mb-4">{slide.speaker.title}</p>
                          <p className="text-xl font-bold text-teal">ORGANIZING COMMITTEE</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {slide.type === "yasar" && (
                    <div>
                      <h3 className="text-3xl font-bold text-gray-dark mb-6">
                        {slide.title}
                      </h3>
                      {slide.speaker && (
                        <>
                          <div className="flex justify-center mb-6">
                            <div className="relative">
                              <img
                                src={slide.speaker.image}
                                alt={slide.speaker.name}
                                className="w-48 h-48 rounded-lg object-cover border-4 border-blue-200 shadow-lg"
                              />
                            </div>
                          </div>
                          <div className="text-center mb-6">
                            <h4 className="text-xl font-bold text-gray-dark mb-1">
                              {slide.speaker.name}
                            </h4>
                            <p className="text-gray-dark text-sm">
                              {slide.speaker.title}
                            </p>
                            <p className="text-gray-dark text-sm">
                              {slide.speaker.affiliation}
                            </p>
                          </div>
                        </>
                      )}
                      <div className="text-gray-dark text-sm leading-relaxed space-y-4">
                        <p>{slide.greeting}</p>
                        <p>
                          On behalf of the Organizing Committee, it is my great pleasure to cordially welcome you to{" "}
                          <span className="font-semibold italic">International Conference on Recent Innovation in Sustainable Energy 2026 (RISE 2026)</span>, 
                          that will be held between <strong>March 26-27, 2026</strong> in <strong>Tokyo, Japan</strong>, focusing on the theme entitled{" "}
                          <span className="font-semibold italic">"Exploring Cutting-Edge Innovations for a Sustainable Energy Future"</span>.
                        </p>
                        <p>
                          This multi-disciplinary event aims to bring together researchers, scientists, academicians, and professionals working in the field of recent innovations in sustainable energy, 
                          including advanced renewable energy technologies, next-generation energy storage systems, smart grid innovations, energy efficiency breakthroughs, sustainable energy policies, 
                          and the transformative potential of <strong>artificial intelligence (AI)</strong> 
                          and <strong>machine learning (ML)</strong> in sustainable energy systems.
                        </p>
                        <p>
                          Through our exciting program at this conference, participants will have the opportunity to showcase their latest innovations, renew friendships, extend their networks, and jointly explore current and 
                          future directions in sustainable energy innovation.
                        </p>
                        <p>
                          We hope that you will have a productive and fun-filled time at <span className="italic">RISE 2026</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-teal w-8"
                      : "bg-blue-300 hover:bg-blue-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Organizing Committee */}
        <div>
          <h2 className="text-4xl font-bold text-center text-teal mb-12">ORGANIZING COMMITTEE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {committee.map((member, index) => (
              <Card key={index} className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="aspect-square overflow-hidden bg-white p-2 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded border border-blue-200"
                  />
                </div>
                <div className="bg-teal text-white p-4 text-center">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm mb-1">{member.affiliation}</p>
                  <p className="text-sm mb-3">{member.country}</p>
                  <Button className="bg-white text-teal hover:bg-gray-100 w-full rounded-md font-semibold">
                    BIOGRAPHY
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/organizing-committee">
              <Button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-md font-semibold text-base">
                VIEW ALL
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCommitteeSection;
