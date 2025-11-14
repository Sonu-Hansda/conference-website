import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SessionsSection from "@/components/SessionsSection";
import ImportantDates from "@/components/ImportantDates";
import AboutSection from "@/components/AboutSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import WelcomeCommitteeSection from "@/components/WelcomeCommitteeSection";
import SpeakersSection from "@/components/SpeakersSection";
import PastEventsSection from "@/components/PastEventsSection";
import PartnersGallerySection from "@/components/PartnersGallerySection";
import PastEventsTestimonialsSection from "@/components/PastEventsTestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <SessionsSection />
        <ImportantDates />
        <AboutSection />
        <QuickLinksSection />
        <WelcomeCommitteeSection />
        <SpeakersSection />
        <PastEventsSection />
        <PartnersGallerySection />
        <PastEventsTestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
