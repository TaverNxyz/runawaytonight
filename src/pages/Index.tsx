import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "RAT Agency - RunAwayTonight Professional Entertainment Booking Services";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'RunAwayTonight Agency - Professional booking services connecting extraordinary talent with unforgettable opportunities. Professional booking for artists, events, and entertainment.');
    }
  }, []);

  if (!isLoaded) {
    return <LoadingScreen onLoadComplete={() => setIsLoaded(true)} />;
  }

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
