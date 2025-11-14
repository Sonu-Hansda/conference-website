import { Card } from "./ui/card";
import { CheckCircle2, X } from "lucide-react";
import brochureImage from "@/assets/brochure.jpg";
import { useState } from "react";

const QuickLinksSection = () => {
  const [activeTab, setActiveTab] = useState<"tweets" | "facebook">("tweets");
  
  const quickLinks = [
    "Brochure",
    "Abstract submission",
    "Venue",
    "Registration"
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Quick Links */}
          <Card className="p-0 bg-white overflow-hidden">
            <div className="bg-blue-dark text-white p-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-dark">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <a href="#" className="hover:text-teal transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Supported Journals */}
          <Card className="p-0 bg-white overflow-hidden">
            <div className="bg-blue-dark text-white p-4">
              <h3 className="text-xl font-bold">Supported Journals</h3>
            </div>
            <div className="p-6 flex justify-center">
              <img 
                src={brochureImage} 
                alt="Clean Technologies and Recycling Journal" 
                className="w-48 rounded-lg shadow-md"
              />
            </div>
          </Card>

          {/* Social Feed */}
          <Card className="p-0 bg-white overflow-hidden">
            <div className="bg-blue-dark text-white p-4">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab("tweets")}
                  className={`font-bold transition-colors ${
                    activeTab === "tweets" ? "text-white" : "text-gray-300"
                  }`}
                >
                  Tweets
                </button>
                <button
                  onClick={() => setActiveTab("facebook")}
                  className={`font-bold transition-colors ${
                    activeTab === "facebook" ? "text-white" : "text-gray-300"
                  }`}
                >
                  Facebook
                </button>
              </div>
            </div>
            <div className="p-6">
              {activeTab === "tweets" ? (
                <div className="bg-white rounded border border-gray-200 p-4 relative">
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex items-start gap-3 pr-6">
                    <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-dark">Coalesce Research Group</p>
                          <p className="text-sm text-gray-500">@Coalesce_Groups</p>
                        </div>
                        <button className="px-3 py-1 text-xs font-semibold text-teal border border-teal rounded-full hover:bg-teal hover:text-white transition-colors whitespace-nowrap flex-shrink-0">
                          Follow
                        </button>
                      </div>
                      <p className="mt-2 text-gray-dark text-sm">
                        📢 Excited to Announce the <span className="text-blue-500">#RISE2026</span> - International Conference on Recent Innovation in Sustainable Energy 📍 March 26–27, 2026, Tokyo, Japan
                      </p>
                      <p className="mt-2 text-gray-dark text-sm">
                        Join global experts to explore cutting-edge innovations in <span className="text-blue-500">#SustainableEnergy</span>, 
                        <span className="text-blue-500"> #EnergyInnovation</span>, and <span className="text-blue-500">#GreenTechnology</span>.
                      </p>
                      <a href="#" className="text-blue-500 mt-2 inline-block text-sm">rise2026conference.com</a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p>Follow us on Facebook for updates</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
