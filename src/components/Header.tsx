import { Phone, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-darker text-white sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <span className="text-xl md:text-2xl">⚡</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold">RISE 2026</h1>
              <p className="text-xs text-gray-300">March 26-27 | Tokyo, Japan</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a href="#home" className="hover:text-primary transition-colors whitespace-nowrap">Home</a>
            <a href="#brochure" className="hover:text-primary transition-colors whitespace-nowrap">Brochure</a>
            <a href="#papers" className="hover:text-primary transition-colors whitespace-nowrap">Call for Papers</a>
            <a href="#program" className="hover:text-primary transition-colors whitespace-nowrap">Program</a>
            <a href="#venue" className="hover:text-primary transition-colors whitespace-nowrap">Venue</a>
            <a href="#sponsors" className="hover:text-primary transition-colors whitespace-nowrap text-sm">Sponsors</a>
            <a href="#contact" className="hover:text-primary transition-colors whitespace-nowrap">Contact</a>
            <Button className="bg-primary hover:bg-blue-dark whitespace-nowrap">Registration</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Phone - Desktop Only */}
          <a href="tel:+18643826004" className="hidden lg:flex items-center gap-2 bg-primary hover:bg-blue-dark px-4 py-2 rounded-full transition-colors whitespace-nowrap">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+1-864-382-6004</span>
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-darker border-t border-blue-dark py-4">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#brochure" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Brochure</a>
              <a href="#papers" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Call for Papers</a>
              <a href="#program" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Program</a>
              <a href="#venue" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Venue</a>
              <a href="#sponsors" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Sponsors</a>
              <a href="#contact" className="hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="flex flex-col gap-2 pt-2">
                <Button className="bg-primary hover:bg-blue-dark w-full">Registration</Button>
                <a href="tel:+18643826004" className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-dark px-4 py-2 rounded-full transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+1-864-382-6004</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
