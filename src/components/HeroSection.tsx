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
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl animate-slide-up">
          <p className="text-gray-200 text-base md:text-lg mb-2 animate-fade-in">International Conference on</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight animate-fade-in">
            Recent Innovation in Sustainable Energy 2026
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 animate-fade-in">
            Theme : Exploring Cutting-Edge Innovations for a Sustainable Energy Future
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8 md:mb-12 animate-scale-in">
            <Button className="bg-white text-foreground hover:bg-gray-100 gap-2 text-sm md:text-base transition-all duration-300 hover:scale-105">
              <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
              Brochure
            </Button>
            <Button className="bg-white text-foreground hover:bg-gray-100 gap-2 text-sm md:text-base transition-all duration-300 hover:scale-105">
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
              Abstract
            </Button>
            <Button className="bg-white text-foreground hover:bg-gray-100 gap-2 text-sm md:text-base transition-all duration-300 hover:scale-105">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              Program
            </Button>
            <Button className="bg-white text-foreground hover:bg-gray-100 gap-2 text-sm md:text-base transition-all duration-300 hover:scale-105">
              <UserPlus className="w-4 h-4 md:w-5 md:h-5" />
              Register
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          <Card className="bg-white p-4 md:p-6 border-l-4 border-primary">
            <p className="text-primary font-semibold text-base md:text-lg mb-2">EVENT ON: MARCH | 26-27 | 2026</p>
          </Card>
          
          <Card className="bg-amber p-4 md:p-6">
            <p className="font-bold text-black text-base md:text-lg">LOCATION:</p>
            <p className="text-black text-sm md:text-base">Hotel Mystays Ochanomizu Conference Center, Tokyo, Japan</p>
          </Card>
          
          <Card className="bg-primary p-4 md:p-6 text-white md:col-span-2">
            <p className="font-bold text-lg md:text-xl mb-4">EVENT STARTS IN</p>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              <div className="text-center">
                <div className="bg-white text-primary rounded-lg p-2 md:p-4 text-xl md:text-3xl font-bold mb-1 md:mb-2">
                  {timeLeft.days}
                </div>
                <p className="text-xs md:text-sm">DAYS</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-primary rounded-lg p-2 md:p-4 text-xl md:text-3xl font-bold mb-1 md:mb-2">
                  {timeLeft.hours}
                </div>
                <p className="text-xs md:text-sm">HOURS</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-primary rounded-lg p-2 md:p-4 text-xl md:text-3xl font-bold mb-1 md:mb-2">
                  {timeLeft.minutes}
                </div>
                <p className="text-xs md:text-sm">MINUTES</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-primary rounded-lg p-2 md:p-4 text-xl md:text-3xl font-bold mb-1 md:mb-2">
                  {timeLeft.seconds}
                </div>
                <p className="text-xs md:text-sm">SECONDS</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
