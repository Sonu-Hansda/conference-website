import { Calendar } from "lucide-react";

const ImportantDates = () => {
  const dates = [
    { label: "Early Bird Registration", date: "18 Nov, 2025" },
    { label: "First Call Registration", date: "18 Dec, 2025" },
    { label: "Final Call Registration", date: "26th March 2026" },
  ];

  return (
    <section className="py-16 bg-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center font-sans">IMPORTANT DATES</h2>
          
          <div className="space-y-0">
            {dates.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 py-3">
                  <Calendar className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-white">{item.label}</span>
                  <span className="text-white">{item.date}</span>
                </div>
                {index < dates.length - 1 && (
                  <div className="border-t border-white/40"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
