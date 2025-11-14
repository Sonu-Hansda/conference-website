import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">RISE 2026</h1>
              <p className="text-xs text-gray-400">March 26-27 | Tokyo, Japan</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#home" className="hover:text-teal transition-colors">Home</a>
            <a href="#brochure" className="hover:text-teal transition-colors">Brochure</a>
            <a href="#papers" className="hover:text-teal transition-colors">Call for Papers</a>
            <a href="#program" className="hover:text-teal transition-colors">Program</a>
            <a href="#venue" className="hover:text-teal transition-colors">Venue</a>
            <a href="#sponsors" className="hover:text-teal transition-colors">SPONSORS - EXHIBITORS</a>
            <a href="#contact" className="hover:text-teal transition-colors">Contact us</a>
            <Button className="bg-teal hover:bg-teal-dark">Registration</Button>
          </nav>

          <a href="tel:+18643826004" className="hidden lg:flex items-center gap-2 bg-teal hover:bg-teal-dark px-4 py-2 rounded-full transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+1-864-382-6004</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
