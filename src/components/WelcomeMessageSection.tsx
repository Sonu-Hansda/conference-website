import { Card } from "./ui/card";
import committee2 from "@/assets/committee-2.jpg";

const WelcomeMessageSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white p-8 md:p-12 shadow-lg">
            {/* Title */}
            <h2 className="text-4xl font-bold text-center text-teal mb-12 font-serif">
              Welcome Message
            </h2>

            {/* Speaker Information */}
            <div className="flex flex-col items-center mb-10">
              <div className="mb-6">
                <img
                  src={committee2}
                  alt="Dr. Stephen J. Wilkinson"
                  className="w-48 h-48 rounded-lg object-cover border-4 border-blue-200 shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-dark mb-2 font-serif">
                Dr. Stephen J. Wilkinson
              </h3>
              <p className="text-gray-700 text-center max-w-2xl mb-8 font-serif">
                Chief Technology Officer, Avioxx Limited (Transforming waste into sustainable aviation fuel)
              </p>
            </div>

            {/* Conference Details */}
            <div className="bg-blue-50 rounded-lg p-6 mb-10 space-y-3">
              <p className="text-lg font-bold text-center text-gray-dark">
                International Conference on Recent Innovation in Sustainable Energy 2026
              </p>
              <p className="text-base font-semibold text-center text-gray-700">
                Theme: Exploring Cutting-Edge Innovations for a Sustainable Energy Future
              </p>
              <p className="text-base font-semibold text-center text-gray-700">
                26-27 March 2026
              </p>
              <p className="text-base font-semibold text-center text-gray-700">
                Hotel Mystays Ochanomizu Conference Center, Tokyo, Japan
              </p>
            </div>

            {/* Welcome Letter */}
            <div className="space-y-6 text-gray-dark text-base leading-relaxed">
              <p className="font-semibold">Dear Sir/Madam,</p>
              
              <p>
                It is my greatest pleasure to warmly welcome you to the{" "}
                <strong>International Conference on Recent Innovation in Sustainable Energy 2026</strong> to be held in Tokyo, Japan 26-27 March 2026. 
                This event has global reach and provides the perfect opportunity for researchers, innovators, and professionals in sustainable energy 
                to showcase their latest innovations, share cutting-edge ideas, and grow international collaborations.
              </p>
              
              <p>
                We welcome all levels of experience: from postgraduate researchers to established experts and industry leaders - and everything in-between!
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-semibold mb-2">Yours sincerely,</p>
                <p className="text-xl font-bold text-teal mb-1">Dr. Stephen J. Wilkinson</p>
                <p className="text-sm text-gray-600 mb-4">
                  Chief Technology Officer, Avioxx Limited (Transforming waste into sustainable aviation fuel)
                </p>
                <p className="text-2xl font-bold text-teal">ORGANIZING COMMITTEE</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessageSection;

