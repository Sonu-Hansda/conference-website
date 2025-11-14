import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { committeeMembers } from "@/data/committeeMembers";

const OrganizingCommittee = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-teal mb-12">ORGANIZING COMMITTEE</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {committeeMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrganizingCommittee;

