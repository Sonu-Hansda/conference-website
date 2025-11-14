import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const sessions = [
  "Renewable Energy & Resources", "Solar Energy", "Wind Energy",
  "Clean Energy", "Hydro Energy", "Tidal Energy",
  "Geothermal Energy", "Bioenergy and Biotechnology", "Sustainable Development",
  "Power and Energy Engineering", "Waste-to-Energy", "Smart Grid",
  "Green Energy and Economy", "Energy in Buildings", "Nano Environmental Technologies",
  "Energy Storage and Conservation", "AI Powered Renewable Energy", "Environmental Impact Assessment",
  "Sustainable Engineering and Energy Technologies", "Pollution Control", "Solid and Waste Management",
  "Biomass and Biofuels", "Global Warming", "Climate Change & Recycling",
  "Renewable Energy Commercialization", "Sustainable Energy Policies", "Energy Materials",
  "Global Industrial Processes and Sustainable Development", "Hydrogen Energy & Fuel Cells", "Other Related Topics"
];

const SessionsSection = () => {
  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal mb-12">Sessions</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {sessions.map((session, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
              <span className="text-gray-dark">{session}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-teal hover:bg-teal-dark text-white px-8 py-6 text-lg">
            Submit Abstract
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
