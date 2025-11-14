import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Users, Globe, Building2, Handshake } from "lucide-react";

const PastEventsSection = () => {
  const pastEvents = [
    { year: "2025", date: "June 23 - 24, 2025", title: "RISE 2025" },
    { year: "2024", date: "September 26 - 27, 2024", title: "RISE 2024" },
    { year: "2023", date: "November 13 - 14, 2023", title: "RISE 2023" },
    { year: "2022", date: "November 14 - 15, 2022", title: "RISE 2022" }
  ];

  const highlights = [
    { icon: Users, number: "120 +", label: "Speakers Participated" },
    { icon: Globe, number: "50 +", label: "Countries Involved" },
    { icon: Building2, number: "60", label: "Companies Participated" },
    { icon: Handshake, number: "40 +", label: "Collaborations" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-16 bg-blue-50 p-8 rounded-lg">
          {/* Conference Past Events */}
          <div>
            <h3 className="text-2xl font-bold text-blue-darker mb-6">Conference Past Events</h3>
            <div className="space-y-6">
              {pastEvents.map((event, index) => (
                <div key={index}>
                  <h4 className="font-bold text-gray-dark text-lg mb-3">
                    {event.title} | {event.date}
                  </h4>
                  <div className="flex gap-3">
                    <Button className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-md font-normal">Book</Button>
                    <Button className="bg-blue-400 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-md font-normal">Program</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Edition Highlights */}
          <Card className="p-0 overflow-hidden">
            <div className="bg-teal text-white p-6">
              <h3 className="text-2xl font-bold text-center">Past Edition Highlights</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="p-6 text-center border-2 border-teal">
                    <highlight.icon className="w-12 h-12 mx-auto mb-3 text-destructive" />
                    <div className="text-3xl font-bold text-gray-dark mb-1">{highlight.number}</div>
                    <div className="text-sm text-gray-600">{highlight.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
