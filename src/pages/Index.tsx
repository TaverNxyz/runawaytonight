import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "RAT Agency - RunAwayTonight Professional Entertainment Booking Services";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'RunAwayTonight Agency - Professional booking services connecting extraordinary talent with unforgettable opportunities. 24/7 support for artists, events, and entertainment bookings.');
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
