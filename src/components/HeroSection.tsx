import { BookOpen, FileText, Calendar, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 131,
    hours: 20,
    minutes: 12,
    seconds: 3
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <p className="text-gray-200 text-lg mb-2">International Conference on</p>
          <h1 className="text-5xl md:text-6xl font-bold text-teal mb-4">
            Recent Innovation in Sustainable Energy 2026
          </h1>
          <p className="text-xl text-white mb-8">
            Theme : Exploring Cutting-Edge Innovations for a Sustainable Energy Future
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button className="bg-white text-foreground hover:bg-gray-100 gap-2">
              <BookOpen className="w-5 h-5" />
              Brochure
            </Button>
            <Button className="bg-white text-foreground hover:bg-gray-100 gap-2">
              <FileText className="w-5 h-5" />
              Abstract Submission
            </Button>
            <Button className="bg-white text-foreground hover:bg-gray-100 gap-2">
              <Calendar className="w-5 h-5" />
              Program
            </Button>
            <Button className="bg-white text-foreground hover:bg-gray-100 gap-2">
              <UserPlus className="w-5 h-5" />
              Registration
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <Card className="bg-white p-6 border-l-4 border-teal">
            <p className="text-teal font-semibold text-lg mb-2">EVENT ON: MARCH | 26-27 | 2026</p>
          </Card>
          
          <Card className="bg-amber p-6">
            <p className="font-bold text-black text-lg">LOCATION:</p>
            <p className="text-black">Hotel Mystays Ochanomizu Conference Center, Tokyo, Japan</p>
          </Card>
          
          <Card className="bg-teal p-6 text-white md:col-span-2">
            <p className="font-bold text-xl mb-4">EVENT STARTS IN</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white text-teal rounded-lg p-4 text-3xl font-bold mb-2">
                  {timeLeft.days}
                </div>
                <p className="text-sm">DAYS</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-teal rounded-lg p-4 text-3xl font-bold mb-2">
                  {timeLeft.hours}
                </div>
                <p className="text-sm">HOURS</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-teal rounded-lg p-4 text-3xl font-bold mb-2">
                  {timeLeft.minutes}
                </div>
                <p className="text-sm">MINUTES</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-teal rounded-lg p-4 text-3xl font-bold mb-2">
                  {timeLeft.seconds}
                </div>
                <p className="text-sm">SECONDS</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
