import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { previousSpeakers } from "@/data/previousSpeakers";

const PreviousSpeakers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-teal mb-12">Previous Speakers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {previousSpeakers.map((speaker, index) => (
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PreviousSpeakers;

