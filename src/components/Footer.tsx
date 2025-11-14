import { Facebook, Twitter, Linkedin, Youtube, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <span className="font-bold text-lg">Coalesce Research Group</span>
            </div>
            <div className="mt-6">
              <h3 className="font-bold mb-4">GET SOCIAL</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-teal flex items-center justify-center rounded transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-teal flex items-center justify-center rounded transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-teal flex items-center justify-center rounded transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-teal flex items-center justify-center rounded transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4">SHARE | FOLLOW</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Brochure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Abstract Submission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Venue</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Registration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Past Reports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Journals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Upcoming Conferences</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Previous Conferences</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Past Conference Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Past Conference Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Past Conference Video Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal transition-colors">Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT INFORMATION</h3>
            <div className="space-y-3 text-gray-400">
              <p>33 Market Point Dr,<br />Greenville, SC 29607,<br />USA</p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal" />
                <a href="tel:+17185439362" className="hover:text-teal transition-colors">+1-718-543-9362</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal" />
                <a href="tel:+18643826004" className="hover:text-teal transition-colors">+1-864-382-6004</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal" />
                <a href="mailto:renewableenergy@crgmeetings.com" className="hover:text-teal transition-colors text-sm">
                  renewableenergy@crgmeetings.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal" />
                <a href="mailto:rise2026@conferencesrenewableenergy.com" className="hover:text-teal transition-colors text-sm">
                  rise2026@conferencesrenewableenergy.com
                </a>
              </div>
              <p className="text-teal font-semibold mt-4">
                For Exhibition/Sponsorship:<br />
                renewableenergy@conferencesecretary.com
              </p>
            </div>
            
            <div className="mt-6">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-teal hover:bg-teal-dark whitespace-nowrap">
                  SUBSCRIBE NOW
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2019 Coalesce Research Group, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
