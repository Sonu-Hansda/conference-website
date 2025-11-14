import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { previousSpeakers } from "@/data/previousSpeakers";

const SpeakersSection = () => {
  // Show only first 5 speakers on the main page to match the image
  const speakers = previousSpeakers.slice(0, 5);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Previous Speakers */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-teal mb-12">Previous Speakers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-white p-2 flex items-center justify-center">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded border border-blue-200"
                  />
                </div>
                <div className="bg-teal text-white p-4 text-center">
                  <h3 className="font-bold text-lg mb-1">{speaker.name}</h3>
                  <p className="text-sm mb-1">{speaker.affiliation}</p>
                  <p className="text-sm">{speaker.country}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/previous-speakers">
              <Button className="bg-teal hover:bg-teal-dark text-white px-8 py-3 rounded-md font-semibold text-base">
                VIEW ALL
              </Button>
            </Link>
          </div>
        </div>

        {/* Previous Conference */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-dark mb-8 font-serif">Previous Conference</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-h-[600px] overflow-y-auto">
            <div className="space-y-6 text-gray-dark">
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  The <strong>International Conference on Recent Innovation in Sustainable Energy 2025</strong> was held from <strong>June 23-24, 2025</strong> at the <strong>NH Vienna Airport Conference Center, Vienna, Austria</strong>, with the theme <strong>"Exploring Cutting-Edge Innovations for a Sustainable Energy Future"</strong>.
                </p>
                <p>
                  This conference brought together professionals, researchers, policymakers, and innovators from around the world, all focused on showcasing and exploring the latest innovations in sustainable energy systems, cutting-edge technologies, and emerging trends in the field.
                </p>
                <p>
                  The event featured engaging keynote presentations on recent innovations, technical sessions highlighting breakthrough technologies, and networking opportunities that facilitated knowledge exchange and collaboration among attendees from diverse backgrounds and expertise areas.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-dark">Keynote Speakers:</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Ongjan Ahrin Tolang</strong>, Spech Hidroelectrica Sa, Romania</li>
                  <li><strong>Popovici Florin-Cristian</strong>, Spech Hidroelectrica Sa, Romania</li>
                  <li><strong>Urlitjeanu Iulian</strong>, Spech Hidroelectrica Sa, Romania</li>
                  <li><strong>Kaitar Larisa-Elena</strong>, Spech Hidroelectrica Sa, Romania</li>
                  <li><strong>Baciu Constantin Alexandru</strong>, Spech Hidroelectrica Sa, Romania</li>
                  <li><strong>Sora Cristian-Ilie</strong>, Spech Hidroelectrica Sa, Romania</li>
                  <li><strong>Chiru Silviu-Nicusor</strong>, Spech Hidroelectrica Sa, Romania</li>
                  <li><strong>Le Wen</strong>, The University of Auckland, New Zealand</li>
                  <li><strong>Edson Bazzo</strong>, Federal University of Santa Catarina, Brazil</li>
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  If you have any feedback for us for future consideration or enhancements to this Conference, please provide your feedback to the Conference Manager, Rachel McClain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
